import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './main.css';
import Header from './components/Header/Header';
import MainBanner from './components/MainBanner/MainBanner';
import Products from './components/Products/Products';
import Footer from './components/Footer/Footer';
import Cart from './components/Cart/Cart';
import Rules from './components/Rules/Rules';

function App() {
  const [countNewProductsInCart, setCountNewProductsInCart] = useState(() => {
    const saved = localStorage.getItem('cartCount');
    return saved ? parseInt(saved, 10) : 0;
  });

  useEffect(() => {
    localStorage.setItem('cartCount', countNewProductsInCart);
  }, [countNewProductsInCart]);

  return (
    <Router>
      <div className="app">
        <div className="app-content">
          <Header />
          <Routes>
            <Route path="/"
              element={
                <>
                  <MainBanner />
                  <Products setCountNewProductsInCart={() => setCountNewProductsInCart(prev => prev + 1)} />
                  <Cart countProducts={countNewProductsInCart} setCountNewProductsInCart={() => setCountNewProductsInCart(0)} />
                </>
              } />
            <Route path="/rules" element={<><Rules /><Cart countProducts={countNewProductsInCart} setCountNewProductsInCart={() => setCountNewProductsInCart(0)} /></>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
