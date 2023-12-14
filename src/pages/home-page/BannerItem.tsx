import IProduct from "../products-page/IProduct"


interface BannerItemProps{
    key: string;
    product: IProduct;
    //currentIndex: number | undefined;
}

export default function BannerItem({product}:BannerItemProps){
   
    return (
        <div className={"visible"}>
                <img src={product.image}/>
        </div>
        )
      }