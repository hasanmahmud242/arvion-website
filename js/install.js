(() => {
  if (navigator.userAgent.includes('TusorovaAndroid/')) return;
  if ('serviceWorker' in navigator) navigator.serviceWorker.register('./sw.js').catch(error => console.warn('App offline setup unavailable', error));
  const installed = () => matchMedia('(display-mode: standalone)').matches || navigator.standalone === true;
  if (installed()) return;
  const footer = document.querySelector('.site-footer');
  if (!footer) return;
  const box = document.createElement('section');
  box.className = 'app-install';
  box.innerHTML = '<div class="container"><div><strong>TUSOROVA on your phone</strong><p>Add the shop to your home screen for quick access.</p></div><button type="button" class="app-install-button">Add to Home Screen</button><p class="app-install-help" role="status" hidden></p></div>';
  footer.before(box);
  const apk = document.createElement('a');
  apk.className = 'app-install-button';
  apk.href = 'downloads/tusorova-1.0.apk';
  apk.setAttribute('download', 'tusorova-1.0.apk');
  apk.textContent = 'Download Android APK';
  box.querySelector('.container').append(apk);
  const apkNote = document.createElement('p');
  apkNote.className = 'app-install-help';
  apkNote.textContent = 'Android 6.0 or newer. Allow installation from your browser when asked. Internet required.';
  box.querySelector('.container').append(apkNote);
  let prompt;
  const button = box.querySelector('button');
  const help = box.querySelector('.app-install-help');
  window.addEventListener('beforeinstallprompt', event => { event.preventDefault(); prompt = event; button.textContent = 'Install TUSOROVA'; });
  button.addEventListener('click', async () => {
    if (prompt) {
      const current = prompt; prompt = null;
      await current.prompt();
      const choice = await current.userChoice;
      if (choice.outcome === 'accepted') box.hidden = true;
      else button.textContent = 'Add to Home Screen';
      return;
    }
    help.hidden = false;
    const ios = /iPhone|iPad|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    help.textContent = ios ? 'On iPhone or iPad: open this website in Safari, tap Share, then Add to Home Screen and Add.' : 'Open this website in Chrome or Edge, open the browser menu, then choose Install app or Add to Home screen. If you opened it inside another app, open it in your browser first.';
  });
  window.addEventListener('appinstalled', () => { box.hidden = true; prompt = null; });
})();
