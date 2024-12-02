import { Cart } from "@/models/cart/cart";
import { CartLogisticType } from "@/models/enums/cart-logistic-type";
import { createContext, Dispatch, SetStateAction } from "react";

export interface OrderContextType {
  order: { id: string; items: any[] };
  cart: Cart;
  setOrder: Dispatch<SetStateAction<{ id: string; items: any[] }>>;
  setCart: Dispatch<SetStateAction<Cart>>;
  clearCart: () => void;
}

export const OrderContext = createContext<OrderContextType>({
  order: { id: "", items: [] },
  cart: {
    items: [],
    logistic: {
      price: 0,
      type: CartLogisticType.Delivery,
      address: {
        street: "",
        number: "",
        city: "",
        state: "",
        postalCode: "",
        country: "",
      },
    },
    coupon: {
      code: "",
      value: 0,
      applicable: false,
    },
    totalValue: 0,
  },
  setOrder: () => {},
  setCart: () => {},
  clearCart: () => {},
});
