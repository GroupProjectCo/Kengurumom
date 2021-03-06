import { Link } from 'react-router-dom';
import cn from 'classnames';
import {
  PERSONAL_SEWING_PAGE,
  CATALOGUE_PAGE,
  ABOUT_PAGE,
  DELIVERY_PAGE,
  CONTACTS_PAGE,
  TERMS_OF_USE_PAGE,
} from '../../config/links';

import {
  PERSONAL_SEWING_TEXT,
  CATALOGUE_TEXT,
  ABOUT_TEXT,
  DELIVERY_TEXT,
  CONTACTS_TEXT,
  PHONE_TEXT,
  TEL,
  OFFER_TEXT,
  TERMS_OF_USE_TEXT,
} from '../../config/texts';
import './Navigation.css';

function Navigation({
  media, type, openCatalogueMenu, closeCatalogueMenu,
}) {
  return (
    <nav
      className={cn(
        { navigation: type !== 'footer' },
        { navigation_type_side: type === 'side' },
        { navigation_type_footer: type === 'footer' },
      )}
    >
      {(!media.isMobileHor || type === 'side' || type === 'footer') && (
        <Link
        className={cn(
          { navigation__link: type !== 'footer' },
          { navigation__link_type_footer: type === 'footer' },
        )}
          to={CATALOGUE_PAGE}
          onMouseOver={type !== 'side' ? openCatalogueMenu : undefined}
        >
          {CATALOGUE_TEXT}
        </Link>
      )}
      {(media.isDesktop || type === 'side' || type === 'footer') && (
        <Link
          onMouseOver={type !== 'side' ? closeCatalogueMenu : undefined}
          className={cn(
            { navigation__link: type !== 'footer' },
            { navigation__link_type_footer: type === 'footer' },
          )}
          to={PERSONAL_SEWING_PAGE}
        >
          {PERSONAL_SEWING_TEXT}
        </Link>
      )}
      {(media.isDesktop || type === 'side' || type === 'footer') && (
        <Link
          onMouseOver={type !== 'side' ? closeCatalogueMenu : undefined}
          className={cn(
            { navigation__link: type !== 'footer' },
            { navigation__link_type_footer: type === 'footer' },
          )}
          to={ABOUT_PAGE}
        >
          {ABOUT_TEXT}
        </Link>
      )}
      {(!media.isTabletVert || type === 'side' || type === 'footer') && (
        <Link
          onMouseOver={type !== 'side' ? closeCatalogueMenu : undefined}
          className={cn(
            { navigation__link: type !== 'footer' },
            { navigation__link_type_footer: type === 'footer' },
          )}
          to={DELIVERY_PAGE}
        >
          {DELIVERY_TEXT}
        </Link>
      )}
      {(type === 'side' || type === 'footer') && (
        <Link
        className={cn(
          { navigation__link: type !== 'footer' },
          { navigation__link_type_footer: type === 'footer' },
        )}
          to={CONTACTS_PAGE}>
            {CONTACTS_TEXT}

        </Link>
      )}
      {(type !== 'footer' && (!media.isMobileVert || type === 'side')) && (
        // <Link
        //   onMouseOver={type !== 'side' && closeCatalogueMenu}
        //   className="navigation__link"
        //   to={CONTACTS_PAGE}
        // >
        //   {PHONE_TEXT}
        // </Link>
        <a onMouseOver={type !== 'side' ? closeCatalogueMenu : undefined} href={`tel:${TEL}`} className='navigation__link'>
              {PHONE_TEXT}
            </a>
      )}
      {type === 'footer' && (
        <Link
          className="navigation__link_type_footer navigation__link_underlined"
          to={'/'}
          target="_blank"
          rel="noopener noreferrer"
        >
          {OFFER_TEXT}
        </Link>
      )}
      {type === 'footer' && (
        <Link
          className="navigation__link_type_footer navigation__link_underlined"
          to={TERMS_OF_USE_PAGE}
          target="_blank"
          rel="noopener noreferrer"
        >
          {TERMS_OF_USE_TEXT}
        </Link>
      )}
    </nav>
  );
}

export default Navigation;
