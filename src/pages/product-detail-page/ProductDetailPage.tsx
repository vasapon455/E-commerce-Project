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
             
            <div className="pt-10 m-10  w-1024 text-2xl">
                <div className="rounded-lg shadow-md p-4  border border-gray-300 bg-white">
                    <h2 className="text-4xl font-bold  m-10 text-center">{product?.title}</h2>
                    <div className="flex-col justify-center items-center m-8 ">
                                <div className="flex justify-center "><img src={product?.image} alt={product?.description} className="w-80 m-8 "/></div>
                                <div className=" m-10"><p className="font-bold">Description:  </p> <br/>{product?.description} <div className="flex flex-row justify-between my-20">
                                <p ><span className="font-bold">Price:  </span>${product?.price}</p>
                                <button onClick={() => addToCart(product!)} className="rounded-lg   bg-red-800  hover:bg-red-950 marker: text-white font-bold py-4 px-4 float-right">Add to Cart</button>
                                </div>
                        </div>
                       
                    </div>
                   
                </div>
            </div>
        </div>
    );
}
