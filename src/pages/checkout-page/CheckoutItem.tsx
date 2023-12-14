
import IProduct from "../products-page/IProduct"



interface CheckOutItemProps {
    key: string;
    product: IProduct;
}

export default function CheckoutItem({product}:CheckOutItemProps){

    return (
        <div>
            <div className="flex justify-center">
            <div className="pt-10 m-10  w-1024">
                <div className="rounded-lg shadow-md p-4  border border-gray-300">
                    <h2 className="text-xl font-bold mb-4">{product?.title}</h2>
                    <div className="flex-col justify-center m-8 ">
                        <div className="flex justify-center"><img src={product?.image} alt={product?.description} className="w-80 m-8 "/></div>
                        <div className="text-m m-8 "><span className="font-bold">Description:  </span>{product?.description}</div>
                        <div className="flex flex-row justify-between">
                            <p className="p-2 mx-5"><span className="font-bold">Price:  </span>${product?.price}</p>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
        </div>
    )
}