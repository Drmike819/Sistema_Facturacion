// src/components/DashboardNav.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/dashboard", label: "Inicio" },
  { href: "/dashboard/productos", label: "Productos" },
  { href: "/dashboard/nuevo-producto", label: "Registrar Producto" },
  { href: "/dashboard/cart", label: "Carrito" },
];

export default function DashboardNav() {
  const pathname = usePathname();

  return (
    <nav className="bg-green-700 text-white flex gap-4 px-6 h-[60px] items-center">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`hover:underline ${
            pathname === link.href ? "font-bold underline" : ""
          }`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
