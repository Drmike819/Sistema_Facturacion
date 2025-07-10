// src/app/dashboard/layout.tsx
import DashboardNav from "@/components/DashboardNav";
import type { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <section className="min-h-screen grid grid-rows-[60px_1fr]">
      {/* Barra de navegación del dashboard */}
      <DashboardNav />

      {/* Contenido específico según la ruta */}
      <main className="p-6 bg-gray-50 dark:bg-neutral-900">{children}</main>
    </section>
  );
}
