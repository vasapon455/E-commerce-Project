import BannerItem from "./BannerItem";
import productJSON from "../../data/products.json";
import IProduct from "../products-page/IProduct"
import { useState } from "react";
import { CaretLeftFill,CaretRightFill } from "react-bootstrap-icons";

const products:IProduct[] = productJSON.products;

export default function HeroBanner(){
   
    const [currentPage, setCurrentPage] = useState(1)

    function handlePrev(){
        const newIndex = currentPage-1;
        setCurrentPage(newIndex);
      }

    function handleNext(){
        const newIndex = currentPage+1;
        setCurrentPage(newIndex);
    }

    return(
    <div className="flex  justify-center items-center content-center shadow-md rounded-lg bg-white border border-gray-300  xl:px-20 md:px-20 sm:px-30  xl:mt-20 h-full  w-3/5 xl:gap-20 ">
        <button className={currentPage > 1 ? "float-left visible xl:w-10 xl:h-20 relative": "hidden"} onClick={handlePrev}>  
           < CaretLeftFill className="xl:w-20 xl:h-20 text-red-800"/>
        </button>
        {products.map( product => <BannerItem key={product.id.toString()} product={product} currentIndex={currentPage}/>)}
        <button className={currentPage !== products.length? "float-right visible xl:w-10 xl:h-20 relative": "hidden"} onClick={handleNext}>
           <CaretRightFill className="xl:w-20 xl:h-20 text-red-800"/>    
        </button>
    </div>)
}
``


