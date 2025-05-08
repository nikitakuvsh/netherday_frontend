import { useState } from 'react';
import CartModal from '../CartModal/CartModal';
import './Header.css';
import headerLogo from '../../images/icons/logo.svg';
import headerInfoOnline from '../../images/icons/online-icon.svg';
import discordIcon from '../../images/icons/discord-icon.svg';
import telegramIcon from '../../images/icons/telegram-icon.svg';

export default function Header(){

    const [isCartModalOpen, setIsCartModalOpen] = useState(false);
    const [copied, setCopied] = useState(false);
    const [online, setOnline] = useState('500'); // Сюда данные с бека должны тянуться

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
        <header className='header'>
            <div className='header__container'>
                <div className='header__content'>
                    <img className='header__logo' src={headerLogo} alt='Logo' title='NetherDay' />
                    <h2 className='header__title'>NetherDay</h2>
                    <div className='header__nav'>
                        <a className='header__nav-item' href='#'>Правила</a>
                        <a className='header__nav-item' href='#'>Пiдтримка</a>
                        <a className='header__nav-item' href='#'>Поповнити баланс</a>
                        <button className='header__nav-item' onClick={() => setIsCartModalOpen(true)} style={{paddingBottom: '0'}}>Корзина</button>
                    </div>
                    <div className='header__info'>
                        <div className='header__info-ip two-storey-block' onClick={() => handleCopyIp(serverIp)}>
                            <span className='header__info-ip--text'>IP адрес серверу</span>
                            <h2 className='header__info-ip--ip'>{serverIp}</h2>
                            {copied && <span className='copy-tooltip'>Скопировано!</span>}
                        </div>

                        <img className='header__info-online-image' src={headerInfoOnline} alt='online' title='online' />
                        <div className='header__info-online two-storey-block'>
                            <span className='header__info-online--text'>Онлайн</span>
                            <h2 className='header__info-online--online'>{online}</h2>
                        </div>

                        <div className='header__info-socials'>
                            <a className='header__info-socials-link' href='https://dsc.gg/netherday' target='_blank'>
                                <img className='header__info-socials-link-icons discord--icon' src={discordIcon} alt='discord' title='discord' />
                            </a>
                            
                            <a className='header__info-socials-link' href='https://t.me/netherday' target='_blank'>
                                <img className='header__info-socials-link-icons telegram--icon' src={telegramIcon} alt='telegram' title='telegram' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {isCartModalOpen && <CartModal onClose={() => setIsCartModalOpen(false)} />}
        </header>
    );
}