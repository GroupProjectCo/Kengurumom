import './ProductItem.css';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { CATALOGUE_PAGE } from '../../config/links';
import { addProduct } from '../../redux/GoodsInBasket/actions';
import { openPopupAddInBasket } from '../../redux/PopupAddInBasket/actions';
import { BASE_URL } from '../../config/constants';

// 'new' prop is reserved, rename to isNew
export default function ProductItem(product) {
  const { id, photos, name, price, sale = false, new: isNew = false, component } = product;
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClick = () => {
    history.push(`${CATALOGUE_PAGE}/${id}`);
  };

  const addProductHandler = () => {
    dispatch(addProduct(product));
    dispatch(openPopupAddInBasket(product));
  };

  return (
    <figure className={`${component}__item ${isNew && `${component}__item_new`}`}>
      <img
        onClick={handleClick}
        src={`${BASE_URL}${photos[0].url}`}
        alt={name}
        className={`${component}__item-img`}
      />
      <button className={`${component}__item-cart`} alt='В корзину' onClick={addProductHandler} />
      {/* <figcaption className="popular__item-title">{name}</figcaption> */}
      <Link className={`${component}__item-title`} to={`${CATALOGUE_PAGE}/${id}`}>
        {name}
      </Link>
      <div className={`${component}__item-price`}>
        {sale > 0 ? Math.floor(price - (price * sale) / 1000) : price}
        {sale > 0 && <p className={`${component}__item-price-sale`}>{price}</p>}
      </div>
    </figure>
  );
}
