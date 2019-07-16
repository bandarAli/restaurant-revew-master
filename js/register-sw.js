// check the service worker and register if available .
if (navigator.serviceWorker) { /* if it is supported */
    navigator.serviceWorker.register('/sw.js').then(function(reg) {
      console.log("Service Worker has been registered successfully!");
    }).catch((e) => {
      console.log("Couldn't register service worker... \n", e);
    });
  }