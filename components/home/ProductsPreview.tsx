import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import { PRODUCTS } from "@/data/menu";
import { WHATSAPP_URL } from "@/data/site";

export default function ProductsPreview() {
  const signature = PRODUCTS.filter((p) => p.isSignature);

  return (
    <section className="section-ivory py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <SectionHeading
            badge="Produk Pilihan"
            title="Nastar yang dibuat dengan hati."
            subtitle="Setiap produk Nastar Coco dibuat untuk dinikmati sendiri, dibagi bersama keluarga, atau diberikan sebagai hadiah."
          />
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 text-green font-semibold text-sm border-2 border-green/30 hover:border-green px-6 py-3 rounded-full transition-all duration-200 shrink-0 self-start lg:self-auto"
          >
            Lihat Semua Menu
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {signature.map((product) => (
            <div
              key={product.name}
              className="group flex flex-col rounded-2xl overflow-hidden border border-cream hover:border-green/20 bg-ivory-warm hover-lift transition-all duration-200"
            >
              {/* Photo */}
              <div className="relative">
                <PhotoPlaceholder
                  label={product.name}
                  aspectRatio="aspect-square"
                  rounded="rounded-none"
                  className="w-full"
                />
                {/* Category tag */}
                <span className="absolute top-3 left-3 badge bg-green-dark text-ivory text-[10px] py-1 px-2.5">
                  {product.category === "gift" ? "Gift" : product.category === "nastar" ? "Nastar" : product.category === "cookies" ? "Cookies" : "Premium"}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-3 p-5 flex-1">
                <div>
                  <h3 className="text-espresso font-bold text-sm">{product.name}</h3>
                  <p className="text-espresso/55 text-xs mt-1.5 leading-relaxed">{product.description}</p>
                </div>
                <div className="flex items-center justify-between mt-auto pt-2">
                  <div>
                    <p className="text-green font-bold text-base">{product.price}</p>
                    <p className="text-espresso/40 text-[10px] mt-0.5">{product.bestFor}</p>
                  </div>
                </div>
                <Link
                  href={WHATSAPP_URL(`Halo! Saya mau order ${product.name} 🍍`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center bg-green-dark text-ivory font-semibold text-xs py-3 rounded-xl hover:bg-green transition-colors duration-200"
                >
                  Order via WhatsApp
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-espresso/40 text-xs mt-10">
          Foto produk akan diupdate pada Juli 2025. Produk tersedia untuk order sekarang via WhatsApp.
        </p>
      </div>
    </section>
  );
}
