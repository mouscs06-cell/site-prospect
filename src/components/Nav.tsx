"use client";

import { useEffect, useRef, useState } from "react";
import { getLenis } from "@/lib/lenis";

const links = [
  { label: "Réalisations", href: "#work" },
  { label: "Méthode",      href: "#approach" },
  { label: "Formules",     href: "#pricing" },
  { label: "À propos",     href: "#about" },
];

export default function Nav() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const menuBtnRef = useRef<HTMLButtonElement>(null);
  const panelRef   = useRef<HTMLDivElement>(null);

  /* ── scroll detection ─────────────────────────────────────────── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── inert + focus on open/close ──────────────────────────────── */
  useEffect(() => {
    const panel = panelRef.current;
    if (!panel) return;
    if (menuOpen) {
      panel.removeAttribute("inert");
      const first = panel.querySelector<HTMLElement>("a, button");
      first?.focus();
    } else {
      panel.setAttribute("inert", "");
    }
  }, [menuOpen]);

  /* ── scroll lock (Lenis or body overflow fallback) ────────────── */
  useEffect(() => {
    const lenis = getLenis();
    if (menuOpen) {
      lenis ? lenis.stop() : (document.body.style.overflow = "hidden");
    } else {
      lenis ? lenis.start() : (document.body.style.overflow = "");
    }
    return () => {
      getLenis()?.start();
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  /* ── Escape key + focus trap ──────────────────────────────────── */
  useEffect(() => {
    if (!menuOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        menuBtnRef.current?.focus();
        return;
      }
      if (e.key !== "Tab") return;
      const panel = panelRef.current;
      if (!panel) return;
      const focusable = Array.from(
        panel.querySelectorAll<HTMLElement>("a[href], button:not([disabled])")
      );
      if (focusable.length < 2) return;
      const first = focusable[0];
      const last  = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [menuOpen]);

  /* ── smooth-scroll helper ─────────────────────────────────────── */
  const navigate = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    setTimeout(() => {
      const lenis = getLenis();
      if (lenis) {
        lenis.scrollTo(href === "#hero" ? 0 : href);
      } else {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      }
    }, 50);
  };

  return (
    <>
      {/* ── Header bar ─────────────────────────────────────────────── */}
      <header
        className={[
          "fixed inset-x-0 top-0 z-50 px-6 md:px-10 h-16 flex items-center justify-between transition-colors duration-300",
          scrolled || menuOpen
            ? "bg-ivory/90 backdrop-blur-md border-b border-line"
            : "bg-transparent border-b border-transparent",
        ].join(" ")}
      >
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => navigate(e, "#hero")}
          className="font-display text-xl text-ink leading-none"
        >
          Mouss<span className="text-oxblood">.</span>
        </a>

        {/* Desktop nav — hidden on mobile */}
        <nav className="flex gap-8 max-[760px]:hidden" aria-label="Navigation principale">
          {links.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={(e) => navigate(e, href)}
              className="font-body text-sm text-ink-2 hover:text-ink transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Right side: hamburger (mobile only) + CTA (always) */}
        <div className="flex items-center gap-3">

          {/* Hamburger — only visible below 760px */}
          <button
            ref={menuBtnRef}
            onClick={() => setMenuOpen((o) => !o)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            className="hidden max-[760px]:flex items-center justify-center w-8 h-8 -mr-1"
          >
            {/* Two-bar → X morph */}
            <span className="relative block w-5 h-[14px]" aria-hidden="true">
              <span
                className="absolute left-0 w-full bg-ink origin-center"
                style={{
                  height: "1.5px",
                  top: menuOpen ? "50%" : "0",
                  transform: menuOpen ? "translateY(-50%) rotate(45deg)" : "none",
                  transition: "top 0.3s ease, transform 0.3s ease",
                }}
              />
              <span
                className="absolute left-0 w-full bg-ink origin-center"
                style={{
                  height: "1.5px",
                  bottom: menuOpen ? "50%" : "0",
                  transform: menuOpen ? "translateY(50%) rotate(-45deg)" : "none",
                  transition: "bottom 0.3s ease, transform 0.3s ease",
                }}
              />
            </span>
          </button>

          {/* CTA — always visible */}
          <a
            data-magnetic
            href="#contact"
            onClick={(e) => navigate(e, "#contact")}
            className="font-body text-sm text-ink border border-ink rounded-full px-5 py-2 max-[380px]:px-3 hover:bg-ink hover:text-ivory transition-colors"
          >
            Démarrer un projet
          </a>
        </div>
      </header>

      {/* ── Mobile menu panel — z-40, under header ─────────────────── */}
      <div
        ref={panelRef}
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navigation"
        className={[
          "fixed inset-0 z-40 bg-ivory flex-col pt-20 px-6 pb-12",
          "hidden max-[760px]:flex", /* desktop: never rendered */
          "transition-[opacity,transform] duration-[350ms] ease-out",
        ].join(" ")}
        style={{
          opacity:       menuOpen ? 1 : 0,
          transform:     menuOpen ? "none" : "translateY(-10px)",
          pointerEvents: menuOpen ? "auto" : "none",
        }}
      >
        {/* ── Nav links ──────────────────────────────────────────────── */}
        <nav aria-label="Menu mobile" className="flex-1">
          <ul className="flex flex-col border-t border-line">
            {links.map(({ label, href }, i) => (
              <li key={href} className="border-b border-line overflow-hidden">
                <a
                  href={href}
                  onClick={(e) => navigate(e, href)}
                  className="block py-[22px] font-display text-[clamp(2rem,10vw,2.8rem)] text-ink leading-none tracking-[-0.01em] hover:text-oxblood transition-colors duration-300"
                  style={{
                    opacity:   menuOpen ? 1 : 0,
                    transform: menuOpen ? "none" : "translateY(110%)",
                    transition: [
                      `opacity  0.45s ease ${menuOpen ? 0.04 + i * 0.05 : 0}s`,
                      `transform 0.45s ease ${menuOpen ? 0.04 + i * 0.05 : 0}s`,
                      "color 0.3s ease",
                    ].join(", "),
                  }}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* ── CTA ────────────────────────────────────────────────────── */}
        <div
          style={{
            opacity:    menuOpen ? 1 : 0,
            transform:  menuOpen ? "none" : "translateY(12px)",
            transition: `opacity 0.4s ease ${menuOpen ? "0.28s" : "0s"}, transform 0.4s ease ${menuOpen ? "0.28s" : "0s"}`,
          }}
        >
          <a
            href="#contact"
            onClick={(e) => navigate(e, "#contact")}
            className="inline-flex items-center gap-[11px] px-[30px] py-[17px] rounded-full text-[0.94rem] font-medium bg-ink text-ivory hover:bg-oxblood transition-colors duration-[350ms]"
          >
            Démarrer un projet
          </a>
        </div>
      </div>
    </>
  );
}
