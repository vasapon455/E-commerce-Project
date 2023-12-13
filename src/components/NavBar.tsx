
import CartCounter from './CartCounter'

export default function NavBar() {
  return (
    <nav className="bg-blue-900 text-white shadow-lg text-center">
      <div className="inline-flex justify-center gap-80">
        <div className="flex gap-5">
          <a href="/" className="text-1m font-bold p-3 hover:bg-red-800">Home</a>
          <a href="/products" className="text-1m font-bold p-3 hover:bg-red-800">Products</a>
        </div>
        <CartCounter/>
      </div>
    </nav>
  )
}