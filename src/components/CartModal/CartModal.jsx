import './CartModal.css';

export default function CartModal({ onClose }){
    return (
        <div className='cart__modal-overlay'>
            <div className='cart__modal'></div>
        </div>
    );
}