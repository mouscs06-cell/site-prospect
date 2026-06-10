const steps = [
  {
    n: "01",
    title: "Cadrage",
    description:
      "On clarifie l'objectif, l'identité et le périmètre. Vous repartez avec un plan précis et un prix ferme.",
  },
  {
    n: "02",
    title: "Design",
    description:
      "Maquette sur-mesure, pensée pour votre marque et vos clients. Validation écran par écran avant le code.",
  },
  {
    n: "03",
    title: "Développement",
    description:
      "Site rapide et solide en Next.js : paiement Stripe, base de données, e-mails automatiques.",
  },
  {
    n: "04",
    title: "Mise en ligne",
    description:
      "Domaine, hébergement, configuration. Une boutique prête à vendre — et un suivi après livraison.",
  },
];

export default function Approach() {
  return (
    <section id="approach" className="bg-espresso text-ivory py-[120px] max-[680px]:py-[80px]">
      <div className="max-w-[1280px] mx-auto px-10 max-[680px]:px-[22px]">

        {/* En-tête */}
        <div className="flex items-baseline justify-between gap-6 mb-16 flex-wrap">
          <h2
            data-reveal
            className="font-display font-normal tracking-[-0.01em]"
            style={{ fontSize: "clamp(2rem, 5vw, 3.6rem)", lineHeight: "1.02" }}
          >
            De l&apos;idée à la <em className="italic text-oxblood">mise en vente</em>
          </h2>
          <p data-reveal className="max-w-[34ch] text-[rgba(239,234,224,0.62)] text-[0.98rem] text-right max-[680px]:text-left">
            Un seul interlocuteur, du premier croquis à la boutique en ligne.
            Vous validez à chaque étape.
          </p>
        </div>

        {/* Grille 4 étapes */}
        <div data-stagger className="grid grid-cols-4 max-[820px]:grid-cols-2 max-[520px]:grid-cols-1 gap-10">
          {steps.map((step) => (
            <div
              key={step.n}
              className="pt-6 border-t border-[rgba(239,234,224,0.16)]"
            >
              <div className="font-mono text-[0.72rem] text-oxblood-soft mb-[18px]">
                {step.n}
              </div>
              <h4
                className="font-display font-normal mb-[11px]"
                style={{ fontSize: "1.55rem" }}
              >
                {step.title}
              </h4>
              <p className="text-[0.92rem] text-[rgba(239,234,224,0.66)] leading-[1.55]">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
