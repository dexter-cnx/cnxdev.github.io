'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "a0ea0eafd3668b2e271dcd3ed5aa9532",
"version.json": "5facc4222936f86747db0a057ec71ae5",
"face_api.js": "cdbc0768ab7860e5960542ae632dc9f2",
"index.html": "cd04835e67a7c7334dbce94279037c22",
"/": "cd04835e67a7c7334dbce94279037c22",
"main.dart.js": "298b2ae42610486c35ef98795723070f",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"models/face_landmark_68_tiny_model-shard1": "47047fee26557b55d985952bdfc6cba1",
"models/face_recognition_model-shard2": "f2091ed03625f6e164a637c2326691c1",
"models/face_landmark_68_model-weights_manifest.json": "1d4029763003335bc6921aadeb58706a",
"models/face_landmark_68_model-shard1": "124304f06e07fcf928290ff776e96141",
"models/mtcnn_model-shard1": "846e8dd4e6a7ed12a2c749324adf0e11",
"models/tiny_face_detector_model-weights_manifest.json": "5bab50532388f5da9b4cd85b15adc11c",
"models/ssd_mobilenetv1_model-shard1": "37ef238973ea93daac91f1914478c40b",
"models/age_gender_model-weights_manifest.json": "d443abfd550a910c026d40cad6ea6000",
"models/face_expression_model-weights_manifest.json": "1eee5a2eea5ea5652904a2af88333dc1",
"models/ssd_mobilenetv1_model-weights_manifest.json": "cd2d65ec62107ba72b8b8d5047011647",
"models/face_recognition_model-shard1": "cb6f0f62e7598d70acf76483185a962b",
"models/face_landmark_68_tiny_model-weights_manifest.json": "29ea9c5c0e59a3069f8999b4ba1bd173",
"models/tiny_face_detector_model-shard1": "2e48b20953b0c59df47459d0319843a0",
"models/age_gender_model-shard1": "c34648b1f6dcf740eedef0473f13f4e1",
"models/ssd_mobilenetv1_model-shard2": "b6d5e81e2506145360be5c4278067080",
"models/face_recognition_model-weights_manifest.json": "6ecdaf3ea10d4fd3792e485f971e8b96",
"models/mtcnn_model-weights_manifest.json": "781bd744a5399d7cb0516d2a59a7c1c0",
"models/face_expression_model-shard1": "33ec63fec9fc41801930d44f4f4ea8f0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "bd53f73b44f1c02c5375e351f8872a70",
"assets/AssetManifest.json": "7718019fca1c12968949884a50e43d18",
"assets/NOTICES": "40af94d5b431495058797d497c1be829",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "95b2b68ae6a92eb45dd805eba7e89aae",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/mobkit_dashed_border/images/type2.png": "17a23dec244c3d1bb5b4ae67d7bd48b3",
"assets/packages/mobkit_dashed_border/images/type3.png": "2d50ab9d78a15b2f20012c3b9ea56c46",
"assets/packages/mobkit_dashed_border/images/type1.png": "9f8e612a54622229bd4b97e5357a473c",
"assets/packages/mobkit_dashed_border/images/type4.png": "9250b4ccf17768b5c7d6afcaebadf3f9",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/flutter_tesseract_ocr/images/test_16.jpg": "35314971c77f915dd1bf0b9579a84960",
"assets/packages/flutter_tesseract_ocr/images/test_11.jpg": "0d635defc90b9fa1df0ba9def0eeb9cb",
"assets/packages/flutter_tesseract_ocr/images/test_1.jpg": "0a2be1304ca3660cbd959ab65d45f98f",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "a0e7f2bca1646f25560be9e5063ab9c6",
"assets/fonts/MaterialIcons-Regular.otf": "f839596069a8ab0b45bb1982ec61fbf4",
"assets/assets/svg/face_scan.svg": "8b8efe1793b1789131f2e41e1685745b",
"assets/assets/svg/camera.svg": "cf5ebd0209fd0b477223c77ba5e3f4aa",
"assets/assets/svg/edit.svg": "d2b9cdfa9d08297791357d06a00c1f61",
"assets/assets/svg/calendar.svg": "ef5fa77e1ba11194bcf4f831a855f89c",
"assets/assets/svg/thai_id_link.svg": "cb79305fa212b1cbb998f0f6b9da4752",
"assets/assets/mocking/voucher_usages.json": "2862d4b6af72ab0d75cbd55f556da10c",
"assets/assets/mocking/resident_detail.json": "c1379218f4aa6c5003ac265d40c51fc2",
"assets/assets/mocking/coupons.json": "cedc93cca12015095fd583b815171065",
"assets/assets/mocking/payment_qr.png": "c6122df28840aa4f6d79e0f05b66d183",
"assets/assets/mocking/reservation_details.json": "ab798c1baf65c42d9d4be29ce76978ef",
"assets/assets/mocking/hotel_detail_01.png": "9bd6f6d8ca7758c0a6aa4857fc8de74e",
"assets/assets/mocking/resident_categories.json": "143f608ee83f74841712a8583cf93562",
"assets/assets/mocking/coupon_payment.json": "262266684250939e77b4b92620caeb6f",
"assets/assets/mocking/hotel_02.png": "34c238ec55a32b96c834b002c74f2205",
"assets/assets/mocking/hotel_03.png": "34c238ec55a32b96c834b002c74f2205",
"assets/assets/mocking/reservations.json": "2ad95c79ed4a0985f9136b5eeb36ccc8",
"assets/assets/mocking/hotel_01.png": "3b9913f6acec1eeab884e2e219e73c72",
"assets/assets/mocking/hotel_04.png": "c77adafc361576abcb6121068c134b4b",
"assets/assets/mocking/hotel_05.png": "b569a1fa8fa8f25f0032e77ff4abdc50",
"assets/assets/mocking/vouchers.json": "3a323ca361bfdefed3f55fe57aa60b3d",
"assets/assets/mocking/mock_map.png": "efee12a5897110b6b61aea143217a8ce",
"assets/assets/mocking/resident_list.json": "9b0acd187972573d9fc5d35b9ef55372",
"assets/assets/mocking/coupon_detail.json": "664940d44495b247b728c7f97cb6bfb1",
"assets/assets/tessdata/pdf.ttf": "7d6fcd462e96e4ae60b99f64ff51a4c5",
"assets/assets/tessdata/tha.traineddata": "62e50aff2a2c062bae73d03662ca4222",
"assets/assets/tessdata/OCRB.traineddata": "b78255274ae123c4b027bf202f1ddd06",
"assets/assets/tessdata/eng.traineddata": "d1be414fbb296b3ad777bfca655e194e",
"assets/assets/tessdata/financial.traineddata": "a7b81b2bec635f13b7eca4f340007285",
"assets/assets/prod.env": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/png/card_overlay.png": "ad5a8e79711c10f5a63c3957088baec1",
"assets/assets/png/example_identification.png": "5b80502b88038d1df3145d67712fb1a1",
"assets/assets/png/face_id.png": "710c32f07a41a3ae19578e334165a08e",
"assets/assets/png/shop.png": "5f3e1ae91d74de6c3c0fe6d24f16fee0",
"assets/assets/png/account.png": "41b7e6e66b7b4711ee11568d0c45cb8f",
"assets/assets/png/face.png": "ab25e25c7f27cc1b2aba87343c3244e5",
"assets/assets/png/face_scan.png": "bd7134321e9fd7faa27caba88ff1f094",
"assets/assets/png/apple.png": "26975e164567c3c5b455ee451cfc1bc9",
"assets/assets/png/thai_id_card.png": "4ef0832f6e9b80a72b665dafb6ad237a",
"assets/assets/png/thai_id_link.png": "d480413a3e995fddcc2322a5776924af",
"assets/assets/png/auth_verified.png": "fe2ffdeac799c7294ed26dd42fd76ae3",
"assets/assets/png/thai_id.png": "36c4872ea004bbd517e671c1cfe6eeb2",
"assets/assets/png/travel_together.png": "bf7d236d456593a854f2431d14bee7e6",
"assets/assets/png/line.png": "e8a1d67cb99fdb35d6856a3812438db4",
"assets/assets/png/google.png": "6bd8c9ccf146d656da1a65af3c4bf592",
"assets/assets/png/facebook.png": "d7f988a2f154e177b3a9f7ab706ca508",
"assets/assets/tessdata_config.json": "5dfa8f4b95f88a0beb71c320e9516e57",
"assets/assets/dev.env": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/icons/icon_cancel.png": "90b6f1fbfc91750365cbf0827bb3df6f",
"assets/assets/icons/rentals.png": "f83549414664178a3bed515e6053c88c",
"assets/assets/icons/restaurants.png": "14e6b168a1821bc52c43460733044c1c",
"assets/assets/icons/services.png": "a091474c48ba45c1582cc929733b77fe",
"assets/assets/icons/scan-line.png": "76fc376830836317bb13ded99fa4e3dd",
"assets/assets/icons/residents.png": "42b53e51aa6d6d563dc739a6102a048b",
"assets/assets/icons/shops.png": "4a9f0f4bc7051f4d37a7f4a209c30e6f",
"assets/assets/icons/upload_image.png": "d602daf706c95010e172d637585d35d6",
"assets/assets/icons/coupon.png": "8df2f907c06711f0ec9b6f62c7ce5fe4",
"assets/assets/icons/sightseeing.png": "b91e8ef86119b782d52c5b937f5d0875",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
