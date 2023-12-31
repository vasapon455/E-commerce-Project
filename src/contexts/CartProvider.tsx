import { ReactNode, createContext, useState, useContext } from "react";
import IProduct from "../pages/products-page/IProduct";

interface ICartProviderProps {
  children: ReactNode;
}

interface ICartContext {
  itemsInCart: IProduct[];
  addToCart: (product: IProduct) => void;
  removeItem: (product: IProduct) => void;
  resetItem: (product: []) => void;
}

const CartContext = createContext<ICartContext>({
  itemsInCart: [],
  addToCart: () => {},
  removeItem: () => {},
  resetItem: () => {},
});

export default function CartProvider({ children }: ICartProviderProps) {
  const [itemsInCart, setItemInCart] = useState<IProduct[]>([]);

  const addToCart = (product: IProduct) => {
    const findItem = itemsInCart.find((item) => item.id === product.id);
    findItem?.id !== product.id
      ? setItemInCart((existingCart) => [...existingCart, product])
      : itemsInCart;
  };

  const removeItem = (product: IProduct) => {
    console.log(product);
    setItemInCart((existingCart) =>
      existingCart.filter((item) => item.id !== product.id)
    );
  };

  const resetItem = () => {
    setItemInCart([]);
  };

  return (
    <CartContext.Provider
      value={{ itemsInCart, addToCart, removeItem, resetItem }}
    >
      {children}
    </CartContext.Provider>
  );
}
export const useCart = () => useContext(CartContext);
