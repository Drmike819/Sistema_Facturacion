// src/app/dashboard/productos/page.tsx

import { mockProductos } from "@/lib/mockData";
import ProductCard from "@/components/ProductCard";

export default function ProductosPage() {
  return (
    <section className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
      {mockProductos.map((prod) => (
        <ProductCard key={prod.id} {...prod} />
      ))}
    </section>
  );
}
