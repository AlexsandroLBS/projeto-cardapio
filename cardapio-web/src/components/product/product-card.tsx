import { formatWeight } from '@/utils/helpers';
import { Card } from '../ui/card';
import { Product } from '@/models/product';

type ProductCardTypeProps ={
  product: Product
}
export default function ProductCard({ product }: ProductCardTypeProps) {
  return (
    <Card className="p-4 pb-0 flex  justify-between h-auto">
    <div className='flex flex-col text-left justify-start'>
      <h2 className="pl-0 text-lg font-bold mb-2 flex justify-start">{product.title}</h2>
      <div className='h-[50%]'>

      {product.description && (
                  <p className="text-sm text-gray-500">
                    {product.description}
                  </p>
                )}
                
      </div>
      <div className='flex flex-col justify-start'>

        <p className="mt-2 text-sm">
                    Serve {product.servingSize} pessoa(s) ({formatWeight(product.weight)})
                  </p>
              
        <p className="mt-2 text-lg font-bold text-green-600  flex justify-start">
          R$ {product.price.toFixed(2)}{" "}
          { !(product.price >= product.originalPrice) && <span className="ml-2 text-gray-500 line-through">
            R$ {product.originalPrice?.toFixed(2)}
          </span>}
        </p>
      </div>
    </div>
    <img src={product.image.url} alt={product.image.alt} className="w-[200px] h-[200px] object-cover mb-4 rounded" /> 
  </Card>
  );
}
