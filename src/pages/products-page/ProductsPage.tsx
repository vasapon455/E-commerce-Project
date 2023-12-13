import ProductItemComponent from "./ProductItemComponent";
import IProduct from "./IProduct";
import { useProducts } from "../../contexts/ProductProvider";


export default function ProductsPage() {

  const products: IProduct[] = useProducts();
  
  return (
    <div className="flex justify-center">
      <div className="pt-10 m-10 bg-slate-200 w-1024 text-center align-middle">
        <header className=" mb-20 h-11 "><h1 className="text-6xl font-extrabold text-center">All Products</h1></header>   
        <div className="grid grid-cols-2 gap-4">
        {products.map((product)=><ProductItemComponent key={product.id.toString()} product={product}/>) }
        </div>
      </div>
    </div>
  );
}


