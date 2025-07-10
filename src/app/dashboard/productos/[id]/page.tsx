// src/app/dashboard/productos/[id]/page.tsx

import { mockProductos } from "@/lib/mockData";
import { notFound } from "next/navigation";
import Image from "next/image";

type Props = {
  params: { id: string };
};

export default function DetalleProductoPage({ params }: Props) {
  const id = Number(params.id);
  const producto = mockProductos.find((p) => p.id === id);

  if (!producto) return notFound();

  return (
    <main className="min-h-screen bg-green-50 px-6 py-12">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-6 sm:p-10 flex flex-col sm:flex-row gap-10">
        
        {/* Imagen del producto */}
        <div className="sm:w-1/2 w-full flex justify-center items-center">
          <Image
            src={producto.imagen || "/productos/default.jpg"}
            alt={producto.nombre}
            width={400}
            height={400}
            className="rounded-lg object-contain max-h-[320px] w-full"
          />
        </div>

        {/* Información del producto */}
        <div className="sm:w-1/2 w-full space-y-4">
          <h1 className="text-3xl font-bold text-green-800">{producto.nombre}</h1>

          <p className="text-gray-700 text-base leading-relaxed">
            {producto.descripcion}
          </p>

          <div className="text-xl font-semibold text-amber-700">
            Precio: ${producto.precio.toLocaleString()} / {producto.unidad}
          </div>

          <span className="inline-block bg-amber-100 text-amber-800 text-sm px-3 py-1 rounded-full">
            🏷️ Categoría: Agricultura
          </span>

          <button className="mt-4 bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-md text-base font-medium transition">
            Agregar al carrito
          </button>
        </div>
      </div>
    </main>
  );
}
