import { Product } from "../product";

export interface CartItem {
    product: Product,
    price: number,
    quantity: number,
    selectedOptions: string[], //TODO AJUSTAR ISSO DEPOIS
}