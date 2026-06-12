"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { WHATSAPP_URL } from "@/data/site";

function fadeUp(mounted: boolean, delay: number): React.CSSProperties {
  return {
    opacity: mounted ? 1 : 0,
    transform: mounted ? "translateY(0px)" : "translateY(24px)",
    transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
  };
}

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { const t = setTimeout(() => setMounted(true), 80); return () => clearTimeout(t); }, []);

  return (
    <section
      id="hero"
      className="relative overflow-hidden -mt-28 md:-mt-32 min-h-screen flex items-center bg-green-dark"
    >
      {/* Background image — unchanged */}
      <Image
        src="/NastarCocoGreenBG.png"
        alt=""
        fill
        sizes="100vw"
        quality={100}
        className="object-cover"
        style={{ objectPosition: "50% 30%" }}
        priority
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div
          className="flex flex-col gap-8 pt-32 pb-20 lg:pt-0 lg:pb-0 lg:min-h-screen lg:justify-center lg:-translate-y-16"
          style={{ maxWidth: "620px" }}
        >

          {/* Eyebrow + Headline group — tight gap between them */}
          <div className="flex flex-col gap-3" style={fadeUp(mounted, 200)}>
          {/* Eyebrow — dot + uppercase label */}
          <div className="flex items-center gap-2.5">
            <span
              className="w-2 h-2 rounded-full flex-shrink-0"
              style={{ backgroundColor: "#F6B21A" }}
            />
            <p className="text-[13px] font-semibold tracking-[0.2em] uppercase" style={{ color: "#FFFDF7" }}>
              Premium Indonesian Nastar
            </p>
          </div>

          {/* Headline — large editorial serif */}
          <h1
            className="font-display leading-[1.05] tracking-tight"
            style={{ fontSize: "clamp(2.8rem, 5.6vw, 4.75rem)", color: "#FFFDF7" }}
          >
            The Taste of Tradition,
            <br />
            Made with{" "}
            <em className="not-italic italic" style={{ color: "#F6B21A" }}>
              Love.
            </em>
          </h1>
          </div>

          {/* Supporting paragraph */}
          <p
            className="leading-relaxed -mt-4"
            style={{ fontSize: "clamp(0.9rem, 1.4vw, 1.05rem)", maxWidth: "420px", color: "rgba(255,253,247,0.75)", ...fadeUp(mounted, 380) }}
          >
            Delicate pineapple filling wrapped in a buttery, melt-in-your-mouth
            crust. A timeless Indonesian favorite, crafted with premium
            ingredients.
          </p>


          {/* CTA group */}
          <div className="flex flex-wrap items-center gap-6" style={{ marginTop: "-10px", ...fadeUp(mounted, 540) }}>
            {/* Primary — dark green pill */}
            <Link
              href="/menu"
              className="group inline-flex items-center gap-2 bg-[#FFFDF7] text-[#064B2F] rounded-full px-7 py-4 text-sm font-semibold tracking-[0.12em] uppercase transition-all duration-200 hover:bg-[#064B2F] hover:text-white active:scale-[0.98]"
            >
              Shop Now
              <span className="inline-block transition-transform duration-200 group-hover:translate-x-1 relative -top-px">→</span>
            </Link>

            {/* Secondary — text link with underline */}
            <button
              onClick={() => {
                const el = document.getElementById("story");
                const navH = document.querySelector("header")?.offsetHeight ?? 0;
                if (el) window.scrollTo({ top: el.offsetTop - navH, behavior: "smooth" });
              }}
              className="our-story-btn group text-sm font-semibold tracking-[0.12em] uppercase pb-0.5 transition-colors duration-200 cursor-pointer bg-transparent text-white"
            >
              {"Our Story".split("").map((char, i) => (
                <span
                  key={i}
                  className="inline-block transition-colors duration-300 group-hover:text-[#F6B21A]"
                  style={{ transitionDelay: `${i * 40}ms`, whiteSpace: char === " " ? "pre" : undefined }}
                >{char}</span>
              ))}
            </button>
          </div>

          {/* TODO: Add trust strip back — NIB Terdaftar, PIRT Sertifikasi, Halal MUI, BPOM Terdaftar, Food Hall & Kemchick */}

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

function VerifiedIcon() {
  return (
    <svg className="w-3 h-3 shrink-0 text-gold/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function StoreIcon() {
  return (
    <svg className="w-3 h-3 shrink-0 text-gold/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 22V12h6v10" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
