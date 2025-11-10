const CACHE_NAME = 'mafatih-al-jinan-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/styles.css',
  '/app.js',
  '/manifest.json',
  'https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Noto+Sans+Arabic:wght@400;600;700&display=swap'
];

// التثبيت - حفظ الملفات في الذاكرة المؤقتة
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
  self.skipWaiting();
});

// التنشيط - حذف الذاكرة المؤقتة القديمة
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// الاستجابة للطلبات - من الذاكرة المؤقتة أو الشبكة
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // إرجاع الملف من الذاكرة المؤقتة إذا كان موجوداً
        if (response) {
          return response;
        }
        
        // وإلا جلبه من الشبكة
        return fetch(event.request).then(response => {
          // تحقق من صحة الاستجابة
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }
          
          // نسخ الاستجابة لحفظها في الذاكرة المؤقتة
          const responseToCache = response.clone();
          
          caches.open(CACHE_NAME)
            .then(cache => {
              cache.put(event.request, responseToCache);
            });
          
          return response;
        });
      })
      .catch(() => {
        // في حالة عدم وجود اتصال بالإنترنت
        return caches.match('/index.html');
      })
  );
});
