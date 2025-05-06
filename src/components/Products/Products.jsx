import './Products.css';
import productImageDefault from '../../images/icons/product-image-default.svg';

export default function Products(){
    return (
        <div className='products__container'>
            <div className='products__content'>
                <h2 className='products__block-title'>Каталог товарiв</h2>
                <div className='product--inline'>
                    <button className='products__category category--active'>Категория</button>
                    <button className='products__category'>Категория</button>
                    <button className='products__category'>Категория</button>
                    <button className='products__category'>Категория</button>
                    <button className='products__category'>Категория</button>
                    <button className='products__category'>Категория</button>
                    <button className='products__category'>Категория</button>
                    <button className='products__category'>Категория</button>
                </div>
                <div className='products__list'>
                    <div className='products__list-item'>
                        <div className='product__image-border'><img className='product__image' src={productImageDefault} alt='product-image' title='image'/></div>
                        <h2 className='product__title'>Зiрки (Донат Валюта)</h2>
                        <div className='product--inline'>
                            <div className='product__price-block'>
                                <span className='product__price'>10 грн</span>
                                <span className='product__count'>1 шт.</span>
                            </div>
                            <button className='product__button button--add-to-cart'>В корзину</button>
                        </div>
                    </div>

                    <div className='products__list-item'>
                        <div className='product__image-border'><img className='product__image' src={productImageDefault} alt='product-image' title='image'/></div>
                        <h2 className='product__title'>Зiрки (Донат Валюта)</h2>
                        <div className='product--inline'>
                            <div className='product__price-block'>
                                <span className='product__price'>10 грн</span>
                                <span className='product__count'>1 шт.</span>
                            </div>
                            <button className='product__button button--add-to-cart'>В корзину</button>
                        </div>
                    </div>

                    <div className='products__list-item'>
                        <div className='product__image-border'><img className='product__image' src={productImageDefault} alt='product-image' title='image'/></div>
                        <h2 className='product__title'>Зiрки (Донат Валюта)</h2>
                        <div className='product--inline'>
                            <div className='product__price-block'>
                                <span className='product__price'>10 грн</span>
                                <span className='product__count'>1 шт.</span>
                            </div>
                            <button className='product__button button--add-to-cart'>В корзину</button>
                        </div>
                    </div>

                    <div className='products__list-item'>
                        <div className='product__image-border'><img className='product__image' src={productImageDefault} alt='product-image' title='image'/></div>
                        <h2 className='product__title'>Зiрки (Донат Валюта)</h2>
                        <div className='product--inline'>
                            <div className='product__price-block'>
                                <span className='product__price'>10 грн</span>
                                <span className='product__count'>1 шт.</span>
                            </div>
                            <button className='product__button button--add-to-cart'>В корзину</button>
                        </div>
                    </div>

                    <div className='products__list-item'>
                        <div className='product__image-border'><img className='product__image' src={productImageDefault} alt='product-image' title='image'/></div>
                        <h2 className='product__title'>Зiрки (Донат Валюта)</h2>
                        <div className='product--inline'>
                            <div className='product__price-block'>
                                <span className='product__price'>10 грн</span>
                                <span className='product__count'>1 шт.</span>
                            </div>
                            <button className='product__button button--add-to-cart'>В корзину</button>
                        </div>
                    </div>

                    <div className='products__list-item'>
                        <div className='product__image-border'><img className='product__image' src={productImageDefault} alt='product-image' title='image'/></div>
                        <h2 className='product__title'>Зiрки (Донат Валюта)</h2>
                        <div className='product--inline'>
                            <div className='product__price-block'>
                                <span className='product__price'>10 грн</span>
                                <span className='product__count'>1 шт.</span>
                            </div>
                            <button className='product__button button--add-to-cart'>В корзину</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}