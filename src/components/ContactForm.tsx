"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

const fieldBase =
  "w-full border border-line rounded-lg px-4 py-3 bg-ivory font-body text-[0.95rem] text-ink placeholder:text-ink-3 focus:outline-none focus:border-ink transition-colors duration-200";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (json.ok) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMsg(json.error ?? "Erreur inconnue.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Impossible de contacter le serveur. Réessayez plus tard.");
    }
  };

  if (status === "success") {
    return (
      <div
        aria-live="polite"
        role="status"
        className="py-14 text-center"
      >
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-oxblood mb-6">
          <span className="text-oxblood text-xl" aria-hidden="true">✓</span>
        </div>
        <p className="font-display text-[1.5rem] text-ink mb-2">Message envoyé.</p>
        <p className="text-ink-2 text-[0.95rem]">
          Je vous réponds sous 24h avec une première direction.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      {/* Honeypot — invisible pour les humains, rempli par les bots */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        aria-hidden="true"
        className="hidden"
        autoComplete="off"
      />

      <div className="grid grid-cols-2 gap-4 mb-4 max-[560px]:grid-cols-1">
        <div>
          <label htmlFor="contact-nom" className="sr-only">Nom</label>
          <input
            id="contact-nom"
            name="nom"
            type="text"
            placeholder="Nom"
            required
            autoComplete="name"
            className={fieldBase}
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="sr-only">E-mail</label>
          <input
            id="contact-email"
            name="email"
            type="email"
            placeholder="E-mail"
            required
            autoComplete="email"
            className={fieldBase}
          />
        </div>
      </div>

      <div className="mb-5">
        <label htmlFor="contact-message" className="sr-only">Message</label>
        <textarea
          id="contact-message"
          name="message"
          placeholder="Parlez-moi de votre projet…"
          required
          rows={6}
          className={`${fieldBase} resize-none`}
        />
      </div>

      {/* Feedback accessibilité */}
      <div aria-live="polite" role="status">
        {status === "error" && (
          <p className="text-oxblood text-[0.88rem] mb-4">{errorMsg}</p>
        )}
      </div>

      <button
        data-magnetic
        type="submit"
        disabled={status === "loading"}
        className="w-full py-[14px] rounded-full font-medium text-[0.9rem] bg-ink text-ivory border border-ink hover:bg-oxblood hover:border-oxblood transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "Envoi…" : "Envoyer le message"}
      </button>
    </form>
  );
}
