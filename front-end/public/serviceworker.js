



//
const CACHE_NAME = "version-1";
const urlsToCache = ['index.html','offline.html'];



// Install Service worker
const self = this; //this represents the service workers 
self.addEventListener('install', (event)=> {
  event.waitUntil(
    caches.open(CACHE_NAME) //returns a promise, wait until we open the cache
      .then( (cache) => { 
        console.log('opened cache');

        return cache.addAll(urlsToCache);
      })   
  )
}); //can now go on chromedev to application->cache to check what is being cached



// Listen for requests --> network first logic, prioritize network usage over caching

// self.addEventListener('fetch', (event)=> {
//   event.respondWith( //when we see a fetch request we want to respond with something
//     caches.match(event.request) //match the request to the cache
//       .then( ()=> { //return a fetch of that request.
//         return fetch(event.request)
//           .catch( (e)=> {
//             return caches.match('offline.html')
//           })
//       })
//   )
// });



// Activate the service worker
self.addEventListener('activate', (event)=> {
  const cacheWhitelist = [];
  cacheWhitelist.push(CACHE_NAME);

  event.waitUntil(
    caches.keys().then( (cacheNames) => Promise.all(
      cacheNames.map( (cacheName)=> {
        if(!cacheWhitelist.includes(cacheName)) {
          return caches.delete(cacheName);  //delete caches not in our whitelist
        }
      })
    ))
  );
});

