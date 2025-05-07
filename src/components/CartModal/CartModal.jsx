import './CartModal.css';
import { useState, useEffect } from 'react';

export default function CartModal({ onClose }) {
    const [paymentMethod, setPaymentMethod] = useState('Europe');
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCartItems(storedCart);
    }, []);

    const changePaymentMethod = (pm) => {
        setPaymentMethod(pm);
    };

    const handleRemove = (id) => {
        const updatedCart = cartItems.filter(item => item.id !== id);
        setCartItems(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.count, 0);

    return (
        <div className='cart__modal-overlay' onClick={onClose}>
            <div className='cart__modal' onClick={(e) => e.stopPropagation()}>
                <button className='cart__modal-close' onClick={onClose}>×</button>
                <h2 className='cart__modal-title'>Корзина</h2>
                <div className='cart__modal-content'>
                    {cartItems.length === 0 ? (
                        <p>У вашому кошику поки немає товарiв.</p>
                    ) : (
                        <div className='cart__list'>
                            {cartItems.map(item => (
                                <div key={item.id} className='cart__list-item'>
                                    <div className='cart--left'>
                                        {item.image ? <img className='cart__list-icon' src={item.image} alt='icon' /> : <span className='cart__list-icon'>⭐️</span>}
                                        <span className='cart__list-name'>{item.title} — {item.count} шт.</span>
                                    </div>
                                    <div className='cart--right'>
                                        <span className='cart__price'>{item.price * item.count} грн</span>
                                        <button className='cart__remove-button' onClick={() => handleRemove(item.id)}>Удалить</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    <div className='final-price'>
                        <h2 className='cart__modal-subtitle'>Всего к оплате:</h2>
                        <span className='cart__modal-title-price cart__modal-subtitle'>{totalPrice} грн</span>
                    </div>

                    <div className='payment'>
                        <h2 className='cart__modal-subtitle'>Оплата</h2>
                        <div className='payment__method-list'>
                            <button className={`payment__method ${paymentMethod === 'Russia' ? 'active' : ''}`} onClick={() => changePaymentMethod('Russia')}>РФ</button>
                            <button className={`payment__method ${paymentMethod === 'Europe' ? 'active' : ''}`} onClick={() => changePaymentMethod('Europe')}>Европа</button>
                        </div>
                    </div>

                    <button className='to-pay'>К оплате</button>
                </div>
            </div>
        </div>
    );
}
