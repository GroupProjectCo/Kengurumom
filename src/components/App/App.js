import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import './App.css';
import { useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import SideMenu from '../SideMenu/SideMenu';
import Content from '../Content/Content';
import PopupCare from '../PopupCare/PopupCare';
import PopupAddProduct from '../PopupAddProduct/PopupAddProduct';
import Footer from '../Footer/Footer';

function App() {
  const [isPopupCareOpened, setIsPopupCareOpened] = useState(false);

  const isDesktop = useMediaQuery({ minWidth: 1440 });
  const isLaptop = useMediaQuery({ maxWidth: 1439 });
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

  const openSideMenu = () => setIsSideMenuOpened(true);
  const closeSideMenu = () => setIsSideMenuOpened(false);

  // open popup "Рекомендация по уходу"
  const handlePopupCareOpen = () => {
    setIsPopupCareOpened(true);
  };
  const handlePopupCareClose = () => {
    setIsPopupCareOpened(false);
  };

  const { pathname } = useLocation();
  useEffect(() => {
    closeSideMenu();
  }, [pathname]);

  return (
    <>
      {isLaptop && (
        <SideMenu media={media} isOpened={isSideMenuOpened} onCloseClick={closeSideMenu} />
      )}
      <Header media={media} openSideMenu={openSideMenu} />
      <Content media={media} onPopupCareOpen={handlePopupCareOpen} closeSideMenu={closeSideMenu} />
      <Footer media={media} />
      <PopupCare isOpened={isPopupCareOpened} onClose={handlePopupCareClose} />
      <PopupAddProduct />
    </>
  );
}

export default App;
