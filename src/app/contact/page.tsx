'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Envoi en cours...');

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus('Message envoyé avec succès !');
      setFormData({ name: '', email: '', message: '' });
    } else {
      setStatus('Erreur lors de l’envoi, veuillez réessayer.');
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center text-blue-600">Contactez-nous</h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 shadow-md mt-6 rounded-md">
        <label className="block mb-2 font-semibold">Nom</label>
        <input 
          type="text" name="name" required 
          className="w-full border p-2 rounded mb-4" 
          value={formData.name} onChange={handleChange}
        />

        <label className="block mb-2 font-semibold">Email</label>
        <input 
          type="email" name="email" required 
          className="w-full border p-2 rounded mb-4" 
          value={formData.email} onChange={handleChange}
        />

        <label className="block mb-2 font-semibold">Message</label>
        <textarea 
          name="message" required rows={5}
          className="w-full border p-2 rounded mb-4"
          value={formData.message} onChange={handleChange}
        ></textarea>

        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Envoyer</button>
      </form>
      {status && <p className="text-center mt-4 text-gray-700">{status}</p>}
    </div>
  );
}
