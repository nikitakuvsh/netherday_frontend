import './CartModal.css';
import cartListIcon from '../../images/icons/product-image-default.svg';
import { useState } from 'react';

export default function CartModal({ onClose }) {

    const [paymentMethod, setPaymentMethod] = useState('Europe');

    const changePaymentMethod = (pm) => {
        if (paymentMethod != 'Europe' && pm == 'Europe') {
            setPaymentMethod('Europe');
        }
        
        if (paymentMethod != 'Russia' && pm == 'Russia') {
            setPaymentMethod('Russia');
        }
    }

    return (
        <div className='cart__modal-overlay' onClick={onClose}>
            <div className='cart__modal' onClick={(e) => e.stopPropagation()}>
                <button className='cart__modal-close' onClick={onClose}>×</button>
                <h2 className='cart__modal-title'>Корзина</h2>
                <div className='cart__modal-content'>
                    {/* <p>У вашому кошику поки немає товарiв.</p> */}
                    <div className='cart__list'>
                        <div className='cart__list-item'>
                            <div className='cart--left'>
                                <img className='cart__list-icon' src={cartListIcon} alt='icon' />
                                <span className='cart__list-name'>Зiрки (Донат Валюта)</span>
                            </div>
                            <div className='cart--right'>
                                <span className='cart__price'>10 грн</span>
                                <button className='cart__remove-button'>Удалить</button>
                            </div>
                        </div>
                    </div>
                    <div className='final-price'>
                        <h2 className='cart__modal-subtitle'>Всего к оплате:</h2>
                        <span className='cart__modal-title-price cart__modal-subtitle'> 40 грн</span>
                    </div>
                    <div className='payment'>
                        <h2 className='cart__modal-subtitle'>Оплата</h2>
                        <div className='payment__method-list'>
                            <button className={`payment__method ${paymentMethod === 'Europe' ? '' : 'active'}`} onClick={() => changePaymentMethod('Russia')}>РФ</button>
                            <button className={`payment__method ${paymentMethod === 'Europe' ? 'active' : ''}`} onClick={() => changePaymentMethod('Europe')}>Европа</button>
                        </div>
                    </div>
                    <button className='to-pay'>К оплате</button>
                </div>
            </div>
        </div>
    );
}
