import {useCart} from "../../contexts/CartProvider";
import CheckoutItem from "./CheckoutItem";

export default function CheckOut(){

    const {itemsInCart} = useCart();
    
    return(
        
        <div>
            {itemsInCart.map(item => <CheckoutItem key={item.id.toString()} product={item} />)}
        </div>
    );
}