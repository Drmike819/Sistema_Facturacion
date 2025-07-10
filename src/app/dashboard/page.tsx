// src/app/dashboard/page.tsx

"use client";

import Image from "next/image";

export default function DashboardHome() {
  return (
    <main className="min-h-screen px-4 sm:px-12 py-12 flex flex-col gap-12 bg-[#fdfaf6] dark:bg-[#1b3a2f] text-gray-800 dark:text-gray-100">
      {/* Bloque de bienvenida */}
      <section className="text-center max-w-4xl mx-auto bg-white dark:bg-[#2c4b3c] p-8 rounded-xl shadow">
        <h1 className="text-5xl font-bold text-green-800 dark:text-green-100 mb-4">
          🌿 Bienvenido al Panel de AgroConexión
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Gracias por hacer parte de nuestra comunidad de productores. Desde este panel podrás administrar tus productos, monitorear tus pedidos y mantener tu inventario actualizado.
        </p>
        <p className="mt-2 text-sm text-green-700 dark:text-green-200 italic">
          "El campo nos alimenta, apoyarlo es nuestra misión." 🧑‍🌾
        </p>
      </section>

      {/* Sección resumen (cards) */}
      <section className="grid sm:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <div className="p-6 bg-green-100 dark:bg-[#2e4d3f] rounded-xl shadow-md">
          <h3 className="text-xl font-semibold mb-2">🛒 Productos Activos</h3>
          <p className="text-3xl font-bold text-green-900 dark:text-green-100">14</p>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
            Productos actualmente disponibles para la venta.
          </p>
        </div>

        <div className="p-6 bg-green-100 dark:bg-[#2e4d3f] rounded-xl shadow-md">
          <h3 className="text-xl font-semibold mb-2">📦 Pedidos Recientes</h3>
          <p className="text-3xl font-bold text-green-900 dark:text-green-100">5</p>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
            Últimos pedidos hechos por los clientes.
          </p>
        </div>

        <div className="p-6 bg-green-100 dark:bg-[#2e4d3f] rounded-xl shadow-md">
          <h3 className="text-xl font-semibold mb-2">📊 Stock Bajo</h3>
          <p className="text-3xl font-bold text-red-600 dark:text-red-300">2</p>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
            Productos con inventario crítico. ¡Reabastece pronto!
          </p>
        </div>
      </section>

      {/* Sugerencias / próximos pasos */}
      <section className="max-w-6xl mx-auto bg-white dark:bg-[#2c4b3c] p-8 rounded-xl shadow space-y-6">
        <h2 className="text-2xl font-bold text-green-800 dark:text-green-100">
          Próximos pasos sugeridos 📝
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
          <li>📤 Publica un nuevo producto de temporada (ej: Tomate, Frijol, Yuca).</li>
          <li>📬 Revisa los detalles de los últimos pedidos recibidos.</li>
          <li>📉 Actualiza el inventario para evitar ventas sin stock.</li>
          <li>🧾 Descarga tus facturas desde el módulo de pedidos.</li>
        </ul>
      </section>
    </main>
  );
}
