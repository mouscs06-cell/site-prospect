"use client";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function Curtain() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const curtain = ref.current;
    if (!curtain) return;

    // Reduced-motion : rideau retiré immédiatement, aucun état caché posé
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set(curtain, { autoAlpha: 0 });
      curtain.remove();
      return;
    }

    // Cibles Hero — le h1 est déjà structuré avec overflow:hidden par ligne
    // (outer span = masque, inner span = élément animé → y: 110%)
    const heroLines = document.querySelectorAll("[data-hero-lines] > span > span");
    const eyebrow   = document.querySelector<HTMLElement>("[data-hero-eyebrow]");
    const sub       = document.querySelector<HTMLElement>("[data-hero-sub]");
    const ctas      = document.querySelectorAll("[data-hero-cta]");
    const scroll    = document.querySelector<HTMLElement>("[data-hero-scroll]");

    const allHeroEls = [eyebrow, sub, ...Array.from(ctas), scroll].filter(
      (el): el is HTMLElement => el !== null
    );

    try {
      // États initiaux — posés après le guard, dans useGSAP (useLayoutEffect → avant paint)
      gsap.set(heroLines, { y: "110%" });
      gsap.set(allHeroEls, { opacity: 0, y: 20 });

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        onComplete: () => curtain.remove(),
      });

      tl
        .to(curtain,   { y: "-100%", duration: 1.1, ease: "power3.inOut" })
        .to(heroLines, { y: "0%", duration: 0.9, stagger: 0.1 },          "-=0.75")
        .to(eyebrow,   { opacity: 1, y: 0, duration: 0.6 },               "-=0.60")
        .to(sub,       { opacity: 1, y: 0, duration: 0.7 },               "-=0.45")
        .to(ctas,      { opacity: 1, y: 0, duration: 0.5, stagger: 0.08 },"-=0.40")
        .to(scroll,    { opacity: 1, y: 0, duration: 0.4 },               "-=0.20");
    } catch {
      // Erreur GSAP : rideau hors-écran, hero entièrement visible
      curtain.style.display = "none";
      gsap.set([...Array.from(heroLines), ...allHeroEls], { clearProps: "all" });
    }
  });

  return (
    <div
      ref={ref}
      data-curtain
      aria-hidden="true"
      className="fixed inset-0 bg-espresso z-[9999] pointer-events-none will-change-transform"
    />
  );
}
