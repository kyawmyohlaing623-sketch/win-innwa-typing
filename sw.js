const CACHE = 'win-typing-v1';
const FILES = ['./', './index.html', './core.js', './manifest.webmanifest', './icon.svg'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES))); self.skipWaiting(); });
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))));
  self.clients.claim();
});
// Cache-first, including Google Fonts, so the app works offline after the first visit.
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(caches.match(e.request, { ignoreSearch: true }).then(r => r || fetch(e.request).then(res => {
    const u = new URL(e.request.url);
    if (res.ok || res.type === 'opaque') {
      if (u.origin === location.origin || /fonts\.(googleapis|gstatic)\.com$/.test(u.hostname)) {
        const cp = res.clone(); caches.open(CACHE).then(c => c.put(e.request, cp));
      }
    }
    return res;
  }).catch(() => caches.match('./index.html'))));
});
