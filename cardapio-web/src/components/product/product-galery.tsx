import { useState } from 'react';
import ProductCard from './product-card';
import { Product } from '@/models/product';
import ProductDialog from './product-dialog';

interface ProductGaleryProps {
  products: Product[]
}

export default function ProductGalery({ products }: ProductGaleryProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = (product: Product) => {
    setSelectedProduct(product);
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
    setSelectedProduct(null);
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} onClick={() => openDialog(product)}>
            <ProductCard
              id={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
              originalPrice={product.originalPrice}
            />
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
