
import { useNavigate } from "react-router-dom"
import { useState } from "react";
import { useCart } from "../../contexts/CartProvider";

export default function SubmitOrder() {
    
    const  [buttonState,setButtonState]= useState(false);

  const  navigate = useNavigate();
  
   const {resetItem} = useCart();

    function enableButton(){
      setButtonState(true);
    }
    

    {setInterval(enableButton,1000)}

    function redirect(){
       navigate("/");
       resetItem([]);
    }

    return ( 
   
    <div className="flex flex-col justify-center items-center text-center">
       <div  className="pt-10 m-80  xl:w-full  text-center">
         <header className="h-11"><h1 className="xl:text-6xl font-extrabold text-center leading-40 block">Please wait <br/> while we are processing <br/>your order...</h1></header>
        </div>       
        <button
                className={buttonState=== true?" xl:text-4xl bg-red-800 hover:bg-red-950 text-white font-bold py-5 px-5 rounded-xl": "invisible"}
            onClick={redirect}>
                 Next
            </button>
           
     </div>
    )  
}