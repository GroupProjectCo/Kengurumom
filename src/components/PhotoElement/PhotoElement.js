import './PhotoElement.css';
import instCornerIcon from '../../images/instagram/inst-corner-icon.svg';

function PhotoElement({ link, additionalClass }) {
  return (
    <li className={`photo-element ${additionalClass}`}>
      <a target='_blank' href='https://www.instagram.com/kenguru.mom/' rel='noreferrer' className='photo-element__link'>
        <img src={instCornerIcon} alt='Иконка instagram' className='photo-element__icon' />
        <img alt={`Фотография: ${link}`} src={link} className='photo-element__image' />
      </a>
    </li>
  );
}

export default PhotoElement;
