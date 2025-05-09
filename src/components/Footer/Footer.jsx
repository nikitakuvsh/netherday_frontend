import './Footer.css';
import { useState } from 'react';
import CartModal from '../CartModal/CartModal';
import discordIcon from '../../images/icons/discord-icon.svg';
import telegramIcon from '../../images/icons/telegram-icon.svg';

export default function Footer() {
    const [isCartModalOpen, setIsCartModalOpen] = useState(false);
    const [copied, setCopied] = useState(false);

    const serverIp = 'mc.nether.day';

    const handleCopyIp = (serverIp) => {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(serverIp)
                .then(() => {
                    setCopied(true);
                    setTimeout(() => setCopied(false), 2000);
                })
                .catch(err => {
                    console.error('Ошибка при копировании IP:', err);
                });
        } else {
            console.warn('Clipboard API недоступен');
        }

    };

    return (
        <footer className='footer'>
            <div className='footer__content'>
                <div className='footer__logo' onClick={() => window.location.href = '/'}>
                    <h2 className='footer__logo-text'>NetherDay</h2>
                    <p className='footer__logo-rights-reserver'>2025 - Всі права захищені.</p>
                </div>

                <div className='footer__nav'>
                    <a className='footer__nav-item' href='/rules'>Правила</a>
                    <a className='footer__nav-item' href='https://dsc.gg/netherday' target='_blank'>Пiдтримка</a>
                    <a className='footer__nav-item' href='/'>Поповнити баланс</a>
                </div>

                <div className='footer__nav'>
                    <button className='footer__nav-item' onClick={() => setIsCartModalOpen(true)}>Корзина</button>
                </div>

                <div className='footer__ip' onClick={() => handleCopyIp(serverIp)}>
                    <span className='footer__ip-text'>IP адрес серверу</span>
                    <h2 className='footer__ip-ip'>{serverIp}</h2>
                    {copied && <span className='copy-tooltip footer'>Скопировано!</span>}
                </div>

                <div className='footer__social'>
                    <h2 className='footer__social-title'>Контакти</h2>
                    <div className='footer__social-list'>
                        <a className='header__socials-link' href='https://dsc.gg/netherday' target='_blank'>
                            <img className='footer__socials-link-icons discord--icon' src={discordIcon} alt='discord' title='discord' />
                        </a>

                        <a className='footer__socials-link' href='https://t.me/netherday' target='_blank'>
                            <img className='footer__socials-link-icons telegram--icon' src={telegramIcon} alt='telegram' title='telegram' />
                        </a>
                    </div>
                </div>
            </div>

            {isCartModalOpen && <CartModal onClose={() => setIsCartModalOpen(false)} />}
        </footer>
    );
}