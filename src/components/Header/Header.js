/* eslint-disable no-underscore-dangle */
import { useState } from 'react';
import Basket from '../Basket/Basket';
// import CatalogueMenu from '../CatalogueMenu/CatalogueMenu';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import useScrollPosition from './useScrollPosition';
import './Header.css';

function Header({ media, openSideMenu }) {
  const [isVisible, setIsBeVisible] = useState(false);
  // const [isCatMenuOpnd, setIsCatMenuOpnd] = useState(false);

  const hideCatalogue = () => {
    // setIsCatMenuOpnd(false);
    document.removeEventListener('click', hideCatalogue);
  };

  const showCatalogue = () => {
    // setIsCatMenuOpnd(true);
    document.addEventListener('click', hideCatalogue);
  };

  useScrollPosition(
    ({ previousPos, currentPos }) => {
      const _isVisible = currentPos.y < previousPos.y;
      if (_isVisible !== isVisible) setIsBeVisible(_isVisible);
      hideCatalogue();
    },
    [isVisible],
  );

  return (
    <>
      <div className='header-dummy' />
      <header className={`header ${isVisible ? 'header_sticky_hide' : ''}`}>
        <div className='header__content'>
          <Logo />
          <Navigation
            media={media}
            openCatalogueMenu={showCatalogue}
            closeCatalogueMenu={hideCatalogue}
          />
          {/* {media.isDesktop && <CatalogueMenu isCatMenuOpnd={isCatMenuOpnd} />} */}
          <Basket />
          {media.isLaptop && (
            <button type='button' className='header__burger-button' onClick={openSideMenu} />
          )}
        </div>
      </header>
    </>
  );
}

export default Header;
