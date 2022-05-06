'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "92a9621c1c53d7c49fa47b1925a2c311",
"index.html": "6f8e35e359c4a71f7da298b83a0f13a1",
"/": "6f8e35e359c4a71f7da298b83a0f13a1",
"main.dart.js": "a05c69997963032a979fe5098548676c",
"flutter.js": "3688efe0a39e59781b4f95efbd6b5b62",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d31af189e808823654977b81acb7ddef",
"assets/AssetManifest.json": "037d9b7ccd1a9700421b973c1ba1eb7d",
"assets/NOTICES": "d3a980f3359819d48a0f8f14a071055b",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dd3c4233029270506ecc994d67785a37",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "613e4cc1af0eb5148b8ce409ad35446d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d1722d5cf2c7855862f68edb85e31f88",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/audios/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/rive_animations/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/images/Icon_play_white.png": "c9135c6663feb65a1cc5c799ee661821",
"assets/assets/images/ButtonBack.png": "b5478cf36decc7f6ee1cab3697d2621c",
"assets/assets/images/MobileConnectHelp_Text2.png": "488130a0a4db2ccaae9a63a3ce66c6d0",
"assets/assets/images/Button_about_editor.png": "59a5d2e33f33bfb1448dd7992026b903",
"assets/assets/images/Text_Wrap.png": "295bacef2028f444f7f90f1742c024d4",
"assets/assets/images/LogoX.png": "9a973e2825183707fef04f3299259f17",
"assets/assets/images/Gnb.png": "94fffc0f0aa364da4778267deaf2ec09",
"assets/assets/images/WaitingPage_sampe4.png": "447ad2e94f71861ff603a939eb3168c7",
"assets/assets/images/WaitingPage_sampe5.png": "1a7c2cc2d1bfd52ad735479434642294",
"assets/assets/images/NotLoginBackground.png": "5437ed1be61a6e1d1374403cfd73cfdd",
"assets/assets/images/WaitingPage_text2.png": "4d29d1435f0225fc09d28d0411871e8d",
"assets/assets/images/MobileAppInstallText2.png": "33c2546375a077252b95d65a6fb3a952",
"assets/assets/images/WaitingPage_sampe2.png": "18c4d9a7c7e96e8c3801642bf6c526f3",
"assets/assets/images/NotLoginCombine.png": "bdee46c8a0bed9b8aab28d7a68f06fac",
"assets/assets/images/WaitingPage_sampe3.png": "74f455ce171cb264b69d1d416f9b6635",
"assets/assets/images/WaitingPage_Text1.png": "7f5f74489bc6fd7487dd7af88155c313",
"assets/assets/images/WaitingPage_sampe1.png": "995a161cf626bf3da939175dce61dea7",
"assets/assets/images/AppStore.png": "246074ce13876d393bd0201191717130",
"assets/assets/images/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/images/GooglePlayStore.png": "abe4b98f2a6dd0a023f8a41b6311e523",
"assets/assets/images/MobileAppConnnectHelp_Text1.png": "0260d38b1c7465363dfb94336467551c",
"assets/assets/images/NotLoginHelpText.png": "5607afb7b43d6b057c7400cb5e0b6b73",
"assets/assets/images/MobileInstallQr.png": "eadffa192662c57e071683730d2cf4d6",
"assets/assets/images/SelectBoxLangKr.png": "c31e56fab00806fce5faf9d662c5137c",
"assets/assets/images/NotLoginText.png": "a3c174e3916024c52d6b03d3b760305e",
"assets/assets/images/MyInfoPage_text1.png": "dfb34da7c30482800ef96e07e9797a4c",
"assets/assets/images/LoadingProcessing.png": "e329318b0bccb3ac3aa07f66051d5262",
"assets/assets/lottie_animations/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/videos/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/pdfs/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/fonts/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
