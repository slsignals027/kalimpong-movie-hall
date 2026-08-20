"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  CalendarDays,
  History,
  Landmark,
  MapPin,
  Mountain,
  Route,
  ShieldAlert,
  X,
} from "lucide-react";

type Circuit = "entry" | "trunk" | "lachen" | "lachung" | "east";

type Place = {
  id: string;
  name: string;
  x: number;
  y: number;
  kind: "start" | "branch" | "main" | "north" | "destination";
  circuit: Circuit;
  image?: string;
  category: string;
  altitude: string;
  season: string;
  district: string;
  permit: string;
  history: string;
  geography: string;
  reach: string;
  travel: string;
  caution?: string;
};

const images = {
  hero: "https://res.cloudinary.com/bqt1b6pu/image/upload/f_auto,q_auto/v1787147821/ChatGPT_Image_Aug_19_2026_07_26_40_PM.png",
  gurudongmar: "https://res.cloudinary.com/bqt1b6pu/image/upload/f_auto,q_auto,w_1400/v1787122569/gurudongmar-lake.jpg",
  yumthang: "https://res.cloudinary.com/bqt1b6pu/image/upload/f_auto,q_auto,w_1400/v1787122570/yumthang-valley.jpg",
  lachung: "https://res.cloudinary.com/bqt1b6pu/image/upload/f_auto,q_auto/v1787122570/lachung.jpg",
  lachen: "https://res.cloudinary.com/bqt1b6pu/image/upload/f_auto,q_auto/v1787122569/lachen.jpg",
  thangu: "https://res.cloudinary.com/bqt1b6pu/image/upload/f_auto,q_auto/v1787122568/thangu-valley.jpg",
  chopta: "https://res.cloudinary.com/bqt1b6pu/image/upload/f_auto,q_auto/v1787122569/chopta-valley.jpg",
  dzongu: "https://res.cloudinary.com/bqt1b6pu/image/upload/f_auto,q_auto/v1787122569/dzongu.jpg",
  waterfall: "https://res.cloudinary.com/bqt1b6pu/image/upload/f_auto,q_auto/v1787122569/seven-sisters.jpg",
};

const places: Place[] = [
  {
    id: "siliguri",
    name: "Siliguri",
    x: 95,
    y: 270,
    kind: "start",
    circuit: "entry",
    category: "Gateway to Sikkim",
    altitude: "≈ 120 m",
    season: "October–April",
    district: "Darjeeling district, West Bengal",
    permit: "No special permit",
    history: "Siliguri grew from a small settlement into the principal transport and commercial gateway linking the Indian plains with Sikkim, Bhutan, Nepal and the eastern Himalayas.",
    geography: "The city lies in the Terai foothills between the Mahananda River and the lower Himalayan ranges. Its low elevation makes it the natural starting point for gradual ascent into Sikkim.",
    reach: "Bagdogra Airport and New Jalpaiguri railway station are the main arrival points. Taxis and shared vehicles connect both hubs with Gangtok, Kalimpong and Darjeeling.",
    travel: "To Gangtok: approximately 115 km · 4–5 hours",
  },
  {
    id: "darjeeling",
    name: "Darjeeling",
    x: 270,
    y: 115,
    kind: "branch",
    circuit: "entry",
    image: images.hero,
    category: "Historic Himalayan hill town",
    altitude: "≈ 2,045 m",
    season: "March–May · October–December",
    district: "Darjeeling district, West Bengal",
    permit: "No special permit",
    history: "Darjeeling developed as a nineteenth-century hill station and tea-growing centre. Its Himalayan Railway and distinctive blend of Nepali, Tibetan, Lepcha and colonial-era heritage shaped its identity.",
    geography: "Built along steep ridges of the Lesser Himalaya, Darjeeling overlooks tea estates and, in clear weather, the Khangchendzonga massif.",
    reach: "Drive uphill from Siliguri or reach Darjeeling by the heritage Himalayan Railway. The onward road to Gangtok passes through the Teesta valley.",
    travel: "Siliguri–Darjeeling: approximately 63 km · 2.5–3 hours",
  },
  {
    id: "kalimpong",
    name: "Kalimpong",
    x: 270,
    y: 425,
    kind: "branch",
    circuit: "entry",
    image: images.hero,
    category: "Old trans-Himalayan crossroads",
    altitude: "≈ 1,250 m",
    season: "March–May · October–December",
    district: "Kalimpong district, West Bengal",
    permit: "No special permit",
    history: "Kalimpong was an important meeting point on older trade routes linking the plains with Sikkim, Bhutan and Tibet. Monasteries, mission institutions and trading communities remain central to its cultural landscape.",
    geography: "The town occupies a long ridge above the Teesta River, with views towards the eastern Himalayas and comparatively mild weather.",
    reach: "Kalimpong is reached by road from Siliguri. From here, the route descends to the Teesta and continues towards Rangpo and Gangtok.",
    travel: "Siliguri–Kalimpong: approximately 67 km · 2.5–3 hours",
  },
  {
    id: "gangtok",
    name: "Gangtok",
    x: 465,
    y: 270,
    kind: "main",
    circuit: "trunk",
    image: images.hero,
    category: "Capital of Sikkim",
    altitude: "≈ 1,650 m",
    season: "March–May · October–December",
    district: "Gangtok district, Sikkim",
    permit: "Base permits arranged here",
    history: "Gangtok became Sikkim's capital in the nineteenth century and later developed into the state's administrative and cultural centre. Buddhist institutions and modern civic life coexist across its steep ridges.",
    geography: "The city stretches along a mountain ridge above the Ranikhola and Teesta valleys, with panoramic views of the Khangchendzonga range in clear weather.",
    reach: "Reach Gangtok by road from Bagdogra, New Jalpaiguri, Kalimpong or Darjeeling. Authorised operators normally arrange North Sikkim and protected-area permits here.",
    travel: "Gangtok–Mangan: approximately 65–70 km · 2.5–3 hours",
  },
  {
    id: "mangan",
    name: "Mangan",
    x: 630,
    y: 270,
    kind: "main",
    circuit: "trunk",
    image: images.dzongu,
    category: "North Sikkim district headquarters",
    altitude: "≈ 950 m",
    season: "March–May · October–December",
    district: "Mangan district, Sikkim",
    permit: "Permit required beyond notified points",
    history: "Mangan is the administrative centre of northern Sikkim and a gateway to Lepcha cultural landscapes including Dzongu. It has long connected lower Teesta settlements with the high valleys.",
    geography: "The town sits above the Teesta valley amid forested slopes, cardamom-growing areas and views towards high Himalayan peaks.",
    reach: "Follow the North Sikkim Highway from Gangtok through Dikchu and the Teesta valley. Most authorised North Sikkim itineraries stop here en route to Chungthang.",
    travel: "Gangtok–Mangan: approximately 65–70 km · 2.5–3 hours",
  },
  {
    id: "chungthang",
    name: "Chungthang",
    x: 805,
    y: 270,
    kind: "main",
    circuit: "trunk",
    image: images.waterfall,
    category: "Confluence and mountain junction",
    altitude: "≈ 1,790 m",
    season: "March–June · October–December",
    district: "Mangan district, Sikkim",
    permit: "Protected-area permit",
    history: "Chungthang is associated with local Buddhist traditions and stories connected with Guru Padmasambhava. It is also the historic junction where the Lachen and Lachung valleys meet.",
    geography: "The settlement lies near the confluence of the Lachen Chu and Lachung Chu, whose waters form the upper Teesta. Roads divide here towards Lachen and Lachung.",
    reach: "Continue north from Mangan along the Teesta valley. Road access can be affected by landslides, rain and seasonal repair work.",
    travel: "Mangan–Chungthang: approximately 28 km · 1.5 hours",
  },
  {
    id: "lachen",
    name: "Lachen",
    x: 970,
    y: 135,
    kind: "north",
    circuit: "lachen",
    image: images.lachen,
    category: "Gateway to Gurudongmar",
    altitude: "≈ 2,750 m",
    season: "April–June · October–November",
    district: "Mangan district, Sikkim",
    permit: "Protected-area permit",
    history: "Lachen is a traditional Bhutia settlement governed historically through the local Dzumsa institution. Lachen Monastery and the village's pastoral heritage remain important cultural anchors.",
    geography: "The village occupies a broadening valley beside the Lachen Chu, surrounded by steep forested slopes that rise towards the cold desert plateau.",
    reach: "At Chungthang take the left-hand northern road to Lachen. Visitors normally stay overnight before an early departure for Thangu and Gurudongmar.",
    travel: "Chungthang–Lachen: approximately 27 km · 1.5 hours",
  },
  {
    id: "thangu",
    name: "Thangu",
    x: 1125,
    y: 92,
    kind: "north",
    circuit: "lachen",
    image: images.thangu,
    category: "High-altitude settlement",
    altitude: "≈ 3,960 m",
    season: "May–June · October",
    district: "Mangan district, Sikkim",
    permit: "Protected-area permit",
    history: "Thangu developed as a seasonal highland settlement along traditional grazing and movement routes of northern Sikkim.",
    geography: "Here the wooded Lachen valley opens into an alpine and cold-desert landscape of grassland, streams and snowbound ridges.",
    reach: "Travel north from Lachen with an authorised vehicle and permit. The rapid altitude gain makes a slow pace and acclimatisation important.",
    travel: "Lachen–Thangu: approximately 30 km · 1.5–2 hours",
    caution: "Very high altitude. Stop and descend if symptoms of acute mountain sickness develop.",
  },
  {
    id: "chopta",
    name: "Chopta",
    x: 1310,
    y: 92,
    kind: "destination",
    circuit: "lachen",
    image: images.chopta,
    category: "Alpine valley",
    altitude: "≈ 4,000 m",
    season: "April–June · October",
    district: "Mangan district, Sikkim",
    permit: "Protected-area permit",
    history: "Chopta Valley forms part of the high pastoral landscape traditionally connected with settlements of the Lachen region.",
    geography: "The valley is characterised by alpine meadows, mountain streams, exposed slopes and seasonal snow close to the Tibetan Plateau.",
    reach: "Reached from Thangu on the authorised northern circuit. Access depends on permits, weather and current road conditions.",
    travel: "Thangu–Chopta: approximately 10 km · 30 minutes",
    caution: "Weather changes quickly and the area is at very high altitude.",
  },
  {
    id: "lachung",
    name: "Lachung",
    x: 970,
    y: 405,
    kind: "north",
    circuit: "lachung",
    image: images.lachung,
    category: "Riverside mountain village",
    altitude: "≈ 2,700 m",
    season: "March–June · October–December",
    district: "Mangan district, Sikkim",
    permit: "Protected-area permit",
    history: "Lachung retains the Dzumsa system of local governance and a strong Bhutia cultural identity. Its monastery and traditional houses reflect the village's Himalayan Buddhist heritage.",
    geography: "The settlement follows the Lachung Chu through a steep valley lined with waterfalls, forested slopes and high snow peaks.",
    reach: "At Chungthang take the right-hand valley road. Lachung is the principal overnight base for Yumthang and Zero Point excursions.",
    travel: "Chungthang–Lachung: approximately 22 km · 1.25 hours",
  },
  {
    id: "yumthang",
    name: "Yumthang",
    x: 1115,
    y: 450,
    kind: "north",
    circuit: "lachung",
    image: images.yumthang,
    category: "Valley of Flowers",
    altitude: "≈ 3,564 m",
    season: "April–June · October–November",
    district: "Mangan district, Sikkim",
    permit: "Protected-area permit",
    history: "Yumthang has long been part of the seasonal grazing landscape used by communities of the Lachung valley and is now one of Sikkim's best-known nature destinations.",
    geography: "A broad alpine valley along the Lachung Chu, surrounded by rhododendron forests, meadows, hot springs and snow-covered ridges.",
    reach: "Drive north from Lachung early in the morning. Visits are normally organised through registered tour operators as part of a permitted itinerary.",
    travel: "Lachung–Yumthang: approximately 25 km · 1–1.5 hours",
    caution: "The flowering season varies with snowfall and temperature.",
  },
  {
    id: "zero-point",
    name: "Zero Point",
    x: 1260,
    y: 450,
    kind: "north",
    circuit: "lachung",
    image: images.yumthang,
    category: "End of the civilian road",
    altitude: "≈ 4,660 m",
    season: "April–June · October",
    district: "Mangan district, Sikkim",
    permit: "Additional local authorisation may apply",
    history: "Known locally as Yumesamdong, the area marks the high-altitude end of the commonly permitted tourist road beyond Yumthang.",
    geography: "A stark treeless landscape close to the Tibetan Plateau, with snowfields, rocky slopes and a short growing season.",
    reach: "Continue beyond Yumthang only with an authorised vehicle and the necessary permission. Access is frequently affected by snow and weather.",
    travel: "Yumthang–Zero Point: approximately 23 km · 1 hour",
    caution: "Extreme altitude and limited facilities. The elderly, infants and travellers with heart or respiratory conditions should seek medical advice before visiting.",
  },
  {
    id: "gurudongmar",
    name: "Gurudongmar",
    x: 1430,
    y: 450,
    kind: "destination",
    circuit: "lachen",
    image: images.gurudongmar,
    category: "Sacred glacial lake",
    altitude: "≈ 5,183 m",
    season: "May–June · October–November",
    district: "Mangan district, Sikkim",
    permit: "Protected-area permit",
    history: "Gurudongmar is revered in local Buddhist and Sikh traditions. The lake's sacred associations and remote frontier setting give it exceptional cultural importance.",
    geography: "One of India's highest accessible lakes, it lies in a windswept cold-desert basin fed by snow and glaciers near the Tibetan Plateau.",
    reach: "Depart Lachen before dawn and travel through Thangu with an authorised tour and valid permit. The usual tourist approach returns by the same Lachen route.",
    travel: "Thangu–Gurudongmar circuit: several hours depending on road conditions",
    caution: "Extreme altitude. Acclimatisation, warm clothing and immediate descent if unwell are essential.",
  },
  {
    id: "tsomgo",
    name: "Tsomgo Lake",
    x: 620,
    y: 545,
    kind: "destination",
    circuit: "east",
    image: images.hero,
    category: "Sacred glacial lake",
    altitude: "≈ 3,753 m",
    season: "March–May · October–December",
    district: "Gangtok district, Sikkim",
    permit: "Protected-area permit",
    history: "Tsomgo, also called Changu Lake, is sacred to Sikkimese communities. Traditionally, Buddhist lamas interpreted changes in its colour as spiritual signs.",
    geography: "The oval glacial lake occupies a steep alpine basin on the old route towards Nathu La and freezes during the coldest months.",
    reach: "Travel east from Gangtok on the Jawaharlal Nehru Road with a permit arranged by an authorised operator.",
    travel: "Gangtok–Tsomgo: approximately 38 km · 1.5–2 hours",
    caution: "Snow and ice can temporarily close the road.",
  },
  {
    id: "nathu-la",
    name: "Nathu La",
    x: 830,
    y: 610,
    kind: "destination",
    circuit: "east",
    image: images.hero,
    category: "Historic Himalayan pass",
    altitude: "≈ 4,310 m",
    season: "May–June · October–November",
    district: "Gangtok district, Sikkim",
    permit: "Special protected-area permit",
    history: "Nathu La was a major passage on the historic trade route between Sikkim and Tibet. The pass remains strategically important and has hosted limited border trade in the modern period.",
    geography: "The pass crosses the eastern Himalayan watershed near the Chumbi Valley, with exposed high-altitude terrain and severe winter conditions.",
    reach: "Continue beyond Tsomgo Lake with a special permit arranged in Gangtok. Access is limited by nationality, permit quotas, weather and security conditions.",
    travel: "Gangtok–Nathu La: approximately 56 km · 2.5–3 hours",
    caution: "Very high altitude and a sensitive border area. Follow all local restrictions and photography rules.",
  },
];

const routes = [
  { circuit: "entry" as Circuit, d: "M116 252C160 174 213 120 250 116", label: "63 km · 2h 30m", x: 178, y: 215 },
  { circuit: "entry" as Circuit, d: "M290 116C370 133 410 232 445 260", label: "98 km · 4h", x: 394, y: 220 },
  { circuit: "entry" as Circuit, d: "M116 288C165 369 220 420 250 424", label: "67 km · 2h 30m", x: 178, y: 390 },
  { circuit: "entry" as Circuit, d: "M290 424C365 400 415 309 445 280", label: "75 km · 3h", x: 390, y: 465 },
  { circuit: "trunk" as Circuit, d: "M485 270H610", label: "65 km · 2h 30m", x: 548, y: 360 },
  { circuit: "trunk" as Circuit, d: "M650 270H785", label: "28 km · 1h 30m", x: 715, y: 360 },
  { circuit: "lachen" as Circuit, d: "M825 252C875 212 920 145 950 136", label: "27 km · 1h 30m", x: 905, y: 235 },
  { circuit: "lachen" as Circuit, d: "M990 133C1035 102 1080 92 1105 92", label: "30 km · 1h 30m", x: 1065, y: 215 },
  { circuit: "lachen" as Circuit, d: "M1145 92H1290", label: "10 km · 30m", x: 1215, y: 178 },
  { circuit: "lachung" as Circuit, d: "M825 288C875 337 920 397 950 404", label: "22 km · 1h 15m", x: 880, y: 390 },
  { circuit: "lachung" as Circuit, d: "M990 408C1035 435 1080 448 1095 450", label: "25 km · 1h 15m", x: 1045, y: 545 },
  { circuit: "lachung" as Circuit, d: "M1135 450H1240", label: "23 km · 1h", x: 1188, y: 545 },
  { circuit: "lachung" as Circuit, d: "M1280 443C1324 392 1384 392 1412 443", label: "Zero Point–Gurudongmar Link", x: 1345, y: 482 },
  { circuit: "east" as Circuit, d: "M474 289C505 396 565 520 612 538", label: "38 km · 1h 30m", x: 536, y: 470 },
  { circuit: "east" as Circuit, d: "M638 555C692 583 770 608 810 610", label: "18 km · 45m", x: 705, y: 625 },
];

const highAltitudeLink = {
  circuit: "lachen" as Circuit,
  d: "M1325 108C1380 165 1415 300 1430 432",
  label: "Restricted High-Altitude Road",
  x: 1375,
  y: 325,
  restricted: true,
};

const circuitLabels: Record<Circuit, string> = {
  entry: "Entry routes",
  trunk: "Gangtok–Chungthang",
  lachen: "Lachen–Gurudongmar",
  lachung: "Lachung–Zero Point",
  east: "Changu–Nathu La",
};

function nodeColour(kind: Place["kind"]) {
  if (kind === "start") return "#d6a54a";
  if (kind === "destination") return "#9ccbd4";
  if (kind === "branch") return "#b7474d";
  return "#f4ebdd";
}

export default function TourismJourneyMap() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const selectedPlace = useMemo(
    () => places.find((place) => place.id === selectedId) ?? null,
    [selectedId],
  );
  const activeCircuit = selectedPlace?.circuit ?? null;

  useEffect(() => {
    if (!selectedPlace) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedId(null);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [selectedPlace]);

  const routeOpacity = (circuit: Circuit) =>
    !activeCircuit || circuit === activeCircuit || (activeCircuit !== "entry" && circuit === "trunk")
      ? 1
      : 0.18;

  return (
    <>
      <div className="relative">
        <div className="mb-5 flex flex-wrap gap-x-5 gap-y-2 text-[10px] font-bold uppercase tracking-[.12em] text-white/55 sm:text-xs">
          <span className="inline-flex items-center gap-2"><i className="h-0.5 w-7 rounded-full bg-[#d6a54a]" />Standard route</span>
          <span className="inline-flex items-center gap-2"><i className="w-7 border-t-2 border-dashed border-[#9ccbd4]" />Restricted / high altitude</span>
          <span className="inline-flex items-center gap-2"><i className="h-3 w-3 rounded-full bg-[#b7474d] ring-2 ring-white/50" />Entry route</span>
          <span className="inline-flex items-center gap-2"><i className="h-3 w-3 rounded-full bg-[#9ccbd4] ring-2 ring-white/50" />Destination</span>
        </div>

        <div className="mb-4 flex gap-2 overflow-x-auto pb-2 md:hidden">
          {(Object.keys(circuitLabels) as Circuit[]).map((circuit) => (
            <button
              key={circuit}
              type="button"
              onClick={() => setSelectedId(places.find((place) => place.circuit === circuit)?.id ?? null)}
              className="shrink-0 rounded-full border border-[#d6a54a]/30 bg-[#102b26]/80 px-3 py-2 text-[10px] font-bold uppercase tracking-[.12em] text-[#efc877]"
            >
              {circuitLabels[circuit]}
            </button>
          ))}
        </div>

        <div className="pointer-events-none absolute inset-y-14 left-0 z-20 w-12 bg-gradient-to-r from-[#17332c] via-[#17332c]/70 to-transparent md:hidden" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-y-14 right-0 z-20 w-12 bg-gradient-to-l from-[#17332c] via-[#17332c]/70 to-transparent md:hidden" aria-hidden="true" />
        <span className="pointer-events-none absolute left-2 top-1/2 z-30 grid h-7 w-7 -translate-y-1/2 place-items-center rounded-full border border-[#efc877]/35 bg-[#17332c]/75 text-lg text-[#efc877]/75 backdrop-blur-sm md:hidden" aria-hidden="true">‹</span>
        <span className="pointer-events-none absolute right-2 top-1/2 z-30 grid h-7 w-7 -translate-y-1/2 place-items-center rounded-full border border-[#efc877]/35 bg-[#17332c]/75 text-lg text-[#efc877]/75 backdrop-blur-sm md:hidden" aria-hidden="true">›</span>

        <div className="hide-scrollbar overflow-x-auto pb-3" tabIndex={0} aria-label="Scrollable North Sikkim route map. Select a place for its detailed story.">
          <div className="min-w-[1050px]">
            <svg viewBox="0 0 1530 760" className="h-auto w-full" role="img" aria-labelledby="interactive-map-title interactive-map-description">
              <title id="interactive-map-title">Interactive journey map across North and East Sikkim</title>
              <desc id="interactive-map-description">Select any named place to read its history, geography, altitude and travel information.</desc>

              <g fill="none" stroke="#d6a54a" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
                {routes.map((route) => (
                  <path
                    key={route.d}
                    className="route-draw route-segment"
                    pathLength="1"
                    d={route.d}
                    opacity={routeOpacity(route.circuit)}
                    style={{ transition: "opacity 350ms ease" }}
                  />
                ))}
              </g>
              <g className="route-dashes" fill="none" stroke="white" strokeWidth="2" strokeDasharray="8 11" opacity=".52">
                {routes.map((route) => <path key={route.d} d={route.d} opacity={routeOpacity(route.circuit)} />)}
              </g>

              <path
                className="route-draw route-segment"
                pathLength="1"
                d={highAltitudeLink.d}
                fill="none"
                stroke="#9ccbd4"
                strokeWidth="5"
                strokeDasharray="14 10"
                strokeLinecap="round"
                opacity={routeOpacity(highAltitudeLink.circuit) * 0.9}
              />

              {[...routes, highAltitudeLink].map((route) => {
                const labelWidth = Math.max(96, route.label.length * 6.6 + 24);
                const restricted = "restricted" in route;
                return (
                  <g key={`${route.label}-${route.x}-${route.y}`} opacity={routeOpacity(route.circuit)}>
                    <rect x={route.x - labelWidth / 2} y={route.y - 11} width={labelWidth} height="22" rx="11" fill="#102b26" fillOpacity=".94" stroke={restricted ? "#9ccbd4" : "#d6a54a"} strokeOpacity=".55" />
                    <text x={route.x} y={route.y + 3.5} textAnchor="middle" fill={restricted ? "#bfe4eb" : "#efc877"} fontSize="9.5" fontWeight="700" letterSpacing=".25">{route.label}</text>
                  </g>
                );
              })}

              {places.map((place) => {
                const selected = selectedId === place.id;
                const dimmed = Boolean(activeCircuit && place.circuit !== activeCircuit && place.circuit !== "trunk");
                return (
                  <g
                    key={place.id}
                    role="button"
                    tabIndex={0}
                    aria-label={`Open details for ${place.name}`}
                    onClick={() => setSelectedId(place.id)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        setSelectedId(place.id);
                      }
                    }}
                    className="map-place cursor-pointer outline-none"
                    opacity={dimmed ? 0.28 : 1}
                    style={{ transition: "opacity 350ms ease" }}
                  >
                    {selected && <circle cx={place.x} cy={place.y} r="31" fill="none" stroke="#efc877" strokeWidth="2" className="map-node-halo" />}
                    <circle cx={place.x} cy={place.y} r={selected ? 23 : 18} fill={nodeColour(place.kind)} stroke="rgba(255,255,255,.6)" strokeWidth="4" />
                    <circle cx={place.x} cy={place.y} r="6" fill="#17332c" />
                    <rect x={place.x - 64} y={place.y + 27} width="128" height="42" rx="14" fill={selected ? "rgba(214,165,74,.22)" : "rgba(255,255,255,.08)"} stroke={selected ? "rgba(239,200,119,.72)" : "rgba(255,255,255,.14)"} />
                    <text x={place.x} y={place.y + 53} textAnchor="middle" fill="white" fontSize="16" fontWeight="700">{place.name}</text>
                  </g>
                );
              })}

              <g fill="#d6a54a" fontSize="13" fontWeight="700" letterSpacing="2">
                <text x="270" y="43" textAnchor="middle">DARJEELING ROUTE</text>
                <text x="270" y="525" textAnchor="middle">KALIMPONG ROUTE</text>
                <text x="720" y="735" textAnchor="middle">EAST SIKKIM · CHANGU–NATHU LA ROUTE</text>
              </g>
              <g fill="#9ccbd4" fontSize="13" fontWeight="700" letterSpacing="2">
                <text x="1180" y="22" textAnchor="middle">LACHEN–GURUDONGMAR CIRCUIT</text>
                <text x="1115" y="585" textAnchor="middle">LACHUNG–ZERO POINT CIRCUIT</text>
              </g>
            </svg>
          </div>
        </div>

        <p className="mt-1 text-center text-[10px] font-bold uppercase tracking-[.18em] text-[#efc877]/55 md:hidden">Swipe or tap a destination to explore</p>
      </div>

      {selectedPlace && (
        <div
          className="fixed inset-0 z-[100] flex items-end bg-[#071b18]/65 backdrop-blur-sm lg:items-stretch lg:justify-end"
          role="presentation"
          onMouseDown={(event) => {
            if (event.currentTarget === event.target) setSelectedId(null);
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="place-detail-title"
            className="place-detail-panel relative max-h-[90svh] w-full overflow-y-auto rounded-t-[2rem] border-t border-[#d6a54a]/45 bg-[#f3ead8] text-[#17332c] shadow-2xl lg:max-h-none lg:w-[min(520px,42vw)] lg:rounded-none lg:rounded-l-[2rem] lg:border-l lg:border-t-0"
          >
            <button ref={closeButtonRef} type="button" onClick={() => setSelectedId(null)} className="absolute right-4 top-4 z-20 grid h-11 w-11 place-items-center rounded-full border border-white/25 bg-[#17332c]/85 text-white shadow-lg backdrop-blur-md transition hover:rotate-6 hover:bg-[#7a263a]" aria-label="Close place details">
              <X size={20} />
            </button>

            <div className="relative h-56 overflow-hidden sm:h-72">
              <Image src={selectedPlace.image ?? images.hero} alt={`${selectedPlace.name} landscape`} fill unoptimized sizes="(max-width:1024px) 100vw,520px" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#17332c] via-[#17332c]/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
                <p className="text-[10px] font-bold uppercase tracking-[.22em] text-[#efc877]">{selectedPlace.category}</p>
                <h3 id="place-detail-title" className="mt-2 text-4xl font-semibold sm:text-5xl">{selectedPlace.name}</h3>
              </div>
            </div>

            <div className="space-y-8 p-6 sm:p-8">
              <div className="grid grid-cols-2 gap-3">
                <DetailChip icon={Mountain} label="Altitude" value={selectedPlace.altitude} />
                <DetailChip icon={CalendarDays} label="Ideal season" value={selectedPlace.season} />
                <DetailChip icon={MapPin} label="Region" value={selectedPlace.district} />
                <DetailChip icon={ShieldAlert} label="Access" value={selectedPlace.permit} />
              </div>

              <DetailSection icon={History} title="History and culture">{selectedPlace.history}</DetailSection>
              <DetailSection icon={Landmark} title="Geography">{selectedPlace.geography}</DetailSection>
              <DetailSection icon={Route} title="How to reach">
                {selectedPlace.reach}
                <span className="mt-3 block rounded-xl border border-[#d6a54a]/35 bg-[#d6a54a]/10 px-4 py-3 text-sm font-semibold text-[#76551d]">{selectedPlace.travel}</span>
              </DetailSection>

              {selectedPlace.caution && (
                <div className="rounded-2xl border border-[#7a263a]/20 bg-[#7a263a]/8 p-4 text-sm leading-6 text-[#6b2636]">
                  <div className="mb-1 flex items-center gap-2 font-bold"><ShieldAlert size={17} />Travel note</div>
                  {selectedPlace.caution}
                </div>
              )}

              <p className="border-t border-[#17332c]/10 pt-5 text-xs leading-5 text-[#17332c]/50">Altitudes, travel times and seasonal guidance are approximate. Permits, road access and opening conditions can change because of weather, security and local administration.</p>
            </div>
          </section>
        </div>
      )}
    </>
  );
}

function DetailChip({ icon: Icon, label, value }: { icon: typeof Mountain; label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-[#b68b3e]/25 bg-white/60 p-3 shadow-[0_8px_25px_rgba(75,54,29,.05)]">
      <Icon size={17} className="text-[#a06c2f]" />
      <p className="mt-2 text-[9px] font-bold uppercase tracking-[.16em] text-[#a06c2f]">{label}</p>
      <p className="mt-1 text-xs font-semibold leading-5 sm:text-sm">{value}</p>
    </div>
  );
}

function DetailSection({ icon: Icon, title, children }: { icon: typeof Mountain; title: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="flex items-center gap-3 text-[#17332c]">
        <span className="grid h-9 w-9 place-items-center rounded-full bg-[#17332c] text-[#efc877]"><Icon size={17} /></span>
        <h4 className="text-xl font-semibold">{title}</h4>
      </div>
      <p className="mt-3 text-sm leading-7 text-[#17332c]/70">{children}</p>
    </div>
  );
}