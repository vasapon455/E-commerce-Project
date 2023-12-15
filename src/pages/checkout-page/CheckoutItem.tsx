
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
            <div className="flex justify-center ">
             <div className="m-2  w-1024">
                <div className="text-black text-left text-lg bg-white rounded-lg shadow-md mx-4  border border-gray-300 px-10 py-5">
                    <h2 className="text-4xl text-left  font-bold m-10">{product?.title}</h2>
                    <div className="inline-flex flex-row justify-center items-center gap-10 text-left mx-10 my-4 text-2xl">
                        <img src={product?.image} alt={product?.description} className="object-fit w-52 h-auto  "/>
                        <div ><span className="font-bold">Description:  </span>{product?.description}
                        <div className="flex flex-row my-2 justify-end text-right text-2xl ">
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