import { useState } from "react";
import { Product } from "@/models/product";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import ProductCarouselItem from "./product-carousel-item";
import ProductDialog from "./product-dialog"; 

interface ProductCarouselProps {
  products: Product[];
}

export default function ProductCarousel({ products }: ProductCarouselProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = (product: Product) => {
    setSelectedProduct(product);
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setSelectedProduct(null);
    setIsDialogOpen(false);
  };

  return (
    <>
      <Carousel className="w-full">
        <CarouselContent className="flex gap-4">
          {products.map((product, index) => (
            <div
              key={index}
              style={{
                width: "10000px;",
                whiteSpace: "nowrap",
              }}
              onClick={() => openDialog(product)}
            >
              <ProductCarouselItem product={product} />
            </div>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      
      {selectedProduct && (
        <ProductDialog
          product={selectedProduct}
          isOpen={isDialogOpen}
          onClose={closeDialog}
        />
      )}
    </>
  );
}
