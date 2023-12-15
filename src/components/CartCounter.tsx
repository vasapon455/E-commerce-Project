import {useCart} from "../contexts/CartProvider";
import { useNavigate } from "react-router-dom";

export default function CartCounter() {
  const {itemsInCart} = useCart();

  const navigate = useNavigate();
    
    const handleCart= () =>{
    navigate("/cart");
 }
 
  return (
    <div className="flex justify-center text-center bg-red-800 hover:bg-red-950 rounded-lg  max-h-9 max-w-20 ml-10" onClick={handleCart}>
                <div className=" inline-flex justify-center text-center align-middle" >
                    <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 m-2 flex-1 "><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" /></svg> 
                <div className=" text-lg m-auto font-bold px-2 flex-1">{itemsInCart.length}</div>
          </div>
    </div>
  )
}




