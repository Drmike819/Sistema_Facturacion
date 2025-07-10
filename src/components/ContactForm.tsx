// src/components/ContactForm.tsx

"use client"; // Para que funcione en el lado del cliente

// 📦 Imports
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// ✅ Validaciones del formulario con Zod
const schema = z.object({
  nombre: z.string().min(1, "El nombre es obligatorio"),
  email: z.string().email("Correo inválido"),
  mensaje: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
});

// Inferimos los tipos a partir del schema de Zod
type FormData = z.infer<typeof schema>;

export default function ContactForm() {
  // 🧠 useForm para manejar estados del formulario
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  // 🎯 Función que se ejecuta al enviar el formulario
  const onSubmit = (data: FormData) => {
    console.log("Formulario enviado:", data);
    reset(); // Limpiar campos después de enviar
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid gap-4 bg-white dark:bg-neutral-900 p-6 rounded shadow max-w-xl w-full"
    >
      <h2 className="text-2xl font-bold text-center">Contáctanos</h2>

      {/* Campo Nombre */}
      <div>
        <input
          {...register("nombre")}
          placeholder="Nombre"
          className="w-full p-2 border rounded"
        />
        {errors.nombre && (
          <p className="text-red-500 text-sm mt-1">{errors.nombre.message}</p>
        )}
      </div>

      {/* Campo Email */}
      <div>
        <input
          {...register("email")}
          placeholder="Correo electrónico"
          className="w-full p-2 border rounded"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      {/* Campo Mensaje */}
      <div>
        <textarea
          {...register("mensaje")}
          rows={4}
          placeholder="¿En qué podemos ayudarte?"
          className="w-full p-2 border rounded"
        />
        {errors.mensaje && (
          <p className="text-red-500 text-sm mt-1">{errors.mensaje.message}</p>
        )}
      </div>

      {/* Botón */}
      <button
        type="submit"
        className="bg-green-700 text-white py-2 px-4 rounded hover:bg-green-800"
      >
        Enviar
      </button>

      {/* Mensaje de éxito */}
      {isSubmitSuccessful && (
        <p className="text-green-600 text-sm mt-2 text-center">
          ✅ Mensaje enviado correctamente
        </p>
      )}
    </form>
  );
}
