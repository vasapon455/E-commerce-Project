import HeroBanner from './HeroBanner'

export default function HomePage() {
  return (
    <div className="flex justify-center bg-blue-900">
      <div className="pt-10 m-10  w-1024 text-center bg-blue-900 text-white mt-20 ">
            <header className=" mb-20 h-11 ">
                <h1 className="text-6xl font-extrabold text-center">Busy Shop</h1>
            </header> 
               <p className="text-5xl" >Welcome! Enjoy shopping <br/> and waiting for delayed parcels,  <br/> because we are so busy.</p>
            <HeroBanner/>
        </div>   
    </div>
  )
}
