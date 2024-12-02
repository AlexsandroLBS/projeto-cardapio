import { CarouselItem } from "../ui/carousel";
import { Card, CardContent } from "../ui/card";

import "./product-carousel-item.css";
import { Dish } from "@/services/dishes";

interface ProductCarouselItemProps {
  product: Dish;
}

export default function ProductCarouselItem({
  product,
}: ProductCarouselItemProps) {
  return (
    <CarouselItem
      key={product.id}
      className="carousel-item w-[30em] flex-shrink-0 p-2"
    >
      <Card className="overflow-hidden">
        <div className="relative w-full h-48">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="object-cover w-full h-full"
          />
        </div>
        <CardContent className="p-4">
          <h3 className="text-lg font-semibold">{product.name}</h3>
          {product.description && (
            <p className="text-sm text-gray-500">{product.description}</p>
          )}
          <p className="mt-2 text-lg font-bold text-green-600">
            R$ {product.price.toFixed(2)}
          </p>
        </CardContent>
      </Card>
    </CarouselItem>
  );
}
