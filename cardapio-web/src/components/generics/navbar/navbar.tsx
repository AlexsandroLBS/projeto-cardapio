import { useContext } from 'react'
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuList,
} from '../../ui/navigation-menu'
import { ModeToggle } from '../mode-toggle'

import './navbar.css';
import { OrderContext } from '@/contexts/order/order-context';
import CartModal from '@/components/cart/cart';


export default function Navbar() {
	const orderContext = useContext(OrderContext);

	if (!orderContext) {
		return <p></p>;
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
		<div className='min-h-[40px]'></div>
	</>

	)
}
