import Hero from "@/components/home/Hero";
import BrandStory from "@/components/home/BrandStory";
import CocoffeePreview from "@/components/home/CocoffeePreview";
import CocoSquad from "@/components/home/CocoSquad";

const SHADES = [
  { top: "1%",  side: "left",  w: "40rem", h: "10rem", rot: -16, grad: "linear-gradient(90deg, rgba(246,178,26,0.16), transparent)" },
  { top: "17%", side: "right", w: "36rem", h: "9rem",  rot: -13, grad: "linear-gradient(90deg, transparent, rgba(242,146,12,0.14))" },
  { top: "33%", side: "left",  w: "42rem", h: "10rem", rot: -15, grad: "linear-gradient(90deg, rgba(246,178,26,0.14), transparent)" },
  { top: "49%", side: "right", w: "38rem", h: "9rem",  rot: -13, grad: "linear-gradient(90deg, transparent, rgba(242,146,12,0.13))" },
  { top: "65%", side: "left",  w: "40rem", h: "10rem", rot: -16, grad: "linear-gradient(90deg, rgba(246,178,26,0.15), transparent)" },
  { top: "81%", side: "right", w: "36rem", h: "9rem",  rot: -13, grad: "linear-gradient(90deg, transparent, rgba(242,146,12,0.14))" },
] as const;

export default function HomePage() {
  return (
    <>
      <Hero />
      {/* Shared warm surface for the entire area below the hero */}
      <div
        className="relative overflow-clip"
        style={{
          background: [
            "radial-gradient(ellipse 55% 22% at 10% 3%, rgba(242,146,12,0.18) 0%, transparent 60%)",
            "radial-gradient(ellipse 60% 24% at 95% 98%, rgba(246,178,26,0.2) 0%, transparent 60%)",
            "linear-gradient(180deg, #FFF8EC 0%, #FEEFD4 50%, #FBE2BC 100%)",
          ].join(", "),
        }}
      >
        {/* Subtle grain across the whole surface */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='220'%3E%3Cfilter id='pg'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23pg)'/%3E%3C/svg%3E")`,
            backgroundSize: "220px",
            opacity: 0.03,
            mixBlendMode: "multiply",
          }}
        />

        {/* Diagonal warm light-shades sweeping across the whole surface */}
        {SHADES.map((s, i) => (
          <div
            key={i}
            className="absolute pointer-events-none rounded-full"
            aria-hidden
            style={{
              top: s.top,
              left: s.side === "left" ? "-6rem" : undefined,
              right: s.side === "right" ? "-6rem" : undefined,
              width: s.w,
              height: s.h,
              transform: `rotate(${s.rot}deg)`,
              background: s.grad,
            }}
          />
        ))}
        <BrandStory />
        <CocoffeePreview />
        <CocoSquad />
      </div>
    </>
  );
}
