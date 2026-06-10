import Image from "next/image";

interface Project {
  no: string;
  title: string;
  url: string;
  image: string;
  tags: string[];
  isLive: boolean;
  accroche: string;
  description: string;
  stack: string[];
  linkHref: string;
  linkLabel: string;
  external: boolean;
}

const projects: Project[] = [
  {
    no: "01 / 03",
    title: "ÉLUA",
    url: "elua.pro",
    image: "/work/elua.png",
    tags: ["En ligne", "Skincare", "2025"],
    isLive: true,
    accroche: "Une marque de soin qui méritait un site aussi soigné que ses produits.",
    description:
      "Direction épurée, photographie mise en valeur, rythme de lecture lent. Tunnel d'achat Stripe sans friction, de la fiche produit au paiement, avec confirmations e-mail automatiques.",
    stack: ["Next.js", "Stripe", "Neon", "Prisma", "Resend"],
    linkHref: "https://elua.pro",
    linkLabel: "Voir le site",
    external: true,
  },
  {
    no: "02 / 03",
    title: "AURÈLE",
    url: "aurele.pro",
    image: "/work/aurele.png",
    tags: ["En ligne", "Mode", "2025"],
    isLive: true,
    accroche: "Une marque de mode mise en scène comme un film.",
    description:
      "Hero cinématographique dont l'image s'agrandit au scroll, navigation par collections, direction éditoriale automne-hiver. Tout est pensé pour faire entrer le visiteur dans l'univers de la marque dès la première seconde.",
    stack: ["Next.js", "Stripe", "GSAP", "Neon", "Prisma"],
    linkHref: "https://aurele.pro",
    linkLabel: "Voir le site",
    external: true,
  },
  {
    no: "03 / 03",
    title: "AURÈLE V2",
    url: "aurelev2.pro",
    image: "/work/aurele-v2.png",
    tags: ["En ligne", "Refonte", "2025"],
    isLive: true,
    accroche: "La même marque, une direction artistique plus radicale.",
    description:
      "Une refonte au parti pris minimal et tranché : hero plein cadre en noir et blanc, typographie massive, bandeau d'annonces. La preuve qu'une seule marque peut porter deux univers visuels forts.",
    stack: ["Next.js", "Stripe", "GSAP", "Neon", "Prisma"],
    // TODO: remplacer par https://aurelev2.pro une fois le domaine acheté
    linkHref: "https://aurele-v2.vercel.app",
    linkLabel: "Voir le site",
    external: true,
  },
];

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="13"
      height="13"
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

function BrowserFrame({ project }: { project: Project }) {
  return (
    <div className="border border-line rounded-[12px] overflow-hidden bg-white shadow-[0_40px_80px_-40px_rgba(23,21,17,0.30)]">
      {/* Barre navigateur */}
      <div className="flex items-center gap-[7px] px-[15px] py-[12px] bg-ivory-2 border-b border-line">
        <i className="w-[9px] h-[9px] rounded-full bg-line block not-italic" />
        <i className="w-[9px] h-[9px] rounded-full bg-line block not-italic" />
        <i className="w-[9px] h-[9px] rounded-full bg-line block not-italic" />
        <span className="ml-[11px] font-mono text-[0.64rem] text-ink-3 bg-ivory px-[13px] py-[5px] rounded-full border border-line">
          {project.url}
        </span>
      </div>

      {/* Capture d'écran 16:11 */}
      <div data-parallax className="aspect-[16/11] relative overflow-hidden">
        {/* data-parallax-inner : hauteur étendue ±8% pour la course de parallaxe */}
        <div data-parallax-inner className="absolute inset-x-0 inset-y-[-8%]">
          <Image
            src={project.image}
            alt={`Capture d'écran — ${project.title}`}
            fill
            sizes="(max-width: 880px) 100vw, (max-width: 1280px) 50vw, 640px"
            className="object-cover object-top"
          />
        </div>
      </div>
    </div>
  );
}

function TextBody({ project }: { project: Project }) {
  return (
    <div>
      <div className="font-mono text-[0.72rem] text-oxblood mb-[18px]">{project.no}</div>

      {/* Tags */}
      <div className="flex gap-[8px] flex-wrap mb-[20px]">
        {project.tags.map((tag, i) => {
          const live = project.isLive && i === 0;
          return (
            <span
              key={tag}
              className={[
                "text-[0.64rem] font-semibold tracking-[0.13em] uppercase px-[12px] py-[6px] border rounded-full",
                live ? "bg-oxblood border-oxblood text-ivory" : "border-line text-ink-2",
              ].join(" ")}
            >
              {tag}
            </span>
          );
        })}
      </div>

      {/* Titre */}
      <h3
        className="font-display font-normal mb-[14px]"
        style={{ fontSize: "clamp(2rem, 3.4vw, 2.8rem)", lineHeight: "1.04" }}
      >
        {project.title}
      </h3>

      {/* Accroche */}
      <p className="text-[1.08rem] text-ink font-medium max-w-[40ch] mb-[14px]">
        {project.accroche}
      </p>

      {/* Description */}
      <p className="text-ink-2 max-w-[44ch] mb-[24px] leading-[1.6]">
        {project.description}
      </p>

      {/* Stack */}
      <div className="flex flex-wrap gap-[16px] mb-[28px]">
        {project.stack.map((s) => (
          <span key={s} className="font-mono text-[0.71rem] text-ink-3">
            {s}
          </span>
        ))}
      </div>

      {/* Lien */}
      <a
        href={project.linkHref}
        aria-label={`${project.linkLabel} — ${project.title}`}
        {...(project.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className="group inline-flex items-center gap-[10px] font-semibold text-[0.94rem] text-oxblood border-b-[1.5px] border-oxblood pb-[4px]"
      >
        {project.linkLabel}
        <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-[3px] group-hover:-translate-y-[3px]" />
      </a>
    </div>
  );
}

function ProjectRow({ project, index }: { project: Project; index: number }) {
  const reversed = index % 2 === 1;
  return (
    <article data-reveal-row className={["py-[80px]", index > 0 ? "border-t border-line" : ""].join(" ")}>
      <div className="grid grid-cols-[1.05fr_0.95fr] max-[880px]:grid-cols-1 gap-16 max-[880px]:gap-[34px] items-center">
        <div className={reversed ? "order-2 max-[880px]:order-none" : ""}>
          <BrowserFrame project={project} />
        </div>
        <div>
          <TextBody project={project} />
        </div>
      </div>
    </article>
  );
}

export default function Work() {
  return (
    <section id="work" className="py-[120px] max-[680px]:py-[80px]">
      <div className="max-w-[1280px] mx-auto px-10 max-[680px]:px-[22px]">
        {/* En-tête */}
        <div className="flex items-baseline justify-between gap-6 mb-16 flex-wrap">
          <h2
            data-reveal
            className="font-display font-normal tracking-[-0.01em]"
            style={{ fontSize: "clamp(2rem, 5vw, 3.6rem)", lineHeight: "1.02" }}
          >
            Sélection de <em className="italic text-oxblood">réalisations</em>
          </h2>
          <p data-reveal className="max-w-[34ch] text-ink-2 text-[0.98rem] text-right max-[680px]:text-left">
            Des boutiques complètes, conçues et développées sur-mesure. Cliquez pour les
            explorer en ligne.
          </p>
        </div>

        {projects.map((project, i) => (
          <ProjectRow key={project.no} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
