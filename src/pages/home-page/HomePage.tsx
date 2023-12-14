import HeroBanner from './HeroBanner'



export default function HomePage() {
  return (
    <div className="flex justify-center">
      <div className="pt-10 m-10 bg-slate-200 w-1024 text-center ">
            <header className=" mb-20 h-11 ">
                <h1 className="text-6xl font-extrabold text-center">Busy Shop</h1>
                <HeroBanner/>
            </header>
        </div>   
    </div>
  )
}
