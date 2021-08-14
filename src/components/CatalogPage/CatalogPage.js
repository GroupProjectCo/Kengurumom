/* eslint-disable no-nested-ternary */
import './CatalogPage.css';
import {
  NavLink, Route, Switch, useRouteMatch,
} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { catalogCategories } from '../../config/links';
import CategoryPage from './CategoryPage/CategoryPage';
import SlickSlider from '../SharedComponents/Slider/SlickSlider';

function CatalogPage({ products, onPopupAddCartOpen, media }) {
  const { path, url } = useRouteMatch();

  const [width, setWidth] = useState(window.innerWidth);
  const [slides, setSlides] = useState(
    media.isDesktop ? 5 : media.isTabletVert ? 4 : media.isMobileHor ? 2 : 1,
  );
  const [showArrows, setShowArrows] = useState(!!media.isDesktop);

  const updateWidth = () => {
    setWidth(window.innerWidth);
    if (width < 570) {
      setSlides(1);
    } else if (width < 857) {
      setSlides(2);
    } else if (width < 1020) {
      setSlides(4);
    } else {
      setSlides(5);
    }
  };

  const updateShowArrows = () => {
    if (width > 1380) setShowArrows(true);
    else setShowArrows(false);
  };

  useEffect(() => {
    updateWidth();
    updateShowArrows();
    window.addEventListener('resize', updateWidth);
    window.addEventListener('resize', updateShowArrows);
    return () => {
      window.removeEventListener('resize', updateWidth);
      window.removeEventListener('resize', updateShowArrows);
    };
  });

  // такая структура временная. попозже я исправлю ее на более подходящую. сейчас просто тест работы

  return (
    <section className="catalog">
      <h1 className="catalog__title">Каталог</h1>
      <div className="catalog__categories-line">
          <SlickSlider
            className="menu-slider"
            slides={slides}
            showArrows={showArrows}
            arrowType="menu"
          >
            {catalogCategories.map((link, i) => (
              <NavLink
                activeClassName="selected"
                key={i}
                className="catalog__category"
                to={`${url}/${link[1]}`}
              >
                {link[0]}
              </NavLink>
            ))}
          </SlickSlider>
        {/* <nav className="catalog__categories">
          {catalogCategories.map((link, i) => (
            <NavLink
              activeClassName="selected"
              key={i}
              className="catalog__category"
              to={`${url}/${link[1]}`}
            >
              {link[0]}
            </NavLink>
          ))}
        </nav> */}
      </div>
      <Switch>
        <Route exact path={path}>
          <CategoryPage
            products={products}
            onPopupAddCartOpen={onPopupAddCartOpen}
          />
        </Route>
        <Route exact path={`${path}/:category`}>
          <CategoryPage
            products={products}
            onPopupAddCartOpen={onPopupAddCartOpen}
          />
        </Route>
      </Switch>
    </section>
  );
}

export default CatalogPage;
