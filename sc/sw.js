const CACHE = 'enilive-sc-v5';
const ASSETS = [
  './share.png',
  './font/montserrat-400.woff2',
  './font/montserrat-700.woff2',
  './font/montserrat-800.woff2',
  './', './index.html', './manifest.webmanifest',
  './qr-sprit.png', './qr-zubehoer.png', './mark.png',
  './icon-180.png', './icon-192.png', './icon-512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request).then(hit => hit || fetch(e.request).catch(() => caches.match('./index.html')))
  );
});
