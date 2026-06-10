import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="py-[120px] max-[680px]:py-[80px]">
      <div className="max-w-[1280px] mx-auto px-10 max-[680px]:px-[22px] text-center">

        {/* Eyebrow */}
        <div data-reveal className="flex items-center justify-center gap-3 mb-7">
          <span className="block w-[30px] h-[2px] bg-oxblood" />
          <span className="font-body text-[0.72rem] font-semibold tracking-[0.22em] uppercase text-oxblood">
            Contact
          </span>
        </div>

        {/* Titre */}
        <h2
          data-reveal
          className="font-display font-normal tracking-[-0.01em] mx-auto mb-5"
          style={{ fontSize: "clamp(2.6rem, 8vw, 6rem)", lineHeight: "1.02", maxWidth: "15ch" }}
        >
          Une marque à{" "}
          <em className="italic text-oxblood">mettre en ligne</em>&nbsp;?
        </h2>

        {/* Sous-titre */}
        <p
          data-reveal
          className="text-ink-2 mx-auto mb-14"
          style={{ maxWidth: "46ch", fontSize: "1.08rem", lineHeight: "1.58" }}
        >
          Parlez-moi de votre projet. Je vous réponds sous 24h avec une première
          direction, sans engagement.
        </p>

        {/* Lien direct */}
        <div className="mb-14 -mt-6">
          <a
            href="mailto:mouscs06@gmail.com"
            className="inline-flex items-center gap-[8px] text-[0.94rem] font-medium text-oxblood border-b-[1.5px] border-oxblood pb-[3px] hover:text-ink hover:border-ink transition-colors duration-300"
          >
            mouscs06@gmail.com
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        {/* Formulaire */}
        <div className="max-w-[560px] mx-auto text-left">
          <ContactForm />
        </div>

      </div>
    </section>
  );
}
