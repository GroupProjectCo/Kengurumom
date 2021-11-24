/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import Logo from '../Logo/Logo';
import './Footer.css';
import { TEL, PHONE_TEXT } from '../../config/texts';
import Navigation from '../Navigation/Navigation';

function Footer({ media }) {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__top">
          <Logo type="light" />
        </div>
        <Navigation type="footer" media={media} />
        <div className="footer__contacts">
          <div className="footer__contact footer__contact_type_phone">
            <a href={`tel:${TEL}`} className='footer__text'>
              {PHONE_TEXT}
            </a>
          </div>
          <div className="footer__contact footer__contact_type_time">
            <p className="footer__text">Звонки и заказы:</p>
            <p className="footer__text">пн - пт 09:00 - 21:00 по МСК</p>
          </div>
          <ul className="footer__social">
            {/* <li className="footer__social-item">
              <a
                className="footer__social-link footer__social-link_icon_whatsapp"
                href="#" target='_blank' rel='noreferrer'
              ></a>
            </li> */}
            <li className="footer__social-item">
              <a
                className="footer__social-link footer__social-link_icon_instagram"
                href="https://www.instagram.com/kenguru.mom/" target='_blank' rel='noreferrer'
              ></a>
            </li>
            {/* <li className="footer__social-item">
              <a
                className="footer__social-link footer__social-link_icon_telegram"
                href="#" target='_blank' rel='noreferrer'
              ></a>
            </li> */}
          </ul>
        </div>
        <div className="footer__wrapper">
          <p className="footer__copyright">
            Все фото и видео материалы являются собственностью автора. Любое
            копирование и использование материалов в сети Интернет или печатных
            СМИ, допускается только с условием размещения активной ссылки без
            запрета индексации или с письменного согласия администрации сайта.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
