import { CartCoupon } from "./cart-coupon";
import { CartItem } from "./cart-item";
import { CartLogistic } from "./cart-logistic";

export interface Cart {
    items: CartItem[],
    logistic: CartLogistic,
    coupon: CartCoupon
    totalValue: number
}