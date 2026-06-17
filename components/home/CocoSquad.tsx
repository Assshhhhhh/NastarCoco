"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties, ReactNode } from "react";

function fadeUp(visible: boolean, delay: number): React.CSSProperties {
  return {
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0px)" : "translateY(22px)",
    transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
  };
}

type Leader = {
  badge: string;        // CEO / CFO / COO
  title: string;        // Chief Executive Officer …
  focus: string;        // short role focus line
  desc: string;         // one-line role description
  keywords: string[];   // supporting highlights
  accent: string;       // main pineapple/green/orange tone
  accentSoft: string;   // lighter companion (gradients)
  accentDeep: string;   // contrast-safe tone for text/chips
  iconInk: string;      // icon colour on the medallion / badge
  icon: ReactNode;
};

const LEADERS: Leader[] = [
  {
    badge: "Nikolas",
    title: "Chief Executive Officer",
    focus: "Vision & Brand Direction",
    desc: "Sets the long-term vision and guards the soul of Nastar Coco — shaping where the brand goes and what it stands for.",
    keywords: ["Vision", "Brand", "Strategy"],
    accent: "#F6B21A",
    accentSoft: "#FFC93C",
    accentDeep: "#B97D08",
    iconInk: "#33211A",
    icon: (
      /* Compass — direction & vision */
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <circle cx="12" cy="12" r="9.5" />
        <polygon points="15.9 8.1 13.7 13.7 8.1 15.9 10.3 10.3 15.9 8.1" />
      </svg>
    ),
  },
  {
    badge: "Fabian",
    title: "Chief Financial Officer",
    focus: "Finance & Sustainable Growth",
    desc: "Builds the financial structure behind the brand — turning steady numbers into healthy, sustainable growth.",
    keywords: ["Finance", "Growth", "Structure"],
    accent: "#1F5A34",
    accentSoft: "#2E7A4A",
    accentDeep: "#1A4A2B",
    iconInk: "#FBF3E2",
    icon: (
      /* Upward trend — growth */
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <polyline points="3 17 9.5 10.5 13.5 14.5 21 6.5" />
        <polyline points="15.5 6.5 21 6.5 21 12" />
      </svg>
    ),
  },
  {
    badge: "Jimmy",
    title: "Chief Operating Officer",
    focus: "Operations & Execution",
    desc: "Turns plans into daily reality — running the kitchen, the bar, and the systems that let us scale with care.",
    keywords: ["Operations", "Execution", "Scale"],
    accent: "#EF8E1B",
    accentSoft: "#F8B24A",
    accentDeep: "#C2710D",
    iconInk: "#33211A",
    icon: (
      /* Gear — execution & systems */
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <circle cx="12" cy="12" r="3.2" />
        <path d="M12 2.5v2.4M12 19.1v2.4M21.5 12h-2.4M4.9 12H2.5M18.7 5.3l-1.7 1.7M7 17l-1.7 1.7M18.7 18.7 17 17M7 7 5.3 5.3" />
      </svg>
    ),
  },
];

/* Head-and-shoulders silhouette for the portrait placeholder */
const AvatarGlyph = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
    <circle cx="12" cy="8.5" r="4.2" />
    <path d="M3.5 21c0-4.7 3.8-7.5 8.5-7.5s8.5 2.8 8.5 7.5" />
  </svg>
);

export default function CocoSquad() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-24 md:py-32">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="flex flex-col items-center text-center gap-4 mb-14 md:mb-16" style={fadeUp(visible, 0)}>
          <span
            className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.22em] uppercase"
            style={{ color: "#B97D08" }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#F6B21A" }} />
            Leadership
          </span>

          <h2
            className="font-display font-bold leading-[1.08] tracking-tight"
            style={{ fontSize: "clamp(2.1rem, 4vw, 3.3rem)", color: "#33211A" }}
          >
            Meet the{" "}
            <span style={{ color: "#F2920C" }}>Coco Squad</span>
          </h2>

          <p
            className="text-[15px] leading-relaxed max-w-2xl"
            style={{ color: "rgba(51,33,26,0.64)" }}
          >
            Three leaders steering Nastar Coco — pairing a young, hands-on energy
            with the vision, structure, and discipline of a growing brand.
          </p>
        </div>

        {/* Leadership cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7 items-stretch">
          {LEADERS.map((leader, i) => (
            <div key={leader.badge} className="flex" style={fadeUp(visible, 150 + i * 120)}>
            <article
              className="squad-card group relative overflow-hidden rounded-3xl flex flex-col w-full h-full"
              style={{ "--accent": leader.accent } as CSSProperties}
            >
              {/* ── Portrait placeholder ── */}
              <div
                className="relative w-full aspect-[4/5]"
                style={{
                  background: `linear-gradient(160deg, ${leader.accent}26 0%, #FBF3E2 52%, ${leader.accentSoft}33 100%)`,
                }}
              >
                {/* Soft accent glow */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  aria-hidden
                  style={{ background: `radial-gradient(120% 80% at 50% 18%, ${leader.accent}24 0%, transparent 60%)` }}
                />

                {/* Avatar silhouette + caption */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6">
                  <div
                    className="w-24 h-24 sm:w-28 sm:h-28"
                    style={{ color: leader.accent, opacity: 0.4 }}
                  >
                    <AvatarGlyph />
                  </div>
                  <span
                    className="text-[10.5px] font-semibold tracking-[0.18em] uppercase"
                    style={{ color: leader.accentDeep, opacity: 0.7 }}
                  >
                    Portrait coming soon
                  </span>
                </div>

                {/* Role label — editorial mark, no enclosing border */}
                <div className="absolute top-5 left-5 flex items-center gap-2.5">
                  <span
                    className="block w-1 h-8 rounded-full"
                    style={{ background: `linear-gradient(${leader.accent}, ${leader.accentSoft})` }}
                    aria-hidden
                  />
                  <span
                    className="font-extrabold uppercase leading-none"
                    style={{
                      fontSize: "1.4rem",
                      letterSpacing: "0.16em",
                      color: leader.accentDeep,
                      textShadow: "0 1px 1px rgba(51,33,26,0.12)",
                    }}
                  >
                    {leader.badge}
                  </span>
                </div>

                {/* Themed medallion — straddles the seam */}
                <span
                  className="absolute left-7 bottom-0 translate-y-1/2 z-20 flex items-center justify-center rounded-2xl"
                  style={{
                    width: "3.5rem",
                    height: "3.5rem",
                    background: `linear-gradient(140deg, ${leader.accent}, ${leader.accentSoft})`,
                    color: leader.iconInk,
                    boxShadow: `0 10px 22px ${leader.accent}40`,
                    border: "3px solid #FFFCF5",
                  }}
                  aria-hidden
                >
                  <span className="w-6 h-6">{leader.icon}</span>
                </span>
              </div>

              {/* ── Content ── */}
              <div className="relative z-10 p-7 pt-11 flex flex-col flex-1">
                {/* Title */}
                <h3
                  className="font-display font-bold leading-tight mb-2"
                  style={{ fontSize: "clamp(1.45rem, 2.2vw, 1.8rem)", color: "#33211A" }}
                >
                  {leader.title}
                </h3>

                {/* Focus line */}
                <p
                  className="text-[12px] font-bold tracking-[0.12em] uppercase mb-4"
                  style={{ color: leader.accentDeep }}
                >
                  {leader.focus}
                </p>

                {/* Description */}
                <p className="text-[14px] leading-relaxed" style={{ color: "rgba(51,33,26,0.62)" }}>
                  {leader.desc}
                </p>

                {/* Divider */}
                <div
                  className="h-px w-full my-6 mt-auto"
                  style={{ backgroundColor: "rgba(51,33,26,0.1)" }}
                />

                {/* Keyword chips */}
                <div className="flex flex-wrap gap-2">
                  {leader.keywords.map((kw) => (
                    <span
                      key={kw}
                      className="inline-flex items-center rounded-lg px-2.5 py-1 text-[11px] font-semibold tracking-[0.04em]"
                      style={{
                        color: leader.accentDeep,
                        backgroundColor: `${leader.accent}14`,
                      }}
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              </div>
            </article>
            </div>
          ))}
        </div>

        {/* Closing brand statement */}
        <div className="mt-16 md:mt-20 flex flex-col items-center text-center gap-4" style={fadeUp(visible, 560)}>
          <div className="h-[3px] w-12 rounded-full" style={{ background: "linear-gradient(90deg, #F2920C, #F6B21A)" }} />
          <p
            className="font-display max-w-2xl leading-relaxed"
            style={{ color: "rgba(51,33,26,0.82)", fontSize: "clamp(1.1rem, 1.8vw, 1.4rem)" }}
          >
            One vision, backed by structure and execution — the team turning a
            family recipe into a modern Indonesian dessert and café brand.
          </p>
        </div>

      </div>
    </section>
  );
}
