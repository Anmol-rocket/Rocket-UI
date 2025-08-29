const CACHE_NAME = 'rocket-ui-cache-v1';
const FILES_TO_CACHE = [
  'https://cdn.jsdelivr.net/gh/yourusername/Rocket-UI@main/src/_base.css',
  'https://cdn.jsdelivr.net/gh/yourusername/Rocket-UI@main/src/index.css'
];
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE))
  );
});
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
