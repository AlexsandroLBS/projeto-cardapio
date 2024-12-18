import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ShoppingBag } from "lucide-react";
import { Button } from "../ui/button";
import { Cart } from "@/models/cart/cart";

import "./cart.css";
import { useContext, useEffect, useState } from "react";
import { OrderContext } from "@/contexts/order/order-context";
import { useUserContext } from "@/contexts/user/userContext";

import { toast } from "sonner";
import { createOrder } from "@/services/order";
import { Client, createClient, getClients } from "@/services/client";

type CartModalProps = {
  cart: Cart;
};

export default function CartModal({ cart }: CartModalProps) {
  const { clearCart } = useContext(OrderContext);
  const { user } = useUserContext();
  const [clients, setClients] = useState<Client[]>();

  useEffect(() => {
    getClients().then((res) => {
      setClients(res);
    });
  }, []);

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  const findOrCreateClient = async (username: string): Promise<Client> => {
    const existingClient = clients?.find((client) => client.name === username);

    if (existingClient) {
      return existingClient;
    }

    const newClient = await createClient({
      name: username,
      email: user?.email || "",
      phone: user?.phoneNumber || "",
      password: "",
    });

    setClients((prevClients) => [...(prevClients || []), newClient]);

    return newClient;
  };

  const handleConfirmOrder = () => {
    if (!user || !cart.items.length) {
      alert("Você precisa estar logado e adicionar itens ao carrinho.");
      return;
    }
    const items = cart.items.map((item) => ({
      itemName: item.product.name,
      amount: item.quantity,
      price: item.price,
      itemDescription: item.product.description || "",
    }));

    findOrCreateClient(user.username)
      .then((client) => {
        const orderBody = {
          orderTime: new Date().toISOString(),
          confirmedPay: false,
          confirmedDelivery: false,
          client: { id: Number(client.id) },
          store: { id: Number(cart.items[0].storeId) },
          items,
        };

        return createOrder(orderBody);
      })
      .then(() => {
        toast.success("Pedido criado com sucesso!");
        clearCart();
      })
      .catch((error) => {
        console.error("Erro ao criar pedido:", error);
        toast.error("Erro ao processar pedido. Tente novamente.");
      });
  };

  return (
    <Drawer direction="right">
      <DrawerTrigger>
        <div className="flex mr-5">
          <ShoppingBag className="mr-2"></ShoppingBag>
          <div className=" flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-green-500 rounded-full">
            {cart.items.length}
          </div>
        </div>
      </DrawerTrigger>

      <DrawerContent className="p-8">
        <DrawerHeader>
          <DrawerTitle>Carrinho</DrawerTitle>
        </DrawerHeader>
        {cart.items.length === 0 ? (
          <>
            <DrawerDescription>
              Adicione itens primeiro ao carrinho
            </DrawerDescription>
          </>
        ) : (
          <>
            <DrawerDescription className="overflow-scroll">
              {cart.items.map((item, index) => (
                <div key={index} className="cart-item">
                  <img
                    src={item.product.imageUrl}
                    alt={item.product.name}
                    className="cart-item-image rounded-md"
                  />
                  <div className="cart-item-details">
                    <p className="cart-item-name">{item.product.name}</p>
                    <p className="cart-item-unit-price">
                      R$ {item.price.toFixed(2)}
                    </p>
                    <p className="cart-item-quantity">
                      Quantidade: {item.quantity}
                    </p>
                    <p className="cart-item-total-price">
                      Total:{" "}
                      <strong>
                        R$ {(item.price * item.quantity).toFixed(2)}
                      </strong>
                    </p>
                  </div>
                </div>
              ))}
            </DrawerDescription>

            <DrawerFooter>
              <DrawerClose className="gap-4">
                <Button
                  variant="outline"
                  className="w-full mb-2"
                  onClick={clearCart}
                >
                  Esvaziar carrinho
                </Button>
                <Button className="w-full" onClick={handleConfirmOrder}>
                  Confirmar pedido
                </Button>
              </DrawerClose>
            </DrawerFooter>
          </>
        )}
      </DrawerContent>
    </Drawer>
  );
}
