import "./globals.css"; // ✅ Importation du fichier CSS global
import Navbar from "@/components/Navbar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="bg-gray-100">
        <Navbar /> {/* ✅ Navbar en haut de la page */}
        <main className="container mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}
