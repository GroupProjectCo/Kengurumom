import {useState, useEffect} from 'react';
import './PopupBasket.css';
import {BASKET_PAGE} from '../../config/links';
import Button from '../Button/Button';
import {deleteIcon} from './constants';
import { Link } from 'react-router-dom';

export default function PopupBasket({isOpened, cartItems, onClose, onDeleteCartItem}) {
  const [summaryPrice, setSummaryPrice] = useState(0);
  const [items, setItems] = useState(cartItems || []);
  const visibilityClass = isOpened ? 'popup-basket_visible' : '';

  const handleReloadCartSum = (inputItems) => {
    if (inputItems) {
      const sum = inputItems.reduce((sum, e) => sum += e.price*e.num, 0);
      setSummaryPrice(sum)
    }
  }

  const handleDelete = item => {
    onDeleteCartItem(item);
  }

  const resetItemsNum = (inputItems) => {    
    for(let e of inputItems) {
      if (!e.num) e.num = 1;
    }
    
    setItems(inputItems);
  }

  useEffect(() => {
    resetItemsNum(cartItems)
    handleReloadCartSum(cartItems);
  }, [cartItems]);

  return (
    <div className={`popup-basket ${visibilityClass}`}>
      <div className="popup-basket__content">
        <div className="popup-basket__items">
          {
            items && items.length > 0 ?
              items.map((item, i) => (
                <div className="popup-basket__item" key={i}>
                  <img className="popup-basket__item-img" src={item.src} alt={item.title} />
                  <h3 className="popup-basket__item-title">{item.title}</h3>
                  <p className="popup-basket__item-num">{item.num}</p>
                  <p className="popup-basket__item-price">{item.price}</p>
                  <button className="popup-basket__item-del" onClick={() => {handleDelete(item)}}>
                    <img src={deleteIcon} alt={`Удалить из корзины ${item.title}`}/>
                  </button>
                  </div>
              )) :
              <p className="popup-basket__empty-cart">В корзине нет товаров</p>
          }
        </div>
        <p className="popup-basket__summary">
          Итого: {summaryPrice}
        </p>
        <div className="popup-basket__buttons">
          <Link to={BASKET_PAGE}>
            <Button text="В корзину" type="button" btnStyle="button_type_popup-basket" onClick={onClose}/>
          </Link>
          <Button text="Закрыть" type="button" btnStyle="button_type_popup-basket" onClick={onClose} />
          {/* <Button text="Оформить" type="button" style="button_type_popup-basket" onClick={onClose} /> */}
        </div>
      </div>
    </div>
  );
}