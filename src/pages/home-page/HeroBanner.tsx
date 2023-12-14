import BannerItem from "./BannerItem";
import productJSON from "../../data/products.json";
import IProduct from "../products-page/IProduct"
import { useState } from "react";





export default function HeroBanner(){
   
    const products:IProduct[] = productJSON.products;

    const [currentPage, setCurrentPage] = useState(1)

    function handlePrev(){
        const newIndex = currentPage+1;
        setCurrentPage(newIndex);
      }

    function handleNext(){
        const newIndex = currentPage-1;
        setCurrentPage(newIndex);
    }

    return(
    <div className="flex flex-row gap-20 banner-container max-w-1000 relative mt-40 justify-center align-middle shadow-md">
        <button className="float-left" onClick={handlePrev}> 
            <svg className="w-20 h-20  text-red-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 10 16">
            <path d="M8.766.566A2 2 0 0 0 6.586 1L1 6.586a2 2 0 0 0 0 2.828L6.586 15A2 2 0 0 0 10 13.586V2.414A2 2 0 0 0 8.766.566Z"/>
            </svg>    
        </button>
        {products.map( product => <BannerItem key={product.id.toString()} product={product} />)}
        <button className="float-right" onClick={handleNext}>
            <svg className="w-20 h-20 text-red-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 10 16">
            <path d="M3.414 1A2 2 0 0 0 0 2.414v11.172A2 2 0 0 0 3.414 15L9 9.414a2 2 0 0 0 0-2.828L3.414 1Z"/>
            </svg>
        </button>
    </div>)
}
``


