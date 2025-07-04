const CACHE_NAME = 'fishlog-cache-v1';
const urlsToCache = [
  '/fishlog-pwa/',
  '/fishlog-pwa/index.html',
  '/fishlog-pwa/manifest.json',
  '/fishlog-pwa/icon-192.png',
  '/fishlog-pwa/icon-512.png'
  // CSSやJSファイル名もここに追加
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
