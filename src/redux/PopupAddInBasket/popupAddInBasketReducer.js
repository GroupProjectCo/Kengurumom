import { CLOSE, OPEN } from './types';

const initialState = {
  isOpened: false,
  product: null,
};

export const popupAddInBasketReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLOSE:
      return { ...state, isOpened: false, product: null };
    case OPEN:
      return { ...state, isOpened: true, product: { ...action.payload } };
    default:
      return state;
  }
};
