import Link from "next/link";
import Image from "next/image";
import { WHATSAPP_URL } from "@/data/site";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden -mt-16 md:-mt-[4.5rem] min-h-screen flex items-center bg-green-dark"
    >
      {/* Background — full natural height */}
      <Image
        src="/NastarCocoBg.png"
        alt=""
        fill
        sizes="100vw"
        quality={100}
        className="object-cover object-center scale-[0.92]"
        priority
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col gap-8 py-32 lg:py-0 lg:min-h-screen lg:justify-center max-w-xl">

          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <div className="h-px w-6 bg-gold/50" />
            <p className="text-gold/90 text-[10px] font-semibold tracking-[0.22em] uppercase">
              Premium Nastar Indonesia
            </p>
          </div>

          {/* Headline */}
          <h1
            className="font-display text-ivory leading-[1.02] tracking-tight"
            style={{ fontSize: "clamp(2.8rem, 5.5vw, 5rem)" }}
          >
            A{" "}
            <em className="not-italic italic text-gold">sweet</em> escape
            <br />
            in every{" "}
            <em className="not-italic italic text-gold">bite.</em>
          </h1>

          {/* Horizontal Product Feature Card */}
          <div
            className="flex flex-col sm:flex-row rounded-2xl overflow-hidden"
            style={{
              maxWidth: "480px",
              background: "linear-gradient(135deg, rgba(31,90,52,0.6) 0%, rgba(18,45,28,0.88) 100%)",
              border: "1px solid rgba(246,178,26,0.22)",
              backdropFilter: "blur(20px)",
              boxShadow: "0 0 0 1px rgba(246,178,26,0.05), 0 12px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(246,178,26,0.1)",
            }}
          >
            {/* Left — Product image */}
            <div
              className="sm:w-44 flex-shrink-0 flex items-center justify-center relative overflow-hidden min-h-[140px]"
              style={{
                background: "linear-gradient(160deg, rgba(246,178,26,0.12) 0%, rgba(18,45,28,0.4) 100%)",
              }}
            >
              <div
                className="absolute inset-0"
                style={{
                  background: "radial-gradient(circle 70px at 50% 50%, rgba(246,178,26,0.18) 0%, transparent 70%)",
                }}
              />
              {/* Replace /logo.png with the actual nastar product photo */}
              <Image
                src="/logo.png"
                alt="Pineapple Nastar – Nastar Coco Signature"
                width={100}
                height={100}
                className="relative z-10 object-contain drop-shadow-lg"
                style={{ opacity: 0.9 }}
              />
            </div>

            {/* Right — Product info */}
            <div className="flex flex-col justify-center px-5 py-4 gap-1.5">
              <p className="text-gold/75 text-[9px] font-bold tracking-[0.22em] uppercase">
                Signature Product
              </p>
              <p className="text-ivory text-base font-semibold leading-tight">
                Pineapple Nastar
              </p>
              <p className="text-ivory/55 text-[13px] leading-relaxed">
                Soft, buttery pineapple crumble cookies, beautifully packed for
                gifting, sharing, and everyday sweet moments.
              </p>
            </div>
          </div>

          {/* CTAs + Trust */}
          <div className="flex flex-col gap-5">

            {/* CTAs */}
            <div className="flex items-center gap-5">
              <Link
                href={WHATSAPP_URL()}
                target="_blank"
                rel="noopener noreferrer"
                className="hover-whatsapp inline-flex items-center gap-2 text-ivory font-semibold text-sm transition-colors duration-200"
              >
                <WaIcon />
                Order via WhatsApp
              </Link>
              <span className="text-gold font-light text-lg leading-none select-none">|</span>
              <Link
                href="/cocoffee"
                className="text-ivory font-semibold text-sm hover:text-[#C4956A] transition-colors duration-200"
              >
                Explore Cocoffee
              </Link>
            </div>

            {/* Trust row */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              {["NIB Terdaftar", "PIRT Sertifikasi", "Halal MUI", "BPOM Terdaftar"].map((label) => (
                <span
                  key={label}
                  className="flex items-center gap-1.5 text-ivory/35 text-[10px] font-medium tracking-wide"
                >
                  <VerifiedIcon />
                  {label}
                </span>
              ))}
              <span className="text-ivory/15 text-xs hidden sm:inline select-none">|</span>
              <span className="flex items-center gap-1.5 text-ivory/35 text-[10px] font-medium">
                <StoreIcon />
                Food Hall &amp; Kemchick
              </span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Icons ── */

function WaIcon() {
  return (
    <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function VerifiedIcon() {
  return (
    <svg className="w-3 h-3 shrink-0 text-gold/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function StoreIcon() {
  return (
    <svg className="w-3 h-3 shrink-0 text-gold/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 22V12h6v10" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
