import { Address } from "../address";
import { CartLogisticType } from "../enums/cart-logistic-type";

export interface CartLogistic {
    price: number,
    type: CartLogisticType,
    address: Address
}