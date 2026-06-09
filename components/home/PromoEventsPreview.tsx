import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";

const PROMOS = [
  {
    type: "Promo",
    title: "Paket Spesial Nastar Coco",
    desc: "Nikmati paket nastar dengan harga spesial untuk pembelian dalam jumlah tertentu.",
    tag: "Promo Aktif",
  },
  {
    type: "Seasonal",
    title: "Christmas & New Year Package",
    desc: "Box nastar edisi khusus Natal dan Tahun Baru — cantik, hangat, dan gift-worthy.",
    tag: "Seasonal",
  },
  {
    type: "Seasonal",
    title: "Chinese New Year Package",
    desc: "Paket nastar edisi Imlek — hadir dengan packaging spesial yang cocok untuk hampers.",
    tag: "Seasonal",
  },
  {
    type: "Seasonal",
    title: "Ramadhan Package",
    desc: "Nastar premium sebagai pilihan hampers Ramadhan yang hangat dan berkesan.",
    tag: "Seasonal",
  },
];

export default function PromoEventsPreview() {
  return (
    <section className="section-gold-warm py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <SectionHeading
            badge="Promo & Events"
            title="Dari paket spesial hingga pameran."
            subtitle="Ikuti perjalanan Nastar Coco dalam berbagai momen, musim, dan event."
          />
          <Link
            href="/promo-events"
            className="inline-flex items-center gap-2 text-green font-semibold text-sm border-2 border-green/30 hover:border-green px-6 py-3 rounded-full transition-all duration-200 shrink-0 self-start lg:self-auto"
          >
            Lihat Semua
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        {/* Promo cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {PROMOS.map((promo, i) => (
            <div key={i} className="card-gold hover-lift flex flex-col gap-4 overflow-hidden">
              <PhotoPlaceholder
                label={promo.title}
                aspectRatio="aspect-[4/3]"
                rounded="rounded-none"
                className="w-full rounded-t-2xl"
              />
              <div className="flex flex-col gap-2 p-5 pt-0">
                <span className="badge bg-green/10 text-green border border-green/20 text-[10px] self-start">
                  {promo.tag}
                </span>
                <h3 className="text-espresso font-bold text-sm">{promo.title}</h3>
                <p className="text-espresso/55 text-xs leading-relaxed">{promo.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Event banner */}
        <div className="rounded-3xl section-green p-8 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="badge bg-gold/15 text-gold border border-gold/25 mb-3">Pameran & Event</p>
            <h3 className="text-ivory font-bold text-2xl md:text-3xl leading-tight mb-2">
              Perjalanan kami dari event ke event.
            </h3>
            <p className="text-ivory/60 text-sm leading-relaxed max-w-md">
              Setiap pameran menjadi bagian dari perjalanan Nastar Coco dalam memperkenalkan nastar
              premium-casual kepada lebih banyak orang.
            </p>
          </div>
          <Link
            href="/promo-events"
            className="inline-flex items-center gap-2 bg-gold text-green-dark font-bold text-sm px-7 py-4 rounded-full hover:bg-gold-soft transition-all duration-200 hover:shadow-lg hover:shadow-gold/20 shrink-0"
          >
            Lihat Event Gallery
          </Link>
        </div>
      </div>
    </section>
  );
}
