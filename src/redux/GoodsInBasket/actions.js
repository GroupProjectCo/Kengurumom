import {
  ADD_PPODUCT,
  REMOVE_PPODUCT,
  CLEAR_BASKET,
  INCREASE_PRODUCT,
  REDUCE_PRODUCT,
} from './types';

export function addProduct(product) {
  return {
    type: ADD_PPODUCT,
    payload: product,
  };
}

export function removeProduct(product) {
  return {
    type: REMOVE_PPODUCT,
    payload: product,
  };
}

export function clearBasket() {
  return {
    type: CLEAR_BASKET,
  };
}

export function increaseProduct(id, price) {
  return {
    type: INCREASE_PRODUCT,
    payload: { id, price },
  };
}

export function reduceProduct(id, price) {
  return {
    type: REDUCE_PRODUCT,
    payload: { id, price },
  };
}
