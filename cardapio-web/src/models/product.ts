import { Image } from "./image";

export interface Product {
    id: string;
    title: string;
    price: number;
    image: Image;
    description?:string;
    servingSize?: string;
    originalPrice: number;
    weight: number;
  }