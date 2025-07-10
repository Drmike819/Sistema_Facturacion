
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

export interface UnitOfMeasure{
  value:string, 
  label:string
}

export interface Image {
  image: string
}

export interface Category{
  id: number
  name: string
  description: string
  products: NewProduct[]
}

export interface NewProduct {
  name: string
  description: string
  price: number
  stock: number
  unit_of_measure: UnitOfMeasure[]
  images: Image[]
  category: Category[]
}
