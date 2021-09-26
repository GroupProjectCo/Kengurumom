import { combineReducers } from 'redux';
import { goodsInBasketReducer } from './GoodsInBasket/goodsInBasketReducer';
import { popupAddInBasketReducer } from './PopupAddInBasket/popupAddInBasketReducer';

export const rootReducer = combineReducers({
  goods: goodsInBasketReducer,
  popupAddProduct: popupAddInBasketReducer,
});
