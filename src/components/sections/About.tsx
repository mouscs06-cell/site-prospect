export default function About() {
  return (
    <section id="about" className="py-[120px] max-[680px]:py-[80px]">
      <div className="max-w-[1280px] mx-auto px-10 max-[680px]:px-[22px]">

        <div data-stagger className="grid grid-cols-[0.78fr_1.22fr] max-[760px]:grid-cols-1 gap-[60px] max-[760px]:gap-[34px] items-center">

          {/* Portrait */}
          <div className="aspect-[4/5] rounded-[14px] bg-ivory-2 border border-line flex items-center justify-center overflow-hidden">
            <span className="font-mono text-[0.64rem] tracking-[0.08em] text-ink-3 text-center px-5 leading-[1.8]">
              votre photo ici<br />format portrait 4:5
            </span>
          </div>

          {/* Texte */}
          <div>
            <h3
              className="font-display font-normal tracking-[-0.005em] mb-6"
              style={{ fontSize: "clamp(1.9rem, 3.8vw, 2.9rem)", lineHeight: "1.12" }}
            >
              Je m&apos;appelle Mouss. Je conçois et code des boutiques en ligne,{" "}
              <em className="italic text-oxblood">de A à Z.</em>
            </h3>

            <p className="text-ink-2 max-w-[54ch] mb-4 leading-[1.64]">
              Pas d&apos;intermédiaire, pas de sous-traitance : vous parlez directement à la
              personne qui dessine et qui développe. C&apos;est ce qui permet d&apos;aller vite
              et de garder une vraie cohérence entre l&apos;image et le site.
            </p>

            <p className="text-ink-2 max-w-[54ch] leading-[1.64]">
              Je travaille avec une stack moderne —{" "}
              <strong className="text-ink font-semibold">
                Next.js, Stripe et une infrastructure solide
              </strong>{" "}
              — pour livrer des sites rapides, durables et faciles à faire évoluer.
              L&apos;objectif n&apos;est jamais de faire « joli » : c&apos;est de construire
              un outil qui vend.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
