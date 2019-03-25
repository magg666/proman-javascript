const CACHE_NAME = 'promanik';

// List of files which are store in cache.
let filesToCache = [
	'/',
	'/static/',
	'/templates/'

];

self.addEventListener('install', function (evt) {
	evt.waitUntil(
		caches.open(CACHE_NAME).then(function (cache) {
			return cache.addAll(filesToCache);
		}).catch(function (err) {
			// Snooze errors...
			// console.error(err);
		})
	);
});

self.addEventListener('fetch', (evt) => {
	console.log('Event: fetch', { evt });

	if (isForeignRequest(evt.request.url)) {
		return;
	}

	evt.respondWith(handleFetch(evt));
});

async function handleFetch(evt) {
	const request = evt.request;
	const cache = await caches.open(CACHE_NAME);
	const resource = await cache.match(request);

	if (resource) {
		return resource;
	}

	const response = await fetch(request.clone());
	await cache.put(request, response.clone());
	return response;
}