"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Combien de temps pour avoir mon site ?",
    a: "En général deux à quatre semaines selon la formule et la taille du catalogue. On fixe un calendrier précis dès le cadrage, et vous savez à tout moment où en est le projet.",
  },
  {
    q: "Je n'ai pas de logo ni de photos. C'est un problème ?",
    a: "Non. Je peux vous aider sur l'identité visuelle et vous orienter pour les photos. L'objectif est que la boutique soit présentable même si vous partez de zéro — on construit ensemble.",
  },
  {
    q: "Pourquoi pas simplement Shopify ou Wix ?",
    a: "Ces outils sont pratiques, mais votre site ressemble à des milliers d'autres et vous payez un abonnement à vie. Un site sur-mesure vous donne une vraie identité, de meilleures performances, et un produit qui vous appartient vraiment.",
  },
  {
    q: "Et une fois le site en ligne ?",
    a: "Je vous livre un site documenté et facile à gérer, et je reste joignable. On peut aussi convenir d'un suivi pour les évolutions, les ajouts de produits ou les nouvelles fonctionnalités.",
  },
  {
    q: "Comment se passe le paiement ?",
    a: "Un acompte au lancement, le solde à la livraison. Tout est cadré par un devis clair avant de commencer, sans frais cachés.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" className="py-[120px] max-[680px]:py-[80px]">
      <div className="max-w-[1280px] mx-auto px-10 max-[680px]:px-[22px]">

        {/* En-tête */}
        <div className="flex items-baseline justify-between gap-6 mb-16 flex-wrap">
          <h2
            data-reveal
            className="font-display font-normal tracking-[-0.01em]"
            style={{ fontSize: "clamp(2rem, 5vw, 3.6rem)", lineHeight: "1.02" }}
          >
            Les questions <em className="italic text-oxblood">fréquentes</em>
          </h2>
          <p data-reveal className="max-w-[34ch] text-ink-2 text-[0.98rem] text-right max-[680px]:text-left">
            Tout ce qu&apos;on me demande avant de se lancer.
          </p>
        </div>

        {/* Accordéon */}
        <div data-stagger className="max-w-[840px] mx-auto">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            const answerId = `faq-answer-${i}`;
            return (
              <div
                key={i}
                className={["border-t border-line", i === faqs.length - 1 ? "border-b" : ""].join(" ")}
              >
                <button
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  className="w-full flex justify-between items-center gap-6 py-7 px-1 text-left font-body text-[1.15rem] font-medium text-ink cursor-pointer bg-transparent border-none"
                >
                  <span>{faq.q}</span>

                  {/* Icône +/- */}
                  <span className="relative w-[16px] h-[16px] flex-none" aria-hidden="true">
                    {/* barre horizontale */}
                    <span className="absolute top-1/2 left-0 w-full h-[1.5px] bg-oxblood -translate-y-1/2" />
                    {/* barre verticale — disparaît à l'ouverture */}
                    <span
                      className="absolute left-1/2 top-0 w-[1.5px] h-full bg-oxblood -translate-x-1/2 transition-transform duration-[350ms]"
                      style={{
                        transform: isOpen
                          ? "translateX(-50%) scaleY(0)"
                          : "translateX(-50%) scaleY(1)",
                        transitionTimingFunction: "cubic-bezier(0.65,0.05,0.36,1)",
                      }}
                    />
                  </span>
                </button>

                {/* Réponse — animation via CSS grid trick */}
                <div
                  id={answerId}
                  className="grid transition-[grid-template-rows] duration-[400ms]"
                  style={{
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                    transitionTimingFunction: "cubic-bezier(0.65,0.05,0.36,1)",
                  }}
                >
                  <div className="overflow-hidden">
                    <p className="px-1 pb-7 text-ink-2 max-w-[64ch] leading-[1.62]">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
