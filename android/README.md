# TUSOROVA Android

Android 6.0 or newer. Opens the live TUSOROVA catalog over HTTPS and sends WhatsApp orders to the external app/browser. Internet is required. No camera, contacts, location or storage permissions are requested.

Build with Java 17, Gradle 8.11.1 and Android SDK platform 35. Set ANDROID_HOME and JAVA_HOME to the local tools. Set TUSOROVA_KEYSTORE to your release keystore and TUSOROVA_KEY_PASSWORD to its password, then run `gradle :app:assembleRelease` from this directory.

Keep the release keystore and its password safe: future app updates must use the same key. Local signing files are ignored by Git and must not be published. Increase versionCode for each APK update.

Catalog updates appear from the website without reinstalling. Native app updates require downloading and installing a new APK signed with the same key.

For the local command-line build, run `./build-apk.ps1 -Jdk <Java17-directory> -Sdk <Android-SDK-directory>`. It uses build-tools 35.0.0 and platform android-35 directly. The signed output is `downloads/tusorova-1.0.apk` in the website folder.

The script creates `.android-signing/release.jks` and a Windows-user-encrypted `.android-signing/password.xml`. Back up both. The password file can be decrypted only under this Windows user account; export the password securely before migrating machines. Do not commit these files or upload them to the website.
