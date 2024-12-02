import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { createStore, deleteStore, getStores, Store } from "@/services/stores";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/generics/navbar/navbar";
import { Trash2 } from "lucide-react";
import { useUserContext } from "@/contexts/user/userContext";

export default function StoreList() {
  const { user } = useUserContext();
  const navigate = useNavigate();
  const [stores, setStores] = useState<Store[]>([]);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [newStore, setNewStore] = useState<Partial<Store>>({
    name: "",
    description: "",
    address: "",
    phone: "",
    imageUrl: "",
  });

  useEffect(() => {
    getStores().then((res) => {
      setStores(res);
    });
  }, []);

  const handleCreateStore = async () => {
    if (
      !newStore.name ||
      !newStore.address ||
      !newStore.phone ||
      !newStore.imageUrl
    ) {
      toast.error("Preencha os campos obrigatórios!");
      return;
    }

    const storeData: Store = {
      name: newStore.name!,
      description: newStore.description || "",
      address: newStore.address!,
      phone: newStore.phone!,
      imageUrl: newStore.imageUrl!,
      createdAt: new Date().toISOString(),
    };

    try {
      const response = await createStore(storeData);
      toast.success("Loja criada com sucesso!");
      setStores((prev) => [...prev, response]);
      setIsSheetOpen(false);
    } catch (error) {
      console.error(error);
      toast.error("Erro ao criar loja!");
    }
  };

  const handleDeleteStore = async (storeId: number) => {
    try {
      await deleteStore(storeId).then(() => {
        setStores((prev) => prev.filter((store) => store.id !== storeId));
        toast.success("Loja removida com sucesso!");
      });
    } catch (error) {
      console.error(error);
      toast.error("Erro ao remover loja!");
    }
  };

  const handleImageUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewStore((prev) => ({
      ...prev,
      imageUrl: e.target.value,
    }));
  };

  return (
    <div>
      <Navbar />
      <div className="flex justify-between items-center mb-4 mt-20 px-8">
        <h1 className="text-xl font-bold">Lista de Lojas</h1>
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild>
            {user?.role === "ROLE_ADMIN" && <Button>Criar Loja</Button>}
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Criar Nova Loja</SheetTitle>
              <SheetDescription>
                Preencha os dados para criar uma nova loja.
              </SheetDescription>
            </SheetHeader>
            <div className="space-y-4">
              <Input
                placeholder="Nome da Loja"
                value={newStore.name || ""}
                onChange={(e) =>
                  setNewStore((prev) => ({ ...prev, name: e.target.value }))
                }
              />
              <Textarea
                placeholder="Descrição"
                value={newStore.description || ""}
                onChange={(e) =>
                  setNewStore((prev) => ({
                    ...prev,
                    description: e.target.value,
                  }))
                }
              />
              <Input
                placeholder="Endereço"
                value={newStore.address || ""}
                onChange={(e) =>
                  setNewStore((prev) => ({ ...prev, address: e.target.value }))
                }
              />
              <Input
                placeholder="Telefone"
                value={newStore.phone || ""}
                onChange={(e) =>
                  setNewStore((prev) => ({ ...prev, phone: e.target.value }))
                }
              />
              <Input
                placeholder="URL da Imagem"
                type="text"
                onChange={handleImageUrlChange}
              />
            </div>
            <SheetFooter className="p-4">
              <Button onClick={handleCreateStore}>Salvar</Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
      <ul className="space-y-4 px-8 pb-8">
        {stores.map((store) => (
          <Card
            key={store.id}
            className="cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => navigate(`/s/${store.id}`)}
          >
            <CardHeader>
              <CardTitle>{store.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between">
                <div>
                  <p>{store.description}</p>
                  <p className="text-sm text-gray-600">{store.address}</p>
                </div>
                {user?.role === "ROLE_ADMIN" && (
                  <Trash2
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteStore(store.id!);
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
