import './PopupBasket.css';
import { Link } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import { BASKET_PAGE } from '../../config/links';
import Button from '../Button/Button';
import deleteIcon from '../../images/cart_delete_icon.svg';
import { removeProduct } from '../../redux/GoodsInBasket/actions';

const PopupBasket = ({ isOpened, onClose, goods, goodsTotalSum }) => {
  const visibilityClass = isOpened ? 'popup-basket_visible' : '';
  const dispatch = useDispatch();

  return (
    <div className={`popup-basket ${visibilityClass}`}>
      <div className='popup-basket__content'>
        <div className='popup-basket__items'>
          {goods.length > 0 ? (
            goods.map(product => (
              <div className='popup-basket__item' key={product.id}>
                <img className='popup-basket__item-img' src={product.photo} alt={product.name} />
                <h3 className='popup-basket__item-title'>{product.name}</h3>
                <p className='popup-basket__item-num'>{product.num}</p>
                <p className='popup-basket__item-price'>{product.price}</p>
                <button
                  className='popup-basket__item-del'
                  onClick={() => dispatch(removeProduct(product))}
                >
                  <img src={deleteIcon} alt={`Удалить из корзины ${product.name}`} />
                </button>
              </div>
            ))
          ) : (
            <p className='popup-basket__empty-cart'>В корзине нет товаров</p>
          )}
        </div>
        <p className='popup-basket__summary'>Итого: {goodsTotalSum}</p>
        <div className='popup-basket__buttons'>
          <Link to={BASKET_PAGE}>
            <Button
              text='В корзину'
              type='button'
              btnStyle='button_type_popup-basket'
              onClick={onClose}
            />
          </Link>
          <Button
            text='Закрыть'
            type='button'
            btnStyle='button_type_popup-basket'
            onClick={onClose}
          />
          {/* eslint-disable-next-line max-len */}
          {/* <Button text="Оформить" type="button" btnStyle="button_type_popup-basket" onClick={onClose} /> */}
        </div>
      </div>
    </div>
  );
};

const MapStateToProps = state => ({
  goods: state.goods.goodsInBasket,
  goodsTotalSum: state.goods.goodsTotalSumInBasket,
});

export default connect(MapStateToProps)(PopupBasket);
