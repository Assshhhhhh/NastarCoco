import type { CSSProperties, ReactNode } from "react";
import { TEAM, GROUP_LABELS, type TeamMember } from "@/data/team";

type Squad = {
  key: TeamMember["group"];
  num: string;
  stamp: string;
  tagline: string;
  accent: string;       // main pineapple/orange tone for this squad
  accentSoft: string;   // lighter companion for the top bar
  illustration: ReactNode;
};

const SQUADS: Squad[] = [
  {
    key: "nastar",
    num: "01",
    stamp: "LAB",
    tagline: "Where the family recipe comes to life — baked fresh, every day.",
    accent: "#F6B21A",
    accentSoft: "#FFC93C",
    illustration: (
      /* Whisk + oven tray + nastar cookie */
      <svg viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
        <line x1="118" y1="6" x2="98" y2="56" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M98 56 Q80 64 80 88 Q80 108 98 116" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
        <path d="M98 56 Q86 66 88 90 Q90 108 98 116" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
        <path d="M98 56 Q110 64 112 88 Q114 108 98 116" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
        <ellipse cx="98" cy="116" rx="15" ry="5" stroke="currentColor" strokeWidth="1.0" />
        <circle cx="38" cy="46" r="26" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="38" cy="46" r="16" stroke="currentColor" strokeWidth="1.0" strokeDasharray="4 3" />
        <circle cx="38" cy="46" r="6" fill="currentColor" opacity="0.2" />
      </svg>
    ),
  },
  {
    key: "cocoffee",
    num: "02",
    stamp: "BAR",
    tagline: "Specialty coffee, café service, and the warm Cocoffee experience.",
    accent: "#EF8E1B",
    accentSoft: "#F8B24A",
    illustration: (
      /* Coffee cup + steam + bean */
      <svg viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
        <path d="M40 56 Q35 47 40 38 Q45 29 40 20" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
        <path d="M58 52 Q53 43 58 34 Q63 25 58 16" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
        <path d="M76 56 Q71 47 76 38 Q81 29 76 20" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
        <path d="M30 66 L36 104 Q39 114 58 114 Q77 114 80 104 L86 66 Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <ellipse cx="58" cy="66" rx="28" ry="7" stroke="currentColor" strokeWidth="1.2" />
        <path d="M86 76 Q104 76 104 90 Q104 104 86 104" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
        <ellipse cx="112" cy="116" rx="11" ry="7" transform="rotate(20 112 116)" stroke="currentColor" strokeWidth="1.1" />
        <path d="M103 116 Q112 111 121 116" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    key: "operations",
    num: "03",
    stamp: "OPS",
    tagline: "Logistics, support, and the systems that keep every order moving.",
    accent: "#F4A613",
    accentSoft: "#FBC74D",
    illustration: (
      /* Box + route line + checklist */
      <svg viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
        <path d="M52 26 L96 42 L96 92 L52 108 L8 92 L8 42 Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M8 42 L52 58 L96 42" stroke="currentColor" strokeWidth="1.1" strokeLinejoin="round" />
        <line x1="52" y1="58" x2="52" y2="108" stroke="currentColor" strokeWidth="1.1" />
        <path d="M30 34 L74 50" stroke="currentColor" strokeWidth="1.0" strokeLinecap="round" strokeDasharray="3 3" />
        <path d="M104 66 Q126 66 126 84 Q126 102 106 104" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeDasharray="3.5 3" />
        <path d="M106 104 L112 99 M106 104 L112 110" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
        <circle cx="118" cy="126" r="2.5" fill="currentColor" opacity="0.5" />
      </svg>
    ),
  },
];

export default function CocoSquad() {
  return (
    <section
      className="relative overflow-hidden py-24 md:py-32"
      style={{
        background: [
          "radial-gradient(ellipse 60% 55% at 8% 6%, rgba(242,146,12,0.2) 0%, transparent 55%)",
          "radial-gradient(ellipse 65% 60% at 96% 92%, rgba(246,178,26,0.22) 0%, transparent 58%)",
          "linear-gradient(165deg, #FFF8EC 0%, #FEEFD4 48%, #FBE2BC 100%)",
        ].join(", "),
      }}
    >
      {/* Diagonal movement accents */}
      <div
        className="absolute -top-24 -left-16 w-[34rem] h-40 rounded-full pointer-events-none rotate-[-18deg]"
        aria-hidden
        style={{ background: "linear-gradient(90deg, rgba(246,178,26,0.16), transparent)" }}
      />
      <div
        className="absolute top-1/3 -right-24 w-[30rem] h-32 rounded-full pointer-events-none rotate-[-14deg]"
        aria-hidden
        style={{ background: "linear-gradient(90deg, transparent, rgba(242,146,12,0.14))" }}
      />

      {/* Subtle grain */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='220'%3E%3Cfilter id='gs'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23gs)'/%3E%3C/svg%3E")`,
          backgroundSize: "220px",
          opacity: 0.03,
          mixBlendMode: "multiply",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="flex flex-col items-center text-center gap-4 mb-14 md:mb-16">
          <span
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-semibold tracking-[0.2em] uppercase"
            style={{
              backgroundColor: "rgba(31,90,52,0.08)",
              color: "#1F5A34",
              border: "1px solid rgba(31,90,52,0.2)",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#F2920C" }} />
            The People Behind the Craft
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
            A young team shaping Nastar Coco — from the oven, to the coffee bar,
            to every order that leaves our door.
          </p>
        </div>

        {/* Squad cards — one cohesive system, orange-forward */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {SQUADS.map((squad) => {
            const members = TEAM.filter((m) => m.group === squad.key);
            return (
              <article
                key={squad.key}
                className="squad-card group relative overflow-hidden rounded-3xl flex flex-col"
                style={{ "--accent": squad.accent } as CSSProperties}
              >
                {/* Top accent bar */}
                <span
                  className="absolute top-0 inset-x-0 h-1.5"
                  style={{ background: `linear-gradient(90deg, ${squad.accent}, ${squad.accentSoft})` }}
                  aria-hidden
                />

                {/* Diagonal corner accent */}
                <span
                  className="squad-diagonal absolute -right-10 -top-10 w-32 h-32 rounded-2xl rotate-[28deg] pointer-events-none"
                  style={{ backgroundColor: squad.accent, opacity: 0.1 }}
                  aria-hidden
                />

                {/* Faint line-art icon */}
                <div
                  className="squad-icon absolute top-3 right-3 w-[38%] pointer-events-none"
                  style={{ color: squad.accent }}
                  aria-hidden
                >
                  {squad.illustration}
                </div>

                <div className="relative z-10 p-6 sm:p-7 flex flex-col flex-1">
                  {/* Header: stamp + number */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="inline-flex items-center justify-center rounded-md px-2.5 py-1 text-[11px] font-bold tracking-[0.18em]"
                      style={{
                        color: "#1F5A34",
                        border: "1.5px solid rgba(31,90,52,0.4)",
                        backgroundColor: "rgba(31,90,52,0.05)",
                      }}
                    >
                      {squad.stamp}
                    </span>
                    <span
                      className="font-display font-bold leading-none"
                      style={{ fontSize: "1.6rem", color: squad.accent }}
                    >
                      {squad.num}
                    </span>
                  </div>

                  {/* Squad name + tagline */}
                  <h3
                    className="font-display font-bold leading-tight mb-1.5"
                    style={{ fontSize: "clamp(1.35rem, 2.2vw, 1.7rem)", color: "#33211A" }}
                  >
                    {GROUP_LABELS[squad.key]}
                  </h3>
                  <p className="text-[13px] leading-relaxed mb-5" style={{ color: "rgba(51,33,26,0.6)" }}>
                    {squad.tagline}
                  </p>

                  {/* Member roster */}
                  <div className="flex flex-col">
                    {members.map((member, i) => (
                      <div
                        key={member.name}
                        className="squad-row flex items-center gap-3.5 py-2.5"
                        style={{
                          borderTop: i === 0 ? "1px solid rgba(51,33,26,0.1)" : "none",
                          borderBottom: "1px solid rgba(51,33,26,0.1)",
                        }}
                      >
                        <span
                          className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 font-display font-bold"
                          style={{ backgroundColor: squad.accent, color: "#33211A", fontSize: "0.95rem" }}
                        >
                          {member.name.charAt(0)}
                        </span>
                        <div className="flex flex-col">
                          <span
                            className="squad-row-name font-semibold text-[14px] leading-tight"
                            style={{ color: "#33211A" }}
                          >
                            {member.name}
                          </span>
                          <span
                            className="text-[11px] font-medium tracking-[0.06em] uppercase leading-tight mt-0.5"
                            style={{ color: "rgba(51,33,26,0.55)" }}
                          >
                            {member.role}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Closing brand statement */}
        <div className="mt-16 md:mt-20 flex flex-col items-center text-center gap-4">
          <div className="h-[3px] w-12 rounded-full" style={{ background: "linear-gradient(90deg, #F2920C, #F6B21A)" }} />
          <p
            className="font-display max-w-2xl leading-relaxed"
            style={{ color: "rgba(51,33,26,0.82)", fontSize: "clamp(1.1rem, 1.8vw, 1.4rem)" }}
          >
            Built by a small team with big ambition — growing Nastar Coco from a
            family recipe into a modern Indonesian dessert and café brand.
          </p>
        </div>

      </div>
    </section>
  );
}
