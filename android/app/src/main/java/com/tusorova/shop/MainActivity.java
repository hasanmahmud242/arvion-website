package com.tusorova.shop;

import android.app.Activity;
import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.webkit.*;
import android.widget.*;
import android.view.View;

public class MainActivity extends Activity {
  private static final String HOME = "https://hasanmahmud242.github.io/arvion-website/index.html?source=android";
  private WebView web;
  private LinearLayout offline;
  private String lastPage = HOME;
  private boolean internal(Uri u) {
    return "https".equals(u.getScheme()) && "hasanmahmud242.github.io".equals(u.getHost()) && u.getPath() != null && u.getPath().startsWith("/arvion-website/");
  }
  private void openExternal(Uri uri) {
    String scheme = uri.getScheme();
    if (!"https".equals(scheme) && !"tel".equals(scheme) && !"mailto".equals(scheme) && !"whatsapp".equals(scheme)) return;
    try { startActivity(new Intent(Intent.ACTION_VIEW, uri)); }
    catch (android.content.ActivityNotFoundException e) { Toast.makeText(this, "Please install an app to open this link.", Toast.LENGTH_LONG).show(); }
  }
  @Override public void onCreate(Bundle saved) {
    super.onCreate(saved);
    LinearLayout root = new LinearLayout(this); root.setOrientation(LinearLayout.VERTICAL);
    root.setOnApplyWindowInsetsListener(new View.OnApplyWindowInsetsListener() {
      @Override public android.view.WindowInsets onApplyWindowInsets(View v, android.view.WindowInsets insets) {
      v.setPadding(insets.getSystemWindowInsetLeft(), insets.getSystemWindowInsetTop(), insets.getSystemWindowInsetRight(), insets.getSystemWindowInsetBottom());
      return insets;
      }
    });
    web = new WebView(this);
    offline = new LinearLayout(this); offline.setOrientation(LinearLayout.VERTICAL); offline.setPadding(32,64,32,32);
    TextView text = new TextView(this); text.setText("ইন্টারনেট সংযোগ চালু করে আবার চেষ্টা করুন।\n\nConnect to the internet to browse TUSOROVA."); text.setTextSize(20); offline.addView(text);
    Button retry = new Button(this); retry.setText("আবার চেষ্টা করুন / Retry"); offline.addView(retry);
    retry.setOnClickListener(new View.OnClickListener() {
      @Override public void onClick(View v) { offline.setVisibility(View.GONE); web.setVisibility(View.VISIBLE); web.loadUrl(lastPage); }
    });
    root.addView(offline); offline.setVisibility(View.GONE);
    root.addView(web, new LinearLayout.LayoutParams(-1,0,1)); setContentView(root);
    web.getSettings().setJavaScriptEnabled(true); web.getSettings().setDomStorageEnabled(true);
    web.getSettings().setAllowFileAccess(false); web.getSettings().setAllowContentAccess(false);
    web.getSettings().setMixedContentMode(WebSettings.MIXED_CONTENT_NEVER_ALLOW);
    web.getSettings().setSupportMultipleWindows(false);
    web.getSettings().setUserAgentString(web.getSettings().getUserAgentString() + " TusorovaAndroid/1.0");
    web.setWebViewClient(new WebViewClient() {
      @Override public boolean shouldOverrideUrlLoading(WebView v, String url) {
        Uri uri = Uri.parse(url);
        if (internal(uri)) return false;
        openExternal(uri); return true;
      }
      @Override public boolean shouldOverrideUrlLoading(WebView v, WebResourceRequest r) {
        if (internal(r.getUrl())) return false;
        openExternal(r.getUrl()); return true;
      }
      @Override public void onPageStarted(WebView v, String url, android.graphics.Bitmap icon) { if (internal(Uri.parse(url))) lastPage = url; }
      @Override public void onReceivedError(WebView v, WebResourceRequest r, WebResourceError e) {
        if (r.isForMainFrame()) { web.setVisibility(View.GONE); offline.setVisibility(View.VISIBLE); }
      }
      @Override public void onReceivedSslError(WebView v, SslErrorHandler handler, android.net.http.SslError error) {
        handler.cancel(); web.setVisibility(View.GONE); offline.setVisibility(View.VISIBLE);
      }
    });
    web.setWebChromeClient(new WebChromeClient());
    if (saved == null || web.restoreState(saved) == null) web.loadUrl(HOME);
  }
  @Override public void onBackPressed() { if (web.canGoBack()) web.goBack(); else super.onBackPressed(); }
  @Override protected void onSaveInstanceState(Bundle out) { super.onSaveInstanceState(out); web.saveState(out); }
  @Override protected void onDestroy() { web.destroy(); super.onDestroy(); }
}
