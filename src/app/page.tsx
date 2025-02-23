"use client";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // Message de confirmation ou d'erreur

  // Gestion des changements de champs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Soumission du formulaire
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Envoi en cours...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setStatus("✅ Message envoyé avec succès !");
        setFormData({ name: "", email: "", message: "" }); // Réinitialise le formulaire
      } else {
        setStatus(`❌ Erreur : ${result.error || "Une erreur est survenue"}`);
      }
    } catch (error) {
      setStatus("❌ Erreur de connexion au serveur");
    }
  };

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-4">Contactez-nous</h1>
      <p className="text-gray-700 text-center mb-6">
        Vous pouvez nous joindre par e-mail à <strong>smilepcsolutions@gmail.com</strong>
      </p>

      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 shadow-md rounded-lg">
        {/* Nom */}
        <label className="block text-gray-700 font-bold mb-2">
          Nom :
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 mt-1 border border-gray-300 rounded"
          />
        </label>

        {/* Email */}
        <label className="block text-gray-700 font-bold mt-4 mb-2">
          Email :
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 mt-1 border border-gray-300 rounded"
          />
        </label>

        {/* Message */}
        <label className="block text-gray-700 font-bold mt-4 mb-2">
          Message :
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-2 mt-1 border border-gray-300 rounded h-32"
          />
        </label>

        {/* Bouton d'envoi */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded mt-4 hover:bg-blue-600 transition"
        >
          Envoyer
        </button>
      </form>

      {/* Message de confirmation / erreur */}
      {status && (
        <p className="text-center mt-4 font-bold">
          {status}
        </p>
      )}
    </main>
  );
}
