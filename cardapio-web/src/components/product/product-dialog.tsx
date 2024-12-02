import { useContext, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { OrderContext } from "@/contexts/order/order-context";
import { CartItem } from "@/models/cart/cart-item";
import "./product-dialog.css";
import { Dish } from "@/services/dishes";

interface ProductDialogProps {
  isOpen: boolean;
  onClose: () => void;
  product: Dish;
}

export default function ProductDialog({
  isOpen,
  onClose,
  product,
}: ProductDialogProps) {
  const [quantity, setQuantity] = useState<number>(1);
  const orderContext = useContext(OrderContext);

  if (!orderContext) {
    return <p>Loading...</p>;
  }

  const { cart } = orderContext;

  const addProduct = () => {
    const newItem: CartItem = {
      product: product,
      price: product.price * quantity,
      quantity: quantity,
      selectedOptions: [],
    };

    const existingItemIndex = cart.items.findIndex(
      (item) => item.product.id === newItem.product.id
    );

    let updatedItems;

    if (existingItemIndex >= 0) {
      const updatedItemsList = [...cart.items];
      updatedItemsList[existingItemIndex] = {
        ...updatedItemsList[existingItemIndex],
        quantity:
          updatedItemsList[existingItemIndex].quantity + newItem.quantity,
      };
      updatedItems = updatedItemsList;
    } else {
      updatedItems = [...cart.items, newItem];
    }

    orderContext.setCart({
      ...cart,
      items: updatedItems,
      totalValue: updatedItems.reduce((accumulator, item) => {
        return accumulator + item.price;
      }, 0),
    });

    onClose();
  };

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-full max-w-lg">
        <DialogHeader>
          <DialogTitle>{product.name}</DialogTitle>
          {product.description && (
            <DialogDescription>{product.description}</DialogDescription>
          )}
        </DialogHeader>
        <div>
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-auto rounded-md"
          />
          <p className="mt-2 text-lg font-bold text-green-600">
            Preço: R$ {product.price.toFixed(2)}
          </p>
        </div>

        <DialogFooter className="footer">
          <Button variant="outline" onClick={onClose}>
            Fechar
          </Button>
          <div className="flex gap-[4px]">
            <div className="flex items-center">
              <Button
                onClick={decreaseQuantity}
                className="bg-gray-200 text-gray-700 rounded-l-md"
              >
                -
              </Button>
              <input
                type="number"
                value={quantity}
                readOnly
                className="w-16 h-10 text-center border-t border-b border-gray-300"
              />
              <Button
                onClick={increaseQuantity}
                className="bg-gray-200 text-gray-700 rounded-r-md"
              >
                +
              </Button>
            </div>
            <Button onClick={addProduct}>Adicionar ao Carrinho</Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
