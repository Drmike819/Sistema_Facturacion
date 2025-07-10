// src/app/dashboard/nuevo-producto/page.tsx

"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { opcionesCategorias, opcionesUnidades } from "@/lib/opciones";

// ✅ Esquema de validación con Zod
const schema = z.object({
  nombre: z.string().min(1, "Nombre obligatorio"),
  descripcion: z.string().min(10, "Mínimo 10 caracteres"),
  precio: z.number().min(1, "Precio debe ser mayor a 0"),
  stock: z.number().int().min(0, "Stock no puede ser negativo"),
  unidad: z.string().min(1, "Selecciona una unidad"),
  categoria: z.number().int(),
});

type FormData = z.infer<typeof schema>;

export default function NuevoProductoPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onTouched",
  });

  const onSubmit = (data: FormData) => {
    console.log("✅ Producto creado:", data);
    reset();
  };

  return (
    <div className="max-w-2xl mx-auto bg-white dark:bg-neutral-900 p-6 rounded shadow">
      <h2 className="text-2xl font-bold text-center text-green-700 mb-4">Crear Nuevo Producto</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
        <div>
          <input
            {...register("nombre")}
            placeholder="Nombre del producto"
            className="w-full border p-2 rounded"
          />
          {errors.nombre && <p className="text-red-500 text-sm">{errors.nombre.message}</p>}
        </div>

        <div>
          <textarea
            {...register("descripcion")}
            placeholder="Descripción detallada"
            rows={3}
            className="w-full border p-2 rounded"
          />
          {errors.descripcion && <p className="text-red-500 text-sm">{errors.descripcion.message}</p>}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <input
              {...register("precio", { valueAsNumber: true })}
              type="number"
              step="0.01"
              placeholder="Precio"
              className="w-full border p-2 rounded"
            />
            {errors.precio && <p className="text-red-500 text-sm">{errors.precio.message}</p>}
          </div>

          <div>
            <input
              {...register("stock", { valueAsNumber: true })}
              type="number"
              placeholder="Stock"
              className="w-full border p-2 rounded"
            />
            {errors.stock && <p className="text-red-500 text-sm">{errors.stock.message}</p>}
          </div>
        </div>

        <div>
          <select {...register("unidad")} className="w-full border p-2 rounded">
            <option value="">Selecciona una unidad</option>
            {opcionesUnidades.map((op) => (
              <option key={op.value} value={op.value}>
                {op.label}
              </option>
            ))}
          </select>
          {errors.unidad && <p className="text-red-500 text-sm">{errors.unidad.message}</p>}
        </div>

        <div>
          <select {...register("categoria", { valueAsNumber: true })} className="w-full border p-2 rounded">
            <option value="">Selecciona una categoría</option>
            {opcionesCategorias.map((op) => (
              <option key={op.value} value={op.value}>
                {op.label}
              </option>
            ))}
          </select>
          {errors.categoria && <p className="text-red-500 text-sm">{errors.categoria.message}</p>}
        </div>

        <button
          type="submit"
          className="bg-green-700 text-white py-2 px-4 rounded hover:bg-green-800"
        >
          Crear producto
        </button>

        {isSubmitSuccessful && (
          <p className="text-green-600 text-sm text-center mt-2">✅ Producto registrado correctamente</p>
        )}
      </form>
    </div>
  );
}
