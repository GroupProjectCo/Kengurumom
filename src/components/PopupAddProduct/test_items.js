/* eslint-disable no-restricted-syntax */
/* eslint-disable import/prefer-default-export */
import popularCocoon from '../../images/popular_cocoon.png';
import popularSleepingbag from '../../images/popular_sleepingbag.png';
import popularMilksnud from '../../images/popular_milksnud.png';
import popularAvokado from '../../images/popular_avokado.png';

const items = [
  {
    new: false,
    title: 'Пеленальный кокон',
    src: popularCocoon,
    price: 890,
    priceSale: 1090,
  },
  {
    new: true,
    title: 'Спальник',
    src: popularSleepingbag,
    price: 890,
    priceSale: undefined,
  },
  {
    new: false,
    title: 'Милкснуд',
    src: popularMilksnud,
    price: 1090,
    priceSale: undefined,
  },
  {
    new: false,
    title: 'Пелёнка-кокон "Авокадо"',
    src: popularAvokado,
    price: 1200,
    priceSale: undefined,
  },
];

export const itemsCart = [];

for (const item of items) {
  const num = parseInt(Math.random() * 3, 10);
  itemsCart.push({ ...item, num });
}
