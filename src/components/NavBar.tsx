
import CartCounter from "./CartCounter"
import {Link} from "react-router-dom"


export default function NavBar() {

  return (
    <nav className="bg-blue-900 text-white shadow-lg text-center fixed w-full">
      <div className="flex flex-row justify-center text-center items-center xl:gap-20 md:gap-10 sm:gap-0">
        <div className="flex">
          <Link to="/" className="text-1m font-bold p-3 hover:bg-red-800">Home</Link>
          <Link to="/products" className="text-1m font-bold p-3 hover:bg-red-800">Products</Link>
        </div>
        <CartCounter />
      </div>
    </nav>
  )
}