import './Cart.css';
import cartIcon from '../../images/icons/cart-icon.svg';
import { useState } from 'react';
import CartModal from '../CartModal/CartModal';

export default function Cart({ countProducts, setCountNewProductsInCart }) {
    const [isCartModalOpen, setIsCartModalOpen] = useState(false);

    return (
        <div className='cart-button__block'>
            <button className='cart-button' onClick={() => {setIsCartModalOpen(true); setCountNewProductsInCart()}}>
                <img className='cart-button__icon' src={cartIcon} alt='cart' />
                {countProducts > 0 && (
                    <span className='count-products'>{countProducts}</span>
                )}
            </button>

            {isCartModalOpen && <CartModal onClose={() => setIsCartModalOpen(false)} />}
        </div>

    );

}