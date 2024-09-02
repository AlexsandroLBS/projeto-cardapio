import { Cart } from '@/models/cart/cart';
import { createContext, Dispatch, SetStateAction } from 'react';

export interface OrderContextType {
    order: { id: string; items: any[] };
    cart: Cart;
    setOrder: Dispatch<SetStateAction<{ id: string; items: any[] }>>;
    setCart: Dispatch<SetStateAction<Cart>>;
  }
  

export const OrderContext = createContext<OrderContextType | null>(null);
