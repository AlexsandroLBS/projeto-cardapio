import React from 'react'
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
import { Separator } from '@/components/ui/separator';


export default function Navbar() {
  return (<>
    <NavigationMenu className='navbar mb-5'>
      <div className='navItems'>

      </div>
        <NavigationMenuList>
            <NavigationMenuItem >
                <ModeToggle></ModeToggle>      
            </NavigationMenuItem>
        </NavigationMenuList>
    </NavigationMenu>
    </>

  )
}
