const CACHE_NAME = "campusmart-cache-v1";
const urlsToCache = [
  "./",               // root relative
  "./index.html",
  "./style.css",
  "./index.js",
  "./manifest.json",
  "./ekd-logo.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
caches.open(CACHE_NAME)
  .then(cache => cache.addAll(urlsToCache))
  .catch(err => console.error("❌ Caching failed:", err));
