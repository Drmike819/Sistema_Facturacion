// src/app/page.tsx
import ContactForm from "@/components/ContactForm";

export default function HomePage() {
  return (
    <main className="min-h-screen p-8 flex flex-col gap-16 items-center justify-center">
      {/* Hero / Bienvenida */}
      <section className="text-center max-w-3xl">
        <h1 className="text-4xl font-bold mb-4 text-green-700">AgroConexión</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Conectamos directamente a los campesinos con los compradores a través de una tienda virtual sencilla, justa y transparente.
        </p>
      </section>

      {/* Sección informativa */}
      <section className="grid sm:grid-cols-3 gap-8 max-w-5xl text-center">
        <div className="p-4 rounded bg-green-50 dark:bg-green-900">
          <h3 className="text-xl font-semibold">Productos Frescos</h3>
          <p>Alimentos cultivados con amor directamente del campo.</p>
        </div>
        <div className="p-4 rounded bg-green-50 dark:bg-green-900">
          <h3 className="text-xl font-semibold">Justo para Todos</h3>
          <p>El productor recibe el pago que merece, sin intermediarios.</p>
        </div>
        <div className="p-4 rounded bg-green-50 dark:bg-green-900">
          <h3 className="text-xl font-semibold">Compra Segura</h3>
          <p>Pagos protegidos y entregas garantizadas.</p>
        </div>
      </section>

      {/* Formulario de contacto */}
      <section className="w-full max-w-lg">
        <ContactForm />
      </section>
    </main>
  );
}
