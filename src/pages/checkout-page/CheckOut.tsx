import {useCart} from "../../contexts/CartProvider";
import CheckoutItem from "./CheckoutItem";

export default function CheckOut(){

    const {itemsInCart} = useCart();
    
    return(
        
        <div className=" grid-cols-1">
            { itemsInCart.length > 0? itemsInCart.map(item => <CheckoutItem key={item.id.toString()} product={item}/>) : <p className=" text-black">You don't have any item in cart.</p> }
        </div>
    );
}