import { FC, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Dish, createDish } from "@/services/dishes";

interface AddDishSheetProps {
  isOpen: boolean;
  onClose: () => void;
  storeId?: number;
  setDishes: React.Dispatch<React.SetStateAction<Dish[]>>;
}

const AddDishSheet: FC<AddDishSheetProps> = ({
  isOpen,
  onClose,
  storeId,
  setDishes,
}) => {
  const [newDish, setNewDish] = useState<Partial<Dish>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleAddDish = async () => {
    if (!storeId) {
      console.error("Store ID não encontrado");
      return;
    }

    if (
      !newDish.name ||
      !newDish.description ||
      !newDish.price ||
      !newDish.imageUrl
    ) {
      toast.error("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    const dishToCreate = {
      name: newDish.name,
      description: newDish.description,
      price: newDish.price,
      imageUrl: newDish.imageUrl,
      store: {
        id: storeId,
        name: "",
        description: "",
        address: "",
        phone: "",
        imageUrl: "",
      },
    };

    try {
      setIsSubmitting(true);
      const createdDish = await createDish(dishToCreate);
      setDishes((prev) => [...prev, createdDish]);
      toast.success("Prato adicionado com sucesso!");
      onClose();
    } catch (error) {
      console.error("Erro ao adicionar prato:", error);
      toast.error("Erro ao adicionar prato. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Adicionar Prato</SheetTitle>
        </SheetHeader>
        <div className="space-y-4">
          <Input
            placeholder="Nome"
            value={newDish.name || ""}
            onChange={(e) =>
              setNewDish((prev) => ({ ...prev, name: e.target.value }))
            }
          />
          <Textarea
            placeholder="Descrição"
            value={newDish.description || ""}
            onChange={(e) =>
              setNewDish((prev) => ({ ...prev, description: e.target.value }))
            }
          />
          <Input
            placeholder="Preço"
            type="number"
            value={newDish.price || ""}
            onChange={(e) =>
              setNewDish((prev) => ({ ...prev, price: Number(e.target.value) }))
            }
          />
          <Input
            placeholder="URL da Imagem"
            value={newDish.imageUrl || ""}
            onChange={(e) =>
              setNewDish((prev) => ({ ...prev, imageUrl: e.target.value }))
            }
          />
        </div>
        <SheetFooter className="p-4">
          <Button onClick={handleAddDish} disabled={isSubmitting}>
            {isSubmitting ? "Adicionando..." : "Adicionar"}
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default AddDishSheet;
