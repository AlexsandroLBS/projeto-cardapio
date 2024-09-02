import React, { useContext } from 'react'
import { NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport } from '../../ui/navigation-menu'
import { ModeToggle } from '../mode-toggle'

import './navbar.css'; 
import Cart from '@/components/cart/cart';
import { OrderContext } from '@/contexts/order/order-context';
import CartModal from '@/components/cart/cart';


export default function Navbar() {
  const orderContext = useContext(OrderContext);

  if (!orderContext) {
    return <p>Loading...</p>; 
  }

  const { cart } = orderContext;
  
  return (<>
    <NavigationMenu className='navbar mb-5'>
      <div className='navItems'>

      </div>
        <NavigationMenuList>
            <NavigationMenuItem >
                <CartModal cart={cart}></CartModal>
            </NavigationMenuItem>
            <NavigationMenuItem >
                <ModeToggle></ModeToggle>      
            </NavigationMenuItem>
        </NavigationMenuList>
    </NavigationMenu>
    </>

  )
}
