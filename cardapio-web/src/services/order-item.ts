import fetchAdmin from "./fetchAdmin";
import { Order } from "./order";

export type OrderItem = {
  id: number;
  amount: number;
  price: number;
  itemDescription: string;
  itemName: string;
  order: Order;
};

export const getOrderItems = async (): Promise<OrderItem[]> => {
  return await fetchAdmin("/api/orders-items");
};

export const getOrderItem = async (id: number): Promise<OrderItem> => {
  return await fetchAdmin("/api/orders-items/" + id);
};

export const createOrderItem = async (body: OrderItem): Promise<OrderItem> => {
  return await fetchAdmin("/api/orders-items", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
};

export const deleteOrderItem = async (id: number) => {
  return await fetchAdmin("/api/orders-items/" + id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
};
