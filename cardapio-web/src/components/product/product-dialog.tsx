import React, { useContext, useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Product } from '@/models/product';
import { OrderContext } from '@/contexts/order/order-context';
import { CartItem } from '@/models/cart/cart-item';
import './product-dialog.css';

interface ProductDialogProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product;
}

export default function ProductDialog({ isOpen, onClose, product }: ProductDialogProps) {
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
      selectedOptions: [] // TODO ver depois casos de produtos com options
    };

    const existingItemIndex = cart.items.findIndex(item => item.product.id === newItem.product.id);

    let updatedItems;

    if (existingItemIndex >= 0) {
      const updatedItemsList = [...cart.items];
      updatedItemsList[existingItemIndex] = {
        ...updatedItemsList[existingItemIndex],
        quantity: updatedItemsList[existingItemIndex].quantity + newItem.quantity,
      };
      updatedItems = updatedItemsList;
    } else {
      updatedItems = [...cart.items, newItem];
    }

    orderContext.setCart({
      ...cart,
      items: updatedItems,
      totalValue:updatedItems.reduce((accumulator, item) => {
          return accumulator + (item.price * item.quantity);
        }, 0)
    });

    onClose();
  };

  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-full max-w-lg">
        <DialogHeader>
          <DialogTitle>{product.title}</DialogTitle>
          <DialogDescription>
            Serve: {product.servingSize} pessoas
          </DialogDescription>
        </DialogHeader>
        <div>
          <img src={product.image.url} alt={product.image.alt} className="w-full h-auto" />
          <p>Preço: R$ {product.price.toFixed(2)}</p>
          <p>Peso: {product.weight}</p>
        </div>
        
        <DialogFooter className='footer'>
          <Button variant="outline" onClick={onClose}>Fechar</Button>
          <div className='flex gap-[4px]'>
            <div className="flex items-center">
              <Button onClick={decreaseQuantity} className="bg-gray-200 text-gray-700 rounded-l-md">-</Button>
              <input 
                type="number" 
                value={quantity} 
                readOnly 
                className="w-16 h-10 text-center border-t border-b border-gray-300" 
              />
            <Button onClick={increaseQuantity} className="bg-gray-200 text-gray-700 rounded-r-md">+</Button>
            </div>
            <Button onClick={addProduct}>Adicionar ao Carrinho</Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
