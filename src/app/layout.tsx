// src/app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "AgroConexión",
  description: "Sistema de facturación agrícola con Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-white text-black dark:bg-gray-900 dark:text-white">
          <Navbar />
          {children}
      </body>
    </html>
  );
}
