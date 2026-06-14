import Link from "next/link";
import { SITE, WHATSAPP_URL } from "@/data/site";

function IconInstagram() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-4 h-4 shrink-0">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
function IconWhatsApp() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-4 h-4 shrink-0">
      <path d="M3 21l1.7-5A8 8 0 1112 20a8 8 0 01-4-1l-5 2z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8.8 8.4c-.3 0-.6.1-.8.4-.3.3-.9.9-.9 2s.9 2.3 1 2.5c.1.2 1.7 2.8 4.3 3.7 2.1.8 2.6.6 3 .6.5 0 1.4-.6 1.6-1.1.2-.6.2-1 .1-1.1 0-.1-.2-.2-.5-.3z" fill="currentColor" stroke="none" />
    </svg>
  );
}
function IconMail() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-4 h-4 shrink-0">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M4 7l8 6 8-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IconPin() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-4 h-4 shrink-0 mt-0.5">
      <path d="M12 21s7-5.2 7-11a7 7 0 10-14 0c0 5.8 7 11 7 11z" strokeLinejoin="round" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden pt-16 pb-24 lg:pb-14"
      style={{ background: "linear-gradient(180deg, #4A7145 0%, #3C5C39 55%, #2E482C 100%)" }}
    >
      {/* Top gold accent line */}
      <div
        className="absolute top-0 inset-x-0 h-px pointer-events-none"
        aria-hidden
        style={{ background: "linear-gradient(90deg, transparent, rgba(246,178,26,0.55), transparent)" }}
      />
      {/* Warm glow */}
      <div
        className="absolute -top-24 left-1/4 w-[34rem] h-48 rounded-full pointer-events-none"
        aria-hidden
        style={{ background: "radial-gradient(ellipse, rgba(246,178,26,0.1) 0%, transparent 70%)" }}
      />
      {/* Grain */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='220'%3E%3Cfilter id='ft'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23ft)'/%3E%3C/svg%3E")`,
          backgroundSize: "220px",
          opacity: 0.04,
          mixBlendMode: "overlay",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12"
          style={{ borderBottom: "1px solid rgba(255,253,247,0.12)" }}
        >
          {/* Brand */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            <Link href="/" className="font-display leading-none" style={{ color: "#FFFDF7", fontSize: "1.7rem" }}>
              Nastar Coco
              <span style={{ color: "#F6B21A" }}>.</span>
            </Link>
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: "rgba(255,253,247,0.6)" }}>
              The nastar that feels like home — premium-casual, made for families,
              gifts, and every special moment.
            </p>
            <Link
              href={WHATSAPP_URL()}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 bg-[#FFFDF7] text-[#064B2F] rounded-full px-6 py-3 text-[13px] font-semibold tracking-[0.12em] uppercase self-start transition-all duration-200 hover:bg-[#F6B21A] hover:text-[#122D1C] active:scale-[0.98]"
            >
              Order via WhatsApp
              <span className="inline-block transition-transform duration-200 group-hover:translate-x-1 relative -top-px">→</span>
            </Link>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2.5 mb-5">
              <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: "#F6B21A" }} />
              <p className="text-[12px] font-semibold tracking-[0.2em] uppercase" style={{ color: "rgba(255,253,247,0.9)" }}>
                Contact Us
              </p>
            </div>
            <ul className="flex flex-col gap-3.5 text-sm">
              <li>
                <a
                  href={SITE.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2.5 transition-colors duration-200 hover:text-[#F6B21A]"
                  style={{ color: "rgba(255,253,247,0.65)" }}
                >
                  <IconInstagram />
                  {SITE.instagramHandle}
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_URL()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2.5 transition-colors duration-200 hover:text-[#F6B21A]"
                  style={{ color: "rgba(255,253,247,0.65)" }}
                >
                  <IconWhatsApp />
                  WhatsApp Order
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="group flex items-center gap-2.5 transition-colors duration-200 hover:text-[#F6B21A]"
                  style={{ color: "rgba(255,253,247,0.65)" }}
                >
                  <IconMail />
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-xs leading-relaxed" style={{ color: "rgba(255,253,247,0.45)" }}>
                <IconPin />
                <span>{SITE.address}</span>
              </li>
            </ul>
          </div>

          {/* Cocoffee hours */}
          <div className="lg:col-span-3">
            <div className="flex items-center gap-2.5 mb-5">
              <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: "#C4743A" }} />
              <p className="text-[12px] font-semibold tracking-[0.2em] uppercase" style={{ color: "rgba(255,253,247,0.9)" }}>
                Cocoffee Hours
              </p>
            </div>
            <div
              className="rounded-2xl p-5 flex flex-col gap-2"
              style={{
                backgroundColor: "rgba(255,253,247,0.06)",
                border: "1px solid rgba(255,253,247,0.12)",
              }}
            >
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#F6B21A" }} />
                <p className="text-sm font-semibold" style={{ color: "#FFFDF7" }}>
                  Open Daily
                </p>
              </div>
              <p className="text-sm font-medium" style={{ color: "rgba(255,253,247,0.8)" }}>
                {SITE.cocoffeeHours}
              </p>
              <p className="text-xs" style={{ color: "rgba(255,253,247,0.45)" }}>
                Mon – Sun, no day off
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{ color: "rgba(255,253,247,0.4)" }}>
            © {new Date().getFullYear()} Nastar Coco. All rights reserved.
          </p>
          <p className="text-xs flex items-center gap-2" style={{ color: "rgba(255,253,247,0.4)" }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#F6B21A" }} />
            Cocoffee by Nastar Coco — warm nastar, serious team.
          </p>
        </div>
      </div>
    </footer>
  );
}
