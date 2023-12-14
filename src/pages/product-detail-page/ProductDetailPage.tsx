import { useParams } from "react-router-dom";
import { useProducts } from "../../contexts/ProductProvider";
import IProduct from "../products-page/IProduct";
import { useCart } from "../../contexts/CartProvider";

export default function ProductDetailPage() {
   
        const {id} = useParams<{id: string}>();
        const products:IProduct[] = useProducts();
        const product = products.find(product => product.id === Number(id));
        const { addToCart } = useCart();

    return (
        <div className="flex justify-center">
            <div className="pt-10 m-10 bg-slate-200 w-1024">
                <div className="bg-white rounded-lg shadow-md p-4  border border-gray-300">
                    <h2 className="text-xl font-bold mb-4">{product?.title}</h2>
                    <div className="flex-col justify-center m-8 ">
                        <div className="flex justify-center"><img src={product?.image} alt={product?.description} className="w-80 m-8 "/></div>
                        <div className="text-m m-8 "><span className="font-bold">Description:  </span>{product?.description}</div>
                        <div className="flex flex-row justify-between">
                            <p className="p-2 mx-5"><span className="font-bold">Price:  </span>${product?.price}</p>
                            <button onClick={() => addToCart(product!)} className=" bg-red-800  hover:bg-red-950 marker: text-white font-bold py-2 px-4 rounded float-right">Add to Cart</button>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    );
}
