import Link from "next/link";
import { SITE } from "@/data/site";

const FLOORS = [
  { floor: "1F", name: "Nastar Coco Lab", desc: "Production, R&D, and quality control" },
  { floor: "2F", name: "Cocoffee & Menu", desc: "Specialty café, coffee bar & desserts" },
  { floor: "3F", name: "Kitchen & Office", desc: "Operations, team workspace & brand growth" },
  { floor: "4F", name: "Class & Entertainment", desc: "Community hub, workshops & events" },
];

export default function CocoffeePreview() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32" style={{ backgroundColor: "#122D1C" }}>
      {/* Ambient glows — warm mocha light, echoing the hero's depth */}
      <div
        className="absolute -top-40 -right-40 w-[34rem] h-[34rem] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(232,168,112,0.12) 0%, transparent 70%)" }}
      />
      <div
        className="absolute -bottom-48 -left-32 w-[30rem] h-[30rem] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(246,178,26,0.08) 0%, transparent 70%)" }}
      />
      {/* Watermark */}
      <span
        className="hidden lg:block absolute -bottom-12 right-0 font-display italic select-none pointer-events-none leading-none"
        style={{ fontSize: "12rem", color: "rgba(255,253,247,0.035)" }}
        aria-hidden
      >
        Cocoffee
      </span>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-14 lg:gap-20 items-center">

          {/* Left — Chapter narrative */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: "#E8A870" }} />
                <p className="text-[13px] font-semibold tracking-[0.2em] uppercase" style={{ color: "rgba(255,253,247,0.7)" }}>
                  A New Chapter — Cocoffee by Nastar Coco
                </p>
              </div>

              <h2
                className="font-display leading-[1.1] tracking-tight"
                style={{ fontSize: "clamp(2.1rem, 3.8vw, 3.25rem)", color: "#FFFDF7" }}
              >
                From the warmth of the oven,
                <br />
                growing into{" "}
                <em className="not-italic italic" style={{ color: "#E8A870" }}>
                  specialty coffee.
                </em>
              </h2>
            </div>

            <p className="text-base leading-relaxed max-w-lg" style={{ color: "rgba(255,253,247,0.65)" }}>
              Cocoffee is proof that Nastar Coco keeps growing — from a beloved pastry brand
              into a fuller ecosystem: specialty coffee, a café experience, a production kitchen,
              and a creative space for learning and gathering.
            </p>

            {/* CTA — same pill language as the hero */}
            <div className="flex flex-wrap items-center gap-6">
              <Link
                href="/cocoffee"
                className="group inline-flex items-center gap-2 bg-[#FFFDF7] text-[#064B2F] rounded-full px-7 py-4 text-sm font-semibold tracking-[0.12em] uppercase transition-all duration-200 hover:bg-[#064B2F] hover:text-white active:scale-[0.98]"
              >
                Explore Cocoffee
                <span className="inline-block transition-transform duration-200 group-hover:translate-x-1 relative -top-px">→</span>
              </Link>

              <span className="flex items-center gap-2.5 text-[13px] font-medium" style={{ color: "rgba(255,253,247,0.55)" }}>
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#E8A870" }} />
                Open {SITE.cocoffeeHours}
              </span>
            </div>
          </div>

          {/* Right — The building, floor by floor (top floor first) */}
          <div className="flex flex-col gap-3.5">
            <p
              className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-1.5"
              style={{ color: "rgba(255,253,247,0.45)" }}
            >
              One building, four floors of story
            </p>
            {[...FLOORS].reverse().map((f) => (
              <div
                key={f.floor}
                className="flex items-center gap-5 rounded-2xl p-5 transition-colors duration-200 hover:bg-[rgba(255,253,247,0.09)]"
                style={{
                  backgroundColor: "rgba(255,253,247,0.05)",
                  border: "1px solid rgba(255,253,247,0.1)",
                }}
              >
                <span
                  className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 font-display"
                  style={{
                    backgroundColor: "rgba(232,168,112,0.14)",
                    color: "#E8A870",
                    fontSize: "1.05rem",
                  }}
                >
                  {f.floor}
                </span>
                <div>
                  <p className="font-display" style={{ color: "#FFFDF7", fontSize: "1.1rem" }}>
                    {f.name}
                  </p>
                  <p className="text-sm mt-0.5" style={{ color: "rgba(255,253,247,0.5)" }}>
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
