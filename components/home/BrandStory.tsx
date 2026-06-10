import SectionHeading from "@/components/SectionHeading";

const MILESTONES = [
  { year: "Awal", label: "Dari resep nastar rumahan yang penuh kehangatan" },
  { year: "Tumbuh", label: "Brand premium-casual dengan packaging & produk gift-worthy" },
  { year: "Retail", label: "Hadir di Food Hall, Kemchick, dan partner pilihan" },
  { year: "Kini", label: "Berkembang dengan Cocoffee — café, lab, kitchen, dan komunitas" },
];

export default function BrandStory() {
  return (
    <section id="story" className="section-ivory py-24 md:py-32 scroll-mt-28 md:scroll-mt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — Heading & copy */}
          <div className="flex flex-col gap-8">
            <SectionHeading
              badge="Tentang Kami"
              title="Berawal dari nastar, bertumbuh menjadi brand."
              serif
            />
            <div className="flex flex-col gap-5 text-espresso/65 text-base leading-relaxed">
              <p>
                Nastar Coco dimulai dari kecintaan terhadap nastar — kue nanas klasik yang selalu
                dekat dengan rumah, keluarga, dan momen berbagi. Dari sana, kami terus berkembang
                menjadi brand dessert modern yang membawa rasa hangat Indonesia ke dalam produk,
                packaging, café experience, dan retail presence yang lebih luas.
              </p>
              <p>
                Kami bukan sekadar menjual kue. Kami membangun ekosistem nastar yang hangat —
                dengan identitas yang jelas, sistem yang semakin matang, dan tim muda yang
                bekerja keras setiap hari untuk menghadirkan yang terbaik.
              </p>
            </div>

            {/* Quality badges */}
            <div className="flex flex-wrap gap-3">
              {["NIB", "PIRT", "Halal Certified", "Nutrition", "BPOM"].map((b) => (
                <span
                  key={b}
                  className="badge bg-green/8 text-green border border-green/20 text-xs"
                >
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {b}
                </span>
              ))}
            </div>
          </div>

          {/* Right — Timeline */}
          <div className="flex flex-col gap-4">
            <p className="text-xs font-semibold text-espresso/40 uppercase tracking-widest mb-2">Perjalanan kami</p>
            <div className="flex flex-col gap-0">
              {MILESTONES.map((m, i) => (
                <div key={i} className="flex items-start gap-5 group">
                  {/* Timeline connector */}
                  <div className="flex flex-col items-center shrink-0">
                    <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center shrink-0 shadow-md shadow-gold/20">
                      <span className="text-green-dark text-xs font-bold leading-tight text-center px-1">
                        {m.year}
                      </span>
                    </div>
                    {i < MILESTONES.length - 1 && (
                      <div className="w-px flex-1 min-h-8 bg-gold/25 my-1" />
                    )}
                  </div>
                  {/* Content */}
                  <div className="pb-8 pt-2">
                    <p className="text-espresso font-medium text-sm leading-relaxed">{m.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
