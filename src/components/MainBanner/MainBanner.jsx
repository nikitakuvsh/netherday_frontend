import './MainBanner.css';
import mainBannerImage from '../../images/pictures/main-banner-image.svg';

export default function MainBanner(){
    return (
        <div className='main-banner__container'>
            <div className='main-banner__block'>
                <div className='main-banner__content'>
                    <h2 className='main-banner__title'>NetherDay - Лучший BoxPvP {window.innerWidth > 1290 ? <br /> : ''} сервер в Minecraft</h2>
                    <img className='main-banner__image' src={mainBannerImage} alt='image' />
                </div>
            </div>
        </div>
    );
}