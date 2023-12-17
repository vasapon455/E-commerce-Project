import HeroBanner from "./HeroBanner";

export default function HomePage() {
  return (
    <div className="flex justify-center items-center content-center flex-col">
      <div className="pt-10 mt-20 text-center">
        <header className=" h-11">
          <h1 className="xl:text-ุ6xl md:text-4xl font-extrabold text-center">
            Busy Shop
          </h1>
        </header>
        <p className="xl:text-4xl my-10">
          Welcome! Enjoy your shopping experience. <br />
          Please bear with us for any delays in parcel delivery, <br />
          as we are currently experiencing high demand.
        </p>
      </div>
      <HeroBanner />
    </div>
  );
}
