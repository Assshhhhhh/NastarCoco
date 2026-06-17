"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/", label: "Home", hoverColor: "#F6B21A", underlineColor: "#F6B21A" },
  { href: "/menu", label: "Menu", hoverColor: "#F6B21A", underlineColor: "#F6B21A" },
  { href: "/cocoffee", label: "Cocoffee", hoverColor: "#C4743A", underlineColor: "#C4743A" },
  { href: "/retail-partner", label: "Retail Partner", hoverColor: "#F6B21A", underlineColor: "#F6B21A" },
  { href: "/promo-events", label: "Promo & Events", hoverColor: "#F6B21A", underlineColor: "#F6B21A" },
  { href: "/testimony", label: "Testimony", hoverColor: "#F6B21A", underlineColor: "#F6B21A" },
];

/** Always white — readable on both transparent (green bg) and opaque green navbar */
function scrollColor(_opacity: number): string {
  return "#ffffff";
}

/* ─────────────────────────────────────────────────────────────
   COCOFFEE underline — its own animation, independent of the
   other nav links. Tweak these freely without touching the rest.
   ───────────────────────────────────────────────────────────── */
const COCOFFEE_UNDERLINE = {
  bottom: "0px",      // gap below the word (less negative = closer)
  height: "1px",     // thickness of the line
  restWidth: "0%",     // width when not hovered
  hoverWidth: "100%",  // width when hovered
  transition: "width 250ms ease", // animation
};

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [menuOpen, setMenuOpen] = useState(false);
  // Transparency is a home-hero-only treatment. Every other page starts solid.
  // (Initialising non-home to 1 means a direct load is solid with no flash;
  //  a Home→other navigation keeps the persisted 0 and animates up to 1.)
  const [opacity, setOpacity] = useState(isHome ? 0 : 1);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [navMounted, setNavMounted] = useState(false);

  useEffect(() => {
    // Fade-on-scroll transparency only applies on the home page.
    // On every other page the navbar is solid from the start.
    if (!isHome) {
      setOpacity(1);
      return;
    }
    const handleScroll = () => {
      const hero   = document.getElementById("hero");
      const header = document.querySelector("header");
      if (!hero) { setOpacity(1); return; }
      const navH     = header ? header.offsetHeight : 0;
      const fadeEnd  = hero.offsetHeight - navH;
      setOpacity(fadeEnd > 0 ? Math.min(window.scrollY / fadeEnd, 1) : 1);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  useEffect(() => { const t = setTimeout(() => setNavMounted(true), 80); return () => clearTimeout(t); }, []);

  const solidBg      = "linear-gradient(180deg, rgba(74,113,69,1) 0%, rgba(60,92,57,1) 100%)";
  const mobileMenuBg = `linear-gradient(180deg, rgba(74,113,69,0.98) 0%, rgba(60,92,57,0.98) 100%)`;
  const textFill     = scrollColor(opacity);
  // Animate the background LAYER'S OPACITY — gradients can't be CSS-transitioned,
  // so a single 0→1 jump never animated. Snappy on home (so scroll stays responsive),
  // a slower ease elsewhere so Home→page navigation fades transparent→solid.
  const bgTransition = isHome ? "opacity 140ms linear" : "opacity 450ms ease";

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">
        {/* Animatable green background layer (its opacity carries the fade) */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden
          style={{
            background: solidBg,
            backdropFilter: opacity > 0 ? "blur(12px)" : "none",
            WebkitBackdropFilter: opacity > 0 ? "blur(12px)" : "none",
            boxShadow: "0 1px 0 rgba(255,255,255,0.08)",
            opacity,
            transition: bgTransition,
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-28 md:h-32">

            {/* Logo — inline SVG so text fill transitions with scroll */}
            <Link href="/" className="flex items-center shrink-0">
              <svg
                width="130"
                height="96"
                viewBox="0 0 591 437"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                overflow="hidden"
                className="logo-enter"
                style={{ display: "block", flexShrink: 0, transition: "fill 120ms linear" }}
                aria-label="Nastar Coco"
              >
                <g clipPath="url(#clip0_17_2)">
                  {/* N */}
                  <path fillRule="evenodd" clipRule="evenodd" className="letter-animate" style={{ animationDelay: "0ms", transition: "fill 120ms linear" }} fill={textFill}
                    d="M102 48H100L96 52L92 54L85 60H84L78 65L74 67L76 69H77L81 66H83L84 65H90L92 66L98 72L100 76L104 80L106 84L109 87V88L114 94L116 98L122 105L124 109L127 112V113L133 120L135 124L141 131L142 133L141 134H139L131 130L126 129L123 127H121L113 123L108 122L105 120L100 119L97 117H95L87 113L82 112L79 110L74 109L66 105H64L58 102L53 101L50 99H48L45 97L40 96L37 94L35 95L26 103H25L23 105H22L20 107H19L17 109L13 111L14 114H15L21 110H27L30 113L32 114V115L36 119L38 123L44 130L46 134L50 138V139L52 141L54 145L60 152V153L65 159L67 163L71 167V168L76 174V175L78 177L80 181L84 185V186L88 191L91 197V201L90 203L84 209L85 211H87L91 207H92L99 201H100L106 196H107L109 194L113 192L112 190H110L103 194H97L95 193L90 188V187L81 176L79 172L76 169L74 165L68 158L66 154L63 151L61 147L58 144V143L49 132L47 128L44 125L42 121L36 114V113L34 111L35 110L41 113H43L49 116H51L54 118H56L62 121L67 122L70 124H72L80 128H82L88 131L93 132L96 134H98L106 138H108L114 141L119 142L122 144H124L127 146H129L137 150L142 151L150 155L155 156L158 158H161L163 157L162 154L159 151L157 147L154 144V143L152 141L150 137L146 133L144 129L138 122L136 118L130 111L128 107L122 100L120 96L117 93V92L114 89L112 85L109 82V81L106 78L104 74L99 68L97 64L96 59L97 58V56L103 50L102 48Z"
                  />
                  {/* a */}
                  <path fillRule="evenodd" clipRule="evenodd" className="letter-animate" style={{ animationDelay: "120ms", transition: "fill 120ms linear" }} fill={textFill}
                    d="M170 61V62L166 66L164 70V72L163 73V76L164 77V79L165 81L169 85H171L172 86L174 85H177L179 84L182 81L183 79V74L182 73V71L178 67L176 66H173L172 65L173 63L178 58L182 56L187 55L188 54H199L205 60L207 64L208 69L209 70V73L210 74V76L211 77V82L208 86V87L206 88L203 91H202L199 94L196 95L193 98L190 99L187 102H186L176 112L174 116V118L173 119V127L174 128V131L175 132V134L178 138V139L180 141H181L183 143L187 145H191L192 146H195L196 145H201L207 142H209L211 140H212L217 135L223 123L227 131L232 134H241L242 133H244L248 131L254 125L255 123L254 122H252L248 126L246 127H243L239 123V121L237 117V114L236 113V110L234 106V103L232 99L231 92L229 88L228 81L226 77L225 70L223 67V65L219 57L215 53H214L212 51H210L206 49H196L195 50H191L190 51L185 52L182 54H180L178 56L174 58L171 61H170ZM212 86L214 88L215 95L217 99V102L219 106V109L220 110V113L221 114L222 119L221 120V122L219 126L217 128V129L212 134L206 137H198L196 136L190 130L189 128V126L188 125V123L187 122V115L192 105L195 102H196L203 95H204L211 88L212 86Z"
                  />
                  {/* s */}
                  <path fillRule="evenodd" clipRule="evenodd" className="letter-animate" style={{ animationDelay: "240ms", transition: "fill 120ms linear" }} fill={textFill}
                    d="M316 39H313L312 44L309 47L306 46L304 44H303L301 42L297 40H294L293 39H278L277 40L272 41L270 43L266 45L262 51V53L261 54V59L260 60V63L261 64V68L264 74L272 82H273L276 85H277L279 87L283 89L286 92L290 94L301 104V105L303 107V110L304 111V115L303 116V120L301 124L295 129H293L292 130H282L281 129H278L276 128L270 122V121L268 119V117L266 113V110L265 109V106L264 105V99L263 97H260V112L259 113V132H262V130L264 126L265 125H267L273 130L275 131H277L278 132H281L282 133H297L298 132H301L302 131H304L308 129L311 126H312L313 124L316 121L318 117V114L319 113V106L318 105V102L317 101V99L315 95L310 90V89H309L305 85H304L301 82H300L298 80H297L295 78H294L292 76H291L289 74L285 72L282 69H281L275 63L274 61V59L273 58V52L274 51V49L275 47L277 45L285 41H290L291 42H295L299 44L306 51L309 57L310 62L311 63V67L315 69V56L316 55V39Z"
                  />
                  {/* t */}
                  <path fillRule="evenodd" clipRule="evenodd" className="letter-animate" style={{ animationDelay: "360ms", transition: "fill 120ms linear" }} fill={textFill}
                    d="M368 23H366V26L365 27V30L363 34V37L362 38L361 45L359 49L357 48H355L354 47H350L346 45H343V48H346L350 50L357 51L358 52V56L357 57V60L356 61L355 68L353 72V75L352 76V79L351 80V83L350 84V87L349 88L348 95L346 99V102L345 103V106L344 107V110L343 111V114L342 115V122L341 123L342 125V130L345 136L349 140H350L352 142H354L357 144H360L361 145H369L370 144H372L374 143L382 135V134L384 132L386 128V126L384 125L381 129V130L377 134V135L369 140H365L364 139H362L360 138L357 135L355 131V126L356 125V122L357 121V118L358 117V114L359 113V110L360 109V106L361 105L362 98L364 94V91L365 90V87L366 86V83L367 82L368 75L370 71V68L371 67V64L372 63V60L373 59V57L374 56H376L377 57H380L381 58L388 59L392 61L399 62V59H396L392 57H389L388 56H385L384 55L377 54L375 52V49L376 48L377 41L379 37V34L380 33V30L381 29V26L382 25H376L375 24H369L368 23Z"
                  />
                  {/* a */}
                  <path fillRule="evenodd" clipRule="evenodd" className="letter-animate" style={{ animationDelay: "480ms", transition: "fill 120ms linear" }} fill={textFill}
                    d="M430 76L429 77H426L422 79L420 81L418 85V92L419 94L421 96L425 98H431L433 97L437 91V85L434 80L435 79H443L444 80H447L453 83L457 87H458L461 91V100L453 116L450 119L448 120H436L435 119H432L431 118H426L425 117H421L420 116H404L403 117L398 118L392 123V124L390 126L388 130V132L387 133V144L389 148L391 150V151L394 154H395L397 156L405 160H408L409 161H417L418 160H422L428 157L429 159L427 163V168L430 174H431L434 177L438 179H440L441 180H451L452 179V177H446L442 175L440 172V170L445 160L447 158L449 153L451 151L454 144L456 142L458 137L460 135L463 128L465 126L471 114V112L472 111V108L473 107V101L472 100V97L470 93L462 85H461L459 83L449 78H446L445 77H441L440 76H430ZM447 123L448 125L446 127L445 130L443 132L435 148L430 154H428L425 156H422L421 157H414L413 156L408 155L402 149L401 147V138L402 137V135L404 133V132L411 125L415 123H419L420 122H428L429 123H447Z"
                  />
                  {/* r */}
                  <path fillRule="evenodd" clipRule="evenodd" className="letter-animate" style={{ animationDelay: "600ms", transition: "fill 120ms linear" }} fill={textFill}
                    d="M512 121H511L509 123L513 128V130L514 131V134L512 138L510 140V141L490 161H489V162L482 169H481V170L479 172H478L475 176H474L464 186L462 187H457L453 185L450 182H449L448 185L450 187H451L473 209V210L481 218L483 216V215L478 210L476 206V204L475 203V200L477 196L480 193V192L487 185H488V184L492 180H493V179L495 177H496L511 162L514 161L516 159L518 158H520L523 156H526L527 155H540L541 156H543L546 159H547L549 163L548 164H542L540 165L538 167H537L536 169V171L535 172L536 174V177L540 181L542 182H547L548 181H550L554 178L556 174V165L554 161L552 159V158L548 155L544 153H542L541 152H529L528 153H524L523 154H521L520 153L533 140H532L526 135H525L513 123L512 121Z"
                  />
                  {/* C */}
                  <path fillRule="evenodd" clipRule="evenodd" className="letter-animate" style={{ animationDelay: "720ms", transition: "fill 120ms linear" }} fill={textFill}
                    d="M165 187L162 188V191L163 192V199L162 200H156L155 199H147L146 198H141L140 199H135L134 200H131L130 201H128L118 206L112 211H111L105 217V218L101 223L97 231V233L95 237V240L94 241V247L93 248V258L94 259V265L95 266L96 273L97 274V276L98 277L99 282L105 294L107 296L108 299L118 311H119L124 316H125L130 320L134 322L139 323L140 324H143L144 325H149L150 326H159L160 325L169 324L172 322H174L175 321H177L181 319L183 317L189 314L195 308V307L198 304V303L200 301L202 297L206 293H208L214 300H216L217 299L202 269V267L200 263L199 262H197L196 263V265L197 266V268L199 272V275L200 276V280L201 281V289L200 290V294L199 295V297L197 301L191 308H190L185 313H184L182 315L176 318H174L173 319H169L168 320H160L159 319H156L155 318L150 317L146 314H145L143 312H142L139 309H138L127 297V296L123 291L121 286L119 284L115 276V274L113 271V269L111 266V264L109 260V256L108 255V252L107 251V244L106 243V236L107 235V229L108 228V225L109 224V222L111 218L119 209H120L122 207L128 204H130L131 203H134L135 202H140L141 201H147L148 202H152L153 203H155L161 206L163 208H164L171 215V216L174 219L176 223L178 225H179L181 223L173 207V205L169 198V196L166 191V189L165 187Z"
                  />
                  {/* o */}
                  <path fillRule="evenodd" clipRule="evenodd" className="letter-animate" style={{ animationDelay: "840ms", transition: "fill 120ms linear" }} fill={textFill}
                    d="M256 204L255 205L248 206L242 209L240 211H239L231 219L226 229V232L225 233V237L224 238V258L225 259V265L226 266V269L227 270L228 275L231 281L238 290H239L244 294L248 296L253 297L254 298H261L262 299H266L267 298H273L274 297H277L280 295H282L286 293L289 290H290L297 282L300 276V274L302 270V266L303 265V244L302 243V238L301 237V234L300 233V230L298 227V225L296 223L293 217L286 210L278 206H276L275 205H272L271 204H256ZM258 207H266L272 210L278 216L279 219L281 221V223L282 224V226L284 230V233L285 234V239L286 240V248L287 249V267L286 268V274L285 275V278L284 279V281L281 287L275 293L271 295H267L266 296H264L263 295H260L256 293L248 285L245 279L244 274L243 273V269L242 268V264L241 263V253L240 252V235L241 234V228L242 227V224L244 221V219L246 217L248 213L253 209L255 208H257L258 207Z"
                  />
                  {/* c */}
                  <path fillRule="evenodd" clipRule="evenodd" className="letter-animate" style={{ animationDelay: "960ms", transition: "fill 120ms linear" }} fill={textFill}
                    d="M375 215H370L369 214H362L361 215H357L356 216L351 217L347 219L342 223H341L336 228V229L331 235L327 243V245L325 249V252L324 253V256L323 257V262L322 263V273L323 274V279L324 280L325 285L328 291L330 293V294L337 301H338L340 303L346 306H349L350 307H353L354 308H365L366 307L371 306L375 304L377 302H378L386 294L387 291L384 290L383 292L380 295H379L376 298L372 300H370L369 301H366L365 302H359L358 301H355L354 300H352L350 299L343 293L340 287V285L339 284V281L338 280V267L339 266V261L340 260V256L341 255V252L342 251V249L343 248V246L344 245L345 240L347 236L349 234L350 231L353 228V227L360 221L366 218H376L377 219H379L383 221L389 227L390 229L389 230H386L382 233L380 237V242L381 244L383 246L387 248H392L397 245V243L399 240V235L398 234V232L396 228L390 222H389L387 220L381 217L376 216L375 215Z"
                  />
                  {/* o */}
                  <path fillRule="evenodd" clipRule="evenodd" className="letter-animate" style={{ animationDelay: "1080ms", transition: "fill 120ms linear" }} fill={textFill}
                    d="M456 249H442L441 250L436 251L430 254L428 256H427L417 266V267L414 270L411 276L409 278L406 284V286L404 289V291L403 292V295L402 296V312L403 313V316L406 322L408 324V325L416 333H417L420 336L426 339H428L431 341H435L436 342H447L448 341H451L452 340H454L460 337L462 335H463L474 324V323L480 315L486 303V301L488 297V292L489 291V282L488 281V277L487 276V274L484 268L482 266V265L475 258H474L469 254L463 251H461L460 250H457L456 249ZM468 257L473 261V262L476 266V268L477 269V281L476 282V285L473 291V293L469 301L467 303L465 308L463 310V311L461 313L459 317L454 322V323L444 332L440 334L435 335L434 336H428L427 335H425L421 333L417 329V328L414 324V321L413 320V312L414 311V307L415 306L416 301L423 287L425 285L426 282L428 280L430 276L433 273V272L446 259L452 256H455L456 255H463L464 256H466L468 257Z"
                  />
                  {/* gold dot */}
                  <path className="dot-pop-animate" style={{ animationDelay: "1200ms" }}
                    d="M297.8 412.1C317.075 412.1 332.7 396.475 332.7 377.2C332.7 357.925 317.075 342.3 297.8 342.3C278.525 342.3 262.9 357.925 262.9 377.2C262.9 396.475 278.525 412.1 297.8 412.1Z"
                    fill="#F4BE21"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_17_2">
                    <rect width="591" height="437" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-10 mr-16">
              {NAV_LINKS.map((link, idx) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative font-semibold uppercase leading-none"
                  style={{
                    color: textFill,
                    fontSize: link.label === "Cocoffee" ? "17.5px" : "14.5px",
                    fontFamily: link.label === "Cocoffee" ? "var(--font-bebas)" : undefined,
                    letterSpacing: link.label === "Cocoffee" ? "0.1em" : "0.15em",
                    fontWeight: link.label === "Cocoffee" ? 400 : undefined,
                    opacity: navMounted ? 1 : 0,
                    transform: navMounted
                      ? link.label === "Cocoffee" ? "translateY(2px)" : "translateY(0)"
                      : "translateY(5px)",
                    transition: navMounted
                      ? `opacity 0.5s cubic-bezier(0.4,0,0.2,1) ${300 + idx * 100}ms, transform 0.5s cubic-bezier(0.4,0,0.2,1) ${300 + idx * 100}ms`
                      : "none",
                  }}
                  onMouseEnter={() => setHoveredLink(link.href)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  {link.label.split("").map((char, i) => (
                    <span
                      key={i}
                      className="inline-block"
                      style={{
                        whiteSpace: char === " " ? "pre" : undefined,
                        color: hoveredLink === link.href ? link.hoverColor : textFill,
                        transition: "color 300ms ease",
                        transitionDelay: `${i * 35}ms`,
                      }}
                    >{char}</span>
                  ))}
                  {link.label === "Cocoffee" ? (
                    /* ── COCOFFEE underline (special, see COCOFFEE_UNDERLINE above) ── */
                    <span
                      className="absolute left-0"
                      style={{
                        bottom: COCOFFEE_UNDERLINE.bottom,
                        height: COCOFFEE_UNDERLINE.height,
                        backgroundColor: link.underlineColor,
                        width: hoveredLink === link.href ? COCOFFEE_UNDERLINE.hoverWidth : COCOFFEE_UNDERLINE.restWidth,
                        transition: COCOFFEE_UNDERLINE.transition,
                      }}
                    />
                  ) : (
                    /* ── Default nav underline ── */
                    <span
                      className="absolute left-0 bottom-[-3px] h-[1.5px]"
                      style={{
                        backgroundColor: link.underlineColor,
                        width: hoveredLink === link.href ? "100%" : "0%",
                        transition: "width 250ms ease",
                      }}
                    />
                  )}
                </Link>
              ))}
            </nav>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden flex flex-col gap-1.5 p-2 text-ivory"
              aria-label="Toggle menu"
            >
              <span className={`block w-6 h-0.5 bg-ivory transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block w-6 h-0.5 bg-ivory transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block w-6 h-0.5 bg-ivory transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="lg:hidden relative z-10 border-t border-ivory/10" style={{ background: mobileMenuBg }}>
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-ivory/80 hover:text-ivory hover:bg-ivory/5 text-sm font-medium px-4 py-3 rounded-lg transition-colors duration-200"
                  style={link.label === "Cocoffee" ? { fontFamily: "var(--font-bebas)", fontSize: "17px" } : undefined}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Spacer for fixed header */}
      <div className="h-28 md:h-32" />
    </>
  );
}
