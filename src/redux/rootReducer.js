import { combineReducers } from 'redux';
import { goodsInBasketReducer } from './GoodsInBasket/goodsInBasketReducer';

export const rootReducer = combineReducers({
  goods: goodsInBasketReducer,
});
