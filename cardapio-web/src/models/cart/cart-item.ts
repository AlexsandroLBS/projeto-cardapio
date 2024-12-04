import { Dish } from "@/services/dishes";

export interface CartItem {
  product: Dish;
  price: number;
  quantity: number;
  selectedOptions: string[];
  storeId?: string;
}
