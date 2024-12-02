import fetchAdmin from "./fetchAdmin";

export type Store = {
  id?: number;
  name: string;
  description: string;
  address: string;
  phone: string;
  imageUrl: string;
  storeId?: number;
  createdAt?: string;
};

export const getStores = async (): Promise<Store[]> => {
  return await fetchAdmin("/api/stores");
};

export const getStore = async (id: number): Promise<Store> => {
  return await fetchAdmin("/api/stores/" + id);
};

export const createStore = async (body: Store): Promise<Store> => {
  return await fetchAdmin("/api/stores", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
};

export const deleteStore = async (id: number) => {
  return await fetchAdmin("/api/stores/" + id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
};
