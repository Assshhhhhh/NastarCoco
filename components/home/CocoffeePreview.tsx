import Link from "next/link";
import type { ReactNode } from "react";

type Tone = "light" | "dark";

type Floor = {
  floor: string;
  name: string;
  desc: string;
  href: string;
  tone: Tone;
  accent: string;
  illustration: ReactNode;
};

/* Tone palettes — top floors sit on the dark facade, the ground floor on warm latte */
const TONE: Record<Tone, { name: string; desc: string; num: string; ink: string; glass: string; glassBorder: string; divider: string }> = {
  light: {
    name: "#FBF3E2",
    desc: "rgba(251,243,226,0.62)",
    num: "rgba(251,243,226,0.85)",
    ink: "#FBF3E2",
    glass: "rgba(255,248,235,0.05)",
    glassBorder: "rgba(255,248,235,0.16)",
    divider: "rgba(255,248,235,0.1)",
  },
  dark: {
    name: "#3A2418",
    desc: "rgba(58,36,24,0.62)",
    num: "rgba(58,36,24,0.82)",
    ink: "#3A2418",
    glass: "rgba(255,255,255,0.24)",
    glassBorder: "rgba(58,36,24,0.14)",
    divider: "rgba(58,36,24,0.14)",
  },
};

/* Floors are listed top → bottom, like a real elevation: rooftop first, ground last */
const FLOORS: Floor[] = [
  {
    floor: "4F",
    name: "Community Stage",
    desc: "Workshops, events & community gatherings on the rooftop.",
    href: "/cocoffee#floor-4",
    tone: "light",
    accent: "#F6B21A",
    illustration: (
      /* Hanging pendant lights + round workshop table + people */
      <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <line x1="30" y1="0" x2="30" y2="28" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
        <path d="M17 28 Q17 50 30 50 Q43 50 43 28 Z" stroke="currentColor" strokeWidth="1.2" />
        <line x1="17" y1="28" x2="43" y2="28" stroke="currentColor" strokeWidth="1.0" />
        <circle cx="30" cy="42" r="2.8" fill="currentColor" opacity="0.26" />
        <ellipse cx="30" cy="52" rx="10" ry="3" stroke="currentColor" strokeWidth="0.65" strokeDasharray="2.5 2" opacity="0.55" />
        <line x1="80" y1="0" x2="80" y2="40" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
        <path d="M67 40 Q67 62 80 62 Q93 62 93 40 Z" stroke="currentColor" strokeWidth="1.2" />
        <line x1="67" y1="40" x2="93" y2="40" stroke="currentColor" strokeWidth="1.0" />
        <circle cx="80" cy="54" r="2.8" fill="currentColor" opacity="0.26" />
        <ellipse cx="80" cy="64" rx="10" ry="3" stroke="currentColor" strokeWidth="0.65" strokeDasharray="2.5 2" opacity="0.55" />
        <line x1="130" y1="0" x2="130" y2="18" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
        <path d="M117 18 Q117 40 130 40 Q143 40 143 18 Z" stroke="currentColor" strokeWidth="1.2" />
        <line x1="117" y1="18" x2="143" y2="18" stroke="currentColor" strokeWidth="1.0" />
        <circle cx="130" cy="32" r="2.8" fill="currentColor" opacity="0.26" />
        <ellipse cx="130" cy="42" rx="10" ry="3" stroke="currentColor" strokeWidth="0.65" strokeDasharray="2.5 2" opacity="0.55" />
        <ellipse cx="80" cy="122" rx="38" ry="13" stroke="currentColor" strokeWidth="1.3" />
        <line x1="60" y1="124" x2="56" y2="152" stroke="currentColor" strokeWidth="1.0" strokeLinecap="round" />
        <line x1="100" y1="124" x2="104" y2="152" stroke="currentColor" strokeWidth="1.0" strokeLinecap="round" />
        <circle cx="38" cy="108" r="6.5" stroke="currentColor" strokeWidth="1.05" />
        <line x1="38" y1="114.5" x2="38" y2="122" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
        <circle cx="80" cy="98" r="6.5" stroke="currentColor" strokeWidth="1.05" />
        <line x1="80" y1="104.5" x2="80" y2="112" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
        <circle cx="122" cy="108" r="6.5" stroke="currentColor" strokeWidth="1.05" />
        <line x1="122" y1="114.5" x2="122" y2="122" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    floor: "3F",
    name: "Kitchen Studio & Brand HQ",
    desc: "Craft kitchen, content studio & the brand office.",
    href: "/cocoffee#floor-3",
    tone: "light",
    accent: "#F6B21A",
    illustration: (
      /* Camera/lens + whisk + mixing bowl + label tag */
      <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <circle cx="40" cy="40" r="24" stroke="currentColor" strokeWidth="1.3" />
        <circle cx="40" cy="40" r="15" stroke="currentColor" strokeWidth="1.0" strokeDasharray="4 3" />
        <circle cx="40" cy="40" r="6.5" fill="currentColor" opacity="0.17" />
        <circle cx="33" cy="33" r="2.5" fill="currentColor" opacity="0.28" />
        <line x1="128" y1="8" x2="112" y2="52" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
        <path d="M112 52 Q96 60 96 80 Q96 100 112 106" stroke="currentColor" strokeWidth="1.0" strokeLinecap="round" />
        <path d="M112 52 Q100 62 102 82 Q104 98 112 106" stroke="currentColor" strokeWidth="1.0" strokeLinecap="round" />
        <path d="M112 52 Q124 60 126 80 Q128 98 112 106" stroke="currentColor" strokeWidth="1.0" strokeLinecap="round" />
        <path d="M112 52 Q122 64 120 82 Q118 98 112 106" stroke="currentColor" strokeWidth="1.0" strokeLinecap="round" />
        <ellipse cx="112" cy="106" rx="13" ry="4.5" stroke="currentColor" strokeWidth="0.9" />
        <path d="M16 108 Q16 152 64 152 Q112 152 112 108 Z" stroke="currentColor" strokeWidth="1.3" />
        <line x1="16" y1="108" x2="112" y2="108" stroke="currentColor" strokeWidth="1.1" />
        <path d="M16 120 Q8 120 8 130 Q8 140 16 140" stroke="currentColor" strokeWidth="1.0" strokeLinecap="round" />
        <path d="M112 120 Q120 120 120 130 Q120 140 112 140" stroke="currentColor" strokeWidth="1.0" strokeLinecap="round" />
        <rect x="120" y="130" width="36" height="24" rx="3" stroke="currentColor" strokeWidth="1.0" />
        <path d="M120 130 L114 137 L120 144" stroke="currentColor" strokeWidth="1.0" strokeLinejoin="round" />
        <line x1="126" y1="138" x2="150" y2="138" stroke="currentColor" strokeWidth="0.75" />
        <line x1="126" y1="145" x2="144" y2="145" stroke="currentColor" strokeWidth="0.75" />
      </svg>
    ),
  },
  {
    floor: "2F",
    name: "Cocoffee & Menu",
    desc: "Specialty coffee, the café bar & our full menu.",
    href: "/cocoffee#floor-2",
    tone: "light",
    accent: "#F6B21A",
    illustration: (
      /* Menu board + espresso cup + saucer + steam + beans */
      <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <rect x="8" y="28" width="42" height="58" rx="3" stroke="currentColor" strokeWidth="1.1" />
        <line x1="14" y1="44" x2="44" y2="44" stroke="currentColor" strokeWidth="0.85" />
        <line x1="14" y1="54" x2="44" y2="54" stroke="currentColor" strokeWidth="0.85" />
        <line x1="14" y1="64" x2="38" y2="64" stroke="currentColor" strokeWidth="0.85" />
        <line x1="14" y1="74" x2="42" y2="74" stroke="currentColor" strokeWidth="0.85" />
        <line x1="29" y1="86" x2="29" y2="98" stroke="currentColor" strokeWidth="1.0" strokeLinecap="round" />
        <line x1="20" y1="98" x2="38" y2="98" stroke="currentColor" strokeWidth="1.0" strokeLinecap="round" />
        <path d="M76 74 Q71 64 76 54 Q81 44 76 34" stroke="currentColor" strokeWidth="1.15" strokeLinecap="round" />
        <path d="M90 70 Q85 60 90 50 Q95 40 90 30" stroke="currentColor" strokeWidth="1.15" strokeLinecap="round" />
        <path d="M104 74 Q99 64 104 54 Q109 44 104 34" stroke="currentColor" strokeWidth="1.15" strokeLinecap="round" />
        <path d="M62 86 L67 122 Q70 132 90 132 Q110 132 113 122 L118 86 Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
        <ellipse cx="90" cy="86" rx="28" ry="7.5" stroke="currentColor" strokeWidth="1.2" />
        <path d="M118 95 Q136 95 136 109 Q136 123 118 123" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
        <ellipse cx="90" cy="134" rx="36" ry="8" stroke="currentColor" strokeWidth="1.1" />
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
    floor: "1F",
    name: "Nastar Coco Lab",
    desc: "Artisan production, R&D & quality — where it all bakes.",
    href: "/cocoffee#floor-1",
    tone: "light",
    accent: "#F6B21A",
    illustration: (
      /* Baking tray of nastar + oven heat + quality badge */
      <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <path d="M46 46 Q41 37 46 28 Q51 19 46 10" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
        <path d="M80 44 Q75 35 80 26 Q85 17 80 8" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
        <path d="M114 46 Q109 37 114 28 Q119 19 114 10" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
        <rect x="16" y="54" width="128" height="56" rx="6" stroke="currentColor" strokeWidth="1.4" />
        <path d="M8 68 Q5 74 5 82 Q5 90 8 96" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
        <path d="M152 68 Q155 74 155 82 Q155 90 152 96" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
        <circle cx="42" cy="82" r="14" stroke="currentColor" strokeWidth="1.2" />
        <circle cx="42" cy="82" r="8" stroke="currentColor" strokeWidth="0.9" strokeDasharray="3 2.5" />
        <circle cx="42" cy="82" r="3" fill="currentColor" opacity="0.2" />
        <circle cx="80" cy="82" r="14" stroke="currentColor" strokeWidth="1.2" />
        <circle cx="80" cy="82" r="8" stroke="currentColor" strokeWidth="0.9" strokeDasharray="3 2.5" />
        <circle cx="80" cy="82" r="3" fill="currentColor" opacity="0.2" />
        <circle cx="118" cy="82" r="14" stroke="currentColor" strokeWidth="1.2" />
        <circle cx="118" cy="82" r="8" stroke="currentColor" strokeWidth="0.9" strokeDasharray="3 2.5" />
        <circle cx="118" cy="82" r="3" fill="currentColor" opacity="0.2" />
        <circle cx="130" cy="140" r="15" stroke="currentColor" strokeWidth="1.1" />
        <path d="M121 140 L127 147 L140 132" stroke="currentColor" strokeWidth="1.15" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function CocoffeePreview() {
  return (
    <section
      className="relative overflow-hidden py-16 md:py-24"
      style={{ minHeight: "calc(100vh - var(--navbar-height))" }}
    >
      {/* Soft gold spotlight behind the building */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[44rem] h-[34rem] pointer-events-none"
        aria-hidden
        style={{ background: "radial-gradient(ellipse at center, rgba(246,178,26,0.16) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">

        {/* Eyebrow */}
        <span
          className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-semibold tracking-[0.2em] uppercase mb-7"
          style={{
            backgroundColor: "rgba(74,46,28,0.07)",
            color: "#6B4423",
            border: "1px solid rgba(110,74,41,0.22)",
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#F6B21A" }} />
          A New Chapter — Cocoffee by Nastar Coco
        </span>

        {/* ── The Cocoffee Building ── */}
        <div className="w-full max-w-3xl">
          {/* Ground shadow */}
          <div
            className="mx-auto mb-[-1.5rem] h-8 w-[88%] rounded-[50%] pointer-events-none"
            aria-hidden
            style={{ background: "radial-gradient(ellipse, rgba(74,46,28,0.35) 0%, transparent 70%)", filter: "blur(6px)" }}
          />

          <div
            className="relative rounded-[2rem] overflow-hidden"
            style={{
              background:
                "linear-gradient(180deg, #5A3A24 0%, #4A2F1E 52%, #3D2718 100%)",
              border: "1px solid rgba(58,36,24,0.35)",
              boxShadow:
                "0 30px 70px rgba(74,46,28,0.4), inset 0 1px 0 rgba(255,255,255,0.12), inset 0 -2px 16px rgba(0,0,0,0.28)",
            }}
          >
            {/* ── Rooftop sign ── */}
            <div className="relative px-6 pt-9 pb-7 text-center">
              {/* String lights */}
              <svg viewBox="0 0 320 32" className="w-48 sm:w-56 h-7 mx-auto mb-4" fill="none" aria-hidden>
                <path d="M0 4 Q160 26 320 4" stroke="rgba(246,178,26,0.45)" strokeWidth="1" />
                {[
                  { x: 40, wire: 9 },
                  { x: 110, wire: 14 },
                  { x: 210, wire: 14 },
                  { x: 280, wire: 9 },
                ].map(({ x, wire }) => {
                  const cy = wire + 11;
                  return (
                    <g key={x}>
                      <line x1={x} y1={wire} x2={x} y2={cy - 4} stroke="rgba(246,178,26,0.4)" strokeWidth="0.8" />
                      <circle cx={x} cy={cy} r="3.4" fill="#F6B21A" opacity="0.9" />
                      <circle cx={x} cy={cy} r="6.5" fill="#F6B21A" opacity="0.18" />
                    </g>
                  );
                })}
              </svg>

              <p className="text-[10px] font-semibold tracking-[0.32em] uppercase mb-1.5" style={{ color: "rgba(251,243,226,0.5)" }}>
                Welcome to
              </p>
              <h2
                className="font-display font-bold leading-none"
                style={{
                  fontSize: "clamp(2.1rem, 5.5vw, 3.4rem)",
                  color: "#F6B21A",
                  textShadow: "0 0 26px rgba(246,178,26,0.45), 0 2px 2px rgba(0,0,0,0.3)",
                }}
              >
                Cocoffee
              </h2>
              <p className="mt-2.5 text-[13px] tracking-wide" style={{ color: "rgba(251,243,226,0.62)" }}>
                Four floors of warmth &amp; craft — under one roof.
              </p>
            </div>

            {/* ── Floors (elevation) ── */}
            <div className="relative">
              {/* Elevator shaft line */}
              <div
                className="absolute top-0 bottom-0 w-px pointer-events-none"
                aria-hidden
                style={{
                  left: "1.85rem",
                  background: "linear-gradient(to bottom, rgba(246,178,26,0.45), rgba(246,178,26,0.15))",
                }}
              />

              {FLOORS.map((f, i) => {
                const t = TONE[f.tone];
                return (
                  <Link
                    key={f.floor}
                    href={f.href}
                    className="floor-story group relative flex items-center gap-4 sm:gap-6 pl-14 sm:pl-16 pr-5 sm:pr-7 py-5 sm:py-6 transition-colors duration-300 hover:bg-[rgba(246,178,26,0.07)]"
                    style={{ borderTop: i === 0 ? "none" : `1px solid ${t.divider}` }}
                  >
                    {/* Shaft stop dot */}
                    <span
                      className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full opacity-45 transition-all duration-300 group-hover:opacity-100 group-hover:scale-150"
                      style={{ left: "1.85rem", backgroundColor: f.accent }}
                      aria-hidden
                    />

                    {/* Floor number */}
                    <span
                      className="font-display font-bold leading-none shrink-0 w-12 sm:w-14"
                      style={{ fontSize: "clamp(1.7rem, 3.2vw, 2.5rem)", color: t.num }}
                    >
                      {f.floor}
                    </span>

                    {/* Name + desc + explore */}
                    <div className="flex-1 min-w-0">
                      <p className="font-display leading-snug" style={{ fontSize: "clamp(1rem, 1.7vw, 1.3rem)", color: t.name }}>
                        {f.name}
                      </p>
                      <p className="text-[12px] sm:text-[13px] leading-snug mt-0.5" style={{ color: t.desc }}>
                        {f.desc}
                      </p>
                      <span
                        className="floor-story-arrow inline-block mt-2 text-[12px] font-semibold transition-transform duration-300 group-hover:translate-x-1"
                        style={{ color: f.accent }}
                      >
                        Explore floor →
                      </span>
                    </div>

                    {/* Lit window */}
                    <div
                      className="relative shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden p-2.5 transition-all duration-300"
                      style={{
                        backgroundColor: t.glass,
                        border: `1px solid ${t.glassBorder}`,
                        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.12)",
                      }}
                    >
                      {/* Warm glow when the lights come on */}
                      <div
                        className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"
                        aria-hidden
                        style={{ background: "radial-gradient(circle at 50% 40%, rgba(246,178,26,0.4) 0%, transparent 70%)" }}
                      />
                      {/* Window mullion */}
                      <div className="absolute inset-0 pointer-events-none" aria-hidden style={{ borderTop: `1px solid ${t.glassBorder}`, top: "50%" }} />
                      <div
                        className="relative w-full h-full opacity-55 transition-opacity duration-300 group-hover:opacity-100"
                        style={{ color: t.ink }}
                      >
                        {f.illustration}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* ── Street-level entrance ── */}
            <div className="relative">
              {/* Striped awning */}
              <div
                className="h-3"
                aria-hidden
                style={{ background: "repeating-linear-gradient(90deg, #D8842A 0 18px, #F7E6C6 18px 36px)", opacity: 0.92 }}
              />
              <div
                className="flex items-center justify-center gap-3 px-6 py-4"
                style={{ backgroundColor: "rgba(0,0,0,0.18)" }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="#FBF3E2" strokeWidth="1.6" className="w-4 h-4 shrink-0" aria-hidden>
                  <path d="M6 21V4a1 1 0 011-1h10a1 1 0 011 1v17M4 21h16" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="14.5" cy="12" r="1" fill="#FBF3E2" stroke="none" />
                </svg>
                <p className="text-[12px] sm:text-[13px] font-semibold tracking-wide" style={{ color: "rgba(251,243,226,0.82)" }}>
                  Open Daily · 08.00 – 20.00 WIB
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
