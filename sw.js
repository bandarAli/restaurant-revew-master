const appName = "restaurant-reviews"
//  variables of cache
const staticCacheName = appName + "-v1.0";
const contentImgsCache = appName + "-images";

// array to keep track all of caches
var allCaches = [
    staticCacheName,
    contentImgsCache
  ];

/** register Service Worker in Install time */
self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open(staticCacheName).then(function(cache) {
        return cache.addAll([
          '/', // this caches index.html
          '/restaurant.html',
          '/css/details.css',
          '/css/list.css',
          '/css/main.css',
          '/css/styles.css',
          '/js/dbhelper.js',
          '/js/main.js',
          '/js/restaurant_info.js',
          'js/register-sw.js', 
          'data/restaurants.json'
        ]);
      })
    );
  });

  /** delete old Service Worker on Activation */
self.addEventListener('activate', function(event) {
    event.waitUntil(
      caches.keys().then(function(cacheNames) {
        return Promise.all(
          cacheNames.filter(function(cacheName) {
            return cacheName.startsWith(appName) &&
                   !allCaches.includes(cacheName);
          }).map(function(cacheName) {
            return caches.delete(cacheName);
          })
        );
      })
    );
  });

  /** add requests listener */
self.addEventListener('fetch', function(event) {

    // respond for any elements in the cache or fallback to connection setting
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
  });