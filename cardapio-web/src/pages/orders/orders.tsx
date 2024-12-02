import Navbar from "@/components/generics/navbar/navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { useUserContext } from "@/contexts/user/userContext";
import { deleteOrder, getOrders, Order } from "@/services/order";
import { Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export default function Orders() {
  const { user } = useUserContext();
  const navigate = useNavigate();
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) navigate("/login");
  }, [navigate]);

  useEffect(() => {
    getOrders().then((res) => {
      setOrders(res);
    });
  }, []);

  const handleDeleteStore = async (orderId: number) => {
    try {
      await deleteOrder(orderId).then(() => {
        setOrders((prev) => prev.filter((order) => order.id !== orderId));
        toast.success("Pedido deletado com sucesso!");
      });
    } catch (error) {
      console.error(error);
      toast.error("Erro ao remover pedido!");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="mt-12 flex justify-between items-center p-8">
        <h1 className="text-xl font-bold">Pedidos</h1>
      </div>
      <ul className="space-y-4 px-8 pb-8">
        {orders.map((order) => (
          <Card key={order.id}>
            <CardHeader>
              <CardTitle>{order.client.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between">
                <div>
                  <p>{order.store.name}</p>
                  <p className="text-sm text-gray-600">{order.store.address}</p>
                </div>
                {user?.role === "ROLE_ADMIN" && (
                  <Trash2
                    onClick={() => {
                      handleDeleteStore(order.id!);
                    }}
                  />
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </ul>
    </div>
  );
}
