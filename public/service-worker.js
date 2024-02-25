const CACHE_NAME = 'unity-cache-v1';
const urlsToCache = [
  // 其他需要预加载的资源
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});
self.addEventListener('fetch', event => {
    event.respondWith(
      caches.match(event.request)
        .then(function(response) {
          // 缓存命中，返回缓存的资源
          if (response) {
            return response;
          }
          // 否则，通过网络获取资源，并添加到缓存
          return fetch(event.request).then(function(response) {
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            var responseToCache = response.clone();
            caches.open(CACHE_NAME)
              .then(function(cache) {
                cache.put(event.request, responseToCache);
              });
            return response;
          });
        })
    );
  });
self.addEventListener('activate', event => {
  var cacheWhitelist = ['unity-cache-v1']; // 保留的缓存列表

  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
  