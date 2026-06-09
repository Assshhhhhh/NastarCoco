import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";

const FLOORS = [
  { floor: "1F", name: "Nastar Coco Lab", desc: "Produksi, R&D, dan kualitas nastar" },
  { floor: "2F", name: "Cocoffee & Menu", desc: "Café, kopi specialty, & dessert" },
  { floor: "3F", name: "Kitchen & Office", desc: "Operasional, tim, dan brand growth" },
  { floor: "4F", name: "Class & Entertainment", desc: "Komunitas, workshop & event" },
];

export default function CocoffeePreview() {
  return (
    <section className="section-green py-24 md:py-32 relative overflow-hidden">
      {/* Subtle gold tint background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 90% 40%, rgba(246,178,26,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — Copy */}
          <div className="flex flex-col gap-8">
            <SectionHeading
              badge="Cocoffee by Nastar Coco"
              title="Sekarang, hangatnya Nastar Coco hadir juga lewat Cocoffee."
              light
              serif
            />
            <p className="text-ivory/60 text-base md:text-lg leading-relaxed">
              Cocoffee by Nastar Coco adalah bagian dari perjalanan brand kami untuk menghadirkan
              pengalaman yang lebih lengkap — dari nastar premium, kopi specialty, café, lab,
              kitchen, hingga ruang kreatif untuk belajar dan berkumpul.
            </p>

            {/* Hours */}
            <div className="inline-flex items-start gap-3 p-4 rounded-2xl bg-ivory/8 border border-ivory/12">
              <div className="w-8 h-8 rounded-full bg-gold/15 flex items-center justify-center shrink-0 mt-0.5">
                <svg className="w-4 h-4 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-0.5">
                  Opening Hours
                </p>
                <p className="text-ivory/80 text-sm font-medium">Senin – Minggu</p>
                <p className="text-ivory/60 text-sm">08.00 – 20.00 WIB</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/cocoffee"
                className="inline-flex items-center gap-2 bg-gold text-green-dark font-bold text-sm px-7 py-4 rounded-full hover:bg-gold-soft transition-all duration-200 hover:shadow-lg hover:shadow-gold/20"
              >
                Explore Cocoffee
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right — Floor cards */}
          <div className="flex flex-col gap-4">
            <p className="text-ivory/40 text-xs font-semibold uppercase tracking-widest mb-2">
              Empat lantai untuk rasa, proses, kopi, dan komunitas
            </p>
            {FLOORS.map((f) => (
              <div key={f.floor} className="flex items-center gap-4 p-4 rounded-2xl card-green hover-lift cursor-default">
                <div className="w-12 h-12 rounded-xl bg-gold/15 flex items-center justify-center shrink-0">
                  <span className="text-gold font-bold text-sm">{f.floor}</span>
                </div>
                <div>
                  <p className="text-ivory font-semibold text-sm">{f.name}</p>
                  <p className="text-ivory/50 text-xs mt-0.5">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom — Cocoffee photo placeholder */}
        <div className="mt-20">
          <PhotoPlaceholder
            label="Cocoffee by Nastar Coco — Suasana Café"
            aspectRatio="aspect-[21/6]"
            rounded="rounded-3xl"
            className="w-full opacity-80"
          />
        </div>
      </div>
    </section>
  );
}
