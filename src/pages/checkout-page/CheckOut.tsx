import {useCart} from "../../contexts/CartProvider";
import CheckoutItem from "./CheckoutItem";

export default function CheckOut(){

    const {itemsInCart} = useCart();
    const itemPrice = itemsInCart.map((item)=> item.price);
    const allPrice =itemPrice.reduce((prev,current)=>{return prev + current},0);

    return(
        <div className="flex flex-col justify-center  items-center">
            <div className="pt-10 m-20 bg-blue-900 text-white w-1024 text-center align-middle">
             <header className=" mb-20 h-11 "><h1 className="text-6xl font-extrabold text-center">Check Out</h1></header>   
           
            <div className="grid-cols-1 ">
                { itemsInCart.length > 0 && itemsInCart.map(item => <CheckoutItem key={item.id.toString()} product={item}/>) }
            </div>
            <p className={itemsInCart.length===0?"text-white":"invisible"}>You don't have any product in cart.</p>
            <div className="flex flex-col justify-around ">
                    <p className="text-white text-xl m-8 "><span className="font-bold">Total Price:  </span>${allPrice}</p>
                    <button
                    className={itemsInCart.length===0?"invisible" : "bg-red-800 hover:bg-red-950 text-white font-bold py-2 px-4 rounded-xl m-8"}
            >
                    Submit Order
                </button>
            </div>
            </div>
        </div>    
    );
} 
