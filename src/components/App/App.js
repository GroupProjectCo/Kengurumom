import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Switch, Route } from 'react-router-dom';
import { ABOUT_PAGE, CATALOGUE_PAGE } from '../../config/links';
import Header from '../Header/Header';
import SideMenu from '../SideMenu/SideMenu';
import Slider from '../Slider/Slider';
import Advantages from '../Advantages/Advantages';
import Instagram from '../Instagram/Instagram';
import './App.css';
import SectionsWithBtn from '../SectionsWithBtn/SectionsWithBtn';
import Popular from '../Popular/Popular';
import Review from '../Review/Review';
// import PopupAddCart from '../PopupAddCart/PopupAddCart';
import About from '../About/About';
import PopupCare from '../PopupCare/PopupCare';
import Button from '../Button/Button';
import Product from '../Product/Product';
import Catalog from '../Catalog/Catalog';

import { catalogCategories } from '../../config/links';
import { exampleArrProducts } from '../../config/constants';

function App() {
  const [isPopupOpened, setIsPopupOpened] = useState(false);

  const isDesktop = useMediaQuery({ minWidth: 1440 });
  const isLaptop = useMediaQuery({ maxWidth: 1440 });
  const isTabletHor = useMediaQuery({ maxWidth: 1280 });
  const isTabletVert = useMediaQuery({ maxWidth: 1024 });
  const isMobileHor = useMediaQuery({ maxWidth: 768 });
  const isMobileVert = useMediaQuery({ maxWidth: 480 });

  const [isSideMenuOpened, setIsSideMenuOpened] = useState(false);

  const media = {
    isDesktop,
    isLaptop,
    isTabletHor,
    isTabletVert,
    isMobileHor,
    isMobileVert,
  };

  const openSideMenu = (_) => setIsSideMenuOpened(true);
  const closeSideMenu = (_) => setIsSideMenuOpened(false);

  const handleOpenPopup = () => {
    setIsPopupOpened(true);
  };

  return (
    <>
      {isLaptop && (
        <SideMenu
          media={media}
          isOpened={isSideMenuOpened}
          onCloseClick={closeSideMenu}
        />
      )}
      <Header media={media} openSideMenu={openSideMenu} />
      <Switch>
        <Route exact path="/">
          <Slider media={media} />
          <Popular media={media} products={exampleArrProducts} />
          <Advantages />
          <SectionsWithBtn />
          <Review media={media} />
          <Instagram />
        </Route>
        <Route path={ABOUT_PAGE}>
          <About />
        </Route>
        <Route exact path={CATALOGUE_PAGE}>
          <Catalog products={exampleArrProducts} />
        </Route>
        <Route exact path={`${CATALOGUE_PAGE}/:id`}>
          <Product products={exampleArrProducts} media={media} />
        </Route>
        {catalogCategories.map((category, i) => (
          <Route key={i} exact path={`${CATALOGUE_PAGE}/:${category[1]}`}>
            <Catalog products={exampleArrProducts} />
          </Route>
        ))}
        {/* <Route path={PERSONAL_SEWING_PAGE}>
          <Product product={exampleArrProducts[0]} media={media} />
        </Route> */}
        {/* use for test !!! */}
        <Route path="/test_popup/">
          <div
            style={{
              width: '100wh',
              height: '100vh',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Button text="CLICK ME!" onClick={handleOpenPopup} />
          </div>
        </Route>
      </Switch>
      <PopupCare isOpened={isPopupOpened} onClose={setIsPopupOpened} />
      {/* <PopupAddCart isOpened={isPopupOpened} onClose={setIsPopupOpened}/> */}
    </>
  );
}
export default App;
