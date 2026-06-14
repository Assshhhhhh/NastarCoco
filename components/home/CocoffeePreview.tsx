import Link from "next/link";

const FLOORS = [
  {
    floor: "1F",
    name: "Nastar Coco Lab",
    desc: "Artisan production, R&D, and quality.",
    href: "/cocoffee#floor-1",
    bg: "linear-gradient(160deg, #E0C193 0%, #D2AE7B 100%)",
    shadow: "0 6px 22px rgba(110,74,41,0.18), inset 0 1px 0 rgba(255,255,255,0.5), inset 0 -2px 7px rgba(110,74,41,0.12)",
    border: "1.5px solid rgba(110,74,41,0.22)",
    floorColor: "rgba(46,29,18,0.78)",
    nameColor: "#2E1D12",
    descColor: "rgba(46,29,18,0.62)",
    arrowColor: "#1F5A34",
    strokeColor: "#2E1D12",
    illustration: (
      /* Baking tray of nastar + oven heat + quality badge */
      <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
        {/* Heat squiggles — oven warmth */}
        <path d="M46 46 Q41 37 46 28 Q51 19 46 10" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
        <path d="M80 44 Q75 35 80 26 Q85 17 80 8" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
        <path d="M114 46 Q109 37 114 28 Q119 19 114 10" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
        {/* Baking tray */}
        <rect x="16" y="54" width="128" height="56" rx="6" stroke="currentColor" strokeWidth="1.4" />
        {/* Tray handles */}
        <path d="M8 68 Q5 74 5 82 Q5 90 8 96" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
        <path d="M152 68 Q155 74 155 82 Q155 90 152 96" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
        {/* Three nastar cookies on tray */}
        <circle cx="42" cy="82" r="14" stroke="currentColor" strokeWidth="1.2" />
        <circle cx="42" cy="82" r="8" stroke="currentColor" strokeWidth="0.9" strokeDasharray="3 2.5" />
        <circle cx="42" cy="82" r="3" fill="currentColor" opacity="0.2" />
        <circle cx="80" cy="82" r="14" stroke="currentColor" strokeWidth="1.2" />
        <circle cx="80" cy="82" r="8" stroke="currentColor" strokeWidth="0.9" strokeDasharray="3 2.5" />
        <circle cx="80" cy="82" r="3" fill="currentColor" opacity="0.2" />
        <circle cx="118" cy="82" r="14" stroke="currentColor" strokeWidth="1.2" />
        <circle cx="118" cy="82" r="8" stroke="currentColor" strokeWidth="0.9" strokeDasharray="3 2.5" />
        <circle cx="118" cy="82" r="3" fill="currentColor" opacity="0.2" />
        {/* Quality badge — bottom right */}
        <circle cx="130" cy="140" r="15" stroke="currentColor" strokeWidth="1.1" />
        <path d="M121 140 L127 147 L140 132" stroke="currentColor" strokeWidth="1.15" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    floor: "2F",
    name: "Cocoffee & Menu",
    desc: "Specialty coffee, café bar & full menu.",
    href: "/cocoffee#floor-2",
    bg: "linear-gradient(160deg, #C49A68 0%, #B68A55 100%)",
    shadow: "0 6px 22px rgba(110,74,41,0.2), inset 0 1px 0 rgba(255,255,255,0.4), inset 0 -2px 7px rgba(90,58,32,0.14)",
    border: "1.5px solid rgba(110,74,41,0.26)",
    floorColor: "rgba(46,29,18,0.76)",
    nameColor: "#2E1D12",
    descColor: "rgba(46,29,18,0.6)",
    arrowColor: "#1F5A34",
    strokeColor: "#2E1D12",
    illustration: (
      /* Menu board + espresso cup + saucer + steam + coffee beans */
      <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
        {/* Menu board — left */}
        <rect x="8" y="28" width="42" height="58" rx="3" stroke="currentColor" strokeWidth="1.1" />
        <line x1="14" y1="44" x2="44" y2="44" stroke="currentColor" strokeWidth="0.85" />
        <line x1="14" y1="54" x2="44" y2="54" stroke="currentColor" strokeWidth="0.85" />
        <line x1="14" y1="64" x2="38" y2="64" stroke="currentColor" strokeWidth="0.85" />
        <line x1="14" y1="74" x2="42" y2="74" stroke="currentColor" strokeWidth="0.85" />
        {/* Menu stand */}
        <line x1="29" y1="86" x2="29" y2="98" stroke="currentColor" strokeWidth="1.0" strokeLinecap="round" />
        <line x1="20" y1="98" x2="38" y2="98" stroke="currentColor" strokeWidth="1.0" strokeLinecap="round" />
        {/* Steam — above cup */}
        <path d="M76 74 Q71 64 76 54 Q81 44 76 34" stroke="currentColor" strokeWidth="1.15" strokeLinecap="round" />
        <path d="M90 70 Q85 60 90 50 Q95 40 90 30" stroke="currentColor" strokeWidth="1.15" strokeLinecap="round" />
        <path d="M104 74 Q99 64 104 54 Q109 44 104 34" stroke="currentColor" strokeWidth="1.15" strokeLinecap="round" />
        {/* Espresso cup body (demitasse) */}
        <path d="M62 86 L67 122 Q70 132 90 132 Q110 132 113 122 L118 86 Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
        <ellipse cx="90" cy="86" rx="28" ry="7.5" stroke="currentColor" strokeWidth="1.2" />
        {/* Cup handle */}
        <path d="M118 95 Q136 95 136 109 Q136 123 118 123" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
        {/* Saucer */}
        <ellipse cx="90" cy="134" rx="36" ry="8" stroke="currentColor" strokeWidth="1.1" />
        {/* Coffee beans */}
        <ellipse cx="26" cy="118" rx="10" ry="6.5" transform="rotate(-25 26 118)" stroke="currentColor" strokeWidth="1.05" />
        <path d="M17 118 Q26 113 35 118" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
        <ellipse cx="144" cy="70" rx="10" ry="6.5" transform="rotate(18 144 70)" stroke="currentColor" strokeWidth="1.05" />
        <path d="M135 70 Q144 65 153 70" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
        <ellipse cx="140" cy="144" rx="9" ry="5.5" transform="rotate(-12 140 144)" stroke="currentColor" strokeWidth="1.0" />
        <path d="M132 144 Q140 139.5 148 144" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    floor: "3F",
    name: "Kitchen Studio & Brand HQ",
    desc: "Craft kitchen, studio & brand office.",
    href: "/cocoffee#floor-3",
    bg: "linear-gradient(160deg, #9E7048 0%, #8A5F3A 100%)",
    shadow: "0 7px 26px rgba(74,46,28,0.3), inset 0 1px 0 rgba(255,255,255,0.12), inset 0 -2px 8px rgba(0,0,0,0.14)",
    border: "1.5px solid rgba(246,178,26,0.2)",
    floorColor: "rgba(251,243,226,0.86)",
    nameColor: "#FBF3E2",
    descColor: "rgba(251,243,226,0.62)",
    arrowColor: "#F6B21A",
    strokeColor: "#FBF3E2",
    illustration: (
      /* Camera/lens (brand studio) + mixing bowl + whisk + label tag */
      <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
        {/* Camera lens — upper left */}
        <circle cx="40" cy="40" r="24" stroke="currentColor" strokeWidth="1.3" />
        <circle cx="40" cy="40" r="15" stroke="currentColor" strokeWidth="1.0" strokeDasharray="4 3" />
        <circle cx="40" cy="40" r="6.5" fill="currentColor" opacity="0.17" />
        <circle cx="33" cy="33" r="2.5" fill="currentColor" opacity="0.28" />
        {/* Whisk — right side, angled */}
        <line x1="128" y1="8" x2="112" y2="52" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
        {/* Whisk wires */}
        <path d="M112 52 Q96 60 96 80 Q96 100 112 106" stroke="currentColor" strokeWidth="1.0" strokeLinecap="round" />
        <path d="M112 52 Q100 62 102 82 Q104 98 112 106" stroke="currentColor" strokeWidth="1.0" strokeLinecap="round" />
        <path d="M112 52 Q124 60 126 80 Q128 98 112 106" stroke="currentColor" strokeWidth="1.0" strokeLinecap="round" />
        <path d="M112 52 Q122 64 120 82 Q118 98 112 106" stroke="currentColor" strokeWidth="1.0" strokeLinecap="round" />
        <ellipse cx="112" cy="106" rx="13" ry="4.5" stroke="currentColor" strokeWidth="0.9" />
        {/* Mixing bowl — lower left */}
        <path d="M16 108 Q16 152 64 152 Q112 152 112 108 Z" stroke="currentColor" strokeWidth="1.3" />
        <line x1="16" y1="108" x2="112" y2="108" stroke="currentColor" strokeWidth="1.1" />
        <path d="M16 120 Q8 120 8 130 Q8 140 16 140" stroke="currentColor" strokeWidth="1.0" strokeLinecap="round" />
        <path d="M112 120 Q120 120 120 130 Q120 140 112 140" stroke="currentColor" strokeWidth="1.0" strokeLinecap="round" />
        {/* Brand label tag — bottom right */}
        <rect x="120" y="130" width="36" height="24" rx="3" stroke="currentColor" strokeWidth="1.0" />
        <path d="M120 130 L114 137 L120 144" stroke="currentColor" strokeWidth="1.0" strokeLinejoin="round" />
        <line x1="126" y1="138" x2="150" y2="138" stroke="currentColor" strokeWidth="0.75" />
        <line x1="126" y1="145" x2="144" y2="145" stroke="currentColor" strokeWidth="0.75" />
      </svg>
    ),
  },
  {
    floor: "4F",
    name: "Community Stage",
    desc: "Workshops, events & community gatherings.",
    href: "/cocoffee#floor-4",
    bg: "linear-gradient(160deg, #74492E 0%, #5C3923 100%)",
    shadow: "0 8px 30px rgba(46,24,12,0.4), inset 0 1px 0 rgba(255,255,255,0.08), inset 0 -2px 9px rgba(0,0,0,0.22)",
    border: "1.5px solid rgba(246,178,26,0.26)",
    floorColor: "rgba(251,243,226,0.88)",
    nameColor: "#FBF3E2",
    descColor: "rgba(251,243,226,0.6)",
    arrowColor: "#F6B21A",
    strokeColor: "#FBF3E2",
    illustration: (
      /* Hanging pendant lights + round workshop table + people */
      <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
        {/* Pendant light 1 — left, mid-height */}
        <line x1="30" y1="0" x2="30" y2="28" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
        <path d="M17 28 Q17 50 30 50 Q43 50 43 28 Z" stroke="currentColor" strokeWidth="1.2" />
        <line x1="17" y1="28" x2="43" y2="28" stroke="currentColor" strokeWidth="1.0" />
        <circle cx="30" cy="42" r="2.8" fill="currentColor" opacity="0.26" />
        {/* Soft glow ring below light 1 */}
        <ellipse cx="30" cy="52" rx="10" ry="3" stroke="currentColor" strokeWidth="0.65" strokeDasharray="2.5 2" opacity="0.55" />
        {/* Pendant light 2 — center, hangs lowest */}
        <line x1="80" y1="0" x2="80" y2="40" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
        <path d="M67 40 Q67 62 80 62 Q93 62 93 40 Z" stroke="currentColor" strokeWidth="1.2" />
        <line x1="67" y1="40" x2="93" y2="40" stroke="currentColor" strokeWidth="1.0" />
        <circle cx="80" cy="54" r="2.8" fill="currentColor" opacity="0.26" />
        <ellipse cx="80" cy="64" rx="10" ry="3" stroke="currentColor" strokeWidth="0.65" strokeDasharray="2.5 2" opacity="0.55" />
        {/* Pendant light 3 — right, highest */}
        <line x1="130" y1="0" x2="130" y2="18" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
        <path d="M117 18 Q117 40 130 40 Q143 40 143 18 Z" stroke="currentColor" strokeWidth="1.2" />
        <line x1="117" y1="18" x2="143" y2="18" stroke="currentColor" strokeWidth="1.0" />
        <circle cx="130" cy="32" r="2.8" fill="currentColor" opacity="0.26" />
        <ellipse cx="130" cy="42" rx="10" ry="3" stroke="currentColor" strokeWidth="0.65" strokeDasharray="2.5 2" opacity="0.55" />
        {/* Round workshop table */}
        <ellipse cx="80" cy="122" rx="38" ry="13" stroke="currentColor" strokeWidth="1.3" />
        {/* Table legs */}
        <line x1="60" y1="124" x2="56" y2="152" stroke="currentColor" strokeWidth="1.0" strokeLinecap="round" />
        <line x1="100" y1="124" x2="104" y2="152" stroke="currentColor" strokeWidth="1.0" strokeLinecap="round" />
        {/* Seated people around table */}
        <circle cx="38" cy="108" r="6.5" stroke="currentColor" strokeWidth="1.05" />
        <line x1="38" y1="114.5" x2="38" y2="122" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
        <circle cx="80" cy="98" r="6.5" stroke="currentColor" strokeWidth="1.05" />
        <line x1="80" y1="104.5" x2="80" y2="112" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
        <circle cx="122" cy="108" r="6.5" stroke="currentColor" strokeWidth="1.05" />
        <line x1="122" y1="114.5" x2="122" y2="122" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function CocoffeePreview() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        height: "calc(100vh - var(--navbar-height))",
        background: [
          // Steamed-milk light glow from the top
          "radial-gradient(ellipse 85% 55% at 50% -8%, rgba(255,248,235,0.75) 0%, transparent 55%)",
          // Warm mocha pool toward the base
          "radial-gradient(ellipse 65% 50% at 50% 112%, rgba(150,106,68,0.22) 0%, transparent 60%)",
          // Soft deeper corners for depth
          "radial-gradient(ellipse 42% 42% at 0% 100%, rgba(110,74,41,0.16) 0%, transparent 55%)",
          "radial-gradient(ellipse 42% 42% at 100% 100%, rgba(110,74,41,0.14) 0%, transparent 55%)",
          // Base café-au-lait gradient (lighter mocha)
          "linear-gradient(165deg, #F0E2CB 0%, #E5D1B1 46%, #D8C09A 100%)",
        ].join(", "),
      }}
    >
      {/* Faint coffee-bean texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='64' height='64' viewBox='0 0 64 64' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%235E3C24' stroke-width='1' opacity='0.06'%3E%3Cellipse cx='16' cy='16' rx='7' ry='4' transform='rotate(-35 16 16)'/%3E%3Cpath d='M11 17 Q16 13 21 16' stroke-width='0.7'/%3E%3Cellipse cx='48' cy='48' rx='7' ry='4' transform='rotate(-35 48 48)'/%3E%3Cpath d='M43 49 Q48 45 53 48' stroke-width='0.7'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "64px 64px",
        }}
      />

      {/* Subtle grain */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='240' height='240'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23g)'/%3E%3C/svg%3E")`,
          backgroundSize: "240px",
          opacity: 0.03,
          mixBlendMode: "multiply",
        }}
      />

      {/* Top seam — eases in from the warm Brand Story above */}
      <div
        className="absolute top-0 inset-x-0 h-16 pointer-events-none"
        aria-hidden
        style={{ background: "linear-gradient(to bottom, rgba(246,234,214,0.8) 0%, transparent 100%)" }}
      />

      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col py-6 md:py-8 gap-5 md:gap-6">

        {/* Section header */}
        <div className="shrink-0">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-6 h-px shrink-0" style={{ backgroundColor: "#A06B43" }} />
            <p
              className="text-[11px] font-semibold tracking-[0.22em] uppercase"
              style={{ color: "rgba(74,46,28,0.6)" }}
            >
              A New Chapter — Cocoffee by Nastar Coco
            </p>
          </div>

          <h2
            className="font-display font-bold leading-tight mb-2"
            style={{ fontSize: "clamp(1.6rem, 3.2vw, 2.5rem)", color: "#3A2418" }}
          >
            Four Floors, One Warm Experience
          </h2>

          <p
            className="text-[14px] leading-relaxed max-w-lg"
            style={{ color: "rgba(74,46,28,0.66)" }}
          >
            From our artisan bakery lab to a community stage — every floor pours into the Cocoffee experience.
          </p>

          <div
            className="mt-3 h-[3px] w-12 rounded-full"
            style={{ background: "linear-gradient(90deg, #A06B43, #F6B21A)" }}
          />
        </div>

        {/* Floor panels */}
        <div className="flex-1 min-h-0 grid grid-cols-2 grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 gap-3 lg:gap-4">
          {FLOORS.map((f) => (
            <Link
              key={f.floor}
              href={f.href}
              className="floor-panel relative h-full flex flex-col justify-between rounded-2xl p-4 sm:p-5 overflow-hidden"
              style={{
                background: f.bg,
                border: f.border,
                boxShadow: f.shadow,
              }}
            >
              {/* Oversized watermark floor number */}
              <span
                className="floor-panel-bg-text absolute right-2 bottom-14 font-display font-bold leading-none select-none pointer-events-none"
                style={{
                  fontSize: "clamp(5rem, 9vw, 9rem)",
                  color: f.strokeColor,
                  opacity: 0.07,
                }}
                aria-hidden
              >
                {f.floor}
              </span>

              {/* Line art illustration — upper right */}
              <div
                className="floor-panel-illustration absolute top-0 right-0 w-[56%] pointer-events-none"
                style={{ color: f.strokeColor }}
                aria-hidden
              >
                {f.illustration}
              </div>

              {/* Floor number — foreground */}
              <span
                className="relative z-10 font-display font-bold leading-none"
                style={{
                  fontSize: "clamp(2.2rem, 3.8vw, 3.4rem)",
                  color: f.floorColor,
                }}
              >
                {f.floor}
              </span>

              {/* Bottom text block */}
              <div className="relative z-10 flex flex-col gap-1">
                <p
                  className="font-display leading-snug"
                  style={{ fontSize: "clamp(0.82rem, 1.15vw, 1rem)", color: f.nameColor }}
                >
                  {f.name}
                </p>
                <p
                  className="floor-panel-desc text-[11px] sm:text-[12px] leading-snug"
                  style={{ color: f.descColor }}
                >
                  {f.desc}
                </p>
                <span
                  className="floor-panel-arrow mt-1.5 text-[12px] sm:text-[13px] font-semibold"
                  style={{ color: f.arrowColor }}
                >
                  Explore floor →
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
