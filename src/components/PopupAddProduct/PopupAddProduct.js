import './PopupAddProduct.css';
import Dialog from '@material-ui/core/Dialog';
import { Link } from 'react-router-dom';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { connect, useDispatch } from 'react-redux';
import { BASKET_PAGE } from '../../config/links';
import Button from '../Button/Button';
import { closePopupAddInBasket } from '../../redux/PopupAddInBasket/actions';

// change main color
const theme = createMuiTheme({
  overrides: {
    MuiBackdrop: {
      root: {
        backgroundColor: 'rgba(81, 54, 41, 0.7)',
      },
    },
  },
});

function PopupAddProduct({ isOpened, product }) {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(closePopupAddInBasket());
  };

  return (
    <ThemeProvider theme={theme}>
      <Dialog
        classes={{ paper: 'popup-add-cart' }}
        onClose={handleClose}
        aria-labelledby='popup-add-cart'
        open={isOpened || false}
      >
        <h2 className='popup-add-cart__title'>Товар добавлен в корзину</h2>
        <div className='popup-add-cart__item'>
          <div className='popup-add-cart__item-img-title'>
            <img
              src={product?.photos[0]}
              title={product?.name}
              alt={product?.name}
              className='popup-add-cart__item-img'
            />
            <p className='popup-add-cart__item-title'>{product?.name}</p>
          </div>
          <p className='popup-add-cart__item-num'>1 шт</p>
          <p className='popup-add-cart__item-title'>{product?.price} &#8381;</p>
        </div>
        <div className='popup-add-cart__action-buttons'>
          <Button
            text='Продолжить покупки'
            type='button'
            btnStyle='button_outlined button_type_popup-add-card'
            onClick={handleClose}
          />
          <Link to={BASKET_PAGE}>
            <Button
              text='В корзину'
              type='button'
              btnStyle='button_type_popup-add-card'
              onClick={handleClose}
            />
          </Link>
        </div>
      </Dialog>
    </ThemeProvider>
  );
}

const MapStateToProps = state => ({
  isOpened: state.popupAddProduct.isOpened,
  product: state.popupAddProduct.product,
});

export default connect(MapStateToProps)(PopupAddProduct);
