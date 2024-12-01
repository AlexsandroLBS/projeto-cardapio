import fetchAdmin from "./fetchAdmin";

export type Client = {
  id: number;
  name: string;
  email: string;
  password: string;
  phone: string;
  imgUrl: string;
};

export const getClients = async (): Promise<Client[]> => {
  return await fetchAdmin("/api/clients");
};

export const getClient = async (id: number): Promise<Client> => {
  return await fetchAdmin("/api/clients/" + id);
};

export const createClient = async (body: Client): Promise<Client> => {
  return await fetchAdmin("/api/clients", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
};

export const deleteClient = async (id: number) => {
  return await fetchAdmin("/api/clients/" + id);
};
