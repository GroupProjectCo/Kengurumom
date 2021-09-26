import { useState } from 'react';
import './ProductList.css';
import PopularItem from '../PopularItem/PopularItem';

import { NODATA } from '../../config/texts';
import {
  DESKTOP_ADDING_AMOUNT,
  DESKTOP_CARDS_AMOUNT,
  TABLET_ADDING_AMOUNT,
  TABLET_CARDS_AMOUNT,
  MOBILE_CARDS_AMOUNT,
  MOBILE_ADDING_AMOUNT,
} from '../../config/constants';

function ProductsList({ list, media }) {
  // resize
  function addedCount() {
    if (media.isMobileVert) {
      return MOBILE_ADDING_AMOUNT;
    }
    if (media.isTabletVert) {
      return TABLET_ADDING_AMOUNT;
    }
    return DESKTOP_ADDING_AMOUNT;
  }

  function cardsCount() {
    if (media.isMobileVert) {
      return MOBILE_CARDS_AMOUNT;
    }
    if (media.isTabletVert) {
      return TABLET_CARDS_AMOUNT;
    }
    return DESKTOP_CARDS_AMOUNT;
  }

  const [itemsCount, setItemsCount] = useState(cardsCount());
  const [itemsCountAdded, setItemsCountAdded] = useState(addedCount());

  function resize() {
    setItemsCountAdded(addedCount());
  }

  function resetResizeTimer() {
    let resizeTimer = false;

    function setResizeTimer() {
      if (resizeTimer) clearTimeout(resizeTimer);
      resizeTimer = setTimeout(resize, 1500);
    }

    return setResizeTimer;
  }

  window.addEventListener('resize', resetResizeTimer());

  // ===============================================================
  function handleClickMore() {
    const itemsSum = itemsCount;
    setItemsCount(itemsSum + itemsCountAdded);
  }

  return (
    <>
      <div className='products-list'>
        {list.length === 0 ? (
          <span className='products-list__no-data-text'>{NODATA}</span>
        ) : (
          list
            .filter((product, index) => index < itemsCount)
            .map(product => <PopularItem {...product} key={product.id} component={'catalog'} />)
        )}
      </div>
      {list.length > itemsCount && (
        <button onClick={handleClickMore} className='button products-list__pagination'>
          Показать ещё
        </button>
      )}
    </>
  );
}

export default ProductsList;
