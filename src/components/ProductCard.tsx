// src/components/ProductCard.tsx

import Image from "next/image";

interface ProductProps {
  nombre: string;
  descripcion: string;
  precio: number;
  unidad: string;
  imagen: string;
}

export default function ProductCard({
  nombre,
  descripcion,
  precio,
  unidad,
  imagen,
}: ProductProps) {
  return (
    <div className="bg-white dark:bg-neutral-800 p-4 rounded shadow w-full max-w-sm">
      <Image
        src={imagen}
        alt={`Imagen de ${nombre}`}
        width={400}
        height={300}
        className="rounded mb-4 w-full h-48 object-cover"
      />
      <h3 className="text-xl font-bold text-green-700">{nombre}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
        {descripcion}
      </p>
      <p className="font-semibold text-lg text-black dark:text-white">
        ${precio.toLocaleString()} / {unidad}
      </p>
    </div>
  );
}
