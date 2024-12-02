import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../../ui/navigation-menu";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import "./navbar.css";
import { OrderContext } from "@/contexts/order/order-context";
import CartModal from "@/components/cart/cart";
import { useUserContext } from "@/contexts/user/userContext";
import { Button } from "@/components/ui/button";
import { HomeIcon, ListCheck, LogOut } from "lucide-react";

export default function Navbar() {
  const orderContext = useContext(OrderContext);
  const { user, refreshUser } = useUserContext();
  const navigate = useNavigate();

  if (!orderContext) {
    return <p></p>;
  }

  const { cart } = orderContext;

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    refreshUser();
    navigate("/login");
  };

  return (
    <>
      <NavigationMenu className="navbar mb-5">
        <div className="navItems flex gap-4 items-center  justify-between">
          <HomeIcon
            className="cursor-pointer ml-4"
            onClick={() => navigate("/")}
          />
          <NavigationMenuList>
            {(user?.role === "ADMIN" || user?.role === "VENDOR") && (
              <NavigationMenuItem
                className="mr-4 cursor-pointer"
                onClick={() => navigate("/orders")}
              >
                <ListCheck />
              </NavigationMenuItem>
            )}
            <NavigationMenuItem className="pt-1">
              <CartModal cart={cart}></CartModal>
            </NavigationMenuItem>
          </NavigationMenuList>
        </div>
        {user ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarFallback>{user.sub[0].toUpperCase()}</AvatarFallback>
                </Avatar>
                <span className="pr-4">{user.sub}</span>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem onClick={handleLogout}>
                <LogOut className="mr-2" /> Desconectar
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Button onClick={handleLoginClick}>Entrar / Cadastrar</Button>
        )}
      </NavigationMenu>
    </>
  );
}
