import React from 'react'

import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerPortal,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"
import { ShoppingBag } from 'lucide-react'
import { Button } from '../ui/button'
import { Cart } from '@/models/cart/cart'

import './cart.css'
import { Label } from '../ui/label'

type CartModalProps ={
  cart: Cart
}
export default function CartModal({ cart }: CartModalProps) {
  return (

    <Drawer direction='right'>
        <DrawerTrigger>      
        <div className='flex mr-5'>
            <ShoppingBag className='mr-2'></ShoppingBag>
          <div className=" flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-green-500 rounded-full">
            {cart.items.length}
          </div>
          </div> 
        </DrawerTrigger>

        <DrawerContent>
            <DrawerHeader>
            <DrawerTitle>Carrinho</DrawerTitle>
            </DrawerHeader>
            {cart.items.length == 0 ? <>
              <DrawerDescription>
                Adicione itens primeiro ao carrinho
              </DrawerDescription></>:
            <>
             <DrawerDescription>
              {cart.items.map((item, index) => (
                <div key={index} className="cart-item">
                  <img 
                    src={item.product.image.url} 
                    alt={item.product.image.alt} 
                    className="cart-item-image" 
                  />
                  <div className="cart-item-details">
                    <p className="cart-item-name">{item.product.title}</p>
                    <p className="cart-item-quantity">Quantidade: {item.quantity}</p>
                    <p className="cart-item-unit-price">Preço Unitário: R$ {item.price.toFixed(2)}</p>
                    <p className="cart-item-total-price">Total: R$ {(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </DrawerDescription>
            
            <DrawerFooter>
              <Label><strong>Valor total:</strong> {cart.totalValue.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}</Label>
            <Button>Submit</Button>
            <DrawerClose>
                <Button variant="outline">Cancel</Button>
            </DrawerClose>
            </DrawerFooter>
            </>
            }
           
        </DrawerContent>
    </Drawer>
  )
}