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
import { LogOut } from "lucide-react";

export default function Navbar() {
  const orderContext = useContext(OrderContext);
  const { user } = useUserContext();
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
    navigate("/login");
  };

  return (
    <>
      <NavigationMenu className="navbar mb-5">
        <div className="navItems">
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="flex items-center space-x-2 cursor-pointer">
                  <Avatar>
                    <AvatarFallback>{user.sub[0].toUpperCase()}</AvatarFallback>
                  </Avatar>
                  <span>{user.sub}</span>
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
        </div>
        <NavigationMenuList>
          <NavigationMenuItem>
            <CartModal cart={cart}></CartModal>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="min-h-[40px]"></div>
    </>
  );
}
