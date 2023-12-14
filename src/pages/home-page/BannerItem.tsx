import IProduct from "../products-page/IProduct"


interface BannerItemProps{
    key: string;
    product: IProduct;
    currentIndex: number | undefined;
}

export default function BannerItem({product, currentIndex}:BannerItemProps){
   
    return (
        <div className={currentIndex === product.id?" visible":"hidden"}>
                <img src={product.image}/>
        </div>
        )
      }