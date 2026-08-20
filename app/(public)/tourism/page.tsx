import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  Compass,
  History,
  Landmark,
  Leaf,
  MapPin,
  Route,
  ShieldCheck,
  Ticket,
  TreePine,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Explore North Sikkim | Kalimpong Movie Hall",
  description:
    "Discover Gurudongmar Lake, Yumthang Valley, Lachung, Lachen and the living cultures of North Sikkim.",
};

const tourismImages = {
  hero:
    "https://res.cloudinary.com/bqt1b6pu/image/upload/v1787147821/ChatGPT_Image_Aug_19_2026_07_26_40_PM.png",
  parchment:
    "https://res.cloudinary.com/bqt1b6pu/image/upload/v1787147702/himalayan-parchment-background.png",
  gurudongmar:
    "https://res.cloudinary.com/bqt1b6pu/image/upload/v1787122569/gurudongmar-lake.jpg",
  yumthang:
    "https://res.cloudinary.com/bqt1b6pu/image/upload/v1787122570/yumthang-valley.jpg",
  lachung:
    "https://res.cloudinary.com/bqt1b6pu/image/upload/v1787122570/lachung.jpg",
  lachen:
    "https://res.cloudinary.com/bqt1b6pu/image/upload/v1787122569/lachen.jpg",
  thangu:
    "https://res.cloudinary.com/bqt1b6pu/image/upload/v1787122568/thangu-valley.jpg",
  chopta:
    "https://res.cloudinary.com/bqt1b6pu/image/upload/v1787122569/chopta-valley.jpg",
  dzongu:
    "https://res.cloudinary.com/bqt1b6pu/image/upload/v1787122569/dzongu.jpg",
  sevenSisters:
    "https://res.cloudinary.com/bqt1b6pu/image/upload/v1787122569/seven-sisters.jpg",
};

const heritageCards = [
  {
    icon: TreePine,
    title: "Lepcha Heritage",
    image: tourismImages.dzongu,
    text: "The original stewards of this land, the Lepchas have lived in harmony with these mountains for centuries.",
  },
  {
    icon: Landmark,
    title: "Living Buddhism",
    image: tourismImages.lachung,
    text: "From ancient monasteries to prayer flags that dance with the wind, Buddhist culture is woven into everyday life.",
  },
  {
    icon: Leaf,
    title: "Fragile Nature",
    image: tourismImages.yumthang,
    text: "Glaciers, high-altitude lakes and rare wildlife make North Sikkim's beauty delicate and deserving of respect.",
  },
];

const destinations = [
  {
    name: "Gurudongmar Lake",
    category: "Sacred glacial lake",
    image: tourismImages.gurudongmar,
    description:
      "A sacred high-altitude lake surrounded by the stark, snow-covered landscape of the Tibetan Plateau.",
    reach:
      "Travel from Gangtok through Mangan and Chungthang, stay overnight at Lachen, then continue through Thangu with the required permit.",
    accent: "bg-[#9ccbd4]",
    large: true,
  },
  {
    name: "Yumthang Valley",
    category: "Valley of Flowers",
    image: tourismImages.yumthang,
    description:
      "An alpine valley shaped by the Lachung River, colourful rhododendrons, open meadows and snow-covered mountains.",
    reach:
      "Reach Lachung through Mangan and Chungthang. Yumthang is approximately 25 km beyond Lachung.",
    accent: "bg-[#d6a54a]",
    large: true,
  },
  {
    name: "Lachung",
    category: "Riverside village",
    image: tourismImages.lachung,
    description:
      "A beautiful mountain settlement known for its monastery, traditional Dzumsa system and proximity to Yumthang.",
    reach:
      "Drive from Gangtok through Mangan and Chungthang. Lachung is the main overnight base for the Yumthang route.",
    accent: "bg-[#b7474d]",
  },
  {
    name: "Lachen",
    category: "Gateway to Gurudongmar",
    image: tourismImages.lachen,
    description:
      "A peaceful high-mountain village with a historic monastery and views across the Lachen Valley.",
    reach:
      "Travel from Gangtok through Mangan and Chungthang. Lachen is the principal overnight base for Gurudongmar.",
    accent: "bg-[#d6a54a]",
  },
  {
    name: "Thangu Valley",
    category: "Cold-desert landscape",
    image: tourismImages.thangu,
    description:
      "A remote settlement where green mountain valleys transition into the open, windswept high plateau.",
    reach:
      "Continue north from Lachen along the Gurudongmar route. Entry requires a protected-area permit.",
    accent: "bg-[#9ccbd4]",
  },
  {
    name: "Chopta Valley",
    category: "Alpine wilderness",
    image: tourismImages.chopta,
    description:
      "A serene high-altitude valley of mountain streams, open meadows and snow-covered slopes.",
    reach:
      "Reached from Lachen through Thangu and normally included in an authorised North Sikkim tour.",
    accent: "bg-[#819b73]",
  },
  {
    name: "Dzongu Valley",
    category: "Lepcha heritage",
    image: tourismImages.dzongu,
    description:
      "A protected Lepcha cultural landscape of forests, rivers, traditional villages, monasteries and hanging bridges.",
    reach:
      "Travel through Mangan and arrange local access through an authorised operator or registered homestay.",
    accent: "bg-[#d6a54a]",
    large: true,
  },
  {
    name: "Seven Sisters Waterfall",
    category: "Forest waterfall",
    image: tourismImages.sevenSisters,
    description:
      "A multi-level waterfall cascading through dense forest along the highway leading into North Sikkim.",
    reach:
      "Located around 32 km from Gangtok on the highway towards Mangan and commonly visited as a roadside stop.",
    accent: "bg-[#9ccbd4]",
  },
];

function PrayerFlags() {
  const colours = ["#2e78a6", "#f4ebdd", "#b7474d", "#4d8d58", "#d6a54a"];

  return (
    <div
      className="pointer-events-none absolute inset-x-0 top-0 z-20 flex justify-center overflow-hidden"
      aria-hidden="true"
    >
      <div className="relative flex max-w-[96vw] pt-px">
        <span className="absolute left-0 top-0 h-px w-full bg-white/45" />
        {Array.from({ length: 20 }).map((_, index) => (
          <span
            key={index}
            className="h-9 w-7 shrink-0 origin-top opacity-90 shadow-md sm:h-11 sm:w-9"
            style={{
              backgroundColor: colours[index % colours.length],
              clipPath: "polygon(0 0,100% 0,86% 100%,50% 82%,14% 100%)",
              transform: `rotate(${index % 2 === 0 ? "-3deg" : "3deg"})`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

function MountainDivider() {
  return (
    <svg
      viewBox="0 0 1440 150"
      preserveAspectRatio="none"
      className="absolute -bottom-px left-0 z-20 h-20 w-full sm:h-32"
      aria-hidden="true"
    >
      <path
        d="M0 125L150 63L260 104L420 23L560 94L695 49L805 103L956 18L1110 99L1260 54L1440 118V150H0Z"
        fill="#f4ebdd"
      />
      <path
        d="M0 139L180 96L320 125L490 76L650 126L830 81L1015 124L1190 90L1440 133V150H0Z"
        fill="#e2dfd0"
        opacity=".75"
      />
    </svg>
  );
}

function TopographicBackground({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1200 600"
      preserveAspectRatio="none"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      aria-hidden="true"
    >
      <g fill="none" stroke="currentColor" strokeWidth="1.5" opacity=".62">
        <path d="M-80 130C90 15 240 40 320 145S520 255 620 145 835 30 980 120s215 95 330 5" />
        <path d="M-70 165C80 55 225 75 305 175s205 105 305 5S820 65 970 155s225 85 340 0" />
        <path d="M-40 210C95 105 220 120 300 210s205 105 310 15 220-100 365-5 220 85 335 5" />
        <path d="M-80 400C75 290 220 315 315 420s220 110 335 0 220-105 365-10 205 85 315 20" />
        <path d="M-60 445C95 335 225 355 320 460s220 100 335-10 225-95 360 0 205 75 300 5" />
        <ellipse cx="165" cy="280" rx="115" ry="75" />
        <ellipse cx="165" cy="280" rx="85" ry="55" />
        <ellipse cx="165" cy="280" rx="55" ry="35" />
        <ellipse cx="1020" cy="330" rx="125" ry="90" />
        <ellipse cx="1020" cy="330" rx="90" ry="60" />
        <ellipse cx="1020" cy="330" rx="55" ry="35" />
      </g>
    </svg>
  );
}

function BuddhistMandala({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 300 300"
      className={`pointer-events-none absolute h-80 w-80 ${className}`}
      aria-hidden="true"
    >
      <g fill="none" stroke="currentColor" strokeWidth="2" transform="translate(150 150)">
        <circle r="130" />
        <circle r="100" />
        <circle r="65" />
        <circle r="25" />
        {Array.from({ length: 12 }).map((_, index) => (
          <ellipse key={index} rx="25" ry="120" transform={`rotate(${index * 30})`} />
        ))}
      </g>
    </svg>
  );
}

function HeritageBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden bg-[#f6eedc]"
      aria-hidden="true"
    >
      <Image
        src={tourismImages.parchment}
        alt=""
        fill
        unoptimized
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-[#f6eedc]/10" />
    </div>
  );
}

function OrnamentDivider() {
  return (
    <div
      className="mx-auto mt-4 flex w-44 items-center justify-center gap-3 text-[#c99a3e]"
      aria-hidden="true"
    >
      <span className="h-px flex-1 bg-current/70" />
      <span className="h-3 w-3 rotate-45 border border-current">
        <span className="block h-full w-full scale-50 bg-current" />
      </span>
      <span className="h-px flex-1 bg-current/70" />
    </div>
  );
}

function JourneyMap() {
  const places = [
    { name: "Siliguri", x: 95, y: 270, kind: "start" },
    { name: "Darjeeling", x: 270, y: 115, kind: "branch" },
    { name: "Kalimpong", x: 270, y: 425, kind: "branch" },
    { name: "Gangtok", x: 465, y: 270, kind: "main" },
    { name: "Mangan", x: 630, y: 270, kind: "main" },
    { name: "Chungthang", x: 805, y: 270, kind: "main" },
    { name: "Lachen", x: 970, y: 135, kind: "north" },
    { name: "Thangu", x: 1125, y: 92, kind: "north" },
    { name: "Chopta", x: 1310, y: 92, kind: "destination" },
    { name: "Lachung", x: 970, y: 405, kind: "north" },
    { name: "Yumthang", x: 1115, y: 450, kind: "north" },
    { name: "Zero Point", x: 1260, y: 450, kind: "north" },
    { name: "Gurudongmar", x: 1430, y: 450, kind: "destination" },
    { name: "Tsomgo Lake", x: 620, y: 545, kind: "destination" },
    { name: "Nathu La", x: 830, y: 610, kind: "destination" },
  ];

  const routes = [
    { d: "M150 250C185 190 215 130 270 120", label: "63 km · 2h 30m", x: 178, y: 176 },
    { d: "M330 120C390 145 415 225 465 252", label: "98 km · 4h", x: 394, y: 174 },
    { d: "M150 290C190 350 215 410 270 420", label: "67 km · 2h 30m", x: 178, y: 354 },
    { d: "M330 420C390 390 420 310 465 288", label: "75 km · 3h", x: 394, y: 367 },
    { d: "M520 270H575", label: "65 km · 2h 30m", x: 548, y: 232 },
    { d: "M685 270H745", label: "28 km · 1h 30m", x: 715, y: 232 },
    { d: "M865 250C900 205 925 155 970 138", label: "27 km · 1h 30m", x: 905, y: 193 },
    { d: "M1025 125C1060 105 1080 95 1125 92", label: "30 km · 1h 30m", x: 1065, y: 48 },
    { d: "M1180 92H1250", label: "10 km · 30m", x: 1215, y: 54 },
    { d: "M1325 108C1380 165 1415 300 1430 432", label: "35 km · 1h 45m", x: 1412, y: 245 },
    { d: "M865 290C900 335 925 388 970 402", label: "22 km · 1h 15m", x: 905, y: 347 },
    { d: "M1025 418C1060 440 1080 447 1115 450", label: "25 km · 1h 15m", x: 1063, y: 394 },
    { d: "M1170 450H1205", label: "23 km · 1h", x: 1188, y: 410 },
    { d: "M480 288C505 380 550 485 620 527", label: "38 km · 1h 30m", x: 536, y: 430 },
    { d: "M675 560C710 580 755 600 775 607", label: "18 km · 45m", x: 724, y: 570 },
  ];

  const highAltitudeLink = {
    d: "M1278 442C1320 382 1375 382 1412 442",
    label: "Restricted link",
    x: 1347,
    y: 372,
  };

  const nodeColour = (kind: string) => {
    if (kind === "start") return "#d6a54a";
    if (kind === "destination") return "#9ccbd4";
    if (kind === "branch") return "#b7474d";
    return "#f4ebdd";
  };

  return (
    <div className="hide-scrollbar overflow-x-auto pb-3" tabIndex={0} aria-label="Scrollable North Sikkim route map">
      <div className="min-w-[1050px]">
        <svg viewBox="0 0 1530 760" className="h-auto w-full" role="img" aria-labelledby="route-map-title route-map-description">
          <title id="route-map-title">Journey map from Siliguri across North and East Sikkim</title>
          <desc id="route-map-description">
            Routes from Siliguri through Darjeeling or Kalimpong join at Gangtok. The northern route continues through Mangan and Chungthang before dividing towards Lachung and Zero Point or Lachen and Gurudongmar Lake. An East Sikkim branch runs from Gangtok through Tsomgo Lake to Nathu La, and a high-altitude road links Gurudongmar with Zero Point.
          </desc>

          <g fill="none" stroke="#d6a54a" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
            {routes.map((route) => <path key={route.d} d={route.d} />)}
          </g>
          <g fill="none" stroke="white" strokeWidth="2" strokeDasharray="8 11" opacity=".52">
            {routes.map((route) => <path key={route.d} d={route.d} />)}
          </g>

          <g
            fill="none"
            stroke="#9ccbd4"
            strokeWidth="5"
            strokeDasharray="14 10"
            strokeLinecap="round"
            opacity=".9"
          >
            <path d={highAltitudeLink.d} />
          </g>

          {[...routes, highAltitudeLink].map((route) => (
            <g key={`${route.label}-${route.x}-${route.y}`}>
              <line
                x1={route.x - 61}
                y1={route.y}
                x2={route.x - 48}
                y2={route.y}
                stroke="#d6a54a"
                strokeWidth="1.5"
                opacity=".75"
              />
              <circle cx={route.x - 43} cy={route.y} r="2" fill="#d6a54a" opacity=".9" />
              <text
                x={route.x}
                y={route.y + 3.5}
                textAnchor="middle"
                fill="#efc877"
                stroke="#17332c"
                strokeWidth="3"
                paintOrder="stroke"
                fontSize="9.5"
                fontWeight="700"
                letterSpacing=".25"
              >
                {route.label}
              </text>
              <circle cx={route.x + 43} cy={route.y} r="2" fill="#d6a54a" opacity=".9" />
              <line
                x1={route.x + 48}
                y1={route.y}
                x2={route.x + 61}
                y2={route.y}
                stroke="#d6a54a"
                strokeWidth="1.5"
                opacity=".75"
              />
            </g>
          ))}

          {places.map((place) => (
            <g key={place.name}>
              <circle cx={place.x} cy={place.y} r="18" fill={nodeColour(place.kind)} stroke="rgba(255,255,255,.55)" strokeWidth="4" />
              <circle cx={place.x} cy={place.y} r="6" fill="#17332c" />
              <rect x={place.x - 64} y={place.y + 27} width="128" height="42" rx="14" fill="rgba(255,255,255,.08)" stroke="rgba(255,255,255,.14)" />
              <text x={place.x} y={place.y + 53} textAnchor="middle" fill="white" fontSize="16" fontWeight="700">
                {place.name}
              </text>
            </g>
          ))}

          <g fill="#d6a54a" fontSize="13" fontWeight="700" letterSpacing="2">
            <text x="270" y="43" textAnchor="middle">DARJEELING ROUTE</text>
            <text x="270" y="525" textAnchor="middle">KALIMPONG ROUTE</text>
            <text x="720" y="735" textAnchor="middle">EAST SIKKIM · CHANGU–NATHU LA ROUTE</text>
          </g>
          <g fill="#9ccbd4" fontSize="13" fontWeight="700" letterSpacing="2">
            <text x="1180" y="22" textAnchor="middle">LACHEN–GURUDONGMAR CIRCUIT</text>
            <text x="1115" y="525" textAnchor="middle">LACHUNG–ZERO POINT CIRCUIT</text>
          </g>
        </svg>
      </div>
    </div>
  );
}

export default function TourismPage() {
  return (
    <main className="overflow-hidden bg-[#f4ebdd] text-[#17332c]">
      <section className="relative min-h-[72svh] overflow-hidden bg-[#092a36] text-white sm:min-h-[94svh]">
        <Image
          src={tourismImages.hero}
          alt="North Sikkim mountains, lake and prayer flags"
          fill
          preload
          unoptimized
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#092a36]/85 via-transparent to-[#092a36]/15 sm:from-[#092a36]/25" />

        <Link
          href="/"
          className="absolute right-4 top-4 z-30 inline-flex items-center gap-2 rounded-full bg-[#d6a54a] px-4 py-2.5 text-xs font-bold text-[#17332c] shadow-xl transition hover:-translate-y-0.5 hover:bg-[#efc877] sm:right-8 sm:top-6 sm:px-5 sm:py-3 sm:text-sm"
        >
          <Ticket size={17} />
          <span className="hidden sm:inline">Back to Movie Booking</span>
          <span className="sm:hidden">Movies</span>
        </Link>

        <div className="absolute inset-x-0 bottom-24 z-10 px-5 sm:hidden">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/25 bg-[#092a36]/55 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] backdrop-blur-md">
            <Compass size={13} className="text-[#d6a54a]" /> Mangan District
          </p>
          <h1 className="max-w-sm text-4xl font-semibold leading-[.95] tracking-[-.04em]">
            Where mountains <span className="block italic text-[#efc877]">hold memory.</span>
          </h1>
          <a href="#destinations" className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#d6a54a] px-5 py-3 text-sm font-bold text-[#17332c]">
            Explore the journey <ArrowDown size={16} />
          </a>
        </div>

        <MountainDivider />
      </section>

      <section className="relative isolate overflow-hidden px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <HeritageBackground />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-4xl font-semibold leading-tight tracking-[-.035em] text-[#173d34] sm:text-6xl">
              A living Himalayan story
            </h2>
            <OrnamentDivider />
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-[#17332c]/75 sm:text-base sm:leading-7">
              North Sikkim is where nature, culture and spirituality exist in harmony. It is home to ancient Lepcha traditions, vibrant Buddhist heritage and some of the most fragile landscapes on Earth.
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-3">
            {heritageCards.map(({ icon: Icon, title, image, text }) => (
              <article
                key={title}
                className="overflow-hidden rounded-xl border border-[#9e8764]/30 bg-[#fffdf7]/90 shadow-[0_12px_35px_rgba(75,54,29,.10)] backdrop-blur-sm"
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={image}
                    alt=""
                    fill
                    sizes="(max-width:768px) 100vw,33vw"
                    className="object-cover transition duration-700 hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3">
                    <Icon size={21} className="shrink-0 text-[#b58531]" />
                    <h3 className="text-xl font-semibold text-[#17332c]">{title}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-[#17332c]/68">{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-[#17332c] px-5 py-20 text-white sm:px-8 lg:px-10 lg:py-24">
        <TopographicBackground className="-z-10 text-white/10" />
        <BuddhistMandala className="-left-28 -top-28 -z-10 text-[#d6a54a]/10" />
        <PrayerFlags />

        <div className="relative z-10 mx-auto max-w-7xl pt-10">
          <div className="mb-10">
            <div className="flex items-center gap-3">
              <Route className="text-[#d6a54a]" />
              <p className="text-xs font-bold uppercase tracking-[.24em] text-white/65">Journey into North Sikkim</p>
            </div>
            <h2 className="mt-5 text-3xl font-semibold sm:text-5xl">From the plains to the high Himalayas.</h2>
            <p className="mt-4 max-w-3xl leading-7 text-white/60">Begin at Siliguri, travel through Darjeeling or Kalimpong, continue through Gangtok, Mangan and Chungthang, then follow the Lachung or Lachen mountain circuit.</p>
          </div>

          <JourneyMap />
          <p className="mt-4 text-xs leading-5 text-white/45">Swipe the map sideways on mobile. Distances and driving times are approximate, and this journey schematic is not drawn to geographical scale. Access can change because of permits, weather and road conditions. The Gurudongmar–Zero Point high-altitude link may be restricted and is not part of the standard tourist circuit.</p>
        </div>
      </section>

      <section id="destinations" className="relative isolate scroll-mt-16 overflow-hidden px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
        <TopographicBackground className="-z-10 text-[#17332c]/[.07]" />
        <BuddhistMandala className="-right-28 top-40 -z-10 text-[#7a263a]/10" />

        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[.24em] text-[#a06c2f]">Places worth the climb</p>
            <h2 className="text-4xl font-semibold leading-tight tracking-[-.035em] sm:text-6xl">Eight journeys into North Sikkim.</h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-[#17332c]/65">Explore sacred water, alpine valleys, mountain villages, waterfalls and the cultural landscapes of Mangan District.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {destinations.map((destination) => (
              <article key={destination.name} className={`group overflow-hidden rounded-[2rem] border border-[#17332c]/10 bg-[#fffaf0] shadow-[0_18px_60px_rgba(23,51,44,.09)] ${destination.large ? "xl:col-span-2" : ""}`}>
                <div className="relative h-72 overflow-hidden sm:h-80">
                  <Image
                    src={destination.image}
                    alt={`${destination.name} in North Sikkim`}
                    fill
                    sizes={destination.large ? "(max-width:768px) 100vw,(max-width:1280px) 50vw,66vw" : "(max-width:768px) 100vw,(max-width:1280px) 50vw,33vw"}
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                  <span className={`absolute left-5 top-5 rounded-full px-3 py-1.5 text-[10px] font-bold uppercase tracking-[.16em] text-[#17332c] ${destination.accent}`}>{destination.category}</span>
                  <h3 className="absolute bottom-5 left-5 right-5 text-3xl font-bold text-white sm:text-4xl">{destination.name}</h3>
                </div>
                <div className="p-6 sm:p-7">
                  <p className="leading-7 text-[#17332c]/70">{destination.description}</p>
                  <div className="mt-6 border-t border-[#17332c]/10 pt-5">
                    <div className="flex gap-3">
                      <MapPin size={19} className="mt-1 shrink-0 text-[#a06c2f]" />
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[.18em] text-[#a06c2f]">How to reach</p>
                        <p className="mt-2 text-sm leading-6 text-[#17332c]/65">{destination.reach}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-24 sm:px-8 lg:px-10 lg:pb-32">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#7a263a] px-6 py-12 text-white sm:px-10 lg:px-14">
          <BuddhistMandala className="-right-20 -top-24 text-white/10" />
          <div className="relative grid gap-10 lg:grid-cols-[.7fr_1.3fr] lg:items-center">
            <div>
              <ShieldCheck size={38} className="text-[#efc877]" />
              <h2 className="mt-5 text-3xl font-bold sm:text-4xl">Travel prepared.</h2>
              <p className="mt-4 leading-7 text-white/70">North Sikkim is remote, environmentally fragile and permit-controlled.</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "Carry valid government identification.",
                "Use a registered Sikkim travel operator.",
                "Confirm current permits and road access.",
                "Allow time to acclimatise gradually.",
                "Avoid photographing military installations.",
                "Leave no plastic or waste behind.",
              ].map((item) => (
                <div key={item} className="rounded-xl border border-white/10 bg-white/[.07] px-4 py-3 text-sm text-white/80">{item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-[#e2dfd0] px-5 py-24 sm:px-8 lg:px-10">
        <TopographicBackground className="-z-10 text-[#17332c]/10" />
        <div className="mx-auto max-w-4xl text-center">
          <History className="mx-auto text-[#a06c2f]" size={34} />
          <p className="mt-5 text-xs font-bold uppercase tracking-[.24em] text-[#a06c2f]">Back in Kalimpong</p>
          <h2 className="mt-5 text-4xl font-semibold tracking-[-.035em] sm:text-6xl">After the mountains, enjoy a movie together.</h2>
          <Link href="/" className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#17332c] px-7 py-4 font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#23483e]">
            <Ticket size={19} /> Return to Movie Booking
          </Link>
        </div>
      </section>
    </main>
  );
}