"use client";

import { useEffect, useRef, useState } from "react";

const MILESTONES = [
  {
    title: "Origins",
    desc: "A cherished home recipe, crafted with warmth and tradition.",
    icon: (
      <svg className="w-[32px] h-[32px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 22V12h6v10" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Growth",
    desc: "A premium-casual brand with beautiful packaging and gift-worthy products.",
    icon: (
      <svg className="w-[32px] h-[32px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22V12M12 12C12 7 8 3 3 3c0 5 4 9 9 9zM12 12C12 7 16 3 21 3c0 5-4 9-9 9z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Retail",
    desc: "Now stocked at Food Hall, Kemchick, and select retail partners.",
    icon: (
      <svg className="w-[32px] h-[32px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Today",
    desc: "Expanding with Cocoffee — café, lab, kitchen, and community.",
    icon: (
      <svg className="w-[32px] h-[32px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 8h1a4 4 0 010 8h-1M3 8h14v9a4 4 0 01-4 4H7a4 4 0 01-4-4V8z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const STATS = [
  { value: "10", label: "Team Members" },
  { value: "3", label: "Divisions" },
  { value: "2", label: "Brands" },
  { value: "2", label: "Premium Retailers" },
];

const CERTS = ["NIB", "PIRT", "Halal MUI", "BPOM", "Nutrition"];

function fadeUp(visible: boolean, delay: number): React.CSSProperties {
  return {
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0px)" : "translateY(22px)",
    transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
  };
}

export default function BrandStory() {
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
    <section
      ref={sectionRef}
      id="story"
      className="relative overflow-hidden py-24 md:py-32 scroll-mt-28 md:scroll-mt-32"
      style={{
        background: "linear-gradient(180deg, #FFFDF7 0%, #FCF6EA 58%, #F6EAD6 100%)",
        color: "#33211A",
      }}
    >
      {/* Subtle warm grain */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='220'%3E%3Cfilter id='bs'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23bs)'/%3E%3C/svg%3E")`,
          backgroundSize: "220px",
          opacity: 0.025,
          mixBlendMode: "multiply",
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-16 lg:gap-20 items-stretch">

          {/* Left — Story */}
          <div className="flex flex-col gap-8 -mt-8">

            {/* Eyebrow + Headline */}
            <div className="flex flex-col gap-3" style={fadeUp(visible, 0)}>
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: "#F6B21A" }} />
                <p className="text-[13px] font-semibold tracking-[0.2em] uppercase" style={{ color: "#1F5A34" }}>
                  About Us
                </p>
              </div>
              <h2
                className="font-display leading-[1.1] tracking-tight"
                style={{ fontSize: "clamp(2.1rem, 3.8vw, 3.25rem)", color: "#33211A" }}
              >
                Born from a hobby,
                <br />
                grown into a{" "}
                <em className="not-italic italic" style={{ color: "#1F5A34" }}>
                  story.
                </em>
              </h2>
            </div>

            {/* Body */}
            <div
              className="flex flex-col gap-6 leading-relaxed"
              style={{ fontSize: "clamp(1rem, 1.25vw, 1.125rem)", color: "rgba(51,33,26,0.65)", ...fadeUp(visible, 150) }}
            >
              <p>
                Nastar Coco began with a deep love for nastar — the classic pineapple pastry that carries the warmth of home, family, and shared moments.
              </p>
              <p>
                What started as a cherished housemade family recipe soon grew beyond its original purpose, evolving into a modern dessert brand. Today, Nastar Coco brings the comforting flavors of Indonesia to life through thoughtfully crafted products, distinctive packaging, a welcoming café experience, and an expanding retail presence.
              </p>
            </div>

            {/* Stats */}
            <div
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-7"
              style={{ borderTop: "1px solid rgba(51,33,26,0.1)", ...fadeUp(visible, 300) }}
            >
              {STATS.map((s) => (
                <div key={s.label} className="flex flex-col gap-1">
                  <span className="font-display leading-none" style={{ fontSize: "2.4rem", color: "#1F5A34" }}>
                    {s.value}
                  </span>
                  <span className="text-[11px] font-semibold tracking-[0.18em] uppercase" style={{ color: "rgba(51,33,26,0.5)" }}>
                    {s.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="flex flex-wrap gap-x-6 gap-y-2.5 -mt-3" style={fadeUp(visible, 420)}>
              {CERTS.map((c) => (
                <span key={c} className="flex items-center gap-2">
                  <span
                    className="w-4 h-4 rounded-full flex items-center justify-center shrink-0"
                    style={{ backgroundColor: "rgba(246,178,26,0.18)" }}
                  >
                    <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="none" stroke="#C8900C" strokeWidth="3">
                      <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-[11px] font-semibold tracking-[0.14em] uppercase" style={{ color: "rgba(51,33,26,0.55)" }}>
                    {c}
                  </span>
                </span>
              ))}
            </div>
          </div>

          {/* Right — Our Journey card */}
          <div
            className="relative overflow-hidden rounded-3xl px-9 pt-8 pb-3 md:px-12 md:pt-10 md:pb-4 flex flex-col h-full"
            style={{
              backgroundImage: "url('/bg for journey.png')",
              backgroundSize: "cover",
              backgroundPosition: "right center",
              border: "1px solid rgba(255,253,247,0.08)",
              boxShadow: "0 8px 40px rgba(18,45,28,0.25)",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0px) scale(1)" : "translateY(24px) scale(0.97)",
              transition: "opacity 0.75s ease 180ms, transform 0.75s ease 180ms",
            }}
          >
            {/* Ambient glow */}
            <div
              className="absolute -top-24 -right-24 w-80 h-80 rounded-full pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(246,178,26,0.1) 0%, transparent 70%)" }}
            />

            {/* Card header */}
            <div
              className="relative z-10 flex items-center gap-2.5 pb-9"
              style={{ borderBottom: "1px solid rgba(255,253,247,0.1)", ...fadeUp(visible, 350) }}
            >
              <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: "#F6B21A" }} />
              <span className="text-[12px] font-semibold tracking-[0.22em] uppercase" style={{ color: "rgba(255,253,247,0.7)" }}>
                Our Journey
              </span>
            </div>

            {/* Chapters */}
            <div className="relative z-10 flex flex-col flex-1">
              {MILESTONES.map((m, i) => (
                <div key={i} className="flex-1 flex flex-col" style={fadeUp(visible, 460 + i * 100)}>
                  {i > 0 && (
                    <div style={{ height: "1px", backgroundColor: "rgba(255,253,247,0.08)" }} />
                  )}
                  <div
                    className="grid flex-1 py-5"
                    style={{
                      gridTemplateColumns: "2.5rem 1fr 1.75rem",
                      columnGap: "1.25rem",
                      alignItems: "start",
                    }}
                  >
                    <span className="font-display leading-none pt-1" style={{ color: "#F6B21A", fontSize: "1.5rem" }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="flex flex-col gap-1.5">
                      <p className="font-display leading-tight" style={{ color: "#FFFDF7", fontSize: "1.4rem" }}>
                        {m.title}
                      </p>
                      <p className="leading-relaxed" style={{ fontSize: "0.98rem", color: "rgba(255,253,247,0.55)" }}>
                        {m.desc}
                      </p>
                    </div>
                    <span className="hidden sm:flex items-center justify-end self-center" style={{ color: "rgba(246,178,26,0.45)" }}>
                      {m.icon}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
