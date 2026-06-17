"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { SITE, WHATSAPP_URL } from "@/data/site";

function fadeUp(mounted: boolean, delay: number): React.CSSProperties {
  return {
    opacity: mounted ? 1 : 0,
    transform: mounted ? "translateY(0px)" : "translateY(26px)",
    transition: `opacity 0.8s ease ${delay}ms, transform 0.8s ease ${delay}ms`,
  };
}

const ORDER_MSG = "Hi Nastar Coco! Saya tertarik dengan Nastar Coco Signature 🍍";

/* One bright-green panel — top/right/bottom edges straight. The left edge is a
   single smooth S-curve (sigmoid) separating cream (left) from green (right).
   Reading bottom→top: the bottom tip sits on the bottom edge at ~15% (NOT the
   corner — cream runs to its left), leaves it on a shallow diagonal, rises
   through a near-vertical cliff in the middle, then smooths out as it reaches
   the top edge (~47%). One continuous curve — fitted to the reference sketch,
   with pronounced curvature in both bends (shallow ends, steep middle). */
const CLIFF = "M677,0 H1440 V900 H214 C534,700 357,200 677,0 Z";
const CLIFF_EDGE = "M214,900 C534,700 357,200 677,0";

const TASTE = ["Buttery", "Pineapple jam", "Handmade"];

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
          "radial-gradient(ellipse 50% 42% at 13% 28%, rgba(246,178,26,0.12) 0%, transparent 60%), linear-gradient(165deg, #FFF8EC 0%, #FBF0DA 55%, #F4E6C8 100%)",
      }}
    >
      {/* ── Mobile / tablet: full bright-green field (the cliff edge reads on desktop) ── */}
      <div
        className="absolute inset-0 lg:hidden"
        style={{
          background:
            "radial-gradient(ellipse 80% 55% at 75% 12%, rgba(246,178,26,0.20) 0%, transparent 58%), linear-gradient(158deg, #2E7A4A 0%, #256B3E 55%, #1F5A34 100%)",
        }}
        aria-hidden
      />

      {/* ── Desktop: one bright-green panel with a single organic cliff-edge on the left ── */}
      <svg
        className="absolute inset-0 w-full h-full hidden lg:block"
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
        aria-hidden
      >
        <defs>
          <linearGradient id="cliffGreen" x1="0.1" y1="0" x2="0.9" y2="1">
            <stop offset="0%" stopColor="#2E7A4A" />
            <stop offset="55%" stopColor="#256B3E" />
            <stop offset="100%" stopColor="#1F5A34" />
          </linearGradient>
          <radialGradient id="cliffGlow" cx="74%" cy="15%" r="62%">
            <stop offset="0%" stopColor="rgba(246,178,26,0.22)" />
            <stop offset="100%" stopColor="rgba(246,178,26,0)" />
          </radialGradient>
        </defs>
        <path d={CLIFF} fill="url(#cliffGreen)" />
        <path d={CLIFF} fill="url(#cliffGlow)" />
        {/* Gold hairline tracing the cliff edge */}
        <path
          d={CLIFF_EDGE}
          fill="none"
          stroke="#F6B21A"
          strokeOpacity="0.5"
          strokeWidth="2.5"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      {/* ── Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center pt-32 pb-16 lg:pt-36">

        {/* Editorial marks in the cream negative space (desktop only) */}
        <div
          className="hidden lg:flex absolute left-8 items-center gap-4"
          style={{ top: "calc(var(--navbar-height) + 2.25rem)", ...fadeUp(mounted, 200) }}
        >
          <span
            className="font-display leading-none select-none"
            style={{ fontSize: "4.75rem", color: "rgba(51,33,26,0.10)" }}
          >
            01
          </span>
          <div className="flex items-center gap-3">
            <span className="h-px w-8" style={{ backgroundColor: "rgba(246,178,26,0.75)" }} />
            <span
              className="font-semibold tracking-[0.34em] uppercase text-[11px]"
              style={{ color: "rgba(51,33,26,0.5)", writingMode: "vertical-rl", transform: "rotate(180deg)" }}
            >
              Signature Series
            </span>
          </div>
        </div>

        <div className="w-full grid lg:grid-cols-12 gap-12 lg:gap-6 items-center">

          {/* Product showcase — straddles the cliff edge on desktop */}
          <div
            className="relative flex justify-center lg:col-span-5"
            style={fadeUp(mounted, 360)}
          >
            <div className="relative" style={{ width: "clamp(280px, 31vw, 430px)", aspectRatio: "1 / 1" }}>
              {/* Soft halo */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  boxShadow: "0 40px 90px rgba(18,45,28,0.35)",
                  background: "radial-gradient(circle at 50% 36%, rgba(246,178,26,0.28), transparent 66%)",
                }}
                aria-hidden
              />
              {/* The plate placeholder */}
              <div
                className="absolute inset-0 rounded-full flex flex-col items-center justify-center gap-4"
                style={{
                  background: "radial-gradient(circle at 50% 38%, #FEF6DF 0%, #F4E6C8 58%, #E8CF9C 100%)",
                  border: "2px solid rgba(246,178,26,0.75)",
                  boxShadow: "inset 0 2px 16px rgba(255,255,255,0.65), inset 0 -14px 36px rgba(200,144,12,0.20)",
                }}
              >
                <span style={{ color: "#C8900C" }}>
                  <NastarIcon />
                </span>
                <span
                  className="text-[11px] font-semibold tracking-[0.2em] uppercase"
                  style={{ color: "rgba(122,84,18,0.7)" }}
                >
                  Photo coming soon
                </span>
              </div>

              {/* Floating "Signature" seal */}
              <div
                className="absolute -top-3 -right-1 sm:top-1 sm:-right-3 flex flex-col items-center justify-center rounded-full text-center rotate-[8deg]"
                style={{
                  width: "5.75rem",
                  height: "5.75rem",
                  background: "linear-gradient(140deg, #1F5A34, #122D1C)",
                  border: "2px solid #F6B21A",
                  boxShadow: "0 12px 28px rgba(0,0,0,0.32)",
                }}
              >
                <span style={{ color: "#F6B21A", fontSize: "0.9rem", lineHeight: 1 }}>★</span>
                <span className="font-display leading-tight text-[13px] mt-1" style={{ color: "#FFFDF7" }}>
                  Signature
                </span>
              </div>

              {/* Crumb accents */}
              <span className="absolute -bottom-2 left-6 w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#F6B21A", opacity: 0.85 }} aria-hidden />
              <span className="absolute bottom-8 -left-3 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#F7D96B", opacity: 0.8 }} aria-hidden />
              <span className="absolute top-8 -left-1 w-2 h-2 rounded-full" style={{ backgroundColor: "#C8900C", opacity: 0.55 }} aria-hidden />
            </div>
          </div>

          {/* Editorial copy — sits on the bright-green panel */}
          <div className="max-w-xl lg:col-start-7 lg:col-span-6">
            {/* Eyebrow (mobile / tablet — desktop uses the index marks) */}
            <div className="flex items-center gap-2.5 mb-5 lg:hidden" style={fadeUp(mounted, 150)}>
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "#F6B21A" }} />
              <p className="text-[12px] font-semibold tracking-[0.24em] uppercase" style={{ color: "rgba(255,253,247,0.8)" }}>
                Signature Series · 01
              </p>
            </div>

            {/* Headline */}
            <h1
              className="font-display leading-[1.04] tracking-tight mb-5"
              style={{ fontSize: "clamp(2.6rem, 5vw, 4.6rem)", color: "#FFFDF7", ...fadeUp(mounted, 240) }}
            >
              Nastar Coco
              <br />
              <em className="not-italic italic" style={{ color: "#F6B21A" }}>Signature</em>
            </h1>

            {/* Taste tags */}
            <div className="flex flex-wrap gap-2.5 mb-6" style={fadeUp(mounted, 320)}>
              {TASTE.map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center rounded-full px-3.5 py-1.5 text-[11px] font-semibold tracking-[0.06em] uppercase"
                  style={{ color: "#FBF3E2", border: "1px solid rgba(246,178,26,0.45)", backgroundColor: "rgba(246,178,26,0.08)" }}
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Description */}
            <p
              className="leading-relaxed mb-7"
              style={{ fontSize: "clamp(1rem, 1.3vw, 1.12rem)", maxWidth: "32rem", color: "rgba(255,253,247,0.85)", ...fadeUp(mounted, 380) }}
            >
              Buttery, melt-in-the-mouth pastry wrapped around slow-cooked pineapple jam —
              the nastar we&apos;re known for, perfected over years and baked fresh in small batches.
            </p>

            {/* Divider */}
            <div
              className="h-[3px] w-14 rounded-full mb-6"
              style={{ background: "linear-gradient(90deg, #F6B21A, #F7D96B)", ...fadeUp(mounted, 440) }}
            />

            {/* Meta row */}
            <div className="flex items-center gap-5 mb-9 flex-wrap" style={fadeUp(mounted, 490)}>
              <div className="flex flex-col">
                <span className="text-[11px] font-semibold tracking-[0.16em] uppercase" style={{ color: "rgba(255,253,247,0.6)" }}>
                  Mulai dari
                </span>
                <span className="font-display leading-none mt-1" style={{ fontSize: "1.7rem", color: "#F6B21A" }}>
                  Rp ___
                </span>
              </div>
              <span className="w-px h-10" style={{ backgroundColor: "rgba(255,253,247,0.22)" }} />
              <div className="flex flex-col">
                <span className="text-[11px] font-semibold tracking-[0.16em] uppercase" style={{ color: "rgba(255,253,247,0.6)" }}>
                  Best for
                </span>
                <span className="text-[15px] font-medium mt-1.5" style={{ color: "rgba(255,253,247,0.9)" }}>
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
                className="group inline-flex items-center gap-2.5 rounded-full px-7 py-4 text-sm font-semibold tracking-[0.1em] uppercase transition-all duration-200 active:scale-[0.98] hover:shadow-lg"
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
