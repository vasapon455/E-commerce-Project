
import IProduct from "../products-page/IProduct"
import {useCart} from "../../contexts/CartProvider"


interface CheckOutItemProps {
    key: string;
    product: IProduct;
}

export default function CheckoutItem({product}:CheckOutItemProps){

   const {removeItem} = useCart();

    return (
        <div>
            <div className="flex justify-center items-center content-center xl:w-full">
             <div className="m-2 xl:w-full">
                <div className="text-black text-left text-lg bg-white rounded-lg shadow-md mx-4  border border-gray-300 px-10 py-5">
                    <h2 className="xl:text-4xl text-left font-bold m-10">{product?.title}</h2>
                    <div className="inline-flex flex-wrap justify-center items-center gap-10 text-left mx-10 my-4 xl:text-2xl xl:flex-row md:clear-both">
                        <img src={product?.image} alt={product?.description} className="object-fit xl:w-52 xl:h-auto  "/>
                        <div ><span className="font-bold">Description:  </span>{product?.description}
                        <div className="flex xl:justify-end  sm:flex-wrap my-2 xl:text-right xl:text-2xl xl:flex-row sm:text-center " >
                            <p className="m-8"><span className="font-bold">Price:  </span>${product?.price}</p>
                            <button
                                onClick={() => removeItem(product!)} className=" bg-red-800 hover:bg-red-950 text-white font-bold py-2 px-4 rounded-xl my-4 mt-8" > 
                                    Remove
                                </button>
                        </div>
                           </div>
                        </div>     
                    </div>
                   
            </div>
        </div>
        </div>
    )
}