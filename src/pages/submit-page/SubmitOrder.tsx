
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
   
    <div className="flex  flex-col justify-center items-center text-center">
       <div  className="pt-10 m-80  w-1024 text-center">
       <div className="w-full bg-black text-black" >
         <div className="object-fill bg-red text-black"></div>
         
       </div>
         <header className=" mb-20 h-11 "><h1 className="text-6xl font-extrabold text-center leading-40">Please wait <br/> while we are processing <br/>your order...</h1></header>
        </div>       
        <button
                className={buttonState=== true?" text-4xl bg-red-800 hover:bg-red-950 text-white font-bold py-5 px-5 rounded-xl m-20": "invisible"}
            onClick={redirect}>
                 Next
            </button>
           
     </div>
    )  
}