import { useNavigate } from 'react-router-dom';
import IProduct from './IProduct';

interface IProductItemComponentProps {
    key: string;
    product: IProduct;
}

const ProductItemComponent = ({ product }: IProductItemComponentProps) => {

    const navigate = useNavigate();

    const handleMoreDetails = () =>{
        navigate(`/products/${product.id}`);
    }


    return (
        <div className="text-2xl  border border-gray-300 bg-white text-black rounded-lg shadow-xl flex-row justify-center align-center ">
            <h2 className=" xl:text-4xl font-bold m-20">{ product?.title }</h2>

            <div className="flex flex-row justify-center border-gray-600 m-10 xl:p-20">
                <img  src={product.image} alt={ product?.image } className=" object-contain w-auto m-10 xl:h-96 md:h-40 sm:h-20"/>
            </div>
          
            <button
                className="  bg-red-800 hover:bg-red-950 text-white font-bold py-5 px-5 rounded-lg m-20"
            onClick={handleMoreDetails}>
                 View Item
            </button>
        </div>
    );
};

export default ProductItemComponent;
