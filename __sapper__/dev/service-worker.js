(function () {
	'use strict';

	// This file is generated by Sapper — do not edit it!
	const timestamp = 1728214787556;

	const files = [
		"/service-worker-index.html",
		"/favicon.png",
		"/global.css",
		"/logo-192.png",
		"/logo-512.png",
		"/manifest.json",
		"/vendor/bootstrap/bootstrap-grid.css",
		"/vendor/bootstrap/bootstrap-grid.css.map",
		"/vendor/bootstrap/bootstrap-grid.min.css",
		"/vendor/bootstrap/bootstrap-grid.min.css.map",
		"/vendor/bootstrap/bootstrap-grid.rtl.css",
		"/vendor/bootstrap/bootstrap-grid.rtl.css.map",
		"/vendor/bootstrap/bootstrap-grid.rtl.min.css",
		"/vendor/bootstrap/bootstrap-grid.rtl.min.css.map",
		"/vendor/bootstrap/bootstrap-reboot.css",
		"/vendor/bootstrap/bootstrap-reboot.css.map",
		"/vendor/bootstrap/bootstrap-reboot.min.css",
		"/vendor/bootstrap/bootstrap-reboot.min.css.map",
		"/vendor/bootstrap/bootstrap-reboot.rtl.css",
		"/vendor/bootstrap/bootstrap-reboot.rtl.css.map",
		"/vendor/bootstrap/bootstrap-reboot.rtl.min.css",
		"/vendor/bootstrap/bootstrap-reboot.rtl.min.css.map",
		"/vendor/bootstrap/bootstrap-utilities.css",
		"/vendor/bootstrap/bootstrap-utilities.css.map",
		"/vendor/bootstrap/bootstrap-utilities.min.css",
		"/vendor/bootstrap/bootstrap-utilities.min.css.map",
		"/vendor/bootstrap/bootstrap-utilities.rtl.css",
		"/vendor/bootstrap/bootstrap-utilities.rtl.css.map",
		"/vendor/bootstrap/bootstrap-utilities.rtl.min.css",
		"/vendor/bootstrap/bootstrap-utilities.rtl.min.css.map",
		"/vendor/bootstrap/bootstrap.bundle.js",
		"/vendor/bootstrap/bootstrap.bundle.js.map",
		"/vendor/bootstrap/bootstrap.bundle.min.js",
		"/vendor/bootstrap/bootstrap.bundle.min.js.map",
		"/vendor/bootstrap/bootstrap.css",
		"/vendor/bootstrap/bootstrap.css.map",
		"/vendor/bootstrap/bootstrap.esm.js",
		"/vendor/bootstrap/bootstrap.esm.js.map",
		"/vendor/bootstrap/bootstrap.esm.min.js",
		"/vendor/bootstrap/bootstrap.esm.min.js.map",
		"/vendor/bootstrap/bootstrap.js",
		"/vendor/bootstrap/bootstrap.js.map",
		"/vendor/bootstrap/bootstrap.min.css",
		"/vendor/bootstrap/bootstrap.min.css.map",
		"/vendor/bootstrap/bootstrap.min.js",
		"/vendor/bootstrap/bootstrap.min.js.map",
		"/vendor/bootstrap/bootstrap.rtl.css",
		"/vendor/bootstrap/bootstrap.rtl.css.map",
		"/vendor/bootstrap/bootstrap.rtl.min.css",
		"/vendor/bootstrap/bootstrap.rtl.min.css.map",
		"/vendor/bootstrap/css/bootstrap-grid.css",
		"/vendor/bootstrap/css/bootstrap-grid.css.map",
		"/vendor/bootstrap/css/bootstrap-grid.min.css",
		"/vendor/bootstrap/css/bootstrap-grid.min.css.map",
		"/vendor/bootstrap/css/bootstrap-grid.rtl.css",
		"/vendor/bootstrap/css/bootstrap-grid.rtl.css.map",
		"/vendor/bootstrap/css/bootstrap-grid.rtl.min.css",
		"/vendor/bootstrap/css/bootstrap-grid.rtl.min.css.map",
		"/vendor/bootstrap/css/bootstrap-reboot.css",
		"/vendor/bootstrap/css/bootstrap-reboot.css.map",
		"/vendor/bootstrap/css/bootstrap-reboot.min.css",
		"/vendor/bootstrap/css/bootstrap-reboot.min.css.map",
		"/vendor/bootstrap/css/bootstrap-reboot.rtl.css",
		"/vendor/bootstrap/css/bootstrap-reboot.rtl.css.map",
		"/vendor/bootstrap/css/bootstrap-reboot.rtl.min.css",
		"/vendor/bootstrap/css/bootstrap-reboot.rtl.min.css.map",
		"/vendor/bootstrap/css/bootstrap-utilities.css",
		"/vendor/bootstrap/css/bootstrap-utilities.css.map",
		"/vendor/bootstrap/css/bootstrap-utilities.min.css",
		"/vendor/bootstrap/css/bootstrap-utilities.min.css.map",
		"/vendor/bootstrap/css/bootstrap-utilities.rtl.css",
		"/vendor/bootstrap/css/bootstrap-utilities.rtl.css.map",
		"/vendor/bootstrap/css/bootstrap-utilities.rtl.min.css",
		"/vendor/bootstrap/css/bootstrap-utilities.rtl.min.css.map",
		"/vendor/bootstrap/css/bootstrap.css",
		"/vendor/bootstrap/css/bootstrap.css.map",
		"/vendor/bootstrap/css/bootstrap.min.css",
		"/vendor/bootstrap/css/bootstrap.min.css.map",
		"/vendor/bootstrap/css/bootstrap.rtl.css",
		"/vendor/bootstrap/css/bootstrap.rtl.css.map",
		"/vendor/bootstrap/css/bootstrap.rtl.min.css",
		"/vendor/bootstrap/css/bootstrap.rtl.min.css.map",
		"/vendor/bootstrap/js/bootstrap.bundle.js",
		"/vendor/bootstrap/js/bootstrap.bundle.js.map",
		"/vendor/bootstrap/js/bootstrap.bundle.min.js",
		"/vendor/bootstrap/js/bootstrap.bundle.min.js.map",
		"/vendor/bootstrap/js/bootstrap.esm.js",
		"/vendor/bootstrap/js/bootstrap.esm.js.map",
		"/vendor/bootstrap/js/bootstrap.esm.min.js",
		"/vendor/bootstrap/js/bootstrap.esm.min.js.map",
		"/vendor/bootstrap/js/bootstrap.js",
		"/vendor/bootstrap/js/bootstrap.js.map",
		"/vendor/bootstrap/js/bootstrap.min.js",
		"/vendor/bootstrap/js/bootstrap.min.js.map",
		"/vendor/jquery/jquery.js",
		"/vendor/jquery/jquery.min.js",
		"/vendor/jquery/jquery.min.map",
		"/vendor/jquery/jquery.slim.js",
		"/vendor/jquery/jquery.slim.min.js",
		"/vendor/jquery/jquery.slim.min.map"
	];

	const shell = [
		"/client/client.0c57d22a.js",
		"/client/inject_styles.5607aec6.js",
		"/client/index.7b2c7157.js",
		"/client/register.404c2237.js",
		"/client/about.943cd707.js",
		"/client/login.02590d61.js",
		"/client/index.87dac473.js",
		"/client/_slug_.d100e08c.js",
		"/client/sapper-dev-client.1e7a4a5e.js"
	];

	const ASSETS = `cache${timestamp}`;

	// `shell` is an array of all the files generated by the bundler,
	// `files` is an array of everything in the `static` directory
	const to_cache = shell.concat(files);
	const staticAssets = new Set(to_cache);

	self.addEventListener('install', event => {
		event.waitUntil(
			caches
				.open(ASSETS)
				.then(cache => cache.addAll(to_cache))
				.then(() => {
					self.skipWaiting();
				})
		);
	});

	self.addEventListener('activate', event => {
		event.waitUntil(
			caches.keys().then(async keys => {
				// delete old caches
				for (const key of keys) {
					if (key !== ASSETS) await caches.delete(key);
				}

				self.clients.claim();
			})
		);
	});


	/**
	 * Fetch the asset from the network and store it in the cache. 
	 * Fall back to the cache if the user is offline.
	 */
	async function fetchAndCache(request) {
		const cache = await caches.open(`offline${timestamp}`);

		try {
			const response = await fetch(request);
			cache.put(request, response.clone());
			return response;
		} catch (err) {
			const response = await cache.match(request);
			if (response) return response;

			throw err;
		}
	}

	self.addEventListener('fetch', event => {
		if (event.request.method !== 'GET' || event.request.headers.has('range')) return;

		const url = new URL(event.request.url);

		// don't try to handle e.g. data: URIs
		const isHttp = url.protocol.startsWith('http');
		const isDevServerRequest = url.hostname === self.location.hostname && url.port !== self.location.port;
		const isStaticAsset = url.host === self.location.host && staticAssets.has(url.pathname);
		const skipBecauseUncached = event.request.cache === 'only-if-cached' && !isStaticAsset;

		if (isHttp && !isDevServerRequest && !skipBecauseUncached) {
			event.respondWith(
				(async () => {
					// always serve static files and bundler-generated assets from cache.
					// if your application has other URLs with data that will never change,
					// set this variable to true for them and they will only be fetched once.
					const cachedAsset = isStaticAsset && await caches.match(event.request);

					// for pages, you might want to serve a shell `service-worker-index.html` file,
					// which Sapper has generated for you. It's not right for every
					// app, but if it's right for yours then uncomment this section
					/*
					if (!cachedAsset && url.origin === self.origin && routes.find(route => route.pattern.test(url.pathname))) {
						return caches.match('/service-worker-index.html');
					}
					*/

					return cachedAsset || fetchAndCache(event.request);
				})()
			);
		}
	});

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS13b3JrZXIuanMiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlX21vZHVsZXMvQHNhcHBlci9zZXJ2aWNlLXdvcmtlci5qcyIsIi4uLy4uL3NyYy9zZXJ2aWNlLXdvcmtlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGZpbGUgaXMgZ2VuZXJhdGVkIGJ5IFNhcHBlciDigJQgZG8gbm90IGVkaXQgaXQhXG5leHBvcnQgY29uc3QgdGltZXN0YW1wID0gMTcyODIxNDc4NzU1NjtcblxuZXhwb3J0IGNvbnN0IGZpbGVzID0gW1xuXHRcIi9zZXJ2aWNlLXdvcmtlci1pbmRleC5odG1sXCIsXG5cdFwiL2Zhdmljb24ucG5nXCIsXG5cdFwiL2dsb2JhbC5jc3NcIixcblx0XCIvbG9nby0xOTIucG5nXCIsXG5cdFwiL2xvZ28tNTEyLnBuZ1wiLFxuXHRcIi9tYW5pZmVzdC5qc29uXCIsXG5cdFwiL3ZlbmRvci9ib290c3RyYXAvYm9vdHN0cmFwLWdyaWQuY3NzXCIsXG5cdFwiL3ZlbmRvci9ib290c3RyYXAvYm9vdHN0cmFwLWdyaWQuY3NzLm1hcFwiLFxuXHRcIi92ZW5kb3IvYm9vdHN0cmFwL2Jvb3RzdHJhcC1ncmlkLm1pbi5jc3NcIixcblx0XCIvdmVuZG9yL2Jvb3RzdHJhcC9ib290c3RyYXAtZ3JpZC5taW4uY3NzLm1hcFwiLFxuXHRcIi92ZW5kb3IvYm9vdHN0cmFwL2Jvb3RzdHJhcC1ncmlkLnJ0bC5jc3NcIixcblx0XCIvdmVuZG9yL2Jvb3RzdHJhcC9ib290c3RyYXAtZ3JpZC5ydGwuY3NzLm1hcFwiLFxuXHRcIi92ZW5kb3IvYm9vdHN0cmFwL2Jvb3RzdHJhcC1ncmlkLnJ0bC5taW4uY3NzXCIsXG5cdFwiL3ZlbmRvci9ib290c3RyYXAvYm9vdHN0cmFwLWdyaWQucnRsLm1pbi5jc3MubWFwXCIsXG5cdFwiL3ZlbmRvci9ib290c3RyYXAvYm9vdHN0cmFwLXJlYm9vdC5jc3NcIixcblx0XCIvdmVuZG9yL2Jvb3RzdHJhcC9ib290c3RyYXAtcmVib290LmNzcy5tYXBcIixcblx0XCIvdmVuZG9yL2Jvb3RzdHJhcC9ib290c3RyYXAtcmVib290Lm1pbi5jc3NcIixcblx0XCIvdmVuZG9yL2Jvb3RzdHJhcC9ib290c3RyYXAtcmVib290Lm1pbi5jc3MubWFwXCIsXG5cdFwiL3ZlbmRvci9ib290c3RyYXAvYm9vdHN0cmFwLXJlYm9vdC5ydGwuY3NzXCIsXG5cdFwiL3ZlbmRvci9ib290c3RyYXAvYm9vdHN0cmFwLXJlYm9vdC5ydGwuY3NzLm1hcFwiLFxuXHRcIi92ZW5kb3IvYm9vdHN0cmFwL2Jvb3RzdHJhcC1yZWJvb3QucnRsLm1pbi5jc3NcIixcblx0XCIvdmVuZG9yL2Jvb3RzdHJhcC9ib290c3RyYXAtcmVib290LnJ0bC5taW4uY3NzLm1hcFwiLFxuXHRcIi92ZW5kb3IvYm9vdHN0cmFwL2Jvb3RzdHJhcC11dGlsaXRpZXMuY3NzXCIsXG5cdFwiL3ZlbmRvci9ib290c3RyYXAvYm9vdHN0cmFwLXV0aWxpdGllcy5jc3MubWFwXCIsXG5cdFwiL3ZlbmRvci9ib290c3RyYXAvYm9vdHN0cmFwLXV0aWxpdGllcy5taW4uY3NzXCIsXG5cdFwiL3ZlbmRvci9ib290c3RyYXAvYm9vdHN0cmFwLXV0aWxpdGllcy5taW4uY3NzLm1hcFwiLFxuXHRcIi92ZW5kb3IvYm9vdHN0cmFwL2Jvb3RzdHJhcC11dGlsaXRpZXMucnRsLmNzc1wiLFxuXHRcIi92ZW5kb3IvYm9vdHN0cmFwL2Jvb3RzdHJhcC11dGlsaXRpZXMucnRsLmNzcy5tYXBcIixcblx0XCIvdmVuZG9yL2Jvb3RzdHJhcC9ib290c3RyYXAtdXRpbGl0aWVzLnJ0bC5taW4uY3NzXCIsXG5cdFwiL3ZlbmRvci9ib290c3RyYXAvYm9vdHN0cmFwLXV0aWxpdGllcy5ydGwubWluLmNzcy5tYXBcIixcblx0XCIvdmVuZG9yL2Jvb3RzdHJhcC9ib290c3RyYXAuYnVuZGxlLmpzXCIsXG5cdFwiL3ZlbmRvci9ib290c3RyYXAvYm9vdHN0cmFwLmJ1bmRsZS5qcy5tYXBcIixcblx0XCIvdmVuZG9yL2Jvb3RzdHJhcC9ib290c3RyYXAuYnVuZGxlLm1pbi5qc1wiLFxuXHRcIi92ZW5kb3IvYm9vdHN0cmFwL2Jvb3RzdHJhcC5idW5kbGUubWluLmpzLm1hcFwiLFxuXHRcIi92ZW5kb3IvYm9vdHN0cmFwL2Jvb3RzdHJhcC5jc3NcIixcblx0XCIvdmVuZG9yL2Jvb3RzdHJhcC9ib290c3RyYXAuY3NzLm1hcFwiLFxuXHRcIi92ZW5kb3IvYm9vdHN0cmFwL2Jvb3RzdHJhcC5lc20uanNcIixcblx0XCIvdmVuZG9yL2Jvb3RzdHJhcC9ib290c3RyYXAuZXNtLmpzLm1hcFwiLFxuXHRcIi92ZW5kb3IvYm9vdHN0cmFwL2Jvb3RzdHJhcC5lc20ubWluLmpzXCIsXG5cdFwiL3ZlbmRvci9ib290c3RyYXAvYm9vdHN0cmFwLmVzbS5taW4uanMubWFwXCIsXG5cdFwiL3ZlbmRvci9ib290c3RyYXAvYm9vdHN0cmFwLmpzXCIsXG5cdFwiL3ZlbmRvci9ib290c3RyYXAvYm9vdHN0cmFwLmpzLm1hcFwiLFxuXHRcIi92ZW5kb3IvYm9vdHN0cmFwL2Jvb3RzdHJhcC5taW4uY3NzXCIsXG5cdFwiL3ZlbmRvci9ib290c3RyYXAvYm9vdHN0cmFwLm1pbi5jc3MubWFwXCIsXG5cdFwiL3ZlbmRvci9ib290c3RyYXAvYm9vdHN0cmFwLm1pbi5qc1wiLFxuXHRcIi92ZW5kb3IvYm9vdHN0cmFwL2Jvb3RzdHJhcC5taW4uanMubWFwXCIsXG5cdFwiL3ZlbmRvci9ib290c3RyYXAvYm9vdHN0cmFwLnJ0bC5jc3NcIixcblx0XCIvdmVuZG9yL2Jvb3RzdHJhcC9ib290c3RyYXAucnRsLmNzcy5tYXBcIixcblx0XCIvdmVuZG9yL2Jvb3RzdHJhcC9ib290c3RyYXAucnRsLm1pbi5jc3NcIixcblx0XCIvdmVuZG9yL2Jvb3RzdHJhcC9ib290c3RyYXAucnRsLm1pbi5jc3MubWFwXCIsXG5cdFwiL3ZlbmRvci9ib290c3RyYXAvY3NzL2Jvb3RzdHJhcC1ncmlkLmNzc1wiLFxuXHRcIi92ZW5kb3IvYm9vdHN0cmFwL2Nzcy9ib290c3RyYXAtZ3JpZC5jc3MubWFwXCIsXG5cdFwiL3ZlbmRvci9ib290c3RyYXAvY3NzL2Jvb3RzdHJhcC1ncmlkLm1pbi5jc3NcIixcblx0XCIvdmVuZG9yL2Jvb3RzdHJhcC9jc3MvYm9vdHN0cmFwLWdyaWQubWluLmNzcy5tYXBcIixcblx0XCIvdmVuZG9yL2Jvb3RzdHJhcC9jc3MvYm9vdHN0cmFwLWdyaWQucnRsLmNzc1wiLFxuXHRcIi92ZW5kb3IvYm9vdHN0cmFwL2Nzcy9ib290c3RyYXAtZ3JpZC5ydGwuY3NzLm1hcFwiLFxuXHRcIi92ZW5kb3IvYm9vdHN0cmFwL2Nzcy9ib290c3RyYXAtZ3JpZC5ydGwubWluLmNzc1wiLFxuXHRcIi92ZW5kb3IvYm9vdHN0cmFwL2Nzcy9ib290c3RyYXAtZ3JpZC5ydGwubWluLmNzcy5tYXBcIixcblx0XCIvdmVuZG9yL2Jvb3RzdHJhcC9jc3MvYm9vdHN0cmFwLXJlYm9vdC5jc3NcIixcblx0XCIvdmVuZG9yL2Jvb3RzdHJhcC9jc3MvYm9vdHN0cmFwLXJlYm9vdC5jc3MubWFwXCIsXG5cdFwiL3ZlbmRvci9ib290c3RyYXAvY3NzL2Jvb3RzdHJhcC1yZWJvb3QubWluLmNzc1wiLFxuXHRcIi92ZW5kb3IvYm9vdHN0cmFwL2Nzcy9ib290c3RyYXAtcmVib290Lm1pbi5jc3MubWFwXCIsXG5cdFwiL3ZlbmRvci9ib290c3RyYXAvY3NzL2Jvb3RzdHJhcC1yZWJvb3QucnRsLmNzc1wiLFxuXHRcIi92ZW5kb3IvYm9vdHN0cmFwL2Nzcy9ib290c3RyYXAtcmVib290LnJ0bC5jc3MubWFwXCIsXG5cdFwiL3ZlbmRvci9ib290c3RyYXAvY3NzL2Jvb3RzdHJhcC1yZWJvb3QucnRsLm1pbi5jc3NcIixcblx0XCIvdmVuZG9yL2Jvb3RzdHJhcC9jc3MvYm9vdHN0cmFwLXJlYm9vdC5ydGwubWluLmNzcy5tYXBcIixcblx0XCIvdmVuZG9yL2Jvb3RzdHJhcC9jc3MvYm9vdHN0cmFwLXV0aWxpdGllcy5jc3NcIixcblx0XCIvdmVuZG9yL2Jvb3RzdHJhcC9jc3MvYm9vdHN0cmFwLXV0aWxpdGllcy5jc3MubWFwXCIsXG5cdFwiL3ZlbmRvci9ib290c3RyYXAvY3NzL2Jvb3RzdHJhcC11dGlsaXRpZXMubWluLmNzc1wiLFxuXHRcIi92ZW5kb3IvYm9vdHN0cmFwL2Nzcy9ib290c3RyYXAtdXRpbGl0aWVzLm1pbi5jc3MubWFwXCIsXG5cdFwiL3ZlbmRvci9ib290c3RyYXAvY3NzL2Jvb3RzdHJhcC11dGlsaXRpZXMucnRsLmNzc1wiLFxuXHRcIi92ZW5kb3IvYm9vdHN0cmFwL2Nzcy9ib290c3RyYXAtdXRpbGl0aWVzLnJ0bC5jc3MubWFwXCIsXG5cdFwiL3ZlbmRvci9ib290c3RyYXAvY3NzL2Jvb3RzdHJhcC11dGlsaXRpZXMucnRsLm1pbi5jc3NcIixcblx0XCIvdmVuZG9yL2Jvb3RzdHJhcC9jc3MvYm9vdHN0cmFwLXV0aWxpdGllcy5ydGwubWluLmNzcy5tYXBcIixcblx0XCIvdmVuZG9yL2Jvb3RzdHJhcC9jc3MvYm9vdHN0cmFwLmNzc1wiLFxuXHRcIi92ZW5kb3IvYm9vdHN0cmFwL2Nzcy9ib290c3RyYXAuY3NzLm1hcFwiLFxuXHRcIi92ZW5kb3IvYm9vdHN0cmFwL2Nzcy9ib290c3RyYXAubWluLmNzc1wiLFxuXHRcIi92ZW5kb3IvYm9vdHN0cmFwL2Nzcy9ib290c3RyYXAubWluLmNzcy5tYXBcIixcblx0XCIvdmVuZG9yL2Jvb3RzdHJhcC9jc3MvYm9vdHN0cmFwLnJ0bC5jc3NcIixcblx0XCIvdmVuZG9yL2Jvb3RzdHJhcC9jc3MvYm9vdHN0cmFwLnJ0bC5jc3MubWFwXCIsXG5cdFwiL3ZlbmRvci9ib290c3RyYXAvY3NzL2Jvb3RzdHJhcC5ydGwubWluLmNzc1wiLFxuXHRcIi92ZW5kb3IvYm9vdHN0cmFwL2Nzcy9ib290c3RyYXAucnRsLm1pbi5jc3MubWFwXCIsXG5cdFwiL3ZlbmRvci9ib290c3RyYXAvanMvYm9vdHN0cmFwLmJ1bmRsZS5qc1wiLFxuXHRcIi92ZW5kb3IvYm9vdHN0cmFwL2pzL2Jvb3RzdHJhcC5idW5kbGUuanMubWFwXCIsXG5cdFwiL3ZlbmRvci9ib290c3RyYXAvanMvYm9vdHN0cmFwLmJ1bmRsZS5taW4uanNcIixcblx0XCIvdmVuZG9yL2Jvb3RzdHJhcC9qcy9ib290c3RyYXAuYnVuZGxlLm1pbi5qcy5tYXBcIixcblx0XCIvdmVuZG9yL2Jvb3RzdHJhcC9qcy9ib290c3RyYXAuZXNtLmpzXCIsXG5cdFwiL3ZlbmRvci9ib290c3RyYXAvanMvYm9vdHN0cmFwLmVzbS5qcy5tYXBcIixcblx0XCIvdmVuZG9yL2Jvb3RzdHJhcC9qcy9ib290c3RyYXAuZXNtLm1pbi5qc1wiLFxuXHRcIi92ZW5kb3IvYm9vdHN0cmFwL2pzL2Jvb3RzdHJhcC5lc20ubWluLmpzLm1hcFwiLFxuXHRcIi92ZW5kb3IvYm9vdHN0cmFwL2pzL2Jvb3RzdHJhcC5qc1wiLFxuXHRcIi92ZW5kb3IvYm9vdHN0cmFwL2pzL2Jvb3RzdHJhcC5qcy5tYXBcIixcblx0XCIvdmVuZG9yL2Jvb3RzdHJhcC9qcy9ib290c3RyYXAubWluLmpzXCIsXG5cdFwiL3ZlbmRvci9ib290c3RyYXAvanMvYm9vdHN0cmFwLm1pbi5qcy5tYXBcIixcblx0XCIvdmVuZG9yL2pxdWVyeS9qcXVlcnkuanNcIixcblx0XCIvdmVuZG9yL2pxdWVyeS9qcXVlcnkubWluLmpzXCIsXG5cdFwiL3ZlbmRvci9qcXVlcnkvanF1ZXJ5Lm1pbi5tYXBcIixcblx0XCIvdmVuZG9yL2pxdWVyeS9qcXVlcnkuc2xpbS5qc1wiLFxuXHRcIi92ZW5kb3IvanF1ZXJ5L2pxdWVyeS5zbGltLm1pbi5qc1wiLFxuXHRcIi92ZW5kb3IvanF1ZXJ5L2pxdWVyeS5zbGltLm1pbi5tYXBcIlxuXTtcbmV4cG9ydCB7IGZpbGVzIGFzIGFzc2V0cyB9OyAvLyBsZWdhY3lcblxuZXhwb3J0IGNvbnN0IHNoZWxsID0gW1xuXHRcIi9jbGllbnQvY2xpZW50LjBjNTdkMjJhLmpzXCIsXG5cdFwiL2NsaWVudC9pbmplY3Rfc3R5bGVzLjU2MDdhZWM2LmpzXCIsXG5cdFwiL2NsaWVudC9pbmRleC43YjJjNzE1Ny5qc1wiLFxuXHRcIi9jbGllbnQvcmVnaXN0ZXIuNDA0YzIyMzcuanNcIixcblx0XCIvY2xpZW50L2Fib3V0Ljk0M2NkNzA3LmpzXCIsXG5cdFwiL2NsaWVudC9sb2dpbi4wMjU5MGQ2MS5qc1wiLFxuXHRcIi9jbGllbnQvaW5kZXguODdkYWM0NzMuanNcIixcblx0XCIvY2xpZW50L19zbHVnXy5kMTAwZTA4Yy5qc1wiLFxuXHRcIi9jbGllbnQvc2FwcGVyLWRldi1jbGllbnQuMWU3YTRhNWUuanNcIlxuXTtcblxuZXhwb3J0IGNvbnN0IHJvdXRlcyA9IFtcblx0eyBwYXR0ZXJuOiAvXlxcLyQvIH0sXG5cdHsgcGF0dGVybjogL15cXC9yZWdpc3RlclxcLz8kLyB9LFxuXHR7IHBhdHRlcm46IC9eXFwvYWJvdXRcXC8/JC8gfSxcblx0eyBwYXR0ZXJuOiAvXlxcL2xvZ2luXFwvPyQvIH0sXG5cdHsgcGF0dGVybjogL15cXC9ibG9nXFwvPyQvIH0sXG5cdHsgcGF0dGVybjogL15cXC9ibG9nXFwvKFteL10rPylcXC8/JC8gfVxuXTsiLCJpbXBvcnQgeyB0aW1lc3RhbXAsIGZpbGVzLCBzaGVsbCB9IGZyb20gJ0BzYXBwZXIvc2VydmljZS13b3JrZXInO1xyXG5cclxuY29uc3QgQVNTRVRTID0gYGNhY2hlJHt0aW1lc3RhbXB9YDtcclxuXHJcbi8vIGBzaGVsbGAgaXMgYW4gYXJyYXkgb2YgYWxsIHRoZSBmaWxlcyBnZW5lcmF0ZWQgYnkgdGhlIGJ1bmRsZXIsXHJcbi8vIGBmaWxlc2AgaXMgYW4gYXJyYXkgb2YgZXZlcnl0aGluZyBpbiB0aGUgYHN0YXRpY2AgZGlyZWN0b3J5XHJcbmNvbnN0IHRvX2NhY2hlID0gc2hlbGwuY29uY2F0KGZpbGVzKTtcclxuY29uc3Qgc3RhdGljQXNzZXRzID0gbmV3IFNldCh0b19jYWNoZSk7XHJcblxyXG5zZWxmLmFkZEV2ZW50TGlzdGVuZXIoJ2luc3RhbGwnLCBldmVudCA9PiB7XHJcblx0ZXZlbnQud2FpdFVudGlsKFxyXG5cdFx0Y2FjaGVzXHJcblx0XHRcdC5vcGVuKEFTU0VUUylcclxuXHRcdFx0LnRoZW4oY2FjaGUgPT4gY2FjaGUuYWRkQWxsKHRvX2NhY2hlKSlcclxuXHRcdFx0LnRoZW4oKCkgPT4ge1xyXG5cdFx0XHRcdHNlbGYuc2tpcFdhaXRpbmcoKTtcclxuXHRcdFx0fSlcclxuXHQpO1xyXG59KTtcclxuXHJcbnNlbGYuYWRkRXZlbnRMaXN0ZW5lcignYWN0aXZhdGUnLCBldmVudCA9PiB7XHJcblx0ZXZlbnQud2FpdFVudGlsKFxyXG5cdFx0Y2FjaGVzLmtleXMoKS50aGVuKGFzeW5jIGtleXMgPT4ge1xyXG5cdFx0XHQvLyBkZWxldGUgb2xkIGNhY2hlc1xyXG5cdFx0XHRmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XHJcblx0XHRcdFx0aWYgKGtleSAhPT0gQVNTRVRTKSBhd2FpdCBjYWNoZXMuZGVsZXRlKGtleSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHNlbGYuY2xpZW50cy5jbGFpbSgpO1xyXG5cdFx0fSlcclxuXHQpO1xyXG59KTtcclxuXHJcblxyXG4vKipcclxuICogRmV0Y2ggdGhlIGFzc2V0IGZyb20gdGhlIG5ldHdvcmsgYW5kIHN0b3JlIGl0IGluIHRoZSBjYWNoZS4gXHJcbiAqIEZhbGwgYmFjayB0byB0aGUgY2FjaGUgaWYgdGhlIHVzZXIgaXMgb2ZmbGluZS5cclxuICovXHJcbmFzeW5jIGZ1bmN0aW9uIGZldGNoQW5kQ2FjaGUocmVxdWVzdCkge1xyXG5cdGNvbnN0IGNhY2hlID0gYXdhaXQgY2FjaGVzLm9wZW4oYG9mZmxpbmUke3RpbWVzdGFtcH1gKVxyXG5cclxuXHR0cnkge1xyXG5cdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChyZXF1ZXN0KTtcclxuXHRcdGNhY2hlLnB1dChyZXF1ZXN0LCByZXNwb25zZS5jbG9uZSgpKTtcclxuXHRcdHJldHVybiByZXNwb25zZTtcclxuXHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgY2FjaGUubWF0Y2gocmVxdWVzdCk7XHJcblx0XHRpZiAocmVzcG9uc2UpIHJldHVybiByZXNwb25zZTtcclxuXHJcblx0XHR0aHJvdyBlcnI7XHJcblx0fVxyXG59XHJcblxyXG5zZWxmLmFkZEV2ZW50TGlzdGVuZXIoJ2ZldGNoJywgZXZlbnQgPT4ge1xyXG5cdGlmIChldmVudC5yZXF1ZXN0Lm1ldGhvZCAhPT0gJ0dFVCcgfHwgZXZlbnQucmVxdWVzdC5oZWFkZXJzLmhhcygncmFuZ2UnKSkgcmV0dXJuO1xyXG5cclxuXHRjb25zdCB1cmwgPSBuZXcgVVJMKGV2ZW50LnJlcXVlc3QudXJsKTtcclxuXHJcblx0Ly8gZG9uJ3QgdHJ5IHRvIGhhbmRsZSBlLmcuIGRhdGE6IFVSSXNcclxuXHRjb25zdCBpc0h0dHAgPSB1cmwucHJvdG9jb2wuc3RhcnRzV2l0aCgnaHR0cCcpO1xyXG5cdGNvbnN0IGlzRGV2U2VydmVyUmVxdWVzdCA9IHVybC5ob3N0bmFtZSA9PT0gc2VsZi5sb2NhdGlvbi5ob3N0bmFtZSAmJiB1cmwucG9ydCAhPT0gc2VsZi5sb2NhdGlvbi5wb3J0O1xyXG5cdGNvbnN0IGlzU3RhdGljQXNzZXQgPSB1cmwuaG9zdCA9PT0gc2VsZi5sb2NhdGlvbi5ob3N0ICYmIHN0YXRpY0Fzc2V0cy5oYXModXJsLnBhdGhuYW1lKTtcclxuXHRjb25zdCBza2lwQmVjYXVzZVVuY2FjaGVkID0gZXZlbnQucmVxdWVzdC5jYWNoZSA9PT0gJ29ubHktaWYtY2FjaGVkJyAmJiAhaXNTdGF0aWNBc3NldDtcclxuXHJcblx0aWYgKGlzSHR0cCAmJiAhaXNEZXZTZXJ2ZXJSZXF1ZXN0ICYmICFza2lwQmVjYXVzZVVuY2FjaGVkKSB7XHJcblx0XHRldmVudC5yZXNwb25kV2l0aChcclxuXHRcdFx0KGFzeW5jICgpID0+IHtcclxuXHRcdFx0XHQvLyBhbHdheXMgc2VydmUgc3RhdGljIGZpbGVzIGFuZCBidW5kbGVyLWdlbmVyYXRlZCBhc3NldHMgZnJvbSBjYWNoZS5cclxuXHRcdFx0XHQvLyBpZiB5b3VyIGFwcGxpY2F0aW9uIGhhcyBvdGhlciBVUkxzIHdpdGggZGF0YSB0aGF0IHdpbGwgbmV2ZXIgY2hhbmdlLFxyXG5cdFx0XHRcdC8vIHNldCB0aGlzIHZhcmlhYmxlIHRvIHRydWUgZm9yIHRoZW0gYW5kIHRoZXkgd2lsbCBvbmx5IGJlIGZldGNoZWQgb25jZS5cclxuXHRcdFx0XHRjb25zdCBjYWNoZWRBc3NldCA9IGlzU3RhdGljQXNzZXQgJiYgYXdhaXQgY2FjaGVzLm1hdGNoKGV2ZW50LnJlcXVlc3QpO1xyXG5cclxuXHRcdFx0XHQvLyBmb3IgcGFnZXMsIHlvdSBtaWdodCB3YW50IHRvIHNlcnZlIGEgc2hlbGwgYHNlcnZpY2Utd29ya2VyLWluZGV4Lmh0bWxgIGZpbGUsXHJcblx0XHRcdFx0Ly8gd2hpY2ggU2FwcGVyIGhhcyBnZW5lcmF0ZWQgZm9yIHlvdS4gSXQncyBub3QgcmlnaHQgZm9yIGV2ZXJ5XHJcblx0XHRcdFx0Ly8gYXBwLCBidXQgaWYgaXQncyByaWdodCBmb3IgeW91cnMgdGhlbiB1bmNvbW1lbnQgdGhpcyBzZWN0aW9uXHJcblx0XHRcdFx0LypcclxuXHRcdFx0XHRpZiAoIWNhY2hlZEFzc2V0ICYmIHVybC5vcmlnaW4gPT09IHNlbGYub3JpZ2luICYmIHJvdXRlcy5maW5kKHJvdXRlID0+IHJvdXRlLnBhdHRlcm4udGVzdCh1cmwucGF0aG5hbWUpKSkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIGNhY2hlcy5tYXRjaCgnL3NlcnZpY2Utd29ya2VyLWluZGV4Lmh0bWwnKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Ki9cclxuXHJcblx0XHRcdFx0cmV0dXJuIGNhY2hlZEFzc2V0IHx8IGZldGNoQW5kQ2FjaGUoZXZlbnQucmVxdWVzdCk7XHJcblx0XHRcdH0pKClcclxuXHRcdCk7XHJcblx0fVxyXG59KTtcclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztDQUFBO0NBQ08sTUFBTSxTQUFTLEdBQUcsYUFBYSxDQUFDO0FBQ3ZDO0NBQ08sTUFBTSxLQUFLLEdBQUc7Q0FDckIsQ0FBQyw0QkFBNEI7Q0FDN0IsQ0FBQyxj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
