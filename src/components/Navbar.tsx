"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-black text-white p-4 fixed top-0 w-full shadow-md"
    >
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <Link href="/">Smile PC Solutions</Link>
        </h1>
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-blue-400 transition">Accueil</Link>
          <Link href="/services" className="hover:text-blue-400 transition">Prestations</Link>
          <Link href="/contact" className="hover:text-blue-400 transition">Contact</Link>
        </div>
        {/* Menu mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            ☰
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-black text-white p-4"
        >
          <Link href="/" className="block py-2 hover:text-blue-400">Accueil</Link>
          <Link href="/services" className="block py-2 hover:text-blue-400">Prestations</Link>
          <Link href="/contact" className="block py-2 hover:text-blue-400">Contact</Link>
        </motion.div>
      )}
    </motion.nav>
  );
}
