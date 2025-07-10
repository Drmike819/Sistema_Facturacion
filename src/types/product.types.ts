
export interface ProductCardProps {
  name: string;
  description: string
  price: number;
  imageUrl: string;
}

export interface Product {
  id: number;
  name: string;
  description: string
  price: number;
  images: { id: number; image: string }[];
}
