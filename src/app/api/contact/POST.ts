import { NextResponse } from 'next/server';

export async function handlePost(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Tous les champs sont requis' }, { status: 400 });
    }

    console.log(`📩 Nouveau message reçu de ${name} (${email}): ${message}`);

    return NextResponse.json({ success: true, message: 'Message envoyé avec succès !' });
  } catch (error) {
    console.error("Erreur lors de l'envoi du message :", error);
    return NextResponse.json({ error: 'Une erreur est survenue' }, { status: 500 });
  }
}
