interface Plan {
  badge: string;
  title: string;
  description: string;
  amountPrefix: string;
  amount: string;
  note: string;
  features: string[];
  cta: string;
  featured: boolean;
}

const plans: Plan[] = [
  {
    badge: "",
    title: "Essentiel",
    description: "Une vitrine soignée pour lancer votre boutique en ligne.",
    amountPrefix: "à partir de",
    amount: "990 €",
    note: "",
    features: [
      "Design sur-mesure (jusqu'à 5 pages)",
      "Catalogue & fiches produit",
      "Paiement Stripe",
      "Mise en ligne incluse",
    ],
    cta: "Choisir Essentiel",
    featured: false,
  },
  {
    badge: "Le plus choisi",
    title: "Signature",
    description: "La boutique complète, avec l'identité et les animations qui marquent.",
    amountPrefix: "à partir de",
    amount: "2 500 €",
    note: "",
    features: [
      "Tout l'Essentiel, en plus poussé",
      "Direction artistique & animations",
      "Catalogue illimité & collections",
      "E-mails automatiques (Resend)",
      "Optimisation vitesse & SEO de base",
    ],
    cta: "Choisir Signature",
    featured: true,
  },
  {
    badge: "",
    title: "Sur-mesure",
    description: "Fonctionnalités spécifiques, abonnements, logistique avancée.",
    amountPrefix: "",
    amount: "Sur devis",
    note: "selon le périmètre",
    features: [
      "Cahier des charges dédié",
      "Abonnements, réservations, multi-stock",
      "Intégrations à la carte",
      "Accompagnement long terme",
    ],
    cta: "En discuter",
    featured: false,
  },
];

function PricingCard({ plan }: { plan: Plan }) {
  const { badge, title, description, amountPrefix, amount, note, features, cta, featured } = plan;

  return (
    <div
      className={[
        "flex flex-col border rounded-[16px] px-[32px] py-[36px]",
        featured
          ? "bg-espresso border-espresso text-ivory scale-[1.02] max-[880px]:scale-100"
          : "bg-ivory border-line text-ink",
      ].join(" ")}
    >
      {/* Badge — hauteur fixe pour l'alignement entre cartes */}
      <div className="h-[14px] text-[0.62rem] font-semibold tracking-[0.16em] uppercase text-oxblood-soft mb-4 leading-none flex items-center">
        {badge}
      </div>

      {/* Titre */}
      <h3 className="font-display font-normal text-[1.7rem] mb-[6px]">{title}</h3>

      {/* Description */}
      <p
        className="text-[0.9rem] mb-6 min-h-[42px] leading-[1.5]"
        style={{ color: featured ? "rgba(239,234,224,0.66)" : undefined }}
      >
        {description}
      </p>

      {/* Prix */}
      <div className="mb-[4px]">
        {amountPrefix && (
          <div
            className="font-body text-[0.75rem] mb-[5px]"
            style={{ color: featured ? "rgba(239,234,224,0.5)" : "var(--color-ink-3)" }}
          >
            {amountPrefix}
          </div>
        )}
        <div className="font-display text-[2.5rem] leading-none">{amount}</div>
      </div>

      {/* Note sous le prix */}
      <div
        className="text-[0.78rem] mb-[26px] min-h-[18px]"
        style={{ color: featured ? "rgba(239,234,224,0.44)" : "var(--color-ink-3)" }}
      >
        {note}
      </div>

      {/* Inclusions */}
      <ul className="flex-1 list-none mb-[30px]">
        {features.map((feature) => (
          <li
            key={feature}
            className="flex gap-[11px] py-[11px] border-t text-[0.92rem]"
            style={{
              borderColor: featured ? "rgba(239,234,224,0.16)" : undefined,
            }}
          >
            <span className="text-oxblood-soft shrink-0" aria-hidden="true">—</span>
            {feature}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        data-magnetic
        href="#contact"
        className={[
          "block text-center py-[14px] rounded-full font-medium text-[0.9rem] border transition-colors duration-300",
          featured
            ? "bg-ivory text-espresso border-ivory hover:bg-oxblood hover:text-ivory hover:border-oxblood"
            : "border-ink hover:bg-ink hover:text-ivory",
        ].join(" ")}
      >
        {cta}
      </a>
    </div>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="bg-espresso text-ivory py-[120px] max-[680px]:py-[80px]">
      <div className="max-w-[1280px] mx-auto px-10 max-[680px]:px-[22px]">

        {/* En-tête */}
        <div className="flex items-baseline justify-between gap-6 mb-16 flex-wrap">
          <h2
            data-reveal
            className="font-display font-normal tracking-[-0.01em]"
            style={{ fontSize: "clamp(2rem, 5vw, 3.6rem)", lineHeight: "1.02" }}
          >
            Des formules <em className="italic text-oxblood">claires</em>
          </h2>
          <p
            data-reveal
            className="max-w-[34ch] text-[0.98rem] text-right max-[680px]:text-left"
            style={{ color: "rgba(239,234,224,0.62)" }}
          >
            Un prix de départ transparent. Le devis final s&apos;ajuste à votre projet, sans
            surprise.
          </p>
        </div>

        {/* Grille */}
        <div data-stagger className="grid grid-cols-3 max-[880px]:grid-cols-1 gap-6 max-[880px]:max-w-[460px] max-[880px]:mx-auto">
          {plans.map((plan) => (
            <PricingCard key={plan.title} plan={plan} />
          ))}
        </div>

        {/* Note de bas de section */}
        <p className="text-center mt-[30px] text-ink-3 text-[0.86rem]">
          Tous les sites incluent un design responsive, un site rapide et un accompagnement
          après la mise en ligne.
        </p>

      </div>
    </section>
  );
}
