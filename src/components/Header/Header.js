import { useState } from 'react';
import Basket from '../Basket/Basket';
import CatalogueMenu from '../CatalogueMenu/CatalogueMenu';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import './Header.css';

function Header({ media, openSideMenu, cartItems }) {

	const [isCatMenuOpnd, setIsCatMenuOpnd] = useState(false);


	const showCatalogue = _ => {
		setIsCatMenuOpnd(true);
		document.addEventListener('click', hideCatalogue);
	};	
	
	const hideCatalogue = _ => { 
		setIsCatMenuOpnd(false);
		document.removeEventListener('click', hideCatalogue);
	};

	return (
		<>
		<div className="header-dummy"></div>			
		<header className="header">
			<div className="header__content">
				<Logo />
				<Navigation
					media={media}
					openCatalogueMenu={showCatalogue}
					closeCatalogueMenu={hideCatalogue}
				/>
				{
					media.isDesktop 
						&& <CatalogueMenu 
							isCatMenuOpnd={isCatMenuOpnd}
						/>
				}
				<Basket cartItems={cartItems}/>
				{
					media.isLaptop 
						&& 	<button 
								type="button" 
								className="header__burger-button" 
								onClick={openSideMenu} 
							>
							</button>
				}

			</div>
		</header>
		</>
	);
}

export default Header;