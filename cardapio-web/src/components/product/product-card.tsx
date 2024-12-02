import { Card } from "../ui/card";
import { Dish } from "@/services/dishes";

type ProductCardTypeProps = {
  product: Dish;
};

export default function ProductCard({ product }: ProductCardTypeProps) {
  return (
    <Card className="p-4 pb-0 flex justify-between h-auto">
      <div className="flex flex-col text-left justify-start">
        <h2 className="pl-0 text-lg font-bold mb-2 flex justify-start">
          {product.name}
        </h2>
        <div className="h-[50%]">
          {product.description && (
            <p className="text-sm text-gray-500">{product.description}</p>
          )}
        </div>
        <div className="flex flex-col justify-start">
          <p className="text-lg font-bold text-green-600 flex justify-start pb-2">
            R$ {product.price.toFixed(2)}
          </p>
        </div>
      </div>
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-[100px] h-[100px] object-cover mb-4 rounded"
      />
    </Card>
  );
}
