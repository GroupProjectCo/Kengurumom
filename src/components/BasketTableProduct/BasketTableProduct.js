import './BasketTableProduct.css';
import { useDispatch } from 'react-redux';
import { removeProduct, increaseProduct, reduceProduct } from '../../redux/GoodsInBasket/actions';
import deleteIcon from '../../images/cart_delete_icon.svg';
import plusIcon from '../../images/plus.svg';
import minusIcon from '../../images/minus.svg';

function BasketTableProduct({ product }) {
  const dispatch = useDispatch();

  return (
    <div className='basket_page__product'>
      <img src={product.photo} alt={product.name} className='basket_page__product-img' />
      <h3 className='basket_page__product-title'>{product.name}</h3>
      <p className='basket_page__product-article'>Артикул {product.vendorCode}</p>
      <div className='basket_page__product-counter'>
        <button
          className='basket_page__product-counter-btn'
          onClick={() => dispatch(reduceProduct(product.id, product.price))}
        >
          <img
            className='basket_page__counter-image'
            src={plusIcon}
            alt={`Удалить из корзины ${product.name}`}
          />
        </button>
        <span className='basket_page__product-number'>{product.num}</span>
        <button
          className='basket_page__product-counter-btn'
          onClick={() => dispatch(increaseProduct(product.id, product.price))}
        >
          <img
            className='basket_page__counter-image'
            src={minusIcon}
            alt={`Удалить из корзины ${product.name}`}
          />
        </button>
      </div>

      <p className='basket_page__product-price'>{product.price} ₽</p>

      <button
        className='basket_page__product-remove'
        onClick={() => dispatch(removeProduct(product))}
      >
        <img
          className='basket-page__remove-img'
          src={deleteIcon}
          alt={`Удалить из корзины ${product.name}`}
        />
      </button>
    </div>
  );
}

export default BasketTableProduct;
