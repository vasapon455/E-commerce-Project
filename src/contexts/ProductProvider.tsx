import IProduct from "../pages/products-page/IProduct.ts"
import axios from "axios";
import { createContext,useContext } from "react";
import { ReactNode } from "react";


interface ProductProviderProps{
    children: ReactNode;
}

const response = await axios.get("https://fakestoreapi.com/products/");
const products: IProduct[] = response.data;
  
const ProductContext = createContext<IProduct[]>([]);

export default function ProductProvider({ children }: ProductProviderProps) {
 

  return (
    <ProductContext.Provider value={products}> {children}</ProductContext.Provider>
  )
}

export const useProducts = () => useContext(ProductContext);