/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { OrderContext } from "./order-context";
import { Cart } from "@/models/cart/cart";
import { CartLogisticType } from "@/models/enums/cart-logistic-type";

const isUserLoggedIn = () => {
  return true;
};

// eslint-disable-next-line react-refresh/only-export-components
export const emptyCart: Cart = {
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
};

export const OrderProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [order, setOrder] = useState<{ id: string; items: any[] }>({
    id: "",
    items: [],
  });
  const [cart, setCart] = useState<Cart>(emptyCart);

  const clearCart = () => {
    setCart(emptyCart);
  };

  if (!isUserLoggedIn()) {
    return null;
  }

  return (
    <OrderContext.Provider
      value={{
        order,
        cart,
        setOrder,
        setCart,
        clearCart,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};
