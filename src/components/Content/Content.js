import { useEffect } from 'react';
import './Content.css';
import { Route, Switch, useLocation } from 'react-router-dom';
import {
  MAIN_PAGE,
  ABOUT_PAGE,
  CATALOGUE_PAGE,
  DELIVERY_PAGE,
  CONTACTS_PAGE,
  OFFER_PAGE,
  TERMS_OF_USE_PAGE,
  ORDER_SUCCESS_PAGE,
  BASKET_PAGE,
  PERSONAL_SEWING_PAGE,
} from '../../config/links';
import MainPage from '../MainPage/MainPage';
import AboutPage from '../AboutPage/AboutPage';
import DocumentPage from '../DocumentPage/DocumentPage';
import DeliveryPage from '../DeliveryPage/DeliveryPage';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import CatalogPage from '../CatalogPage/CatalogPage';
import ProductPage from '../ProductPage/ProductPage';
// import { exampleArrProducts } from '../../config/test-db';
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';
import ContactsPage from '../ContactsPage/ContactsPage';
import OrderSuccessPage from '../OrderSuccessPage/OrderSuccessPage';
import BasketPage from '../BasketPage/BasketPage';
import PersonalSewing from '../PersonalSewing/PersonalSewing';

function Content(props) {
  const { media, onPopupCareOpen, products, product, categories, id } = props;

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <main className='content'>
      {pathname.includes(`${CATALOGUE_PAGE}/`) && <BreadCrumbs />}
      <Switch>
        <Route exact path={MAIN_PAGE}>
          <MainPage media={media} products={products}/>
        </Route>

        <Route path={PERSONAL_SEWING_PAGE}>
          <PersonalSewing />
        </Route>

        <Route path={ABOUT_PAGE}>
          <AboutPage />
        </Route>

        <Route path={OFFER_PAGE}>
          <DocumentPage type='offer' />
        </Route>

        <Route path={TERMS_OF_USE_PAGE}>
          <DocumentPage type='terms-of-use' />
        </Route>

        <Route path={DELIVERY_PAGE}>
          <DeliveryPage />
        </Route>

        <Route path={CONTACTS_PAGE}>
          <ContactsPage />
        </Route>

        <Route path={BASKET_PAGE}>
          <BasketPage />
        </Route>

        <Route exact path={CATALOGUE_PAGE}>
          {/* <CatalogPage media={media} products={exampleArrProducts} /> */}
          <CatalogPage media={media} products={products} categories={categories} />
        </Route>

        <Route exact path={`${CATALOGUE_PAGE}/:${id}`}>
          <ProductPage
            // products={exampleArrProducts}
            products={products}
            productItem={product}
            // sizes={sizes}
            media={media}
            onPopupCareOpen={onPopupCareOpen}
          />
        </Route>

        <Route exact path={`${ORDER_SUCCESS_PAGE}/:${id}`}>
          <OrderSuccessPage />
        </Route>

        <Route path='*'>
          <NotFoundPage />
        </Route>
      </Switch>
    </main>
  );
}

export default Content;
