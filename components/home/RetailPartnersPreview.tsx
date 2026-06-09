import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { PARTNERS } from "@/data/partners";

export default function RetailPartnersPreview() {
  return (
    <section className="section-green py-24 md:py-32 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 70% at 5% 50%, rgba(246,178,26,0.05) 0%, transparent 70%)",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <SectionHeading
            badge="Retail Partner"
            title="Find Nastar Coco near you."
            subtitle="Nastar Coco hadir di partner pilihan agar lebih mudah ditemukan, dibeli, dan dibawa pulang."
            light
          />
          <Link
            href="/retail-partner"
            className="inline-flex items-center gap-2 text-ivory/80 border-2 border-ivory/25 hover:border-ivory/50 hover:text-ivory font-semibold text-sm px-6 py-3 rounded-full transition-all duration-200 shrink-0 self-start lg:self-auto"
          >
            Lihat Semua Partner
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        {/* Partner grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {PARTNERS.map((partner, i) => (
            <div
              key={i}
              className="card-green hover-lift flex flex-col items-center text-center gap-2 p-5"
            >
              {/* Logo placeholder */}
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                style={{ background: "rgba(246,178,26,0.12)", border: "1px solid rgba(246,178,26,0.2)" }}
              >
                <svg className="w-5 h-5 text-gold/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <p className="text-ivory font-semibold text-xs leading-tight">{partner.name}</p>
                <p className="text-gold text-xs mt-0.5">{partner.location}</p>
                <p className="text-ivory/40 text-[10px] mt-0.5">{partner.area}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Credibility tagline */}
        <div className="mt-16 text-center">
          <p className="text-ivory/35 text-sm">
            Nastar Coco tersedia di retail partner terpilih di Jakarta — terus berkembang.
          </p>
        </div>
      </div>
    </section>
  );
}
