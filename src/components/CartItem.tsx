import Image from "next/image";
import { useCart } from "@/features/cart/useCart";

type Props = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image?: string;
};

export default function CartItem({ id, name, price, quantity, image }: Props) {
  const { increaseQty, decreaseQty, removeItem } = useCart();

  return (
    <div className="flex gap-4 items-center border-b py-4">
      {image && (
        <Image src={image} alt={name} width={80} height={80} className="rounded" />
      )}
      <div className="flex-1">
        <h4 className="font-semibold">{name}</h4>
        <p className="text-sm text-gray-500">${price.toFixed(2)}</p>
        <div className="flex items-center gap-2 mt-2">
          <button onClick={() => decreaseQty(id)} className="px-2 border rounded">
            -
          </button>
          <span>{quantity}</span>
          <button onClick={() => increaseQty(id)} className="px-2 border rounded">
            +
          </button>
          <button onClick={() => removeItem(id)} className="ml-4 text-red-600 text-sm">
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
}
