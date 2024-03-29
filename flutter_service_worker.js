'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "196078b1ae002ef01cee9a80102e62f7",
".git/config": "226f6c34684bb66a51e4e241ce8aa7d4",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "f45e502230febbf49fa9528f5538ea14",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5f7e1d8ed261ee249c1c8eece17d0369",
".git/logs/refs/heads/main": "9e3c0a760c8988ea4df2cf97985c63db",
".git/logs/refs/remotes/origin/main": "5b894a738cf4d14c294738cde4d72556",
".git/objects/00/7794bdb2449ac73ae103d6a00faf5373e9e6c2": "0a7ffb163150dce61ba347c8e36be768",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/0d/71c473fe52bc5c9d0f66c5a7366f24a40591de": "82adde94ca79afa089f2897856baaf26",
".git/objects/0d/846c8d4e47a645a373889c8b2c499152924140": "7f8f3bbf2e35701a64b33210abfe6443",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/12/b26a74f4e0dc97bef3ce8bb443b34e7af279b2": "6787b53b6ddca5b58099b12d263f05bb",
".git/objects/18/99371ed871218487f2655d6aa52087edce1c73": "67c01778aaeab48004dd85c6e46028ae",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/5957140b3e9e17af07ce3269070d0d274f9b44": "69eca3150c522856a42f284db54c21c3",
".git/objects/21/4ee2e332c069cc7907e6c457bc8e7bfea8378e": "b93e200e4ad07f629ee19a06f38f0b04",
".git/objects/22/79c3feb37d5f8e8b603416e7e7cd636951974e": "ca8c4f104a11dd5679b9cf78e64cab99",
".git/objects/22/91f93c7de9df8952bc94119e8d8ead964820b1": "7b2efd76c8a81ec6f25447e2c8e283e5",
".git/objects/23/296b455c7cfa15641525e4f16f36cdaf54c4f5": "59f2b896ea7df8d02ba46ab04b3d34d5",
".git/objects/27/5fc203e9bd93989f3438e52d214fe9adbc7bb1": "78ba0d769ae76c766420414f11bdd87e",
".git/objects/27/c15c1a5a9c765f27fcf8f965973e0d5313491b": "8831c2bb092ce08869feb8fd29c74074",
".git/objects/2b/546a3f989c0e69b6d602513bcca69632ca07c6": "ec25509d4f9206c885606beaf8b75869",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/2e/41c7a19f250c1ce0c863726c8caa1d18b02c71": "b55838f605826e9e12dd2646551be811",
".git/objects/30/dca161f7d93bb4d403c29535b3aed6c272867e": "30d6551e0335b52c5a06a661c8cdc6e2",
".git/objects/38/2b7f27352a5da9fc7e61e05ee72fa6884d8787": "760d321a4e0b5d23a99022e7e0a55751",
".git/objects/39/4ab0e276eaef95f3cffd99398c7091c56e4b05": "e7bcfac7dcb6f89d5d14a1d95adfe104",
".git/objects/3a/7795ce82e55d8f9c99e7beaa0c85141f8d2835": "8a5558c663d87709cb2353c1b35642f0",
".git/objects/3d/699d86c8203689fe0304f586ad26f0a70205c0": "cb4ce82f9c7a800f014d5f8c54aae966",
".git/objects/41/f1865cfd5106fd1920f394fec5933e7c931c16": "7fd101e9158fbe9223e9ebea85d81398",
".git/objects/42/4bbefe9c0b4fcf15a364537740065655580b2d": "63db9143beed35e64b5d244d9ef91ff6",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/4b/f6cce126bb97dabc8293d4de14beafaa1242dd": "80704d1b0de6094e05de795cacdaa167",
".git/objects/4c/fb4954b0d397f0eb7ecd5ce8d566ba12a79d64": "9cc66e069eeeca17e38ac781c04700ea",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/50/4d4dc4c82c20b720188a34a816a7bc3dabf257": "93756332906f06d522776a0fdf2575ca",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/53/e334ca5c5b077814ff0d4e15c71ceca6feba95": "d4e0a83277a26d93faeb9a759de9a6a8",
".git/objects/55/fedfda3f03a09b9c24ee76dfec256cbd3e67e2": "3ec977a4f1bbba3a3ee8c1070ec36a3f",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/60/601bc9fb55199f566623ec7a034a88c082ca1e": "f725e3a708fc3ce8432dcfff73c25300",
".git/objects/67/d47170fe590ba541b244c724dadb5987e3aedc": "e4257f720c5d5cbeee4a4e7bb7902b09",
".git/objects/7d/7ce17a068d925ea8cd5d308a16f9c1e9fe2c6f": "29ef6e877871c63c812890fe1a78d0c5",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
".git/objects/8f/466851df1cced28e8c1671a3ff5b8cb261a375": "cc290ae23ef79187c8808a71270711a2",
".git/objects/90/74e35358314d9c8c95764a7a9e0c904cb11c41": "157da18b05e23bc84ac2eb472c911473",
".git/objects/91/cbb32ae101fc1729c20b61f8800f85fc83fe94": "339725c5db99e6bcfd655d0ba9192e82",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/95/936229f6b36d674585e89fe0315df94c0d9cd7": "46a058dd5f9d6ebb58907618ea77edd2",
".git/objects/95/dd0c2329db144716482fbcb9f279b44c5b259c": "713f5cbacae8a60e425e1ea5e3e6f4f2",
".git/objects/96/d52a0858e79b537b24056804035c215f0c23df": "ff41b72a77b643ec16b192c798c61647",
".git/objects/a6/a47c2f6242745b256f9855f06d4c809a275265": "2c83424eb6614d7e56fc5d7a241bb10b",
".git/objects/ac/1d505e1fdc27fa36a189999b3351e18551893e": "2eac57e927d8597bef4fd9b7e040e466",
".git/objects/af/4ff9474b580eae8b290f12721dcdd739840d76": "15b52ac7bf53fa13832c65ce8a210afc",
".git/objects/b0/8d003cdf41097296f23218f638d5e6865eee3b": "028dd99a3a9d49f1d8d15d7c491339e5",
".git/objects/b2/00f26eb2cdde120787cb0bb1fa5350be6187a0": "933344e1c66aac83c3d426c87582bdb0",
".git/objects/b3/6205b1825745c8b2bddab147bcca7ab9e07c2d": "e73eb82abf602279691ffd9c2dbad1e5",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/c2/41c94ef3a80723d4aa92473951303fb495cd10": "47abe6667908501f97f825494ecf47cb",
".git/objects/d0/2c18fe8a5f2529e50889d625de81303ee34d25": "4324f49a2bc3e89db05ea77bb1424387",
".git/objects/d5/042d8d045c984ca5ef29d4b26a8395e78a94f5": "760e9f22fdb8ce8258e8b23b8930b9c6",
".git/objects/d5/dafdbbda58767d00f07702b628598f23e70ef4": "062ff158ff22b55fc38e49980addefd9",
".git/objects/d6/0112241ae6461cf408551a08ff250f17070a8e": "c9a6f946fba4a4bc988869de7212cd62",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/ea/494de7ebcd1c4f39629938b514b79c7b289346": "3fa10d79b67fbb39be6cb543c2e0e02e",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/5d0b355641fbc85f61c51dc301faee3156f29e": "f2be9a1d4e998a446c48832d922ab6b3",
".git/objects/f3/620df214b7cad2bca624440f4007d2b4a03e4b": "d9ee08d93e1cdc3ae7701018fd5910e3",
".git/objects/f8/f4c6340131b143bdd90ce4a67e623774f5ace1": "0fc9319b2546f1f18665ddd4e3fa0087",
".git/objects/fa/81d0cc454e3cb76ad2b16e97d09d6e390c48ba": "9190dbcf22d3f0b88a877e19fbdd02ae",
".git/objects/fb/d02d8c7456e107bd4e951f59bff0f4e8d0dc0b": "94bc505a505080dd9996f7f27d9bfbf5",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/objects/fe/514b8292cd7c1b9dc87e1a82e5afee781d4fa1": "403703938ee52536ccb2dbe0ba644681",
".git/refs/heads/main": "8f0e01cb0a9cde9c91af5e293da1a738",
".git/refs/remotes/origin/main": "8f0e01cb0a9cde9c91af5e293da1a738",
"assets/AssetManifest.bin": "abdb54c6b7d8cd2dec1aa9deaa6f95aa",
"assets/AssetManifest.bin.json": "b62c1741001a00072bafc508f01dacee",
"assets/AssetManifest.json": "94f6738669472ebb869f51a9fd0f6fda",
"assets/assets/fonts/LeagueSpartan-Bold.otf": "a6509aa3161205ebe01c0f7e2f209b44",
"assets/FontManifest.json": "a002f97e63f607639c66a12e7a50a508",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/NOTICES": "856402d189decaa1e4f2a8fa62cd685a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b0567c2dfcc8e0168c0d5091077cb73b",
"/": "b0567c2dfcc8e0168c0d5091077cb73b",
"main.dart.js": "1f8e94697ce42491209a10f0272548a3",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
