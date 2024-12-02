import fetchAdmin from "./fetchAdmin";
import { Store } from "./stores";

export type Dish = {
  id?: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  store?: Store;
};

export const getDishes = async (id: string): Promise<Dish[]> => {
  return await fetchAdmin("/dishes/store/" + id);
};

export const createDish = async (body: Dish): Promise<Dish> => {
  return await fetchAdmin("/dishes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
};

export const updateDish = async (body: Dish, id: number): Promise<Dish> => {
  return await fetchAdmin("/dishes/" + id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
};

export const deleteDish = async (id: number) => {
  return await fetchAdmin("/api/dishes/" + id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
};
