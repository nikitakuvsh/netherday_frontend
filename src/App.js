import './main.css';
import Header from './components/Header/Header';
import MainBanner from './components/MainBanner/MainBanner';
import Products from './components/Products/Products';
import Footer from './components/Footer/Footer';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <div className="app">
        <Header />
        <MainBanner />
        <Products />
        <Cart />
        <Footer />
    </div>
  );
}

export default App;
