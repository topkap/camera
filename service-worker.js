importScripts("https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js");
workbox.setConfig({
  debug: !0
});
workbox.precaching.precacheAndRoute([{"revision":null,"url":"assets/index-147f5473.js"},{"revision":null,"url":"assets/index-7b487621.css"},{"revision":null,"url":"assets/webfontloader-523643f5.js"},{"revision":"260c98d7e5a03d206025400079d5cd98","url":"index.html"},{"revision":"609fd093c447d06ef76d14174653f6cb","url":"registerSW.js"},{"revision":"6f576d983629f770e76b48fd9ec5eb22","url":"manifest.webmanifest"}]);
workbox.routing.registerRoute(
  new RegExp("https://firebasestorage.googleapis.com/v0/b/pwa-camera.appspot.com/.*"),
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: "camera-images",
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        // <-- ExpirationPlugin로 대문자 'E' 변경
        maxEntries: 60,
        maxAgeSeconds: 365 * 24 * 60 * 60
        // 1년 지정
      })
    ]
  })
);
