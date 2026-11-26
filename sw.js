// Otomatik üretildi — El Rehab PWA Service Worker
const CACHE_PREFIX = "el-rehab-pwa-";
const CACHE_NAME = CACHE_PREFIX + "475cceb903d9";
const CORE_ASSETS = ["./","./apple-touch-icon.png","./assets/content-DcD-auy1.js","./assets/index-J5Hs3FHt.css","./assets/index-g4ELxA9w.js","./assets/notes-C6XfCdTF.js","./assets/plus-jakarta-sans-latin-ext-wght-italic-DJWiFoht.woff2","./assets/plus-jakarta-sans-latin-ext-wght-normal-DmpS2jIq.woff2","./assets/plus-jakarta-sans-latin-wght-italic-DnD1KgkH.woff2","./assets/plus-jakarta-sans-latin-wght-normal-eXO_dkmS.woff2","./assets/vendor-hIViRDeH.js","./icon-192.png","./icon-512.png","./icon.svg","./index.html","./manifest.webmanifest"];
const ATLAS_ASSETS = ["./atlas/carpals.jpg","./atlas/extensor-zones-clean.jpg","./atlas/extensor-zones.jpg","./atlas/flexor-zones-clean.jpg","./atlas/flexor-zones.jpg","./atlas/gray/gray213-clean.jpg","./atlas/gray/gray213.jpg","./atlas/gray/gray214.jpg","./atlas/gray/gray219-clean.jpg","./atlas/gray/gray219.jpg","./atlas/gray/gray220.jpg","./atlas/gray/gray329-dirsek-medial.png","./atlas/gray/gray330-dirsek-lateral.png","./atlas/gray/gray334-clean.jpg","./atlas/gray/gray334.jpg","./atlas/gray/gray335-clean.jpg","./atlas/gray/gray335.jpg","./atlas/gray/gray336-clean.jpg","./atlas/gray/gray336.jpg","./atlas/gray/gray337-clean.jpg","./atlas/gray/gray337.jpg","./atlas/gray/gray338-clean.jpg","./atlas/gray/gray338.jpg","./atlas/gray/gray385-skalen-kaslar.png","./atlas/gray/gray413-clean.jpg","./atlas/gray/gray413.jpg","./atlas/gray/gray414.jpg","./atlas/gray/gray416-clean.jpg","./atlas/gray/gray416.jpg","./atlas/gray/gray417-clean.jpg","./atlas/gray/gray417.jpg","./atlas/gray/gray418-clean.jpg","./atlas/gray/gray418.jpg","./atlas/gray/gray419-clean.jpg","./atlas/gray/gray419.jpg","./atlas/gray/gray420-clean.jpg","./atlas/gray/gray420.jpg","./atlas/gray/gray421-clean.jpg","./atlas/gray/gray421.jpg","./atlas/gray/gray422-clean.jpg","./atlas/gray/gray422.jpg","./atlas/gray/gray423-clean.jpg","./atlas/gray/gray423.jpg","./atlas/gray/gray424-clean.jpg","./atlas/gray/gray424.jpg","./atlas/gray/gray425-clean.jpg","./atlas/gray/gray425.jpg","./atlas/gray/gray426-clean.jpg","./atlas/gray/gray426.jpg","./atlas/gray/gray427-clean.jpg","./atlas/gray/gray427.jpg","./atlas/gray/gray428.jpg","./atlas/gray/gray429.jpg","./atlas/gray/gray525.jpg","./atlas/gray/gray526-clean.jpg","./atlas/gray/gray526.jpg","./atlas/gray/gray527.jpg","./atlas/gray/gray528-clean.jpg","./atlas/gray/gray528.jpg","./atlas/gray/gray529-clean.jpg","./atlas/gray/gray529.jpg","./atlas/gray/gray807-clean.jpg","./atlas/gray/gray807.jpg","./atlas/gray/gray811-clean.jpg","./atlas/gray/gray811.jpg","./atlas/gray/gray812-clean.jpg","./atlas/gray/gray812.jpg","./atlas/gray/gray813-clean.jpg","./atlas/gray/gray813.jpg","./atlas/gray/gray814-clean.jpg","./atlas/gray/gray814.jpg","./atlas/gray/gray815-clean.jpg","./atlas/gray/gray815.jpg","./atlas/gray/gray817-clean.jpg","./atlas/gray/gray817.jpg","./atlas/gray/gray818-clean.jpg","./atlas/gray/gray818.jpg","./atlas/klinik-tinel-phalen.jpg","./atlas/klinik/degerlendirme-allen.jpg","./atlas/klinik/degerlendirme-anatomik-enfiye.jpg","./atlas/klinik/degerlendirme-dinamometre.jpg","./atlas/klinik/degerlendirme-eichhoff.jpg","./atlas/klinik/degerlendirme-finkelstein.jpg","./atlas/klinik/degerlendirme-froment.jpg","./atlas/klinik/degerlendirme-goniometri-ulnar.jpg","./atlas/klinik/degerlendirme-goniometri.jpg","./atlas/klinik/degerlendirme-monoflaman.jpg","./atlas/klinik/degerlendirme-watson.jpg","./atlas/klinik/klinik-ayna-terapisi.jpg","./atlas/klinik/odem-sekiz-sekli.jpg","./atlas/klinik/odem-yanik-derinlik.jpg","./atlas/klinik/odem-yanik-eli.jpg","./atlas/klinik/ortez-cockup-kts.jpg","./atlas/klinik/ortez-istirahat-who.jpg","./atlas/klinik/ortez-mallet-dip.jpg","./atlas/klinik/ortez-mcp-blok.jpg","./atlas/klinik/ortez-parmak-pip.jpg","./atlas/klinik/ortez-rme-kalem-testi.jpg","./atlas/klinik/ortez-rme.jpg","./atlas/klinik/ortez-rmf.jpg","./atlas/klinik/ortez-termoplastik-kalip.jpg","./atlas/klinik/ortez-thumb-spica.jpg","./atlas/klinik/patoloji-boutonniere.jpg","./atlas/klinik/patoloji-dupuytren.jpg","./atlas/klinik/patoloji-ganglion.jpg","./atlas/klinik/patoloji-heberden-bouchard.jpg","./atlas/klinik/patoloji-mallet.jpg","./atlas/klinik/patoloji-paronisi.jpg","./atlas/klinik/patoloji-sindaktili.jpg","./atlas/klinik/patoloji-swan-neck.jpg","./atlas/klinik/patoloji-tenar-atrofi.jpg","./atlas/klinik/patoloji-tetik-parmak.jpg","./atlas/klinik/radyoloji-bennett.jpg","./atlas/klinik/radyoloji-boxer.jpg","./atlas/klinik/radyoloji-cmc1-rhizarthrose.jpg","./atlas/klinik/radyoloji-colles.jpg","./atlas/klinik/radyoloji-enkondrom.jpg","./atlas/klinik/radyoloji-karpal-tunel-us.jpg","./atlas/klinik/radyoloji-pip-cikik.jpg","./atlas/klinik/radyoloji-rolando.jpg","./atlas/klinik/radyoloji-skafoid-kirigi.jpg","./atlas/klinik/rehab-karpal-mobilizasyon.jpg","./atlas/klinik/rehab-sinir-gliding.jpg","./atlas/klinik/rehab-tendon-bloklama.jpg","./atlas/klinik/rehab-tendon-gliding.jpg","./atlas/klinik/sinir-kesit-yapisi.jpg","./atlas/klinik/sinir-ulnar-pence.jpg","./atlas/klinik/skar-deri-kontrakturu.jpg","./atlas/pulley-cadaver.jpg","./atlas/pulley-schema.jpg","./atlas/radyoloji-distal-radius.jpg","./atlas/radyoloji-kirik-fiksasyon.jpg","./atlas/radyoloji-perilunat.jpg","./atlas/radyoloji-sl-disi.jpg","./atlas/radyoloji-sl-postop.jpg"];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(CORE_ASSETS)).then(() => self.skipWaiting()),
  );
});

async function cacheAtlas(notify) {
  const cache = await caches.open(CACHE_NAME);
  let cached = 0;
  const total = ATLAS_ASSETS.length;
  const sendProgress = async (done) => {
    if (!notify) return;
    const clients = await self.clients.matchAll({ type: "window" });
    for (const c of clients) c.postMessage({ type: "ATLAS_PROGRESS", cached, total, done });
  };
  const missing = [];
  for (const url of ATLAS_ASSETS) {
    const hit = await cache.match(url);
    if (hit) cached++;
    else missing.push(url);
  }
  await sendProgress(missing.length === 0);
  const CONCURRENCY = 4;
  for (let i = 0; i < missing.length; i += CONCURRENCY) {
    const batch = missing.slice(i, i + CONCURRENCY);
    await Promise.allSettled(batch.map(async (url) => {
      try {
        const res = await fetch(url);
        if (res.ok) { await cache.put(url, res); cached++; }
      } catch { /* çevrimdışı */ }
    }));
    await sendProgress(i + CONCURRENCY >= missing.length);
  }
  await sendProgress(true);
}

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k.startsWith(CACHE_PREFIX) && k !== CACHE_NAME).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
      .then(() => { void cacheAtlas(false); }),
  );
});

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "CACHE_ATLAS") {
    event.waitUntil(cacheAtlas(true));
  }
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  if (url.pathname.includes("/api/")) return;

  if (req.mode === "navigate") {
    event.respondWith(
      fetch(req)
        .then((res) => {
          if (res.ok) {
            const copy = res.clone();
            caches.open(CACHE_NAME).then((c) => c.put("./index.html", copy));
          }
          return res;
        })
        .catch(() => caches.match("./index.html").then((r) => r || caches.match("./"))),
    );
    return;
  }

  event.respondWith(
    caches.match(req, { ignoreSearch: true }).then((cached) => {
      if (cached) return cached;
      return fetch(req).then((res) => {
        if (res.ok) {
          const copy = res.clone();
          caches.open(CACHE_NAME).then((c) => c.put(req, copy));
        }
        return res;
      });
    }),
  );
});
