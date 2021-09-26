import { OPEN, CLOSE } from './types';

export function openPopupAddInBasket(product) {
  return {
    type: OPEN,
    payload: product,
  };
}

export function closePopupAddInBasket() {
  return {
    type: CLOSE,
  };
}
