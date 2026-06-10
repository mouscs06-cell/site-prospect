export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-svh flex flex-col justify-center pt-[140px] pb-[60px] max-[680px]:pt-[100px]"
    >
      <div className="max-w-[1280px] mx-auto w-full px-10 max-[680px]:px-[22px]">

        {/* Eyebrow */}
        <div data-hero-eyebrow className="flex items-center gap-[13px] mb-10 overflow-hidden">
          <span className="w-[30px] h-px bg-oxblood flex-none" aria-hidden="true" />
          <span className="font-body text-[0.7rem] font-semibold tracking-[0.22em] uppercase text-ink-2">
            Studio indépendant — Design &amp; développement e-commerce · France
          </span>
        </div>

        {/* Title */}
        <h1
          data-hero-lines
          className="font-display font-normal tracking-[-0.01em]"
          style={{ fontSize: "clamp(3rem, 9vw, 8rem)", lineHeight: "0.99" }}
        >
          <span className="block overflow-hidden">
            <span className="block">Des boutiques</span>
          </span>
          <span className="block overflow-hidden">
            <span className="block">
              en ligne <em className="italic text-oxblood">sur-mesure</em>,
            </span>
          </span>
          <span className="block overflow-hidden">
            <span className="block">faites pour vendre.</span>
          </span>
        </h1>

        {/* Sous-titre */}
        <p data-hero-sub className="mt-10 max-w-[52ch] text-[1.2rem] leading-[1.55] text-ink-2">
          Je conçois et développe votre site e-commerce de A à Z — design, développement,
          mise en ligne. Rapide, élégant, et pensé pour transformer vos visiteurs en clients.
        </p>

        {/* CTAs */}
        <div className="mt-12 flex flex-wrap items-center gap-4">
          <a
            data-hero-cta
            data-magnetic
            href="#contact"
            className="group inline-flex items-center gap-[11px] px-[30px] py-[17px] rounded-full text-[0.94rem] font-medium bg-ink text-ivory transition-colors duration-[350ms] hover:bg-oxblood"
          >
            Démarrer un projet
            <ArrowIcon className="transition-transform duration-[350ms] group-hover:translate-x-[3px] group-hover:-translate-y-[3px]" />
          </a>
          <a
            data-hero-cta
            data-magnetic
            href="#work"
            className="inline-flex items-center gap-[11px] px-[30px] py-[17px] rounded-full text-[0.94rem] font-medium border border-line text-ink hover:border-ink transition-colors duration-[350ms]"
          >
            Voir les réalisations
          </a>
        </div>
      </div>

      {/* Indicateur scroll */}
      <div data-hero-scroll className="absolute left-0 bottom-[34px] flex items-center gap-[14px] pl-10 max-[680px]:pl-[22px] max-[680px]:bottom-6">
        <span className="relative block w-px h-[46px] overflow-hidden bg-line" aria-hidden="true">
          <span
            className="absolute inset-0 bg-oxblood"
            style={{
              transform: "translateY(-100%)",
              animation: "scrolldown 2.4s cubic-bezier(0.19,1,0.22,1) infinite",
            }}
          />
        </span>
        <span className="font-body text-[0.7rem] font-semibold tracking-[0.22em] uppercase text-ink-2">
          Scroll
        </span>
      </div>
    </section>
  );
}

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 11L11 3M11 3H5M11 3V9"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
