const capabilities = [
  { label: "Design d'interface sur-mesure", tech: "Identité · UI · direction artistique" },
  { label: "Développement e-commerce",      tech: "Next.js · React · TypeScript" },
  { label: "Paiement & commandes",          tech: "Stripe · tunnel d'achat" },
  { label: "Base de données & e-mails",     tech: "Neon · Prisma · Resend" },
  { label: "Animations & micro-interactions", tech: "GSAP · scroll · motion" },
  { label: "Mise en ligne complète",        tech: "Domaine · hébergement · DNS" },
];

const stack = [
  "Next.js", "React", "TypeScript", "Stripe",
  "Neon", "Prisma", "Resend", "Tailwind",
  "GSAP", "Vercel", "OVH",
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="py-[120px] max-[680px]:py-[80px]">
      <div className="max-w-[1280px] mx-auto px-10 max-[680px]:px-[22px]">

        {/* En-tête */}
        <div className="flex items-baseline justify-between gap-6 mb-16 flex-wrap">
          <h2
            data-reveal
            className="font-display font-normal tracking-[-0.01em]"
            style={{ fontSize: "clamp(2rem, 5vw, 3.6rem)", lineHeight: "1.02" }}
          >
            Ce que je prends <em className="italic text-oxblood">en charge</em>
          </h2>
          <p data-reveal className="max-w-[34ch] text-ink-2 text-[0.98rem] text-right max-[680px]:text-left">
            Le design et le code, par la même personne. C&apos;est ce qui garde l&apos;ensemble
            cohérent et rapide.
          </p>
        </div>

        {/* Grille liste + carte */}
        <div className="grid grid-cols-[1.1fr_0.9fr] max-[820px]:grid-cols-1 gap-[70px] max-[820px]:gap-10">

          {/* Liste capacités */}
          <ul data-stagger>
            {capabilities.map(({ label, tech }, i) => (
              <li
                key={label}
                className={[
                  "flex justify-between items-center gap-6 py-6 border-b border-line max-[520px]:flex-col max-[520px]:items-start max-[520px]:gap-[6px]",
                  i === 0 ? "border-t border-line" : "",
                ].join(" ")}
              >
                <span className="text-[1.12rem] font-medium">{label}</span>
                <span className="font-mono text-[0.71rem] text-ink-3 text-right shrink-0">
                  {tech}
                </span>
              </li>
            ))}
          </ul>

          {/* Carte stack */}
          <div data-reveal className="self-start border border-line rounded-[14px] p-8 bg-ivory-2">
            <span className="block font-body text-[0.7rem] font-semibold tracking-[0.22em] uppercase text-ink-2 mb-[22px]">
              Stack technique
            </span>
            <div className="flex flex-wrap gap-[9px]">
              {stack.map((chip) => (
                <span
                  key={chip}
                  className="font-mono text-[0.72rem] px-[14px] py-[9px] bg-ivory border border-line rounded-full"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
