const NAMECACHE = 'mws-v1';
const filesToCache = [
    '.',
    'index.html',
    '404.html',
    'cssgrid/cssgrid.css',
    'cssgrid/index.html',
    'kalkulator/add2numbers.js',
    'kalkulator/index.html'
];
self.addEventListener('install', event=>{
    console.log('persiapan cache');
    self.skipWaiting();
    event.waitUntil(
        caches.open(NAMECACHE)
            .then(cache=>{
                return cache.addAll(filesToCache);
            })
    );
});
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                return response || fetch(event.request)
            }).catch(err => {
                return new response('waduh');
            })
    );
});
