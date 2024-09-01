import React from 'react';
import { Card } from '../ui/card';
import { Product } from '@/models/product';


export default function ProductCard({ id, title, price, image, originalPrice }: Product) {
  return (
    <Card className="p-4 flex flex-col justify-between h-96"> {/* Ajusta a altura do card */}
    <img src={image.url} alt={image.alt} className="w-full h-2/3 object-cover mb-4 rounded" /> {/* Proporção 9:16 para a imagem */}
    <div>
      <h2 className="text-lg font-bold mb-2">{title}</h2>
      <p className="mt-2 text-lg font-bold text-green-600">
                  R$ {price.toFixed(2)}{" "}
                  { !(price >= originalPrice) && <span className="text-gray-500 line-through">
                    R$ {originalPrice?.toFixed(2)}
                  </span>}
                </p>
    </div>
  </Card>
  );
}
