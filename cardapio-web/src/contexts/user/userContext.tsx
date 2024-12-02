import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";
import { jwtDecode } from "jwt-decode";

type User = {
  sub: string;
  exp?: number;
  role: string;
};

type UserContextType = {
  user?: User;
  setUser: React.Dispatch<React.SetStateAction<User | undefined>>;
  refreshUser: () => void; // Função para verificar novamente o token
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | undefined>(undefined);

  const verifyToken = () => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decodedToken: User = jwtDecode(token);
        const currentTime = Date.now() / 1000;

        if (decodedToken.exp && decodedToken.exp > currentTime) {
          setUser(decodedToken);
        } else {
          console.warn("Token expirado");
          localStorage.removeItem("token");
          setUser(undefined);
        }
      } catch (error) {
        console.error("Erro ao decodificar o token:", error);
        setUser(undefined);
      }
    } else {
      setUser(undefined);
    }
  };

  useEffect(() => {
    verifyToken();
  }, []);

  const refreshUser = () => {
    verifyToken();
  };

  return (
    <UserContext.Provider value={{ user, setUser, refreshUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
};
