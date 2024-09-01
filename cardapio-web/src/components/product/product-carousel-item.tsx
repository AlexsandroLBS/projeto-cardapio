import { Product } from "@/models/product";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Card, CardContent } from "../ui/card";

import './product-carousel-item.css'; 

interface ProductCarouselItemProps {
  product: Product;
}

export default function ProductCarouselItem({ product }: ProductCarouselItemProps) {
  return (
          <CarouselItem key={product.id} className="carousel-item w-[30em] flex-shrink-0  p-2">
            <Card className="overflow-hidden">
              <div className="relative w-full h-48">
                <img
                  src={product.image.url}
                  alt={product.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold">{product.title}</h3>
                {product.description && (
                  <p className="text-sm text-gray-500">
                    {product.description}
                  </p>
                )}
                <p className="mt-2 text-sm">
                  Serve {product.servingSize} pessoa(s) ({product.weight}g)
                </p>
                <p className="mt-2 text-lg font-bold text-green-600">
                  R$ {product.price.toFixed(2)}{" "}
                  { !(product.price >= product.originalPrice) && <span className="text-gray-500 line-through">
                    R$ {product.originalPrice?.toFixed(2)}
                  </span>}
                </p>
              </CardContent>
            </Card>
          </CarouselItem>
  );
}
