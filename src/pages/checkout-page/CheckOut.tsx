import { useCart } from "../../contexts/CartProvider";
import CheckoutItem from "./CheckoutItem";
import { useNavigate } from "react-router-dom";

export default function CheckOut() {
  const { itemsInCart } = useCart();
  const itemPrice = itemsInCart.map((item) => item.price);
  const allPrice = itemPrice.reduce((prev, current) => {
    return prev + current;
  }, 0);
  const navigate = useNavigate();

  function handleOrder() {
    navigate("/cart/payment");
  }

  return (
    <div className="flex justify-center">
      <div className="pt-10 mt-20 text-center xl:text-2xl">
        <h1 className="h-11 xl:text-6xl sm:text-4xl xl:mb-20 md:mb-20 sm:mb-20 font-extrabold text-center">
          Check Out
        </h1>
        <div>
          {itemsInCart.length > 0 &&
            itemsInCart.map((item, index) => (
              <CheckoutItem key={index.toString()} product={item} />
            ))}
        </div>

        <div className="flex flex-col justify-center  items-center">
          <p
            className={
              itemsInCart.length === 0
                ? "text-black xl:text-4xl m-20"
                : "invisible"
            }
          >
            You don't have any product in cart.
          </p>
          <p className=" m-8 ">
            <span className="font-bold">Total Price: </span>${allPrice}
          </p>
          <button
            className={
              itemsInCart.length === 0
                ? "invisible"
                : "bg-red-800 hover:bg-red-950 text-white font-bold py-2 px-4 rounded-xl m-8"
            }
            onClick={handleOrder}
          >
            Submit Order
          </button>
        </div>
      </div>
    </div>
  );
}
