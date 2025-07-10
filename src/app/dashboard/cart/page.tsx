"use client";

import CartItem from "@/components/CartItem";
import { useCart } from "@/features/cart/useCart";
import Link from "next/link";

export default function CartPage() {
  const { items, total } = useCart();

  return (
    <section className="p-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">🛒 Tu carrito</h2>

      {items.length === 0 ? (
        <p className="text-gray-600">
          El carrito está vacío.{" "}
          <Link href="/dashboard/productos" className="text-green-600 underline">
            Ver productos
          </Link>
        </p>
      ) : (
        <>
          <div className="grid gap-4">
            {items.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
          </div>

          <div className="text-right mt-6">
            <p className="text-xl font-semibold">
              Total: <span className="text-green-700">${total().toFixed(2)}</span>
            </p>
          </div>
        </>
      )}
    </section>
  );
}
