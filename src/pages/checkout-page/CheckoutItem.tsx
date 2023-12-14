
import IProduct from "../products-page/IProduct"



interface CheckOutItemProps {
    key: string;
    product: IProduct;
}

export default function CheckoutItem({product}:CheckOutItemProps){

    return (
        <div>
            <div className="flex justify-center">
             <div className="m-2  w-1024">
                <div className="text-black text-left text-lg bg-white rounded-lg shadow-md p-4  border border-gray-300">
                    <h2 className="text-xl font-bold mb-4">{product?.title}</h2>
                    <div className="flex justify-center text-left m-8 ">
                        <img src={product?.image} alt={product?.description} className=" w-40 h-auto m-4 "/>
                        <div className="text-m m-8 "><span className="font-bold">Description:  </span>{product?.description}</div>
                        <div className="flex flex-col p-0 m-0 justify-center text-center">
                        <p className=" text-2xl m-8"><span className="font-bold">Price:  </span>${product?.price}</p>
                            <button
                    className=" bg-red-800 hover:bg-red-950 text-white font-bold py-2 px-4 rounded-xl my-4 mt-8"
            >
                    Remove
                </button>
            </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}