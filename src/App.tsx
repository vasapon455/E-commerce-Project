
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/home-page/HomePage";
import ProductsPage from "./pages/products-page/ProductsPage";
import ProductDetailPage from "./pages/product-detail-page/ProductDetailPage"; 
import ProductProvider from "./contexts/ProductProvider";
import CartProvider from "./contexts/CartProvider";
import Checkout from "./pages/checkout-page/CheckOut"
import SubmitOrder from "./pages/submit-page/SubmitOrder";
import "./app.css";


function App() {
  return (
    <>
      <Router>
        <CartProvider>
          <ProductProvider>
                <NavBar/>
                  <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/products" element={<ProductsPage/>}/>
                    <Route path="/products/:id" element={<ProductDetailPage />}/>
                    <Route path="/cart" element={<Checkout />}/>
                    <Route path="/cart/payment" element={<SubmitOrder/>}/>
                  </Routes>
          </ProductProvider>
        </CartProvider>
      </Router>
    </>
  )
}

export default App;
