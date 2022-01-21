/* eslint-disable no-nested-ternary */
import './CatalogPage.css';
import { useState, useEffect } from 'react';
// import { catalogCategories } from '../../config/test-db';
import SlickSlider from '../SharedComponents/Slider/SlickSlider';
import ProductsList from '../ProductsList/ProductsList';
import CustomSelect from '../CustomSelect/CustomSelect';

function CatalogPage({ products, categories, media }) {
  const [category, setCategory] = useState(localStorage.getItem('category') || '');
  const [filteredList, setFilteredList] = useState([]);
  const [order, setOrder] = useState('asc');
  const [width, setWidth] = useState(window.innerWidth);
  const [slides, setSlides] = useState(
    media.isDesktop ? 5 : media.isTabletVert ? 4 : media.isMobileHor ? 2 : 1,
  );
  const [showArrows, setShowArrows] = useState(!!media.isDesktop);

  useEffect(() => {
    const orderFunction = (a, b) => (order === 'asc' ? a.price - b.price : b.price - a.price);

    setFilteredList(
      category
        ? products.filter(product => product.category.name === category).sort(orderFunction)
        : products.sort(orderFunction),
    );
  }, [category, order, products]);

  useEffect(() => {
    const orderFunction = (a, b) => (order === 'asc' ? a.price - b.price : b.price - a.price);

    setFilteredList(
      category
        ? products.filter(product => product.category.name === category).sort(orderFunction)
        : products.sort(orderFunction),
    );
    localStorage.setItem('category', category);
  }, [category, order, products]);

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

  function clearFilter() {
    setCategory('');
    localStorage.setItem('category', '');
  }

  const handleOrderDirection = orderDirection => {
    setOrder(orderDirection);
  };

  return (
    <section className='catalog'>
      <h1 className='catalog__title'>Каталог</h1>
      <div className='catalog__categories-line'>
        <SlickSlider
          className='menu-slider'
          slides={slides}
          showArrows={showArrows}
          arrowType='menu'
        >
          {/* catalogCategories нужно получать от апи */}
          {categories.map((categoryItem, i) => (
            <button
              key={i}
              className={`catalog__category ${
                categoryItem.name === category && 'catalog__category_active'
              }`}
              onClick={() => setCategory(categoryItem.name)}
            >
              {categoryItem.name}
            </button>
          ))}
        </SlickSlider>
      </div>
      <div className='catalog__wrapper'>
        <div className='catalog__sort'>
          <CustomSelect
            page='category'
            options={[
              {
                value: 'desc',
                label: 'Цена по убыванию',
              },
              {
                value: 'asc',
                label: 'Цена по возрастанию',
              },
            ]}
            // startValue='Сортировать:'
            startValue={order}
            cb={handleOrderDirection}
          />
          <button
            className={'catalog__btn-clear-filter'}
            disabled={category === ''}
            onClick={clearFilter}
          >
            Сбросить фильтр
          </button>
        </div>
        <ProductsList list={filteredList} media={media} />
        {/* {filteredList.length > 8
        && (<button onClick={handleClickMore}
            className='button catalog__pagination'>Показать ещё</button>

        )} */}
      </div>
    </section>
  );
}

export default CatalogPage;
