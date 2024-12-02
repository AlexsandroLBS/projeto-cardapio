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
  id: number;
  email: string;
  name: string;
  phoneNumber?: string;
  address?: string;
  storeId?: number;
  username: string;
};

type UserContextType = {
  user?: User;
  setUser: React.Dispatch<React.SetStateAction<User | undefined>>;
  refreshUser: () => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | undefined>(undefined);

  const verifyToken = () => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decodedToken: User = jwtDecode(token);
        console.log(decodedToken);
        const currentTime = Date.now() / 1000;

        if (decodedToken.exp && decodedToken.exp > currentTime) {
          setUser(decodedToken);
        } else {
          localStorage.removeItem("token");
          setUser(undefined);
        }
      } catch (error) {
        console.error(error);
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

// eslint-disable-next-line react-refresh/only-export-components
export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
};
