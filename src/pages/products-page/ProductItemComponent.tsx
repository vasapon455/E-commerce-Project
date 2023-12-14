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
        <div className="bg-white rounded-lg shadow-md p-4  border-gray-600 flex-col justify-center align-center">
            <h2 className=" text-lg font-bold m-4">{ product.title }</h2>
            {/* product.image */}
           
            <div className="flex justify-center font-light "><img src={product.image} alt={ product.image } className="m-10 max-h-60"/></div>
          
            <button
                className=" bg-red-800 hover:bg-red-950 text-white font-bold py-2 px-4 rounded-xl m-4 "
            onClick={handleMoreDetails}>
                 View Item
            </button>
        </div>
    );
};

export default ProductItemComponent;
