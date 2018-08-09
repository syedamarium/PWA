var cacheName = 'pwa 1';
var dataCacheName = "pwa 2";
var filesToCache = [
  '/index.html',
  '/style.css',
  '/main.js',
  '/',
];

self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('activate', function(e) {
    console.log('[ServiceWorker] Activate');
  });

  self.addEventListener('fetch', function(e) {
    console.log('[ServiceWorker] Fetch', e.request.url);
   if(e.request.url.startsWith('https://api.github.com/users/zeeshanhanif/followers')){
caches.open(dataCacheName).then(function(cache){
return fetch (e.request).then (function(response){
cache.put(e.request, response.clone());
return response;


})

})
}

else{
  e.responseWith(
    caches.match(e.request).then(function(response){
      return response || fetch(e.request);
    })
  );
}
  });