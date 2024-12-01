import { Client } from "./client";
import fetchAdmin from "./fetchAdmin";

export type Address = {
  id: number;
  address: string;
  complement: string;
  city: string;
  state: string;
  client: Client;
  cep: string;
};

export const getAddresses = async (): Promise<Address[]> => {
  return await fetchAdmin("/api/addresses");
};

export const getAddress = async (id: number): Promise<Address> => {
  return await fetchAdmin("/api/addresses/" + id);
};

export const createAddress = async (body: Address): Promise<Address> => {
  return await fetchAdmin("/api/addresses", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
};

export const deleteAddress = async (id: number) => {
  return await fetchAdmin("/api/addresses/" + id);
};
