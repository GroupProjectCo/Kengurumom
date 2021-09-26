import { INCREASE_PRODUCT } from './types';

export function addNewItem(state, item) {
  return [
    ...state,
    {
      id: item.id,
      name: item.name,
      price: item.price,
      vendorCode: item.vendorCode,
      photo: item.photos[0],
      num: 1,
    },
  ];
}

// обработчики количества для поля num
export function incrementItem(state, id) {
  return state.map(p => {
    if (id === p.id) {
      // eslint-disable-next-line no-param-reassign
      p.num += 1;
      return p;
    }
    return p;
  });
}

export function decrementItem(state, id) {
  return state.map(p => {
    if (id === p.id) {
      // eslint-disable-next-line no-param-reassign
      p.num -= 1;
      return p;
    }
    return p;
  });
}

// обработчик суммы
export function changeSum(action, sum, price, number = 1) {
  if (action === INCREASE_PRODUCT) return sum + price * number;
  return sum - price * number;
}

// обработчик счетчика
export function changeCounter(action, counter, number = 1) {
  if (action === INCREASE_PRODUCT) return counter + number;
  return counter - number;
}
