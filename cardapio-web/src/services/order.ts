import { Client } from "./client";
import fetchAdmin from "./fetchAdmin";
import { Store } from "./stores";

export type Order = {
  id: number;
  orderTime: string;
  confirmedPay: boolean;
  confirmedDelivery: boolean;
  client: Client;
  store: Store;
};

export const getOrders = async (): Promise<Order[]> => {
  return await fetchAdmin("/api/orders");
};

export const getOrder = async (id: number): Promise<Order> => {
  return await fetchAdmin("/api/orders/" + id);
};

export const createOrder = async (body: Order): Promise<Order> => {
  return await fetchAdmin("/api/orders", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
};

export const deleteOrder = async (id: number) => {
  return await fetchAdmin("/api/orders/" + id);
};
