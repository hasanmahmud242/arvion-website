param([Parameter(Mandatory=$true)][string]$Jdk, [Parameter(Mandatory=$true)][string]$Sdk)
$ErrorActionPreference = 'Stop'
$project = Split-Path $PSScriptRoot -Parent
$out = Join-Path $PSScriptRoot 'app/build/manual'
$signing = Join-Path $project '.android-signing'
$bt = Join-Path $Sdk 'build-tools/35.0.0'
$platform = Join-Path $Sdk 'platforms/android-35/android.jar'
function CheckExit { if ($LASTEXITCODE -ne 0) { throw "Build step failed: $LASTEXITCODE" } }
New-Item -ItemType Directory -Force $out, "$out/classes", "$out/dex", $signing, "$project/downloads" | Out-Null
$env:JAVA_HOME = $Jdk
$env:PATH = "$Jdk/bin;" + $env:PATH
if (!(Test-Path "$signing/release.jks")) {
  if (Test-Path "$signing/password.xml") { throw 'Signing password exists but keystore is missing; restore the keystore before continuing.' }
  $secret = [Guid]::NewGuid().ToString('N') + [Guid]::NewGuid().ToString('N')
  ConvertTo-SecureString $secret -AsPlainText -Force | Export-Clixml "$signing/password.xml"
  $env:TUSOROVA_KEY_PASSWORD = $secret
  & "$Jdk/bin/keytool.exe" -genkeypair -keystore "$signing/release.jks" -storepass:env TUSOROVA_KEY_PASSWORD -keypass:env TUSOROVA_KEY_PASSWORD -alias tusorova -keyalg RSA -keysize 2048 -validity 10000 -dname 'CN=TUSOROVA' -storetype JKS
  CheckExit
}
$secure = Import-Clixml "$signing/password.xml"
$env:TUSOROVA_KEY_PASSWORD = [Net.NetworkCredential]::new('', $secure).Password
try {
  $manifest = [xml](Get-Content -Raw "$PSScriptRoot/app/src/main/AndroidManifest.xml")
  $manifest.manifest.SetAttribute('package', 'com.tusorova.shop')
  $manifest.Save("$out/AndroidManifest.xml")
  & "$bt/aapt2.exe" compile --dir "$PSScriptRoot/app/src/main/res" -o "$out/resources.zip"
  CheckExit
  & "$bt/aapt2.exe" link -I $platform --manifest "$out/AndroidManifest.xml" --min-sdk-version 23 --target-sdk-version 35 --version-code 1 --version-name '1.0' -o "$out/unsigned.apk" "$out/resources.zip"
  CheckExit
  & "$Jdk/bin/javac.exe" -encoding UTF-8 -source 8 -target 8 -bootclasspath $platform -d "$out/classes" "$PSScriptRoot/app/src/main/java/com/tusorova/shop/MainActivity.java"
  CheckExit
  $classes = @(Get-ChildItem "$out/classes" -Recurse -Filter '*.class' | ForEach-Object { $_.FullName })
  & "$bt/d8.bat" --lib $platform --min-api 23 --output "$out/dex" @classes
  CheckExit
  & "$Jdk/bin/jar.exe" uf "$out/unsigned.apk" -C "$out/dex" classes.dex
  CheckExit
  & "$bt/zipalign.exe" -f 4 "$out/unsigned.apk" "$out/aligned.apk"
  CheckExit
  & "$bt/apksigner.bat" sign --ks "$signing/release.jks" --ks-key-alias tusorova --ks-pass env:TUSOROVA_KEY_PASSWORD --key-pass env:TUSOROVA_KEY_PASSWORD --out "$project/downloads/tusorova-1.0.apk" "$out/aligned.apk"
  CheckExit
  & "$bt/apksigner.bat" verify --verbose "$project/downloads/tusorova-1.0.apk"
  CheckExit
} finally { Remove-Item Env:TUSOROVA_KEY_PASSWORD -ErrorAction SilentlyContinue }
