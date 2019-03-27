// if (navigator.onLine) {
// 	alert('online');
// } else {
// 	alert('offline');
// }

const CACHE_NAME = 'promanik';

// List of files which are store in cache.
let filesToCache = [
	'/',
	'/static/js/main.js',
	'/static/js/pwa_test.html'

];
const console = (({ log, error }, label) => ({
	// Enable logs
	log: (...args) => log(`%c${label}`, 'color: purple', ...args),
	error: (...args) => error(label, ...args)


	// Disable logs
	// log: () => null,
	// error: () => null
}))(self.console, '[Service Worker]');

// if (navigator.onLine) {
// 	console.log('online');
// } else {
// 	console.log('offline');
// }

self.addEventListener('install', (evt) => {
	console.log('Event: install', { evt });
	evt.waitUntil(handleInstall());
});

async function handleInstall() {
	const cache = await caches.open(CACHE_NAME);
	await cache.addAll(filesToCache);
	return self.skipWaiting();
}

self.addEventListener('activate', (evt) => {
	console.log('Event: activate', { evt });
	evt.waitUntil(handleActivate());
});

async function handleActivate() {
	console.log('handleActivate1');
	const keys = await caches.keys();
	return await Promise.all(keys
		.filter((key) => key !== CACHE_NAME)
		.map((key) => caches.delete(key)).console.log('handleActivate2'));
}

function isForeignRequest(url) {
	const regexp = new RegExp(self.origin, 'https://proman-app.herokuapp.com/');
	return !regexp.test(url);
}

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