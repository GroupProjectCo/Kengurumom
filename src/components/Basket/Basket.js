import { useState } from 'react';
import PopupBasket from '../PopupBasket/PopupBasket';
import './Basket.css';

function Basket({ cartItems, onDeleteCartItem }) {
  const [isPopupBasketOpened, setIsPopupBasketOpened] = useState(false);

  const handlePopupBasketOpen = () => {
    setIsPopupBasketOpened(true);
  };
  const handlePopupBasketClose = () => {
    setIsPopupBasketOpened(false);
  };

  const getTotalCartItems = () => {
    console.log(cartItems)
    return cartItems.reduce((sum, e) => sum + e.num, 0);
  }

  return (
    <div className='basket'>
      <PopupBasket
        isOpened={isPopupBasketOpened}
        cartItems={cartItems}
        onDeleteCartItem={onDeleteCartItem}
        onClose={handlePopupBasketClose}
      />
      <div className='basket__icon' onClick={handlePopupBasketOpen}></div>
      {cartItems && cartItems.length > 0 && (
        <div className='basket__count'>{getTotalCartItems()}</div>
      )}
    </div>
  );
}

export default Basket;
