import './PopularItem.css';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { CATALOGUE_PAGE } from '../../config/links';
import { addProduct } from '../../redux/GoodsInBasket/actions';

// 'new' prop is reserved, rename to isNew
export default function PopularItem(product) {
  const {
    id,
    photos,
    name,
    price,
    sale = false,
    new: isNew = false,
    onPopupAddCartOpen,
    component,
  } = product;
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClick = () => {
    history.push(`${CATALOGUE_PAGE}/${id}`);
  };

  const handlePopupAddCartOpen = () => {
    onPopupAddCartOpen({
      id,
      src: photos[0],
      title: name,
      num: 1,
      price: sale ? Math.floor(price - (price * sale) / 100) : price,
    });
  };

  return (
    <figure className={`${component}__item ${isNew && `${component}__item_new`}`}>
      <img onClick={handleClick} src={photos[0]} alt={name} className={`${component}__item-img`} />
      <button
        className={`${component}__item-cart`}
        alt='В корзину'
        onClick={() => {
          dispatch(addProduct(product));
          handlePopupAddCartOpen();
        }}
      />
      {/* <figcaption className="popular__item-title">{name}</figcaption> */}
      <Link className={`${component}__item-title`} to={`${CATALOGUE_PAGE}/${id}`}>
        {name}
      </Link>
      <div className={`${component}__item-price`}>
        {sale ? Math.floor(price - (price * sale) / 100) : price}
        {sale && <p className={`${component}__item-price-sale`}>{price}</p>}
      </div>
    </figure>
  );
}
