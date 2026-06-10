"use client";
import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";

export default function MagneticCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  // Vérification device — uniquement pointer:fine, non reduced-motion
  useEffect(() => {
    const fine    = window.matchMedia("(hover:hover) and (pointer:fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;

    setReady(true);
    document.documentElement.classList.add("has-cursor");
    return () => document.documentElement.classList.remove("has-cursor");
  }, []);

  // Listeners souris — activés uniquement quand ready + cursor dans le DOM
  useEffect(() => {
    if (!ready || !cursorRef.current) return;
    const cursor = cursorRef.current;

    gsap.set(cursor, { x: window.innerWidth / 2, y: window.innerHeight / 2, opacity: 0 });

    const onMove = (e: MouseEvent) => {
      gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.35, ease: "power2.out" });
      const isInteractive = !!(e.target as Element).closest?.("a, button, [data-magnetic]");
      gsap.to(cursor, { opacity: 1, scale: isInteractive ? 3 : 1, duration: 0.3 });
    };

    // Effet magnétique — délégation sur document
    const onMagMove = (e: MouseEvent) => {
      const btn = (e.target as Element).closest?.("[data-magnetic]") as HTMLElement | null;
      if (!btn) return;
      const r = btn.getBoundingClientRect();
      gsap.to(btn, {
        x: (e.clientX - (r.left + r.width  / 2)) * 0.25,
        y: (e.clientY - (r.top  + r.height / 2)) * 0.25,
        ease: "power2.out",
        duration: 0.4,
      });
    };

    const onMagOut = (e: MouseEvent) => {
      const btn = (e.target as Element).closest?.("[data-magnetic]") as HTMLElement | null;
      if (!btn || btn.contains(e.relatedTarget as Node)) return;
      gsap.to(btn, { x: 0, y: 0, ease: "elastic.out(1, 0.4)", duration: 0.8 });
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mousemove", onMagMove);
    document.addEventListener("mouseout", onMagOut);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mousemove", onMagMove);
      document.removeEventListener("mouseout", onMagOut);
    };
  }, [ready]);

  if (!ready) return null;

  return (
    <div
      ref={cursorRef}
      data-cursor
      aria-hidden="true"
      className="fixed top-0 left-0 w-2 h-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ink pointer-events-none z-[9998] will-change-transform"
    />
  );
}
