import Link from "next/link";
import { WHATSAPP_URL } from "@/data/site";

const TRUST_ITEMS = [
  "NIB Registered",
  "PIRT Certified",
  "Halal MUI",
  "BPOM Registered",
  "Food Hall & Kemchick",
];

export default function FinalCTA() {
  return (
    <section className="section-ivory py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Deep green invitation card — bookends the hero */}
        <div
          className="relative overflow-hidden rounded-[2.5rem] px-6 py-16 md:p-20 text-center"
          style={{ backgroundColor: "#122D1C" }}
        >
          {/* Ambient gold glows */}
          <div
            className="absolute -top-32 -left-32 w-[28rem] h-[28rem] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(246,178,26,0.12) 0%, transparent 70%)" }}
          />
          <div
            className="absolute -bottom-40 -right-32 w-[30rem] h-[30rem] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(232,168,112,0.1) 0%, transparent 70%)" }}
          />

          <div className="relative z-10 flex flex-col items-center gap-8">
            {/* Eyebrow */}
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: "#F6B21A" }} />
              <p className="text-[13px] font-semibold tracking-[0.2em] uppercase" style={{ color: "rgba(255,253,247,0.7)" }}>
                Partnership & Collaboration
              </p>
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

            <p className="text-base leading-relaxed max-w-2xl" style={{ color: "rgba(255,253,247,0.65)" }}>
              Nastar Coco is growing on a serious foundation — a product people love, a solid
              young team, and systems that keep getting stronger. We are open to retail partners,
              sponsors, and collaborations that want to grow alongside us.
            </p>

            {/* CTAs — same language as the hero */}
            <div className="flex flex-wrap items-center justify-center gap-6 mt-2">
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
                className="text-sm font-semibold tracking-[0.12em] uppercase pb-0.5 transition-colors duration-200"
                style={{ color: "rgba(255,253,247,0.85)", borderBottom: "1.5px solid rgba(255,253,247,0.3)" }}
              >
                Become a Retail Partner
              </Link>
            </div>

            {/* Trust strip */}
            <div className="w-full mt-8 pt-8" style={{ borderTop: "1px solid rgba(255,253,247,0.1)" }}>
              <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "rgba(255,253,247,0.4)" }}>
                Registered & Certified
              </p>
              <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3">
                {TRUST_ITEMS.map((item) => (
                  <span key={item} className="flex items-center gap-2">
                    <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="#F6B21A" strokeWidth="2.5">
                      <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-xs font-semibold tracking-[0.1em] uppercase" style={{ color: "rgba(255,253,247,0.6)" }}>
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
