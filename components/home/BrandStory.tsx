import SectionHeading from "@/components/SectionHeading";

const MILESTONES = [
  {
    title: "Awal",
    desc: "Dari resep nastar rumahan yang penuh kehangatan.",
    icon: (
      <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 22V12h6v10" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Tumbuh",
    desc: "Brand premium-casual dengan packaging & produk gift-worthy.",
    icon: (
      <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22V12M12 12C12 7 8 3 3 3c0 5 4 9 9 9zM12 12C12 7 16 3 21 3c0 5-4 9-9 9z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Retail",
    desc: "Hadir di Food Hall, Kemchick, dan partner pilihan.",
    icon: (
      <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Kini",
    desc: "Berkembang dengan Cocoffee — café, lab, kitchen, dan komunitas.",
    icon: (
      <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 8h1a4 4 0 010 8h-1M3 8h14v9a4 4 0 01-4 4H7a4 4 0 01-4-4V8z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function BrandStory() {
  return (
    <section id="story" className="section-ivory py-24 md:py-32 scroll-mt-28 md:scroll-mt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left — Heading & copy (unchanged) */}
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

          {/* Right — Premium Timeline Card */}
          <div
            className="rounded-3xl p-7 md:p-9"
            style={{
              backgroundColor: "#FBF3E2",
              border: "1px solid #E8D5B0",
              boxShadow: "0 8px 32px rgba(51,33,26,0.07), 0 1px 4px rgba(51,33,26,0.04)",
            }}
          >
            {/* Card header */}
            <div className="flex items-center gap-2.5 mb-8">
              <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="#F6B21A">
                <path d="M12 2l2.09 6.26H21l-5.47 3.97 2.09 6.26L12 14.52l-5.62 3.97 2.09-6.26L3 8.26h6.91z" />
              </svg>
              <span
                className="text-[11px] font-semibold tracking-[0.22em] uppercase"
                style={{ color: "#4A7145" }}
              >
                Perjalanan Kami
              </span>
            </div>

            {/* Timeline */}
            <div className="flex flex-col">
              {MILESTONES.map((m, i) => (
                <div key={i} className="flex gap-5 items-start">
                  {/* Marker + connector */}
                  <div className="flex flex-col items-center shrink-0">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                      style={{
                        backgroundColor: "#F6B21A",
                        boxShadow: "0 0 0 4px #FBF3E2, 0 0 0 4.7px #F6B21A, 0 4px 16px rgba(246,178,26,0.3)",
                        color: "#33211A",
                      }}
                    >
                      {m.icon}
                    </div>
                  </div>

                  {/* Content — vertically centred with circle */}
                  <div className={`flex flex-col justify-center${i < MILESTONES.length - 1 ? " pb-8" : ""}`} style={{ minHeight: "3.5rem" }}>
                    <p
                      className="font-display leading-tight mb-1"
                      style={{ color: "#33211A", fontSize: "1.15rem" }}
                    >
                      {m.title}
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(51,33,26,0.55)" }}>
                      {m.desc}
                    </p>
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
