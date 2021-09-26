import {
  ADD_PPODUCT,
  CLEAR_BASKET,
  INCREASE_PRODUCT,
  REDUCE_PRODUCT,
  REMOVE_PPODUCT,
} from './types';

import { addNewItem, incrementItem, decrementItem, changeSum, changeCounter } from './utils';

const initialState = {
  goodsInBasket: [],
  goodsTotalSumInBasket: 0,
  goodsCounterInBasket: 0,
};

export const goodsInBasketReducer = (state = initialState, action) => {
  const { id, price, num } = action.payload || {};
  const { goodsInBasket, goodsTotalSumInBasket, goodsCounterInBasket } = state;
  switch (action.type) {
    case ADD_PPODUCT:
      return {
        ...state,
        goodsInBasket: goodsInBasket.some(p => p.id === id)
          ? incrementItem(goodsInBasket, id)
          : addNewItem(goodsInBasket, action.payload),
        goodsTotalSumInBasket: changeSum(INCREASE_PRODUCT, goodsTotalSumInBasket, price),
        goodsCounterInBasket: changeCounter(INCREASE_PRODUCT, goodsCounterInBasket),
      };

    case REMOVE_PPODUCT:
      return {
        ...state,
        goodsInBasket: goodsInBasket.filter(p => id !== p.id),
        goodsTotalSumInBasket: changeSum(REDUCE_PRODUCT, goodsTotalSumInBasket, price, num),
        goodsCounterInBasket: changeCounter(REDUCE_PRODUCT, goodsCounterInBasket, num),
      };

    case CLEAR_BASKET:
      return { ...state, goodsInBasket: [], goodsTotalSumInBasket: 0, goodsCounterInBasket: 0 };

    case INCREASE_PRODUCT:
      return {
        ...state,
        goodsInBasket: incrementItem(goodsInBasket, id),
        goodsTotalSumInBasket: changeSum(INCREASE_PRODUCT, goodsTotalSumInBasket, price),
        goodsCounterInBasket: changeCounter(INCREASE_PRODUCT, goodsCounterInBasket),
      };

    case REDUCE_PRODUCT:
      return {
        ...state,
        goodsInBasket: decrementItem(goodsInBasket, id),
        goodsTotalSumInBasket: changeSum(REDUCE_PRODUCT, goodsTotalSumInBasket, price),
        goodsCounterInBasket: changeCounter(REDUCE_PRODUCT, goodsCounterInBasket),
      };

    default:
      return state;
  }
};
