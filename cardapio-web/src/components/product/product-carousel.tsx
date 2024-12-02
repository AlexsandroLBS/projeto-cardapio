import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import ProductCarouselItem from "./product-carousel-item";
import ProductDialog from "./product-dialog";
import { Dish } from "@/services/dishes";

interface ProductCarouselProps {
  products: Dish[];
}

export default function ProductCarousel({ products }: ProductCarouselProps) {
  const [selectedProduct, setSelectedProduct] = useState<Dish | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = (product: Dish) => {
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
