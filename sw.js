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
self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(staticCacheName).then(function (cache) {
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
self.addEventListener('activate', function (event) {
    event.waitUntil(
        caches.keys().then(function (cacheNames) {
            return Promise.all(
                cacheNames.filter(function (cacheName) {
                    return cacheName.startsWith(appName) &&
                        !allCaches.includes(cacheName);
                }).map(function (cacheName) {
                    return caches.delete(cacheName);
                })
            );
        })
    );
});

/** add requests listener on fetching*/
self.addEventListener('fetch', function (event) {
    const requestUrl = new URL(event.request.url);

    // if requests to location origin try to fetch it
    if (requestUrl.origin === location.origin) {

        // if the requests for resturant.html or same path
        if (requestUrl.pathname.startsWith('/restaurant.html')) {
            event.respondWith(caches.match('/restaurant.html'));
            return; // Done handling request, so exit early.
        }

        // If the request start with img 
        if (requestUrl.pathname.startsWith('/img')) {
            event.respondWith(serveImage(event.request));
            return; // Done handling request, so exit early.
        }
    }

    // respond for any elements in the cache or fallback to connection setting
    event.respondWith(
        caches.match(event.request).then(function (response) {
            return response || fetch(event.request);
        })
    );
});

function serveImage(request) {
    let imageStorageUrl = request.url;
  
    // create new URL with from the request url for the images with the path
    imageStorageUrl = imageStorageUrl.replace(/-small\.\w{3}|-medium\.\w{3}|-large\.\w{3}/i, '');
  
    return caches.open(contentImgsCache).then(function(cache) {
      return cache.match(imageStorageUrl).then(function(response) {
        // if image is in cache, return it, else fetch from network
        return response || fetch(request).then(function(networkResponse) {
          cache.put(imageStorageUrl, networkResponse.clone());
          return networkResponse;
        });
      });
    });
  }