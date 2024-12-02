import fetchAdmin from "./fetchAdmin";

export type RegisterRequest = {
  username: string;
  name: string;
  email: string;
  password: string;
  role: string;
  storeId?: number;
};

export const registerUser = async (body: RegisterRequest) => {
  return await fetchAdmin("/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
};

type LoginRequest = {
  username: string;
  password: string;
};

export const loginUser = async (body: LoginRequest): Promise<string> => {
  return await fetchAdmin<string>("/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
};
