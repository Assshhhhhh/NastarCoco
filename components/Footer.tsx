import Link from "next/link";
import { SITE, WHATSAPP_URL } from "@/data/site";

export default function Footer() {
  return (
    <footer className="pt-14 pb-24 lg:pb-12" style={{ backgroundColor: "#4A7145" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main — logo+brand, contact, Cocoffee hours */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12"
          style={{ borderBottom: "1px solid rgba(255,253,247,0.12)" }}
        >
          {/* Brand */}
          <div className="flex flex-col gap-5">
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: "rgba(255,253,247,0.65)" }}>
              The nastar that feels like home — premium-casual, made for families,
              gifts, and every special moment.
            </p>
            <Link
              href={WHATSAPP_URL()}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 bg-[#FFFDF7] text-[#064B2F] rounded-full px-6 py-3 text-[13px] font-semibold tracking-[0.12em] uppercase self-start transition-all duration-200 hover:bg-[#064B2F] hover:text-white active:scale-[0.98]"
            >
              Order via WhatsApp
              <span className="inline-block transition-transform duration-200 group-hover:translate-x-1 relative -top-px">→</span>
            </Link>
          </div>

          {/* Contact */}
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: "#F6B21A" }} />
              <p className="text-[12px] font-semibold tracking-[0.2em] uppercase" style={{ color: "rgba(255,253,247,0.9)" }}>
                Contact Us
              </p>
            </div>
            <ul className="flex flex-col gap-3 text-sm">
              <li>
                <a
                  href={SITE.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-200 hover:text-[#F6B21A]"
                  style={{ color: "rgba(255,253,247,0.65)" }}
                >
                  Instagram: {SITE.instagramHandle}
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_URL()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-200 hover:text-[#F6B21A]"
                  style={{ color: "rgba(255,253,247,0.65)" }}
                >
                  WhatsApp Order
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="transition-colors duration-200 hover:text-[#F6B21A]"
                  style={{ color: "rgba(255,253,247,0.65)" }}
                >
                  {SITE.email}
                </a>
              </li>
              <li className="text-xs leading-relaxed mt-1" style={{ color: "rgba(255,253,247,0.45)" }}>
                {SITE.address}
              </li>
            </ul>
          </div>

          {/* Cocoffee hours */}
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: "#C4743A" }} />
              <p className="text-[12px] font-semibold tracking-[0.2em] uppercase" style={{ color: "rgba(255,253,247,0.9)" }}>
                Cocoffee Hours
              </p>
            </div>
            <div
              className="rounded-2xl p-5 inline-flex flex-col gap-1"
              style={{
                backgroundColor: "rgba(255,253,247,0.06)",
                border: "1px solid rgba(255,253,247,0.12)",
              }}
            >
              <p className="text-sm font-medium" style={{ color: "rgba(255,253,247,0.85)" }}>
                {SITE.cocoffeeHours}
              </p>
              <p className="text-xs" style={{ color: "rgba(255,253,247,0.5)" }}>
                Mon – Sun, open daily
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{ color: "rgba(255,253,247,0.4)" }}>
            © {new Date().getFullYear()} Nastar Coco. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: "rgba(255,253,247,0.4)" }}>
            Cocoffee by Nastar Coco — Warm nastar, serious team.
          </p>
        </div>
      </div>
    </footer>
  );
}
