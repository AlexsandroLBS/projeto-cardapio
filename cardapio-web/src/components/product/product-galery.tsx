import { useState } from "react";
import ProductCard from "./product-card";
import ProductDialog from "./product-dialog";
import { Dish } from "@/services/dishes";

interface ProductGaleryProps {
  products: Dish[];
}

export default function ProductGalery({ products }: ProductGaleryProps) {
  const [selectedProduct, setSelectedProduct] = useState<Dish | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = (product: Dish) => {
    setSelectedProduct(product);
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
    setSelectedProduct(null);
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {products.map((product) => (
          <div key={product.id} onClick={() => openDialog(product)}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      {selectedProduct && (
        <ProductDialog
          isOpen={isDialogOpen}
          onClose={closeDialog}
          product={selectedProduct}
        />
      )}
    </>
  );
}
