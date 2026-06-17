"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { SITE, WHATSAPP_URL } from "@/data/site";

function fadeUp(mounted: boolean, delay: number): React.CSSProperties {
  return {
    opacity: mounted ? 1 : 0,
    transform: mounted ? "translateY(0px)" : "translateY(24px)",
    transition: `opacity 0.75s ease ${delay}ms, transform 0.75s ease ${delay}ms`,
  };
}

const ORDER_MSG = "Hi Nastar Coco! Saya tertarik dengan Nastar Coco Signature 🍍";

export default function MenuPage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="hero"
      className="relative overflow-hidden -mt-28 md:-mt-32 min-h-screen"
      style={{
        background:
          "radial-gradient(ellipse 60% 50% at 12% 88%, rgba(246,178,26,0.16) 0%, transparent 60%), linear-gradient(160deg, #FFF8EC 0%, #FBF0DA 60%, #F6E6C6 100%)",
      }}
    >
      {/* ── Organic dark-green block (top + right, soft diagonal left edge) ── */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
        aria-hidden
      >
        <defs>
          <linearGradient id="menuGreen" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1B452C" />
            <stop offset="55%" stopColor="#143A24" />
            <stop offset="100%" stopColor="#0E2A1A" />
          </linearGradient>
          <radialGradient id="menuGlow" cx="78%" cy="22%" r="60%">
            <stop offset="0%" stopColor="rgba(246,178,26,0.18)" />
            <stop offset="100%" stopColor="rgba(246,178,26,0)" />
          </radialGradient>
        </defs>

        {/* Main block */}
        <path
          d="M0,0 H1440 V900 H560 C380,835 140,660 0,480 Z"
          fill="url(#menuGreen)"
        />
        {/* Warm glow inside the block */}
        <path
          d="M0,0 H1440 V900 H560 C380,835 140,660 0,480 Z"
          fill="url(#menuGlow)"
        />
        {/* Gold hairline tracing the organic edge */}
        <path
          d="M560,900 C380,835 140,660 0,480"
          fill="none"
          stroke="#F6B21A"
          strokeOpacity="0.55"
          strokeWidth="2.5"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      {/* ── Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center lg:items-start pt-32 pb-16 lg:pt-44">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-10 items-center w-full">

          {/* Left — editorial copy (on green) */}
          <div className="max-w-xl">
            {/* Eyebrow */}
            <div className="flex items-center gap-2.5 mb-5" style={fadeUp(mounted, 150)}>
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "#F6B21A" }} />
              <p className="text-[12px] font-semibold tracking-[0.24em] uppercase" style={{ color: "rgba(255,253,247,0.75)" }}>
                Signature Series · 01
              </p>
            </div>

            {/* Headline */}
            <h1
              className="font-display leading-[1.05] tracking-tight mb-5"
              style={{ fontSize: "clamp(2.6rem, 5.2vw, 4.4rem)", color: "#FFFDF7", ...fadeUp(mounted, 250) }}
            >
              Nastar Coco
              <br />
              <em className="not-italic italic" style={{ color: "#F6B21A" }}>Signature</em>
            </h1>

            {/* Description */}
            <p
              className="leading-relaxed mb-7"
              style={{ fontSize: "clamp(0.98rem, 1.3vw, 1.1rem)", maxWidth: "30rem", color: "rgba(255,253,247,0.72)", ...fadeUp(mounted, 350) }}
            >
              Our signature nastar — delicate pineapple jam folded into a buttery,
              melt-in-your-mouth crust. Tradition, perfected in every golden bite.
            </p>

            {/* Divider */}
            <div
              className="h-[3px] w-14 rounded-full mb-6"
              style={{ background: "linear-gradient(90deg, #F6B21A, #F7D96B)", ...fadeUp(mounted, 420) }}
            />

            {/* Meta row */}
            <div className="flex items-center gap-5 mb-9 flex-wrap" style={fadeUp(mounted, 470)}>
              <div className="flex flex-col">
                <span className="text-[11px] font-semibold tracking-[0.16em] uppercase" style={{ color: "rgba(255,253,247,0.5)" }}>
                  Mulai dari
                </span>
                <span className="font-display leading-none mt-1" style={{ fontSize: "1.65rem", color: "#F6B21A" }}>
                  Rp ___
                </span>
              </div>
              <span className="w-px h-10" style={{ backgroundColor: "rgba(255,253,247,0.18)" }} />
              <div className="flex flex-col">
                <span className="text-[11px] font-semibold tracking-[0.16em] uppercase" style={{ color: "rgba(255,253,247,0.5)" }}>
                  Best for
                </span>
                <span className="text-[15px] font-medium mt-1.5" style={{ color: "rgba(255,253,247,0.85)" }}>
                  Hadiah &amp; keluarga
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-5" style={fadeUp(mounted, 560)}>
              <Link
                href={WHATSAPP_URL(ORDER_MSG)}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 rounded-full px-7 py-4 text-sm font-semibold tracking-[0.1em] uppercase transition-all duration-200 active:scale-[0.98]"
                style={{ backgroundColor: "#F6B21A", color: "#122D1C" }}
              >
                <WaIcon />
                Order on WhatsApp
                <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
              </Link>
              <Link
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold tracking-[0.1em] uppercase pb-0.5 border-b-2 transition-colors duration-200"
                style={{ color: "#FFFDF7", borderColor: "rgba(255,253,247,0.4)" }}
              >
                See on Instagram
              </Link>
            </div>
          </div>

          {/* Right — product showcase (on green) */}
          <div className="relative flex items-center justify-center lg:justify-end" style={fadeUp(mounted, 400)}>
            {/* Decorative wavy lines (echoing the sketch) */}
            <svg
              className="absolute -top-10 right-0 w-[115%] max-w-none pointer-events-none hidden sm:block"
              viewBox="0 0 400 160"
              fill="none"
              aria-hidden
            >
              {[18, 60, 102].map((y, i) => (
                <path
                  key={y}
                  d={`M20,${y} C90,${y - 16} 150,${y + 16} 220,${y} S350,${y - 14} 388,${y}`}
                  stroke="#F6B21A"
                  strokeOpacity={0.4 - i * 0.07}
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              ))}
            </svg>

            {/* Product placeholder medallion */}
            <div className="relative" style={{ width: "clamp(260px, 33vw, 420px)", aspectRatio: "1 / 1" }}>
              {/* Outer glow ring */}
              <div
                className="absolute inset-0 rounded-full"
                style={{ boxShadow: "0 30px 80px rgba(0,0,0,0.35)", background: "radial-gradient(circle at 50% 35%, rgba(246,178,26,0.25), transparent 65%)" }}
                aria-hidden
              />
              {/* The plate */}
              <div
                className="absolute inset-0 rounded-full flex flex-col items-center justify-center gap-4"
                style={{
                  background: "radial-gradient(circle at 50% 38%, #FEF3C7 0%, #F4E6C8 60%, #EAD3A0 100%)",
                  border: "2px solid rgba(246,178,26,0.7)",
                  boxShadow: "inset 0 2px 14px rgba(255,255,255,0.6), inset 0 -10px 30px rgba(200,144,12,0.18)",
                }}
              >
                <span style={{ color: "#C8900C" }}>
                  <NastarIcon />
                </span>
                <span className="text-[11px] font-semibold tracking-[0.18em] uppercase" style={{ color: "rgba(122,84,18,0.65)" }}>
                  Photo coming soon
                </span>
              </div>

              {/* Floating Signature seal */}
              <div
                className="absolute -top-3 -right-2 sm:top-2 sm:-right-4 flex items-center justify-center rounded-full text-center rotate-[10deg]"
                style={{
                  width: "5.5rem",
                  height: "5.5rem",
                  background: "linear-gradient(140deg, #122D1C, #1F5A34)",
                  border: "2px solid #F6B21A",
                  boxShadow: "0 10px 24px rgba(0,0,0,0.3)",
                }}
              >
                <span className="font-display leading-tight text-[13px]" style={{ color: "#F6B21A" }}>
                  Signature
                  <br />
                  Pick
                </span>
              </div>

              {/* Small dots accent */}
              <span className="absolute -bottom-1 left-2 w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#F6B21A", opacity: 0.8 }} aria-hidden />
              <span className="absolute bottom-6 -left-4 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#F7D96B", opacity: 0.7 }} aria-hidden />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ── Icons ── */

function WaIcon() {
  return (
    <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function NastarIcon() {
  return (
    <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      {/* tart body */}
      <circle cx="32" cy="38" r="17" />
      {/* lattice */}
      <path d="M22 32 L42 44 M42 32 L22 44" strokeWidth="1.3" opacity="0.55" />
      <path d="M32 23 L32 53 M19 38 L45 38" strokeWidth="1.3" opacity="0.3" />
      {/* leaf on top */}
      <path d="M32 22 C29 15 33 12 36 9 C33 13 34 18 32 22" />
    </svg>
  );
}
