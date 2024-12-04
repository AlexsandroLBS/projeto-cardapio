import fetchAdmin from "./fetchAdmin";

export type Order = {
  id?: number;
  orderTime: string;
  confirmedPay: boolean;
  confirmedDelivery: boolean;
  client: { id: number };
  store: { id: number };
  items: {
    itemName: string;
    amount: number;
    price: number;
    itemDescription: string;
  }[];
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
  return await fetchAdmin("/api/orders/" + id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
};
