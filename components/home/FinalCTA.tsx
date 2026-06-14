import Link from "next/link";
import { WHATSAPP_URL } from "@/data/site";

const PARTNER_TYPES = [
  {
    label: "Retail Partners",
    desc: "Stock Nastar Coco in your store, café, or gifting space.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-5 h-5">
        <path d="M4 9h16M5 9l1-4.5h12L19 9M5 9v10h14V9M9.5 19v-5h5v5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Sponsors & Brands",
    desc: "Co-create moments across events, gifting, and campaigns.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-5 h-5">
        <rect x="3.5" y="8.5" width="17" height="12" rx="1.2" />
        <path d="M3.5 12.5h17M12 8.5v12" strokeLinecap="round" />
        <path d="M12 8.5C12 8.5 10.6 4.5 8 5.4 C6.2 6 7 8.5 12 8.5Z" strokeLinejoin="round" />
        <path d="M12 8.5C12 8.5 13.4 4.5 16 5.4 C17.8 6 17 8.5 12 8.5Z" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Creative Collabs",
    desc: "Build limited editions and experiences together.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-5 h-5">
        <path d="M12 3.5l1.9 5.1 5.1 1.9-5.1 1.9L12 17.5l-1.9-5.1L5 10.5l5.1-1.9z" strokeLinejoin="round" />
        <path d="M18.5 16.5l.7 1.9 1.9.7-1.9.7-.7 1.9-.7-1.9-1.9-.7 1.9-.7z" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const TRUST_ITEMS = ["NIB Registered", "PIRT Certified", "Halal MUI", "BPOM Registered"];

export default function FinalCTA() {
  return (
    <section className="section-ivory py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Deep green invitation card — bookends the hero */}
        <div
          className="relative overflow-hidden rounded-[2.5rem] px-6 py-16 md:p-20"
          style={{
            background: "linear-gradient(155deg, #1B4028 0%, #122D1C 52%, #0C1F13 100%)",
          }}
        >
          {/* Ambient gold glows */}
          <div
            className="absolute -top-32 -left-32 w-[28rem] h-[28rem] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(246,178,26,0.14) 0%, transparent 70%)" }}
            aria-hidden
          />
          <div
            className="absolute -bottom-40 -right-32 w-[30rem] h-[30rem] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(232,168,112,0.1) 0%, transparent 70%)" }}
            aria-hidden
          />

          {/* Diagonal accent sweep */}
          <div
            className="absolute -top-16 right-1/4 w-[26rem] h-32 rounded-full pointer-events-none rotate-[-16deg]"
            style={{ background: "linear-gradient(90deg, transparent, rgba(246,178,26,0.07))" }}
            aria-hidden
          />

          {/* Grain */}
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='220'%3E%3Cfilter id='fc'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23fc)'/%3E%3C/svg%3E")`,
              backgroundSize: "220px",
              opacity: 0.04,
              mixBlendMode: "overlay",
            }}
          />

          <div className="relative z-10 flex flex-col items-center text-center gap-7">
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="w-6 h-px" style={{ backgroundColor: "#F6B21A" }} />
              <p className="text-[11px] font-semibold tracking-[0.22em] uppercase" style={{ color: "rgba(255,253,247,0.7)" }}>
                Partnership &amp; Collaboration
              </p>
              <span className="w-6 h-px" style={{ backgroundColor: "#F6B21A" }} />
            </div>

            {/* Headline */}
            <h2
              className="font-display leading-[1.1] tracking-tight"
              style={{ fontSize: "clamp(2.2rem, 4.2vw, 3.5rem)", color: "#FFFDF7" }}
            >
              This story is only just{" "}
              <em className="not-italic italic" style={{ color: "#F6B21A" }}>
                beginning.
              </em>
            </h2>

            <p className="text-base leading-relaxed max-w-2xl" style={{ color: "rgba(255,253,247,0.66)" }}>
              Nastar Coco is growing on a serious foundation — a product people love, a solid
              young team, and systems that keep getting stronger. We are open to retail partners,
              sponsors, and collaborations that want to grow alongside us.
            </p>

            {/* Partnership types */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 w-full max-w-3xl mt-2 text-left">
              {PARTNER_TYPES.map((type) => (
                <div
                  key={type.label}
                  className="group rounded-2xl p-5 ring-1 ring-[rgba(255,253,247,0.12)] bg-[rgba(255,253,247,0.05)] transition-all duration-200 hover:-translate-y-1 hover:bg-[rgba(255,253,247,0.08)] hover:ring-[rgba(246,178,26,0.4)]"
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center mb-3.5 ring-1 ring-[rgba(246,178,26,0.25)] bg-[rgba(246,178,26,0.12)] text-[#F6B21A] transition-colors duration-200 group-hover:bg-[rgba(246,178,26,0.2)]"
                  >
                    {type.icon}
                  </div>
                  <p className="font-display mb-1" style={{ color: "#FFFDF7", fontSize: "1rem" }}>
                    {type.label}
                  </p>
                  <p className="text-[12.5px] leading-relaxed" style={{ color: "rgba(255,253,247,0.55)" }}>
                    {type.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-6 mt-3">
              <Link
                href={WHATSAPP_URL("Hi Nastar Coco! I'm interested in collaborating 🤝")}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 bg-[#FFFDF7] text-[#064B2F] rounded-full px-7 py-4 text-sm font-semibold tracking-[0.12em] uppercase transition-all duration-200 hover:bg-[#F6B21A] hover:text-[#122D1C] active:scale-[0.98]"
              >
                Get in Touch
                <span className="inline-block transition-transform duration-200 group-hover:translate-x-1 relative -top-px">→</span>
              </Link>

              <Link
                href="/retail-partner"
                className="text-sm font-semibold tracking-[0.12em] uppercase pb-0.5 transition-colors duration-200 hover:text-[#F6B21A]"
                style={{ color: "rgba(255,253,247,0.85)", borderBottom: "1.5px solid rgba(255,253,247,0.3)" }}
              >
                Become a Retail Partner
              </Link>
            </div>

            {/* Trust strip */}
            <div className="w-full mt-8 pt-8" style={{ borderTop: "1px solid rgba(255,253,247,0.1)" }}>
              <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "rgba(255,253,247,0.4)" }}>
                Registered &amp; Certified
              </p>
              <div className="flex flex-wrap justify-center items-center gap-2.5">
                {TRUST_ITEMS.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 ring-1 ring-[rgba(255,253,247,0.14)] bg-[rgba(255,253,247,0.04)]"
                  >
                    <svg className="w-3 h-3 shrink-0" viewBox="0 0 24 24" fill="none" stroke="#F6B21A" strokeWidth="3">
                      <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-[11px] font-semibold tracking-[0.08em] uppercase" style={{ color: "rgba(255,253,247,0.62)" }}>
                      {item}
                    </span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
