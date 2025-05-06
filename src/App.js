import { useState } from 'react';
import './main.css';
import Header from './components/Header/Header';
import MainBanner from './components/MainBanner/MainBanner';
import Products from './components/Products/Products';
import Footer from './components/Footer/Footer';
import Cart from './components/Cart/Cart';

function App() {

  const [countNewProductsInCart, setCountNewProductsInCart] = useState(0);

  return (
    <div className="app">
        <Header />
        <MainBanner />
        <Products setCountNewProductsInCart={() => setCountNewProductsInCart(prev => prev + 1)} />
        <Cart countProducts = {countNewProductsInCart} setCountNewProductsInCart={() => setCountNewProductsInCart(0)}/>
        <Footer />
    </div>
  );
}

export default App;
