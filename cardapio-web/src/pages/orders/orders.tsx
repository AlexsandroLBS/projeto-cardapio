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
      console.log(res);
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
              <CardTitle>Pedido #{order.id}</CardTitle>
              <p className="text-sm text-gray-600">
                Cliente: {order.client.name}
              </p>
            </CardHeader>
            <CardContent>
              <div>
                <h2 className="font-bold text-lg">{order.store.name}</h2>
                <p className="text-sm text-gray-600">{order.store.address}</p>
                <p className="text-sm text-gray-600">
                  Status de entrega:{" "}
                  {order.confirmedDelivery ? "Entregue" : "Não entregue"}
                </p>
                <p className="text-sm text-gray-600">
                  Status de pagamento:{" "}
                  {order.confirmedPay ? "Pago" : "Aguardando pagamento"}
                </p>
              </div>
              <div className="mt-4">
                <h3 className="font-semibold">Itens:</h3>
                <ul className="list-disc ml-8">
                  {order.items.map((item) => (
                    <li key={item.id}>
                      <p>
                        <strong>{item.itemName}</strong> - {item.amount}x R${" "}
                        {item.price.toFixed(2)}
                      </p>
                      <p className="text-sm text-gray-600">
                        {item.itemDescription}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
              {user?.role === "ADMIN" && (
                <div className="flex justify-end mt-4">
                  <Trash2
                    className="cursor-pointer text-red-500"
                    onClick={() => {
                      handleDeleteStore(order.id!);
                    }}
                  />
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </ul>
    </div>
  );
}
