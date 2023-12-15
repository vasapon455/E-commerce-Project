import HeroBanner from './HeroBanner'

export default function HomePage() {
  return (
    <div className="flex flex-row justify-center items-center content-center">
      <div className="pt-10 mt-20 text-center">
    
                <h1 className="h-11 xl:text-6xl  xl:mb-20 font-extrabold text-center">Busy Shop</h1>
          
               <p className="xl:text-4xl xl:mb-20 md:mt-10 sm:mt-20" >Welcome! Enjoy your shopping experience. <br/>Please bear with us for any delays in parcel delivery, <br/>as we are currently experiencing high demand.</p>
            <HeroBanner/>
        </div>   
    </div>
  )
}
