"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);
// Sync Lenis → ScrollTrigger déjà établi dans SmoothScroll.tsx :
// lenis.on("scroll", ScrollTrigger.update)

export default function ScrollAnimations() {
  useGSAP(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const Y    = 40;
    const DUR  = 0.75;
    const EASE = "power2.out";
    const STAG = 0.08;

    const allHidden: Element[] = [];

    try {
      // ── 1. Reveals individuels ───────────────────────────────────────
      const revealEls = Array.from(document.querySelectorAll("[data-reveal]"));
      if (revealEls.length) {
        gsap.set(revealEls, { opacity: 0, y: Y });
        allHidden.push(...revealEls);

        ScrollTrigger.batch(revealEls, {
          onEnter: (els) =>
            gsap.to(els, { y: 0, opacity: 1, duration: DUR, ease: EASE, stagger: 0.06 }),
          start: "top 85%",
          once: true,
        });
      }

      // ── 2. Stagger groupes ──────────────────────────────────────────
      document.querySelectorAll("[data-stagger]").forEach((parent) => {
        const children = Array.from(parent.children) as HTMLElement[];
        if (!children.length) return;
        gsap.set(children, { opacity: 0, y: Y });
        allHidden.push(...children);

        ScrollTrigger.create({
          trigger: parent,
          start: "top 85%",
          once: true,
          onEnter: () =>
            gsap.to(children, { y: 0, opacity: 1, duration: DUR, ease: EASE, stagger: STAG }),
        });
      });

      // ── 3. Project rows (Work) ──────────────────────────────────────
      document.querySelectorAll("[data-reveal-row]").forEach((row) => {
        gsap.set(row, { opacity: 0, y: Y });
        allHidden.push(row);

        ScrollTrigger.create({
          trigger: row,
          start: "top 85%",
          once: true,
          onEnter: () =>
            gsap.to(row, { y: 0, opacity: 1, duration: DUR, ease: EASE }),
        });
      });

      // ── 4. Parallaxe BrowserFrame (scrub) ───────────────────────────
      document.querySelectorAll("[data-parallax]").forEach((container) => {
        const inner = container.querySelector<HTMLElement>("[data-parallax-inner]");
        if (!inner) return;
        gsap.fromTo(
          inner,
          { y: -20 },
          {
            y: 20,
            ease: "none",
            scrollTrigger: {
              trigger: container,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.2,
              invalidateOnRefresh: true,
            },
          }
        );
      });

      // ── 5. Refresh après chargement des polices ─────────────────────
      // Garantit que les positions des triggers sont calculées avec les
      // vraies métriques typographiques (polices Google à display:swap)
      document.fonts.ready.then(() => ScrollTrigger.refresh());

    } catch {
      // Fallback : tout rendre visible, ScrollTriggers nettoyés
      gsap.set(allHidden, { clearProps: "all" });
      ScrollTrigger.getAll().forEach((st) => st.kill());
    }
  });

  return null;
}
