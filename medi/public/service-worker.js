// service-worker.js
var CACHE_NAME = 'my-cache';
var urlsToCache = [
  '/',
  '/index.html',
  '/styles.css',
  '/script.js',
  '/icono.png',
];

self.addEventListener('install', function(event) {
  // Realiza pasos para instalar el service worker y guardar los recursos necesarios en la caché
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Cache abierta');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Los recursos en caché están disponibles, así que responde con ellos
        if (response) {
          return response;
        }
        // No se encontró nada en la caché, así que realiza una solicitud a la red
        return fetch(event.request);
      }
    )
  );
});