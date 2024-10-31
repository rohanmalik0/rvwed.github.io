'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "70babf50708eba5ee36e8fbe35183227",
".git/config": "1b0e787a95732142833eaa0eb415c63b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "01cead683f4dee32a1ac4a848cb2f52a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "dc010671b2052ef6eab4b3996ac5ef1d",
".git/logs/refs/heads/main": "add931376a98f1cbfc362755d9804a3c",
".git/logs/refs/remotes/origin/main": "550faed7dd453acd7d08be927bfdad8f",
".git/objects/06/3d9078b4ffa56e78d5c873521167913f5f2d31": "459a720981ce0b145c44d59353405863",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/08/552e151603c42d14873d81af24b5133b544c96": "1f00491f30ba006156fb96da69c0e55f",
".git/objects/10/0269c0d5f759898b6cfb984b5071334901a455": "46f654fad605f4dccaefdd67b117400c",
".git/objects/10/7fad583f082fcb8dba33fc6d4bf41e550692fc": "50a202db099e4732b81508d307a6bbcc",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/1c/f28f709454003db998a2d9a2cd6dd352d1bc69": "633c0c05769b5d5f71d514f33bb1ce25",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/21/dd8d3f90caea9c923f4f0de1be187d0e30d4db": "361bb7bd5af68019b4e17871461af623",
".git/objects/22/da287937928e61e344379f8a393d35f047f29d": "fcd5ae6208f037f8d9aecbc38097183d",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/32/a7d23924e970cb1a372f5b7ca333a6bd7a4de1": "5369aa7e7fa51524c89d5a6149431563",
".git/objects/35/e29b719ff25029267a7c57c38a6609cefa530f": "af4840e8013e4f930588692bd0301f43",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4c/0b12d4c77868ea968a4d0ba3a11327c9221675": "47d91be0689b20abb710e0adba12987b",
".git/objects/52/bf8e7cc61df2fef5a0c4e9f479a0adb436ece8": "e093acd6f6053aae83fbb6ecb10bc30b",
".git/objects/59/0dd38c68dde4caab54a59a2e7fe30060bbe571": "e02b6b88849e5170cd72c05cd77e9945",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/5c/980a29a9c0007948a5aa3579dd3a3691ea102f": "d30926c8793dad5a713bde467c467f70",
".git/objects/65/677cf4f254771aa9078a8077fd291102cda184": "3b13c50df3b1891403ee1f68ab4f50c1",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/6f/eaeffed4575bd662a48e2d0089be4088d0e0f1": "f4f1761bf70fbcee49eecbc3265e880d",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/73/4b5bee2363b75dc07224acca115e313f055e24": "fa6513161ef5fd90460ea01885d586f0",
".git/objects/76/f3d6c5f6920d37fa20bf8de386d9a6f308cca7": "b60cbbcdbd99b86762693b22bc70bcc4",
".git/objects/7f/bb1e4a998f6635277ac96ae3fe94f7264343c6": "ad5e2f1a3190314f8f3a31ae0936724f",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/12dcf1a64136970e38b25502fc88b24dd5c9ff": "5e51cd82e12448f1a17fe484f7312ccf",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/95/45a89d8968ec05cc6eeca3d4cd298af022f76d": "90c23c3ebf2475333baa899e49e7f4e4",
".git/objects/98/babb4a5c907b0dcb78c6c08014060f40172e1e": "1ad4393ffa182ea6883761fbe200bc33",
".git/objects/ac/f073e9ef72576af10afacde544ee282a01f772": "8a39b4a918ed0cb4c9a50310d425c68a",
".git/objects/ad/2a48a5b105c5341ad142cc1a9d303e0ed49314": "605302813e0e7440ded6127651f450de",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/f315ae4745037eefa6ee6112bad80d7441518c": "7a2b8db1d8e9fead12594413502fff39",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/c9/098326f2d6a4f0c2ba149b5523cd27433ae43e": "acc188a4c107a1caa1229abe85d2d297",
".git/objects/d3/a736bd420ca921c2f754417dae212e52a020f3": "8dafa3d8a60aa331fd819e450f833656",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/872d595ee522fb762dcd389ad99532a9d9d87d": "06f817f7b66e3f5a5b1f56e1111637d0",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dd/f21e62182ab3b81577549da23404d5e0206577": "f31eb98d842f13d9820d49855b28c199",
".git/objects/e2/0bfb3234d4c48a6194475a6a01e670e0d1fc32": "0ffffce523984a0a8e63402ae0bcb9c9",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/e8/902a319ef8e0fd65dd7f62656de23e9cc65115": "8a3aac8865ef7f33892c9a506050e22a",
".git/objects/eb/637c7f33ab1698df1b1186854346b7947e90be": "0ba08fcec805888f17275f49090680a7",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/01c356b4c7830a89f72e972331fcb52eb32615": "6badaafb4665aca35afee62efef1a52c",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f7/8b2dc7a13e40eadc0097b01b50f207a093df9c": "c366a610bae6f30faebff17283ec94b8",
".git/objects/fa/aae2166c007790a633bf39861e04c823a16de7": "3e67254ecbc31056780e0a14a16e595f",
".git/objects/fc/2b1a82b4299e97e1c6e831da17603b8cef0a4c": "3973742a12e217beba85d38c79d881d7",
".git/refs/heads/main": "a462363d558dd3368398c55e279f8c4f",
".git/refs/remotes/origin/main": "a462363d558dd3368398c55e279f8c4f",
"assets/AssetManifest.bin": "b15618cf3a700ff7000f66acaf45de03",
"assets/AssetManifest.bin.json": "9d0cefeda48f1ccc5d3ab82efe353945",
"assets/AssetManifest.json": "8231158d729d05c1e16d4169840c127c",
"assets/assets/images/0.jpeg": "1241f709ee362e3ed66a843db5985c70",
"assets/assets/images/1.jpeg": "403ebf03046b8cb4421279c9dd2648d3",
"assets/assets/images/2.jpeg": "f491e9fde83e36e6f485b9376aab9c09",
"assets/assets/images/3.jpeg": "8bab52cc4ee0bece7df90fa182bf7499",
"assets/assets/images/back.jpg": "ef2e540e41b4415a7ae018f0b4316643",
"assets/assets/images/backw.jpg": "5a95d27f3c8ffcf409644d1e5c049e5c",
"assets/assets/images/backwhite.jpg": "1eca48ed8823139a76754641f723b050",
"assets/assets/images/banner.jpg": "ff30e9190d877dff9724059197419dc0",
"assets/assets/images/haldiback.jpg": "d730b35db74842b92a7e011432ef1c33",
"assets/assets/images/haldiback2.jpg": "9d0466d3120ab93d3d1b28dc3aa9f83e",
"assets/assets/images/haldiback3.jpg": "a36c8dacb09d9fe0575554f35b7960f5",
"assets/assets/images/mehendi.jpg": "f7015b055732e19dffd765a52fe45eda",
"assets/assets/images/r&v.png": "967518f8689b816885d3c7d57399bc91",
"assets/assets/images/Riya%2520&%2520Viren-mobile.png": "323aff036ad8068dbebbf9ebc59fc1a7",
"assets/assets/images/rv2.png": "ebda7278c84b325c7ca8afcda5bf2d1e",
"assets/assets/images/rvs.png": "459a9d550eb5f6c0fe4845dc77eb3971",
"assets/assets/images/rvtt.png": "6b6b9f3df3cf46e49edefd0ed8b61da9",
"assets/assets/images/turmeric.jpg": "71e7f48a83fbd692535e716592fe9af6",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "793f22377dfbe5fed8247201a2b6d519",
"assets/NOTICES": "80006690903fa937c8034c7949546251",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "a4c676107f8bc45edfc9f49109534816",
"/": "a4c676107f8bc45edfc9f49109534816",
"main.dart.js": "e6f049ef2ac363057244cfecc020371e",
"manifest.json": "4272a730d118366c4596c7abf74410c6",
"version.json": "b7d3ab6c0cc9bc5e3161ed969b75130f"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
