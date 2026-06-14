import Link from "next/link";

const FLOORS = [
  {
    floor: "1F",
    name: "Nastar Coco Lab",
    desc: "Production, R&D, and quality control.",
    href: "/cocoffee#floor-1",
    bg: "linear-gradient(165deg, #F6B21A 0%, #C8900C 100%)",
    shadow: "0 8px 28px rgba(200,144,12,0.32)",
    border: "rgba(51,33,26,0.16)",
    floorColor: "rgba(51,33,26,0.78)",
    nameColor: "#33211A",
    descColor: "rgba(51,33,26,0.65)",
    arrowColor: "#33211A",
  },
  {
    floor: "2F",
    name: "Cocoffee & Menu",
    desc: "Specialty café, coffee bar, and desserts.",
    href: "/cocoffee#floor-2",
    bg: "linear-gradient(165deg, #286640 0%, #122D1C 100%)",
    shadow: "0 8px 28px rgba(18,45,28,0.28)",
    border: "rgba(246,178,26,0.20)",
    floorColor: "rgba(251,243,226,0.88)",
    nameColor: "#FBF3E2",
    descColor: "rgba(251,243,226,0.65)",
    arrowColor: "#F6B21A",
  },
  {
    floor: "3F",
    name: "Kitchen & Office",
    desc: "Operations, team workspace, and brand growth.",
    href: "/cocoffee#floor-3",
    bg: "linear-gradient(165deg, #FBF3E2 0%, #F4E6C8 100%)",
    shadow: "0 8px 24px rgba(51,33,26,0.10)",
    border: "rgba(51,33,26,0.13)",
    floorColor: "rgba(51,33,26,0.72)",
    nameColor: "#33211A",
    descColor: "rgba(51,33,26,0.58)",
    arrowColor: "#1F5A34",
  },
  {
    floor: "4F",
    name: "Class & Entertainment",
    desc: "Community hub, workshops, and events.",
    href: "/cocoffee#floor-4",
    bg: "linear-gradient(165deg, #4A2D1E 0%, #33211A 100%)",
    shadow: "0 8px 32px rgba(51,33,26,0.38)",
    border: "rgba(246,178,26,0.26)",
    floorColor: "rgba(251,243,226,0.88)",
    nameColor: "#FBF3E2",
    descColor: "rgba(251,243,226,0.62)",
    arrowColor: "#F6B21A",
  },
];

export default function CocoffeePreview() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        height: "calc(100vh - var(--navbar-height))",
        background: [
          "radial-gradient(ellipse 80% 55% at 50% -5%, rgba(246,178,26,0.18) 0%, transparent 62%)",
          "radial-gradient(ellipse 45% 45% at 4% 100%, rgba(31,90,52,0.11) 0%, transparent 55%)",
          "radial-gradient(ellipse 40% 40% at 96% 100%, rgba(31,90,52,0.09) 0%, transparent 55%)",
          "linear-gradient(160deg, #FBF3E2 0%, #F4E6C8 42%, #FEF3C7 72%, #FBF3E2 100%)",
        ].join(", "),
      }}
    >
      {/* Top edge: blend from ivory section above */}
      <div
        className="absolute top-0 inset-x-0 h-10 pointer-events-none"
        aria-hidden
        style={{
          background: "linear-gradient(to bottom, rgba(251,243,226,0.55) 0%, transparent 100%)",
        }}
      />

      {/* Full-height flex column */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col py-6 md:py-8 gap-5 md:gap-6">

        {/* Section header — fixed/shrink height */}
        <div className="shrink-0">
          <div className="flex items-center gap-3 mb-3">
            <span
              className="w-6 h-px shrink-0"
              style={{ backgroundColor: "#F6B21A" }}
            />
            <p
              className="text-[11px] font-semibold tracking-[0.22em] uppercase"
              style={{ color: "rgba(51,33,26,0.52)" }}
            >
              A New Chapter — Cocoffee by Nastar Coco
            </p>
          </div>

          <h2
            className="font-display font-bold leading-tight mb-2"
            style={{
              fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)",
              color: "#33211A",
            }}
          >
            Four Floors of Warmth &amp; Craft
          </h2>

          <p
            className="text-[14px] leading-relaxed max-w-lg"
            style={{ color: "rgba(51,33,26,0.62)" }}
          >
            From our production lab to a rooftop stage — every floor is a different experience.
          </p>

          <div
            className="mt-3 h-[3px] w-14 rounded-full"
            style={{ background: "linear-gradient(90deg, #F6B21A, #C8900C)" }}
          />
        </div>

        {/* Floor panels — flex-1 fills remaining height, min-h-0 allows shrink */}
        <div className="flex-1 min-h-0 grid grid-cols-2 grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 gap-3 lg:gap-4">
          {FLOORS.map((f) => (
            <Link
              key={f.floor}
              href={f.href}
              className="floor-panel h-full flex flex-col justify-between rounded-2xl p-4 sm:p-5"
              style={{
                background: f.bg,
                border: `1.5px solid ${f.border}`,
                boxShadow: f.shadow,
              }}
            >
              {/* Top: floor number */}
              <span
                className="font-display font-bold leading-none"
                style={{
                  fontSize: "clamp(2.2rem, 4vw, 3.4rem)",
                  color: f.floorColor,
                }}
              >
                {f.floor}
              </span>

              {/* Bottom: name + desc + arrow */}
              <div className="flex flex-col gap-1">
                <p
                  className="font-display leading-snug"
                  style={{ fontSize: "clamp(0.85rem, 1.2vw, 1rem)", color: f.nameColor }}
                >
                  {f.name}
                </p>
                <p
                  className="floor-panel-desc text-[11px] sm:text-[12px] leading-snug"
                  style={{ color: f.descColor }}
                >
                  {f.desc}
                </p>
                <span
                  className="floor-panel-arrow mt-1.5 text-[12px] sm:text-[13px] font-semibold"
                  style={{ color: f.arrowColor }}
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
