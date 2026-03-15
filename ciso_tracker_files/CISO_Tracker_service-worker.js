// CISO Career Tracker · Service Worker · KAIZEN v05.0
const CACHE_NAME = 'ciso-tracker-v05';
const BASE = '/ciso-career-tracker/';

const ASSETS_TO_CACHE = [
  BASE + 'CISO_Tracker_kaizen_v05.html',
  BASE + 'manifest.json',
  'https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400&family=DM+Sans:wght@300;400;500;600;700&display=swap',
];

// Install — cache all core assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('[SW] Caching core assets');
      // Cache what we can, skip failures (e.g. Google Fonts may block)
      return Promise.allSettled(
        ASSETS_TO_CACHE.map(url => cache.add(url).catch(() => console.log('[SW] Skipped:', url)))
      );
    }).then(() => self.skipWaiting())
  );
});

// Activate — clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => {
          console.log('[SW] Deleting old cache:', key);
          return caches.delete(key);
        })
      )
    ).then(() => self.clients.claim())
  );
});

// Fetch — serve from cache, fall back to network
self.addEventListener('fetch', event => {
  // Skip non-GET and chrome-extension requests
  if(event.request.method !== 'GET') return;
  if(event.request.url.startsWith('chrome-extension://')) return;
  // Skip OpenRouter API calls — always need network
  if(event.request.url.includes('openrouter.ai')) return;

  event.respondWith(
    caches.match(event.request).then(cached => {
      if(cached) {
        // Serve from cache, update in background
        const networkFetch = fetch(event.request).then(response => {
          if(response && response.status === 200) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
          }
          return response;
        }).catch(() => {});
        return cached;
      }
      // Not in cache — fetch from network and cache it
      return fetch(event.request).then(response => {
        if(!response || response.status !== 200 || response.type === 'opaque') {
          return response;
        }
        const clone = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        return response;
      }).catch(() => {
        // Offline fallback — return cached main HTML
        return caches.match(BASE + 'CISO_Tracker_kaizen_v05.html');
      });
    })
  );
});
