import { ReactNode, createContext, useState, useContext } from "react";
import IProduct from "../pages/products-page/IProduct"

interface ICartProviderProps {
    children: ReactNode
}

interface ICartContext{
    itemsInCart: IProduct[];
    addToCart: (product: IProduct) => void;
}

const CartContext = createContext<ICartContext>({itemsInCart:[], addToCart:()=>{}})

export default function CartProvider({ children }: ICartProviderProps) {
  
   const [itemsInCart,setItemInCart] = useState<IProduct[]>([]);

   const addToCart = (product:IProduct) => {
    setItemInCart(existingCart => [...existingCart, product]);
   }
  
    return (
   <CartContext.Provider value={{itemsInCart,addToCart}}>
        {children}
    </CartContext.Provider>
  )
}
export const useCart = () => useContext(CartContext);