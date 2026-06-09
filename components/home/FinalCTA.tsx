import Link from "next/link";
import { WHATSAPP_URL } from "@/data/site";

export default function FinalCTA() {
  return (
    <section className="section-gold py-24 md:py-32 relative overflow-hidden">
      {/* Decorative bg circles */}
      <div
        className="absolute top-0 left-0 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: "rgba(18,45,28,0.06)",
          transform: "translate(-40%, -40%)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-64 h-64 rounded-full pointer-events-none"
        style={{
          background: "rgba(18,45,28,0.06)",
          transform: "translate(30%, 30%)",
        }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <span className="badge bg-green-dark/10 text-green-dark border border-green-dark/15 mb-6 inline-flex">
          Nastar Coco
        </span>

        {/* Headline */}
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-normal text-green-dark leading-tight mb-6">
          Siap rasakan hangatnya{" "}
          <span className="italic">nastar Coco</span>?
        </h2>

        <p className="text-green-dark/65 text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-10">
          Punya pertanyaan, ingin order, atau tertarik bekerja sama? Hubungi tim Nastar Coco
          dan kami akan membantu dengan hangat.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href={WHATSAPP_URL()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-green-dark text-ivory font-bold text-sm px-8 py-4 rounded-full hover:bg-green transition-all duration-200 hover:shadow-xl hover:shadow-green-dark/25"
          >
            <WaIcon />
            Order via WhatsApp
          </Link>
          <Link
            href="/cocoffee"
            className="inline-flex items-center gap-2 text-green-dark border-2 border-green-dark/30 hover:border-green-dark font-semibold text-sm px-8 py-4 rounded-full transition-all duration-200 hover:bg-green-dark/5"
          >
            Explore Cocoffee
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-green-dark/70 hover:text-green-dark font-medium text-sm transition-colors duration-200"
          >
            Atau hubungi kami →
          </Link>
        </div>

        {/* Trust strip */}
        <div className="mt-14 flex flex-wrap justify-center items-center gap-6">
          {[
            { label: "NIB" },
            { label: "PIRT" },
            { label: "Halal" },
            { label: "BPOM" },
            { label: "Food Hall Partner" },
            { label: "Kemchick Pacific Place" },
          ].map((item) => (
            <span key={item.label} className="flex items-center gap-1.5 text-green-dark/50 text-xs font-medium">
              <svg className="w-3 h-3 text-green-dark/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {item.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function WaIcon() {
  return (
    <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
