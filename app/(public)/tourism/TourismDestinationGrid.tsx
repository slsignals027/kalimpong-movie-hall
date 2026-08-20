"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  CalendarDays,
  Clock3,
  Compass,
  Eye,
  History,
  MapPin,
  Mountain,
  Route,
  ShieldAlert,
  Sparkles,
  X,
} from "lucide-react";

type DestinationCard = {
  name: string;
  category: string;
  image: string;
  description: string;
  reach: string;
  accent: string;
  large?: boolean;
};

type DestinationDetail = {
  altitude: string;
  bestTime: string;
  tripDuration: string;
  journeyTime: string;
  history: string;
  placesToSee: string[];
  fromSiliguri: string;
  permit: string;
  travelNote?: string;
};

const destinationDetails: Record<string, DestinationDetail> = {
  "Gurudongmar Lake": {
    altitude: "≈ 5,183 m",
    bestTime: "May–June · October–November",
    tripDuration: "Minimum 3 days / 2 nights from Gangtok",
    journeyTime: "Siliguri to Lachen: about 10–12 hours over two stages; Lachen to the lake and return: 7–9 hours",
    history: "Gurudongmar is a sacred high-altitude lake revered in local Buddhist and Sikh traditions. Its remote frontier setting and spiritual associations have made it one of northern Sikkim's most significant pilgrimage landscapes.",
    placesToSee: ["Gurudongmar Lake viewpoint", "Thangu Valley", "Chopta Valley", "Lachen Monastery", "Lachen Chu valley"],
    fromSiliguri: "Travel from Siliguri to Gangtok, then follow the North Sikkim Highway through Mangan and Chungthang to Lachen. Stay overnight in Lachen and leave before dawn through Thangu for Gurudongmar with an authorised vehicle.",
    permit: "Protected-area permit arranged through a registered Sikkim tour operator. Access may be restricted by nationality, weather, health guidance or security conditions.",
    travelNote: "This is an extreme-altitude journey. Acclimatise, remain hydrated and descend immediately if symptoms of acute mountain sickness appear.",
  },
  "Yumthang Valley": {
    altitude: "≈ 3,564 m",
    bestTime: "April–June for flowers · October–November for clear views",
    tripDuration: "Minimum 3 days / 2 nights from Gangtok",
    journeyTime: "Siliguri to Lachung: about 10–12 hours over two stages; Lachung to Yumthang: 1–1.5 hours",
    history: "Yumthang forms part of the traditional seasonal grazing landscape of the Lachung valley. It is now celebrated for its alpine meadows, rhododendrons and close relationship with the pastoral culture of northern Sikkim.",
    placesToSee: ["Yumthang flower meadows", "Shingba Rhododendron Sanctuary", "Yumthang hot spring", "Lachung Monastery", "Zero Point, when permitted"],
    fromSiliguri: "Travel from Siliguri to Gangtok. Continue through Mangan and Chungthang to Lachung with a permitted tour, stay overnight, then drive to Yumthang early the following morning.",
    permit: "Protected-area permit arranged in Gangtok through an authorised operator.",
    travelNote: "Flowering dates change each year with snowfall and temperature. The valley may not be in bloom throughout the entire advertised season.",
  },
  Lachung: {
    altitude: "≈ 2,700 m",
    bestTime: "March–June · October–December",
    tripDuration: "2–3 days including Gangtok and Yumthang",
    journeyTime: "Siliguri to Gangtok: 4–5 hours; Gangtok to Lachung: approximately 6–8 hours",
    history: "Lachung is a traditional Bhutia village known for the Dzumsa system of local governance. Its monastery, timber houses and seasonal farming traditions reflect a living Himalayan Buddhist culture.",
    placesToSee: ["Lachung Monastery", "Lachung Chu riverside", "Bhim Nala waterfall", "Yumthang Valley", "Shingba Rhododendron Sanctuary"],
    fromSiliguri: "Drive from Siliguri to Gangtok, then take the North Sikkim Highway through Mangan and Chungthang. At Chungthang follow the right-hand valley road to Lachung.",
    permit: "Protected-area permit and authorised vehicle are normally required for visitors travelling beyond notified points.",
  },
  Lachen: {
    altitude: "≈ 2,750 m",
    bestTime: "April–June · October–November",
    tripDuration: "3 days / 2 nights with Gurudongmar",
    journeyTime: "Siliguri to Gangtok: 4–5 hours; Gangtok to Lachen: approximately 6–8 hours",
    history: "Lachen is a traditional Bhutia settlement whose community life has long been organised through the Dzumsa institution. The village is the principal cultural and overnight gateway to the northern plateau.",
    placesToSee: ["Lachen Monastery", "Lachen village", "Thangu Valley", "Chopta Valley", "Gurudongmar route"],
    fromSiliguri: "Travel first to Gangtok. Continue north through Mangan and Chungthang; at Chungthang take the Lachen valley road. Most travellers stay overnight before continuing towards Thangu.",
    permit: "Protected-area permit arranged through a registered tour operator.",
  },
  "Thangu Valley": {
    altitude: "≈ 3,960 m",
    bestTime: "May–June · October",
    tripDuration: "Included in a 3-day / 2-night Lachen circuit",
    journeyTime: "Lachen to Thangu: around 1.5–2 hours; total journey from Siliguri is usually split across two days",
    history: "Thangu developed as a seasonal highland settlement along older grazing and movement routes connecting the Lachen valley with Sikkim's northern plateau.",
    placesToSee: ["Thangu alpine settlement", "Chopta Valley", "High-altitude streams", "Cold-desert landscape", "Gurudongmar approach"],
    fromSiliguri: "Reach Gangtok from Siliguri, travel to Lachen through Mangan and Chungthang, stay overnight, then continue north to Thangu in an authorised vehicle.",
    permit: "Protected-area permit required. Access can change at short notice.",
    travelNote: "The rapid ascent from Lachen makes altitude awareness especially important.",
  },
  "Chopta Valley": {
    altitude: "≈ 4,000 m",
    bestTime: "April–June · October",
    tripDuration: "Included in a 3-day / 2-night Lachen circuit",
    journeyTime: "Thangu to Chopta: about 30 minutes; reaching Thangu normally requires an overnight journey through Lachen",
    history: "Chopta belongs to the high pastoral landscape traditionally associated with communities of the Lachen region. Seasonal snow and alpine grazing have shaped its sparse settlement pattern.",
    placesToSee: ["Chopta alpine meadows", "Mountain streams", "Thangu Valley", "Snow viewpoints", "Lachen Monastery on the return route"],
    fromSiliguri: "Travel via Gangtok, Mangan and Chungthang to Lachen. After an overnight stay, continue through Thangu towards Chopta as part of a permitted North Sikkim circuit.",
    permit: "Protected-area permit and authorised tour vehicle required.",
    travelNote: "Snow, landslides and military restrictions can affect access even during the usual visiting season.",
  },
  "Dzongu Valley": {
    altitude: "Approximately 600–2,000 m depending on the village",
    bestTime: "October–May",
    tripDuration: "2–3 days",
    journeyTime: "Siliguri to Dzongu: approximately 6–8 hours depending on the village and road conditions",
    history: "Dzongu is a protected reserve associated with the indigenous Lepcha community. Its villages, sacred landscapes, oral traditions and relationship with forests and rivers preserve an important part of Sikkim's cultural history.",
    placesToSee: ["Hee Gyathang", "Lingthem village", "Passingdong", "Traditional Lepcha homestays", "Waterfalls, hot springs and suspension bridges"],
    fromSiliguri: "Drive from Siliguri towards Gangtok and continue along the Teesta valley to Mangan. Enter Dzongu through the designated check post using the locally arranged permit, then continue to the selected village or homestay.",
    permit: "A separate Dzongu entry permit is required. A registered local homestay or operator can help arrange it.",
  },
  "Seven Sisters Waterfall": {
    altitude: "≈ 1,000 m",
    bestTime: "May–September for strongest flow · October–December for clearer weather",
    tripDuration: "Half-day from Gangtok or a stop en route to Mangan",
    journeyTime: "Siliguri to the waterfall: approximately 5–6 hours depending on traffic and stops",
    history: "Seven Sisters Waterfall became a recognised roadside landmark on the North Sikkim Highway because its multiple cascades descend dramatically through the forested slope.",
    placesToSee: ["Main waterfall viewpoint", "Lower cascade", "North Sikkim Highway viewpoints", "Nearby Teesta valley scenery", "Gangtok or Mangan onward route"],
    fromSiliguri: "Travel from Siliguri to Gangtok and follow the North Sikkim Highway towards Mangan. The waterfall is approximately 32 km from Gangtok and is commonly visited as a roadside stop.",
    permit: "No separate permit is usually needed for the roadside viewpoint, but onward travel into restricted North Sikkim areas requires permits.",
    travelNote: "Rocks and viewing surfaces can be slippery during the monsoon. Observe barriers and avoid entering the cascade channel.",
  },
};

export default function TourismDestinationGrid({ destinations }: { destinations: DestinationCard[] }) {
  const [selectedName, setSelectedName] = useState<string | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const selected = useMemo(
    () => destinations.find((destination) => destination.name === selectedName) ?? null,
    [destinations, selectedName],
  );
  const detail = selected ? destinationDetails[selected.name] : null;

  useEffect(() => {
    if (!selected) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedName(null);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [selected]);

  return (
    <>
      <div className="grid auto-rows-fr gap-6 md:grid-cols-2 xl:grid-cols-4">
        {destinations.map((destination, index) => (
          <button
            key={destination.name}
            type="button"
            onClick={() => setSelectedName(destination.name)}
            className="destination-card reveal-on-scroll group flex h-full min-h-[31rem] flex-col overflow-hidden rounded-[2rem] border border-[#17332c]/10 bg-[#fffaf0] text-left shadow-[0_18px_60px_rgba(23,51,44,.09)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#a06c2f]"
            style={{ animationDelay: `${index * 75}ms` }}
            aria-label={`Open complete guide to ${destination.name}`}
          >
            <div className="relative h-60 shrink-0 overflow-hidden">
              <Image
                src={destination.image}
                alt={`${destination.name} in North Sikkim`}
                fill
                unoptimized
                sizes="(max-width:768px) 100vw,(max-width:1280px) 50vw,25vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/5 to-transparent" />
              <div className="destination-gold-overlay pointer-events-none absolute inset-0 bg-gradient-to-br from-[#efc877]/30 via-transparent to-[#d6a54a]/20 opacity-0" aria-hidden="true" />
              <span className={`absolute left-5 top-5 rounded-full px-3 py-1.5 text-[9px] font-bold uppercase tracking-[.15em] text-[#17332c] ${destination.accent}`}>{destination.category}</span>
              <h3 className="absolute bottom-5 left-5 right-5 text-2xl font-bold text-white">{destination.name}</h3>
            </div>

            <div className="flex flex-1 flex-col p-6">
              <p className="line-clamp-3 text-sm leading-6 text-[#17332c]/68">{destination.description}</p>
              <div className="mt-auto border-t border-[#17332c]/10 pt-5">
                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.16em] text-[#a06c2f]">
                  <Eye size={16} /> View complete guide
                </span>
              </div>
            </div>
          </button>
        ))}
      </div>

      {selected && detail && (
        <div
          className="fixed inset-0 z-[110] flex items-end justify-center bg-[#071b18]/70 p-0 backdrop-blur-md sm:p-5 lg:items-center"
          role="presentation"
          onMouseDown={(event) => {
            if (event.currentTarget === event.target) setSelectedName(null);
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="destination-guide-title"
            className="destination-detail-modal max-h-[94svh] w-full max-w-6xl overflow-y-auto rounded-t-[2rem] border border-[#d6a54a]/35 bg-[#f3ead8] text-[#17332c] shadow-[0_35px_120px_rgba(4,20,17,.5)] sm:rounded-[2rem]"
          >
            <div className="grid lg:grid-cols-[.9fr_1.1fr]">
              <div className="relative min-h-72 overflow-hidden lg:min-h-[42rem] lg:rounded-l-[2rem]">
                <Image src={selected.image} alt={`${selected.name} landscape`} fill unoptimized sizes="(max-width:1024px) 100vw,45vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#17332c]/90 via-transparent to-[#17332c]/10" />
                <div className="absolute inset-x-0 bottom-0 p-7 text-white sm:p-9">
                  <p className="text-[10px] font-bold uppercase tracking-[.22em] text-[#efc877]">Complete destination guide</p>
                  <h3 id="destination-guide-title" className="mt-2 text-4xl font-semibold sm:text-5xl">{selected.name}</h3>
                  <p className="mt-3 max-w-xl text-sm leading-6 text-white/70">{selected.description}</p>
                </div>
              </div>

              <div className="relative p-6 sm:p-9">
                <button ref={closeButtonRef} type="button" onClick={() => setSelectedName(null)} className="absolute right-4 top-4 z-20 grid h-11 w-11 place-items-center rounded-full border border-[#17332c]/15 bg-white/75 text-[#17332c] shadow-lg backdrop-blur-md transition hover:rotate-6 hover:bg-[#7a263a] hover:text-white" aria-label="Close destination guide">
                  <X size={20} />
                </button>

                <div className="grid grid-cols-2 gap-3 pr-12">
                  <InfoChip icon={Mountain} label="Altitude" value={detail.altitude} />
                  <InfoChip icon={CalendarDays} label="Best time" value={detail.bestTime} />
                  <InfoChip icon={Clock3} label="Trip duration" value={detail.tripDuration} />
                  <InfoChip icon={Compass} label="Travel time" value={detail.journeyTime} />
                </div>

                <div className="mt-8 space-y-8">
                  <GuideSection icon={History} title="History and heritage">{detail.history}</GuideSection>

                  <div>
                    <SectionHeading icon={Sparkles} title="Places to see" />
                    <div className="mt-4 grid gap-2 sm:grid-cols-2">
                      {detail.placesToSee.map((place) => (
                        <div key={place} className="flex items-start gap-2 rounded-xl border border-[#b68b3e]/20 bg-white/55 px-3 py-3 text-sm leading-5 text-[#17332c]/75">
                          <MapPin size={15} className="mt-0.5 shrink-0 text-[#a06c2f]" />{place}
                        </div>
                      ))}
                    </div>
                  </div>

                  <GuideSection icon={Route} title="How to reach from Siliguri">{detail.fromSiliguri}</GuideSection>

                  <div className="rounded-2xl border border-[#d6a54a]/30 bg-[#d6a54a]/10 p-4 text-sm leading-6 text-[#71531f]">
                    <div className="mb-1 flex items-center gap-2 font-bold"><ShieldAlert size={17} />Permit and access</div>
                    {detail.permit}
                  </div>

                  {detail.travelNote && (
                    <div className="rounded-2xl border border-[#7a263a]/20 bg-[#7a263a]/8 p-4 text-sm leading-6 text-[#6b2636]">
                      <div className="mb-1 flex items-center gap-2 font-bold"><ShieldAlert size={17} />Important travel note</div>
                      {detail.travelNote}
                    </div>
                  )}

                  <p className="border-t border-[#17332c]/10 pt-5 text-xs leading-5 text-[#17332c]/50">Travel times, seasons and altitudes are approximate. Confirm current permits, road access, weather and health guidance through an authorised local operator before departure.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
}

function InfoChip({ icon: Icon, label, value }: { icon: typeof Mountain; label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-[#b68b3e]/25 bg-white/60 p-3 shadow-[0_8px_25px_rgba(75,54,29,.05)]">
      <Icon size={17} className="text-[#a06c2f]" />
      <p className="mt-2 text-[9px] font-bold uppercase tracking-[.14em] text-[#a06c2f]">{label}</p>
      <p className="mt-1 text-xs font-semibold leading-5">{value}</p>
    </div>
  );
}

function SectionHeading({ icon: Icon, title }: { icon: typeof Mountain; title: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="grid h-9 w-9 place-items-center rounded-full bg-[#17332c] text-[#efc877]"><Icon size={17} /></span>
      <h4 className="text-xl font-semibold">{title}</h4>
    </div>
  );
}

function GuideSection({ icon, title, children }: { icon: typeof Mountain; title: string; children: React.ReactNode }) {
  return (
    <div>
      <SectionHeading icon={icon} title={title} />
      <p className="mt-3 text-sm leading-7 text-[#17332c]/70">{children}</p>
    </div>
  );
}
