// src/app/page.tsx
import Image from "next/image";
import ContactForm from "@/components/ContactForm";

export default function HomePage() {
  return (
    <main className="min-h-screen px-4 sm:px-12 py-12 flex flex-col gap-24 items-center justify-center bg-[#fdfaf6] dark:bg-[#1b3a2f]">
      {/* Hero / Bienvenida */}
      <section className="text-center max-w-3xl flex flex-col items-center gap-6 bg-white dark:bg-[#2c4b3c] p-8 rounded-xl shadow">
        <h1 className="text-5xl sm:text-6xl font-bold text-green-700 drop-shadow">
          AgroConexión
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300">
          Conectamos directamente a los campesinos con los compradores
          a través de una tienda virtual sencilla, justa y transparente.
        </p>
        <span className="inline-block mt-4 px-4 py-2 bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-100 rounded-full text-sm font-semibold">
          Productos locales, frescos y justos
        </span>
      </section>

      {/* Sección informativa */}
      <section className="grid sm:grid-cols-3 gap-8 max-w-6xl text-center">
        <div className="p-6 rounded-xl bg-green-100 dark:bg-green-900 shadow-md">
          <h3 className="text-xl font-semibold text-green-800 dark:text-green-200">Productos Frescos</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Alimentos cultivados con amor directamente del campo.
          </p>
        </div>
        <div className="p-6 rounded-xl bg-green-100 dark:bg-green-900 shadow-md">
          <h3 className="text-xl font-semibold text-green-800 dark:text-green-200">Justo para Todos</h3>
          <p className="text-gray-600 dark:text-gray-300">
            El productor recibe el pago que merece, sin intermediarios.
          </p>
        </div>
        <div className="p-6 rounded-xl bg-green-100 dark:bg-green-900 shadow-md">
          <h3 className="text-xl font-semibold text-green-800 dark:text-green-200">Compra Segura</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Pagos protegidos y entregas garantizadas.
          </p>
        </div>
      </section>

      {/* Formulario de contacto */}
      <section className="w-full max-w-xl">
        <ContactForm />
      </section>
    </main>
  );
}
