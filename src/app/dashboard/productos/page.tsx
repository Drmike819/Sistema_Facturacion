// src/app/dashboard/productos/page.tsx
"use client";

import { mockProductos } from "@/lib/mockData";
import Image from "next/image";
import Link from "next/link";

export default function ProductosPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-green-700 mb-8 text-center">
        🛒 Productos disponibles
      </h1>

      {/* Grid de productos */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {mockProductos.map((producto) => (
          <div
            key={producto.id}
            className="bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-700 rounded-xl overflow-hidden shadow hover:shadow-lg transition"
          >
            {/* Imagen de producto (o fondo de relleno si no hay) */}
            <div className="h-48 bg-green-100 dark:bg-green-800 flex items-center justify-center">
              <Image
                src={producto.imagen || "/productos/default.jpg"}
                alt={producto.nombre}
                width={200}
                height={200}
                className="object-contain"
              />
            </div>

            {/* Información del producto */}
            <div className="p-4 flex flex-col gap-2">
              <h2 className="text-lg font-semibold text-green-800 dark:text-green-100">
                {producto.nombre}
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {producto.descripcion}
              </p>
              <div className="mt-2 text-green-700 font-medium dark:text-green-200">
                ${producto.precio.toLocaleString()} / {producto.unidad}
              </div>

              {/* Botones de acción */}
              <div className="flex justify-between gap-2 mt-4">
                <Link href={`/dashboard/productos/${producto.id}`} className="flex-1">
                  <button className="w-full bg-green-600 hover:bg-green-700 text-white py-1.5 rounded text-sm">
                    Ver más
                  </button>
                </Link>
                <button className="flex-1 border border-green-600 text-green-700 dark:text-green-300 py-1.5 rounded text-sm hover:bg-green-50 dark:hover:bg-green-800 transition">
                  Agregar al carrito
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
