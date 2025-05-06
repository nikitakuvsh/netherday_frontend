import './Cart.css';
import cartIcon from '../../images/icons/cart-icon.svg';
import { useState } from 'react';
import CartModal from '../CartModal/CartModal';

export default function Cart(){
    const [isCartModalOpen, setIsCartModalOpen] = useState(false);

    return (
        <>
            <button className='cart-button' onClick={() => setIsCartModalOpen(true)}>
                <img className='cart-button__icon' src={cartIcon} alt='cart' />
            </button>
    
            {isCartModalOpen && <CartModal onClose = {() => setIsCartModalOpen(false)}/>}
        </>
    );
    
}