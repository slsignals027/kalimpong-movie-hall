import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  Compass,
  History,
  Landmark,
  Leaf,
  MapPin,
  Mountain,
  Route,
  ShieldCheck,
  Ticket,
  TreePine,
} from "lucide-react";

const tourismImages = {
  gurudongmar:
    "https://res.cloudinary.com/REPLACE/image/upload/REPLACE_GURUDONGMAR",
  yumthang:
    "https://res.cloudinary.com/REPLACE/image/upload/REPLACE_YUMTHANG",
  yumesamdong:
    "https://res.cloudinary.com/REPLACE/image/upload/REPLACE_YUMESAMDONG",
  lachung:
    "https://res.cloudinary.com/REPLACE/image/upload/REPLACE_LACHUNG",
  lachen:
    "https://res.cloudinary.com/REPLACE/image/upload/REPLACE_LACHEN",
  thangu:
    "https://res.cloudinary.com/REPLACE/image/upload/REPLACE_THANGU",
  chopta:
    "https://res.cloudinary.com/REPLACE/image/upload/REPLACE_CHOPTA",
  dzongu:
    "https://res.cloudinary.com/REPLACE/image/upload/REPLACE_DZONGU",
  sevenSisters:
    "https://res.cloudinary.com/REPLACE/image/upload/REPLACE_SEVEN_SISTERS",
};

const destinations = [
  {
    name: "Gurudongmar Lake",
    category: "Sacred glacial lake",
    image: tourismImages.gurudongmar,
    description:
      "A sacred high-altitude lake surrounded by the stark, snow-covered landscape of the Tibetan Plateau.",
    reach:
      "Travel from Gangtok through Mangan and Chungthang, stay overnight at Lachen, and continue through Thangu with the required permit.",
    accent: "bg-[#9ccbd4]",
    large: true,
  },
  {
    name: "Yumthang Valley",
    category: "Valley of Flowers",
    image: tourismImages.yumthang,
    description:
      "An alpine valley shaped by the Lachung River, colourful rhododendrons, meadows and snow-covered mountains.",
    reach:
      "Reach Lachung through Mangan and Chungthang. Yumthang is approximately 25 km beyond Lachung.",
    accent: "bg-[#d6a54a]",
    large: true,
  },
  {
    name: "Zero Point – Yumesamdong",
    category: "The end of the road",
    image: tourismImages.yumesamdong,
    description:
      "A dramatic high-altitude landscape where the road ends among snowfields, rocky slopes and an immense Himalayan sky.",
    reach:
      "Continue beyond Yumthang in an authorised vehicle. A separate protected-area permit is required.",
    accent: "bg-[#f4ebdd]",
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
  const colours = [
    "bg-[#2e78a6]",
    "bg-white",
    "bg-[#b7474d]",
    "bg-[#4d8d58]",
    "bg-[#d6a54a]",
  ];

  return (
    <div
      className="absolute inset-x-0 top-20 z-20 flex justify-center"
      aria-hidden="true"
    >
      <div className="relative flex">
        <span className="absolute left-[-10%] top-0 h-px w-[120%] bg-white/35" />

        {Array.from({ length: 15 }).map((_, index) => (
          <span
            key={index}
            className={`h-10 w-8 origin-top ${
              colours[index % colours.length]
            } opacity-90 shadow-md`}
            style={{
              clipPath: "polygon(0 0, 100% 0, 83% 100%, 50% 80%, 17% 100%)",
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
      className="absolute bottom-[-1px] left-0 h-24 w-full sm:h-36"
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

function Mandala() {
  return (
    <svg
      viewBox="0 0 300 300"
      className="absolute -right-24 -top-20 h-80 w-80 text-[#7a263a]/[0.06] sm:h-[28rem] sm:w-[28rem]"
      aria-hidden="true"
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        transform="translate(150 150)"
      >
        <circle r="125" />
        <circle r="95" />
        <circle r="55" />

        {Array.from({ length: 12 }).map((_, index) => (
          <ellipse
            key={index}
            rx="25"
            ry="118"
            transform={`rotate(${index * 30})`}
          />
        ))}
      </g>
    </svg>
  );
}

export default function TourismPage() {
  return (
    <main className="overflow-hidden bg-[#f4ebdd] text-[#17332c]">
      {/* Hero */}

      <section className="relative min-h-[94svh] overflow-hidden text-white">
        <Image
          src={tourismImages.gurudongmar}
          alt="Gurudongmar Lake surrounded by the mountains of North Sikkim"
          fill
          preload
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(9,28,24,.94)_0%,rgba(9,28,24,.7)_48%,rgba(9,28,24,.2)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(9,28,24,.86)_0%,transparent_50%)]" />

        {/* Top navigation */}

        <header className="relative z-30 mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
          <a href="#" className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-full border border-white/30 bg-white/10 backdrop-blur-md">
              <Mountain size={22} />
            </span>

            <span>
              <span className="block text-lg font-bold tracking-[0.12em]">
                NORTH SIKKIM
              </span>
              <span className="block text-[10px] uppercase tracking-[0.28em] text-white/65">
                Where nature becomes sacred
              </span>
            </span>
          </a>

          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-[#d6a54a] px-4 py-2.5 text-sm font-bold text-[#17332c] shadow-lg transition hover:-translate-y-0.5 hover:bg-[#edc16b] sm:px-6 sm:py-3"
          >
            <Ticket size={18} />
            <span className="hidden sm:inline">Back to Movie Booking</span>
            <span className="sm:hidden">Movies</span>
          </Link>
        </header>

        <PrayerFlags />

        <div className="relative z-10 mx-auto flex min-h-[calc(94svh-5rem)] max-w-7xl items-center px-5 pb-32 pt-24 sm:px-8 lg:px-10">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] backdrop-blur-md">
              <Compass size={15} className="text-[#d6a54a]" />
              Mangan District · Eastern Himalayas
            </div>

            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.045em] sm:text-7xl lg:text-[6.5rem]">
              Where mountains
              <span className="block italic text-[#efc877]">
                hold memory.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-white/80 sm:text-xl sm:leading-8">
              Journey through sacred lakes, flower-filled valleys, ancient
              villages and the living cultures of North Sikkim.
            </p>

            <a
              href="#destinations"
              className="mt-9 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3.5 font-bold backdrop-blur-md transition hover:bg-white hover:text-[#17332c]"
            >
              Explore the journey
              <ArrowDown size={18} />
            </a>
          </div>
        </div>

        <MountainDivider />
      </section>

      {/* Introduction */}

      <section className="relative px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
        <Mandala />

        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#a06c2f]">
              A living Himalayan story
            </p>

            <h2 className="text-4xl font-semibold leading-tight tracking-[-0.035em] sm:text-6xl">
              More than a beautiful landscape.
            </h2>
          </div>

          <div className="space-y-6 text-base leading-8 text-[#17332c]/70 sm:text-lg">
            <p>
              North Sikkim is a meeting place of sacred mountains, ancient
              routes and living communities. The Lepchas are regarded as
              Sikkim&apos;s original inhabitants, with traditions closely tied
              to its forests, rivers and mountains.
            </p>

            <p>
              Bhutia communities arriving from Tibet brought strong Buddhist
              influences. Monasteries, prayer flags and sacred landscapes
              became inseparable from the region&apos;s identity.
            </p>

            <p>
              Lachen and Lachung continue to preserve the traditional Dzumsa
              system of local governance, while Dzongu remains an important
              centre of Lepcha culture and ecological knowledge.
            </p>
          </div>
        </div>

        <div className="relative mx-auto mt-16 grid max-w-7xl gap-5 md:grid-cols-3">
          {[
            {
              icon: TreePine,
              title: "Lepcha homeland",
              text: "A culture shaped by forests, rivers, mountains and generations of environmental knowledge.",
            },
            {
              icon: Landmark,
              title: "Living Buddhism",
              text: "Monasteries, prayer flags and sacred landscapes remain part of everyday mountain life.",
            },
            {
              icon: Leaf,
              title: "Fragile nature",
              text: "Alpine meadows, rhododendrons and high-altitude ecosystems deserve careful protection.",
            },
          ].map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="rounded-[1.75rem] border border-[#17332c]/10 bg-white/45 p-7 shadow-[0_18px_60px_rgba(23,51,44,.07)] backdrop-blur-sm"
            >
              <span className="grid h-12 w-12 place-items-center rounded-full bg-[#17332c] text-[#d6a54a]">
                <Icon size={22} />
              </span>

              <h3 className="mt-7 text-2xl font-bold">{title}</h3>

              <p className="mt-3 leading-7 text-[#17332c]/65">{text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Route */}

      <section className="bg-[#17332c] px-5 py-20 text-white sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex items-center gap-3">
            <Route className="text-[#d6a54a]" />
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-white/65">
              Follow the Teesta north
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-5">
            {[
              ["01", "Gangtok", "Begin the journey"],
              ["02", "Mangan", "Gateway to the north"],
              ["03", "Chungthang", "The route divides"],
              ["04A", "Lachung", "Yumthang · Zero Point"],
              ["04B", "Lachen", "Thangu · Gurudongmar"],
            ].map(([number, place, detail]) => (
              <div
                key={number}
                className="relative rounded-2xl border border-white/10 bg-white/[0.06] p-5"
              >
                <span className="text-xs font-bold text-[#d6a54a]">
                  {number}
                </span>
                <h3 className="mt-5 text-xl font-bold">{place}</h3>
                <p className="mt-1 text-sm text-white/55">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations */}

      <section
        id="destinations"
        className="scroll-mt-20 px-5 py-24 sm:px-8 lg:px-10 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-[#a06c2f]">
              Places worth the climb
            </p>

            <h2 className="text-4xl font-semibold leading-tight tracking-[-0.035em] sm:text-6xl">
              Nine journeys into North Sikkim.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-[#17332c]/65">
              Explore sacred water, alpine valleys, mountain villages,
              waterfalls and the cultural landscapes of Mangan District.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {destinations.map((destination) => (
              <article
                key={destination.name}
                className={`group overflow-hidden rounded-[2rem] border border-[#17332c]/10 bg-[#fffaf0] shadow-[0_18px_60px_rgba(23,51,44,.09)] ${
                  destination.large ? "xl:col-span-2" : ""
                }`}
              >
                <div className="relative h-72 overflow-hidden sm:h-80">
                  <Image
                    src={destination.image}
                    alt={`${destination.name} in North Sikkim`}
                    fill
                    sizes={
                      destination.large
                        ? "(max-width: 1280px) 100vw, 66vw"
                        : "(max-width: 768px) 100vw, 33vw"
                    }
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                  <span
                    className={`absolute left-5 top-5 rounded-full px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#17332c] ${destination.accent}`}
                  >
                    {destination.category}
                  </span>

                  <h3 className="absolute bottom-5 left-5 right-5 text-3xl font-bold text-white sm:text-4xl">
                    {destination.name}
                  </h3>
                </div>

                <div className="p-6 sm:p-7">
                  <p className="leading-7 text-[#17332c]/70">
                    {destination.description}
                  </p>

                  <div className="mt-6 border-t border-[#17332c]/10 pt-5">
                    <div className="flex gap-3">
                      <MapPin
                        size={19}
                        className="mt-1 shrink-0 text-[#a06c2f]"
                      />

                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#a06c2f]">
                          How to reach
                        </p>

                        <p className="mt-2 text-sm leading-6 text-[#17332c]/65">
                          {destination.reach}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Permit notice */}

      <section className="px-5 pb-24 sm:px-8 lg:px-10 lg:pb-32">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#7a263a] px-6 py-12 text-white sm:px-10 lg:px-14">
          <div className="absolute -right-16 -top-20 h-72 w-72 rounded-full border border-white/10" />
          <div className="absolute right-10 top-8 h-36 w-36 rounded-full border border-[#d6a54a]/30" />

          <div className="relative grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
            <div>
              <ShieldCheck size={38} className="text-[#efc877]" />

              <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
                Travel prepared.
              </h2>

              <p className="mt-4 leading-7 text-white/70">
                North Sikkim is remote, environmentally fragile and
                permit-controlled.
              </p>
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
                <div
                  key={item}
                  className="rounded-xl border border-white/10 bg-white/[0.07] px-4 py-3 text-sm text-white/80"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}

      <section className="bg-[#e2dfd0] px-5 py-24 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-4xl text-center">
          <History className="mx-auto text-[#a06c2f]" size={34} />

          <p className="mt-5 text-xs font-bold uppercase tracking-[0.24em] text-[#a06c2f]">
            Back in Kalimpong
          </p>

          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.035em] sm:text-6xl">
            After the mountains, enjoy a movie together.
          </h2>

          <Link
            href="/"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#17332c] px-7 py-4 font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#23483e]"
          >
            <Ticket size={19} />
            Return to Movie Booking
          </Link>
        </div>
      </section>
    </main>
  );
}