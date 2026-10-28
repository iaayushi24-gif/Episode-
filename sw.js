// EPISODE PWA Service Worker
const CACHE_NAME = 'episode-v1';
const ASSETS_TO_CACHE = [
  './app.html',
  './index.html',
  './manifest.json',
  './assets/look08_scarlet_embroidered_jacket.jpg',
  './assets/look01_ornate_wrap.jpg',
  './assets/look02_brocade_suit.jpg',
  './assets/look03_emerald_metallic.jpg',
  './assets/look04_monochrome_dahlia.jpg',
  './assets/look05_sage_overshirt.jpg',
  './assets/look06_draped_hood.png',
  './assets/look07_hotseat_tee.jpg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE).catch(() => {});
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) return caches.delete(key);
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request).then((cached) => {
      return cached || fetch(event.request).catch(() => cached);
    })
  );
});
