import IProduct from "../products-page/IProduct"
import "./BannerItem.css"

interface BannerItemProps{
    key: string;
    product: IProduct;
    currentIndex: number | undefined;
}

export default function BannerItem({product, currentIndex}:BannerItemProps){
   
    return (
        <div className={currentIndex === product.id? "slide visible h-full":"slide hidden"}>
                <img src={product.image}/>
        </div>
        )
      }