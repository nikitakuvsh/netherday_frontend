import './Products.css';
import productImageDefault from '../../images/icons/product-image-default.svg';

const sampleProducts = [
    {
        id: 1,
        title: 'Зiрки (Донат Валюта)',
        price: 10,
        count: 1,
        image: productImageDefault,
    },
    {
        id: 2,
        title: 'Зiрки (Донат Валюта)',
        price: 10,
        count: 1,
        image: productImageDefault,
    },
];

export default function Products({ setCountNewProductsInCart }) {
    const handleAddToCart = (product) => {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];

        const existingItemIndex = cart.findIndex(item => item.id === product.id);

        if (existingItemIndex !== -1) {
            cart[existingItemIndex].count += 1;
        } else {
            cart.push(product);
        }

        localStorage.setItem('cart', JSON.stringify(cart));
    };

    return (
        <div className='products__container'>
            <div className='products__content'>
                <h2 className='products__block-title'>Каталог товарiв</h2>
                <div className='product--inline'>
                    <button className='products__category category--active'>Категория</button>
                    <button className='products__category category--active'>Категория</button>
                    <button className='products__category category--active'>Категория</button>
                    <button className='products__category category--active'>Категория</button>
                    <button className='products__category category--active'>Категория</button>
                    <button className='products__category category--active'>Категория</button>
                    <button className='products__category category--active'>Категория</button>
                    <button className='products__category category--active'>Категория</button>
                </div>
                <div className='products__list'>
                    {sampleProducts.map((product) => (
                        <div key={product.id} className='products__list-item'>
                            <div className='product__image-border'>
                                <img className='product__image' src={product.image} alt='product' />
                            </div>
                            <h2 className='product__title'>{product.title}</h2>
                            <div className='product--inline'>
                                <div className='product__price-block'>
                                    <span className='product__price'>{product.price} грн</span>
                                    <span className='product__count'>{product.count} шт.</span>
                                </div>
                                <button className='product__button button--add-to-cart' onClick={() => {handleAddToCart(product); setCountNewProductsInCart();}}>В корзину</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
