import './Header.css';
import headerLogo from '../../images/icons/logo.svg';
import headerInfoOnline from '../../images/icons/online-icon.svg';
import discordIcon from '../../images/icons/discord-icon.svg';
import telegramIcon from '../../images/icons/telegram-icon.svg';

export default function Header(){
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
                        <a className='header__nav-item' href='#'>Корзина</a>
                    </div>
                    <div className='header__info'>
                        <div className='header__info-ip two-storey-block'>
                            <span className='header__info-ip--text'>IP адрес серверу</span>
                            <h2 className='header__info-ip--ip'>mc.nether.day</h2>
                        </div>

                        <img className='header__info-online-image' src={headerInfoOnline} alt='online' title='online' />
                        <div className='header__info-online two-storey-block'>
                            <span className='header__info-online--text'>Онлайн</span>
                            <h2 className='header__info-online--online'>500</h2>
                        </div>

                        <div className='header__info-socials'>
                            <a className='header__info-socials-link' href='https://discord.com' target='_blank'>
                                <img className='header__info-socials-link-icons discord--icon' src={discordIcon} alt='discord' title='discord' />
                            </a>
                            
                            <a className='header__info-socials-link' href='https://telegram.com' target='_blank'>
                                <img className='header__info-socials-link-icons telegram--icon' src={telegramIcon} alt='telegram' title='telegram' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}