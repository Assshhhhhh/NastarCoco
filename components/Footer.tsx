import Link from "next/link";
import Image from "next/image";
import { SITE, WHATSAPP_URL } from "@/data/site";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/cocoffee", label: "Cocoffee" },
  { href: "/retail-partner", label: "Retail Partner" },
  { href: "/promo-events", label: "Promo & Events" },
  { href: "/testimony", label: "Testimony" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="section-green pt-16 pb-24 lg:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-ivory/10">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Image
              src="/nastar-coco-logo-green.svg"
              alt="Nastar Coco"
              width={120}
              height={40}
              className="h-10 w-auto object-contain"
              style={{ width: "auto" }}
            />
            <p className="text-ivory/60 text-sm leading-relaxed max-w-xs">
              Golden nastar yang terasa seperti rumah — premium-casual, dibuat untuk keluarga, hadiah, dan momen spesial.
            </p>
            <Link
              href={WHATSAPP_URL()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gold text-green-dark font-semibold text-sm px-5 py-2.5 rounded-full self-start hover:bg-gold-soft transition-colors duration-200"
            >
              Order via WhatsApp
            </Link>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-ivory font-semibold text-sm mb-4 tracking-wide uppercase">Menu Utama</h4>
            <ul className="flex flex-col gap-2">
              {NAV.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-ivory/55 hover:text-ivory text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-ivory font-semibold text-sm mb-4 tracking-wide uppercase">Hubungi Kami</h4>
            <ul className="flex flex-col gap-3 text-sm">
              <li>
                <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="text-ivory/55 hover:text-gold transition-colors duration-200">
                  Instagram: {SITE.instagramHandle}
                </a>
              </li>
              <li>
                <a href={WHATSAPP_URL()} target="_blank" rel="noopener noreferrer" className="text-ivory/55 hover:text-gold transition-colors duration-200">
                  WhatsApp Order
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="text-ivory/55 hover:text-gold transition-colors duration-200">
                  {SITE.email}
                </a>
              </li>
              <li className="text-ivory/40 text-xs mt-2 leading-relaxed">
                {SITE.address}
              </li>
            </ul>

            {/* Cocoffee Hours */}
            <div className="mt-6 p-4 rounded-xl border border-ivory/10 bg-ivory/5">
              <p className="text-gold text-xs font-semibold mb-1 uppercase tracking-wide">Cocoffee Hours</p>
              <p className="text-ivory/70 text-sm">{SITE.cocoffeeHours}</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-ivory/35 text-xs">
            © {new Date().getFullYear()} Nastar Coco. All rights reserved.
          </p>
          <p className="text-ivory/35 text-xs">
            Cocoffee by Nastar Coco — Nastar yang hangat, tim yang serius.
          </p>
        </div>
      </div>
    </footer>
  );
}
