import { useContext, useEffect, useState } from 'react'
import ProductGalery from '@/components/product/product-galery'
import { Product } from '@/models/product'
import { productService } from '@/services/products-service'
import Navbar from '@/components/generics/navbar/navbar'
import './menu.css'; 
import ProductCarousel from '@/components/product/product-carousel'
import { Separator } from '@/components/ui/separator'
import CategoriesBar from '@/components/categories/categories-bar'
import { Categories } from '@/models/categories'
import { categoriesService } from '@/services/categories-service'
import { Input } from '@/components/ui/input'


export default function MenuPage() { 
    const [products, setProducts] = useState<Product[]>([])
    const [categories, setCategories] = useState<Categories[]>([])


    useEffect(() => {
        const fetchData = async () => {
          try {
            const [fetchedProducts, fetchedCategories] = await Promise.all([
              productService.getProducts(),
              categoriesService.getCategories()
            ]);
            
            setProducts(fetchedProducts);
            setCategories(fetchedCategories);
          } catch (error) {
            console.error('Erro ao buscar dados:', error);
          }
        };
        fetchData();
      }, []);

    return (
    <>  
        <Navbar/>
        <div className="menuContent ">
        <div className='mb-10'>
            <Input placeholder='Busque aqui por produtos'></Input>
        </div>
        <CategoriesBar categories={categories} ></CategoriesBar>
        </div>
        
        <div className='menuCarousel'>
        <div className='title'>Destaques</div>
            <ProductCarousel products={products}>  
            </ProductCarousel>
        </div>
        <div className="menuContent">
            
            <Separator></Separator>
            <h1 className='title'>Produtos</h1>

            <ProductGalery products={products}>
            </ProductGalery>
        </div>

    </>)
}
