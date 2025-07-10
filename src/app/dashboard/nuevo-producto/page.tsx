"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { opcionesCategorias, opcionesUnidades } from "@/lib/opciones";
import { Leaf } from "lucide-react";

// ✅ Esquema de validación de producto
const schema = z.object({
  nombre: z.string().min(1, "El nombre es obligatorio"),
  descripcion: z.string().min(10, "La descripción debe tener al menos 10 caracteres"),
  precio: z.number().min(1, "El precio debe ser mayor a 0"),
  stock: z.number().int().min(0, "El stock no puede ser negativo"),
  unidad: z.string().min(1, "Debes seleccionar una unidad de medida"),
  categoria: z.number().int({ message: "Selecciona una categoría válida" }),
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
    <div className="max-w-2xl mx-auto bg-green-50 dark:bg-neutral-900 p-8 rounded-xl shadow-md">
      <div className="text-center mb-6">
        <div className="flex justify-center items-center gap-2 text-green-700 dark:text-green-300">
          <Leaf className="w-6 h-6" />
          <h2 className="text-3xl font-bold">Registrar nuevo producto</h2>
        </div>
        <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm">
          Ingresa la información del producto campesino que deseas agregar a AgroConexión.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-5">
        {/* Campo: Nombre */}
        <div>
          <label className="block mb-1 font-semibold">Nombre del producto</label>
          <input
            {...register("nombre")}
            placeholder="Ej. Tomate chonto"
            className="w-full border p-2 rounded focus:outline-green-600"
          />
          {errors.nombre && <p className="text-red-500 text-sm">{errors.nombre.message}</p>}
        </div>

        {/* Campo: Descripción */}
        <div>
          <label className="block mb-1 font-semibold">Descripción</label>
          <textarea
            {...register("descripcion")}
            placeholder="Describe el producto, su origen, calidad, etc."
            rows={3}
            className="w-full border p-2 rounded focus:outline-green-600"
          />
          {errors.descripcion && <p className="text-red-500 text-sm">{errors.descripcion.message}</p>}
        </div>

        {/* Campos: Precio y Stock */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-semibold">Precio (COP)</label>
            <input
              {...register("precio", { valueAsNumber: true })}
              type="number"
              step="0.01"
              placeholder="Ej. 3000"
              className="w-full border p-2 rounded focus:outline-green-600"
            />
            {errors.precio && <p className="text-red-500 text-sm">{errors.precio.message}</p>}
          </div>

          <div>
            <label className="block mb-1 font-semibold">Cantidad en stock</label>
            <input
              {...register("stock", { valueAsNumber: true })}
              type="number"
              placeholder="Ej. 10"
              className="w-full border p-2 rounded focus:outline-green-600"
            />
            {errors.stock && <p className="text-red-500 text-sm">{errors.stock.message}</p>}
          </div>
        </div>

        {/* Campo: Unidad de medida */}
        <div>
          <label className="block mb-1 font-semibold">Unidad de medida</label>
          <select {...register("unidad")} className="w-full border p-2 rounded focus:outline-green-600">
            <option value="">Selecciona una unidad</option>
            {opcionesUnidades.map((op) => (
              <option key={op.value} value={op.value}>
                {op.label}
              </option>
            ))}
          </select>
          {errors.unidad && <p className="text-red-500 text-sm">{errors.unidad.message}</p>}
        </div>

        {/* Campo: Categoría */}
        <div>
          <label className="block mb-1 font-semibold">Categoría</label>
          <select
            {...register("categoria", { valueAsNumber: true })}
            className="w-full border p-2 rounded focus:outline-green-600"
          >
            <option value="">Selecciona una categoría</option>
            {opcionesCategorias.map((op) => (
              <option key={op.value} value={op.value}>
                {op.label}
              </option>
            ))}
          </select>
          {errors.categoria && <p className="text-red-500 text-sm">{errors.categoria.message}</p>}
        </div>

        {/* Botón */}
        <button
          type="submit"
          className="bg-green-700 text-white font-semibold py-2 px-4 rounded hover:bg-green-800 transition"
        >
          Crear producto
        </button>

        {/* Mensaje de éxito */}
        {isSubmitSuccessful && (
          <p className="text-green-700 dark:text-green-400 text-sm text-center mt-2">
            ✅ Producto registrado correctamente.
          </p>
        )}
      </form>
    </div>
  );
}
