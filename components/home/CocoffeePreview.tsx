import Link from "next/link";

const FLOORS = [
  {
    floor: "1F",
    name: "Nastar Coco Lab",
    desc: "Production, R&D, and quality control.",
    href: "/cocoffee#floor-1",
    bg: "#B07040",   // warm amber — lightest
  },
  {
    floor: "2F",
    name: "Cocoffee & Menu",
    desc: "Specialty café, coffee bar, and desserts.",
    href: "/cocoffee#floor-2",
    bg: "#5C3520",   // deep espresso — darkest
  },
  {
    floor: "3F",
    name: "Kitchen & Office",
    desc: "Operations, team workspace, and brand growth.",
    href: "/cocoffee#floor-3",
    bg: "#986040",   // medium caramel
  },
  {
    floor: "4F",
    name: "Class & Entertainment",
    desc: "Community hub, workshops, and events.",
    href: "/cocoffee#floor-4",
    bg: "#3E2010",   // near-black espresso
  },
];

export default function CocoffeePreview() {
  return (
    <section
      className="relative overflow-hidden py-20 md:py-24"
      style={{
        background: [
          // Warm amber glow from centre — feels like overhead café light
          "radial-gradient(ellipse 95% 70% at 50% 30%, rgba(196,140,88,0.36) 0%, transparent 62%)",
          // Deep corners for depth and vignette
          "radial-gradient(ellipse 55% 60% at 0% 100%, rgba(30,12,4,0.72) 0%, transparent 55%)",
          "radial-gradient(ellipse 50% 55% at 100% 100%, rgba(30,12,4,0.68) 0%, transparent 55%)",
          // Base: rich coffee brown, consistent
          "linear-gradient(165deg, #7A4A2A 0%, #895737 38%, #9C6A44 68%, #7A4A2A 100%)",
        ].join(", "),
      }}
    >
      {/* Top edge fade — smooth transition from section above */}
      <div
        className="absolute top-0 inset-x-0 h-20 pointer-events-none"
        aria-hidden
        style={{
          background: "linear-gradient(to bottom, rgba(30,12,4,0.5) 0%, transparent 100%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-8 lg:mb-10">
          <span
            className="w-6 h-px shrink-0"
            style={{ backgroundColor: "#F6B21A" }}
          />
          <p
            className="text-[11px] font-semibold tracking-[0.22em] uppercase"
            style={{ color: "rgba(255,247,232,0.58)" }}
          >
            A New Chapter — Cocoffee by Nastar Coco
          </p>
        </div>

        {/* Floor panels: full-width, 4 across on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
          {FLOORS.map((f) => (
            <Link
              key={f.floor}
              href={f.href}
              className="floor-panel flex flex-col justify-between rounded-2xl p-5 sm:p-6 min-h-[360px] sm:min-h-[460px] lg:min-h-[580px]"
              style={{
                backgroundColor: f.bg,
                border: "1.5px solid rgba(255,247,232,0.3)",
              }}
            >
              {/* Top: floor number */}
              <span
                className="font-display font-bold leading-none"
                style={{
                  fontSize: "clamp(2.6rem, 4.4vw, 3.6rem)",
                  color: "rgba(255,247,232,0.9)",
                }}
              >
                {f.floor}
              </span>

              {/* Bottom: name, description, arrow */}
              <div className="flex flex-col gap-1.5">
                <p
                  className="font-display leading-snug"
                  style={{ fontSize: "1rem", color: "#FFF7E8" }}
                >
                  {f.name}
                </p>
                <p className="floor-panel-desc text-[12px] leading-snug">
                  {f.desc}
                </p>
                <span
                  className="floor-panel-arrow mt-2 text-[13px] font-semibold"
                  style={{ color: "#F6B21A" }}
                >
                  Explore floor →
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
