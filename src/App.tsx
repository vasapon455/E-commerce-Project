import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './pages/home-page/HomePage';
import ProductsPage from './pages/products-page/ProductsPage';
import ProductDetailPage from './pages/product-detail-page/ProductDetailPage'; // Import the product detail page component
import ProductProvider from './contexts/ProductProvider';
import CartProvider from './contexts/CartProvider';

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
                  </Routes>
          </ProductProvider>
        </CartProvider>
      </Router>
    </>
  )
}

export default App;
