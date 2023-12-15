import { ReactNode, createContext, useState, useContext } from "react";
import IProduct from "../pages/products-page/IProduct"

interface ICartProviderProps {
    children: ReactNode
}

interface ICartContext{
    itemsInCart: IProduct[];
    addToCart: (product: IProduct) => void;
    removeFromCart: (product: IProduct) => void;
}

const CartContext = createContext<ICartContext>({itemsInCart:[], addToCart:()=>{}, removeFromCart:()=>{}})

export default function CartProvider({ children }: ICartProviderProps) {
  
   const [itemsInCart,setItemInCart] = useState<IProduct[]>([]);

   const addToCart = (product:IProduct) => {
    setItemInCart(existingCart => [...existingCart, product]);
   }

   const removeFromCart = (product:IProduct) =>{
    itemsInCart.find(item => item.id !== product.id);
    setItemInCart(itemsInCart);
   }
  
    return (
   <CartContext.Provider value={{itemsInCart,addToCart,removeFromCart}}>
        {children}
    </CartContext.Provider>
  )
}
export const useCart = () => useContext(CartContext);