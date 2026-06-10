import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json();
  const { nom, email, message, website } = body as Record<string, string>;

  // Honeypot — réponse silencieuse 200 si le champ caché est rempli (bot)
  if (website) return NextResponse.json({ ok: true });

  // Validation serveur
  if (!nom?.trim()) {
    return NextResponse.json({ ok: false, error: "Nom requis." }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email ?? "")) {
    return NextResponse.json({ ok: false, error: "Adresse e-mail invalide." }, { status: 400 });
  }
  if (!message?.trim() || message.trim().length < 10) {
    return NextResponse.json(
      { ok: false, error: "Message trop court (10 caractères min.)." },
      { status: 400 }
    );
  }

  try {
    await resend.emails.send({
      // Remplacer par une adresse sur votre domaine vérifié Resend en production.
      // onboarding@resend.dev fonctionne en test (livraison uniquement vers le compte Resend).
      from: "Moussa Studio <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL ?? "mouscs06@gmail.com",
      replyTo: email,
      subject: `Nouveau message de ${nom}`,
      text: `Nom : ${nom}\nE-mail : ${email}\n\n${message}`,
    });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Erreur d'envoi. Réessayez plus tard." },
      { status: 500 }
    );
  }
}
