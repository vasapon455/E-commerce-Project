import ProductItemComponent from "./ProductItemComponent";
import IProduct from "./IProduct";
import { useProducts } from "../../contexts/ProductProvider";


export default function ProductsPage() {

  const products: IProduct[] = useProducts();
  
  return (
    <div className="flex justify-center xl:flex-row md:flex-col">
           <div className="pt-10 mt-20 text-center">
        <header className=" mb-20 h-11 "><h1 className="xl:text-ุ6xl md:text-4xl font-extrabold text-center">All Products</h1></header>   
        <div className="grid gap-20 xl:grid-cols-2">
        {products.map((product)=><ProductItemComponent key={product.id.toString()} product={product}/>) }
        </div>
      </div>
    </div>
  );
}


