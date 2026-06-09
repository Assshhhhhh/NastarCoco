import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";

const TESTIMONIALS = [
  {
    name: "Public Figure",
    category: "Artist",
    quote: "Nastar Coco rasa nanas-nya beneran kerasa, manisnya pas, dan packaging-nya cantik banget buat hadiah.",
    initials: "PF",
  },
  {
    name: "Food Blogger",
    category: "Blogger",
    quote: "Teksturnya buttery dan melt-in-mouth. Ini nastar yang akan saya rekomendasikan ke semua orang.",
    initials: "FB",
  },
  {
    name: "Pelanggan Setia",
    category: "Customer",
    quote: "Udah langganan dari awal. Nastar Coco selalu konsisten, selalu enak, dan selalu bikin kangen.",
    initials: "PS",
  },
];

const STARS = Array(5).fill("★");

export default function TestimonyPreview() {
  return (
    <section className="section-ivory py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <SectionHeading
            badge="Testimony"
            title="Loved, shared, and remembered."
            subtitle="Cerita hangat dari mereka yang sudah mencoba Nastar Coco."
          />
          <Link
            href="/testimony"
            className="inline-flex items-center gap-2 text-green font-semibold text-sm border-2 border-green/30 hover:border-green px-6 py-3 rounded-full transition-all duration-200 shrink-0 self-start lg:self-auto"
          >
            Lihat Semua Testimony
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="hover-lift flex flex-col gap-5 p-7 rounded-2xl border border-cream hover:border-green/20 bg-ivory-warm"
            >
              {/* Stars */}
              <div className="flex gap-0.5">
                {STARS.map((_, j) => (
                  <span key={j} className="text-gold text-base">★</span>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-espresso/75 text-sm leading-relaxed italic flex-1">
                "{t.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-green-dark shrink-0"
                  style={{ background: "linear-gradient(135deg, #F6B21A33, #F4E6C8)" }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-espresso font-semibold text-sm">{t.name}</p>
                  <p className="text-espresso/40 text-xs">{t.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video testimony placeholder */}
        <div className="rounded-3xl bg-cream-light border border-cream p-8 text-center">
          <p className="text-espresso/50 text-sm mb-3">Video testimony dari artist, blogger, dan pelanggan</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="photo-placeholder aspect-video rounded-xl flex-col"
              >
                <svg className="w-8 h-8 text-green/30" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
                <span className="text-[10px] text-green/30">Video coming soon</span>
              </div>
            ))}
          </div>
          <Link
            href="/testimony"
            className="inline-flex items-center gap-2 mt-6 text-green font-semibold text-sm border-2 border-green/30 hover:border-green px-6 py-3 rounded-full transition-all duration-200"
          >
            Lihat Semua Video
          </Link>
        </div>
      </div>
    </section>
  );
}
