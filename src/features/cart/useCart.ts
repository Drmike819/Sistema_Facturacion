import { create } from "zustand";

type Product = {
  id: number;
  name: string;
  price: number;
  image?: string;
  quantity: number;
};

type CartState = {
  items: Product[];
  addItem: (product: Omit<Product, "quantity">) => void;
  removeItem: (id: number) => void;
  increaseQty: (id: number) => void;
  decreaseQty: (id: number) => void;
  total: () => number;
};

export const useCart = create<CartState>((set, get) => ({
  items: [],
  addItem: (product) => {
    const existing = get().items.find((item) => item.id === product.id);
    if (existing) {
      set({
        items: get().items.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      });
    } else {
      set({
        items: [...get().items, { ...product, quantity: 1 }],
      });
    }
  },
  removeItem: (id) =>
    set({
      items: get().items.filter((item) => item.id !== id),
    }),
  increaseQty: (id) =>
    set({
      items: get().items.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      ),
    }),
  decreaseQty: (id) =>
    set({
      items: get().items.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      ),
    }),
  total: () =>
    get().items.reduce((acc, item) => acc + item.price * item.quantity, 0),
}));
