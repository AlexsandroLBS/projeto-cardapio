import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Product } from '@/models/product';

interface ProductDialogProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product;
}

export default function ProductDialog({ isOpen, onClose, product }: ProductDialogProps) {
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
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>Fechar</Button>
          <Button>Adicionar ao Carrinho</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
