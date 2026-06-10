const items = [
  {
    big: "24h",
    subtitle: "Réponse rapide",
    description: "Je reviens vers vous sous 24h avec une première direction et un cadre clair.",
  },
  {
    big: "Zéro surprise",
    subtitle: "Prix ferme",
    description: "Un devis clair avant de commencer. Le prix annoncé est le prix final.",
  },
  {
    big: "Après-vente",
    subtitle: "Suivi inclus",
    description: "Site documenté, facile à gérer, et je reste joignable une fois en ligne.",
  },
];

export default function Promise() {
  return (
    <section id="promise" className="bg-oxblood text-ivory py-[120px] max-[680px]:py-[80px]">
      <div className="max-w-[1280px] mx-auto px-10 max-[680px]:px-[22px]">

        {/* En-tête */}
        <div className="flex items-baseline justify-between gap-6 mb-16 flex-wrap">
          <h2
            data-reveal
            className="font-display font-normal tracking-[-0.01em]"
            style={{ fontSize: "clamp(2rem, 5vw, 3.6rem)", lineHeight: "1.02" }}
          >
            Ce sur quoi vous pouvez{" "}
            <em className="italic" style={{ color: "rgba(239,234,224,0.72)" }}>compter</em>
          </h2>
          <p
            data-reveal
            className="max-w-[34ch] text-[0.98rem] text-right max-[680px]:text-left"
            style={{ color: "rgba(239,234,224,0.72)" }}
          >
            En attendant les premiers témoignages clients, voici mes engagements.
          </p>
        </div>

        {/* Grille 3 engagements */}
        <div data-stagger className="grid grid-cols-3 max-[760px]:grid-cols-1 gap-11">
          {items.map(({ big, subtitle, description }) => (
            <div
              key={big}
              className="pt-[26px] border-t"
              style={{ borderColor: "rgba(239,234,224,0.30)" }}
            >
              <div
                className="font-display text-[2.7rem] leading-none mb-4"
              >
                {big}
              </div>
              <h4 className="text-[1.05rem] font-semibold mb-[9px]">{subtitle}</h4>
              <p
                className="text-[0.92rem] leading-[1.55]"
                style={{ color: "rgba(239,234,224,0.78)" }}
              >
                {description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
