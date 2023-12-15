import HeroBanner from './HeroBanner'

export default function HomePage() {
  return (
    <div className="flex justify-center ">
      <div className="pt-10 m-10  w-1024 text-center  mt-20 ">
            <header className=" mb-20 h-11 ">
                <h1 className="text-6xl font-extrabold text-center">Busy Shop</h1>
            </header> 
               <p className="text-4xl" >Welcome! Enjoy shopping and waiting for delayed parcels, because we are so busy.</p>
            <HeroBanner/>
        </div>   
    </div>
  )
}
