import './BasketForm.css';
// import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button from '../Button/Button';
import TermsCheckbox from '../TermsCheckbox/TermsCheckbox';
import { ORDER_SUCCESS_PAGE } from '../../config/links';

function BasketForm() {
  // const goods = useSelector(state => state.goods.goodsInBasket);
  const history = useHistory();

  function handleSubmit() {
    // fetch('http://localhost', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ goods }),
    // });
    history.push(`${ORDER_SUCCESS_PAGE}/1`);
  }

  return (
    <form className='basket-page__form' onSubmit={handleSubmit}>
      <fieldset className='basket-page__fieldset'>
        <input type='text' className='basket-page__input' placeholder='Имя' />
        <input
          required
          type='tel'
          className='basket-page__input'
          placeholder='+7 (___)-___-__-__'
        />
        <textarea
          className='basket-page__address'
          placeholder='Адрес (улица, дом, квартира / офис)'
        />
      </fieldset>
      <fieldset className='basket-page__fieldset'>
        <div className='basket-page__radio'>
          <input type='radio' name='delivery' id='delivery_1' className='radio' />
          <label htmlFor='delivery_1' className='basket-page__label'>
            {' '}
            СДЕК (курьер)
          </label>
        </div>
        <div className='basket-page__radio'>
          <input type='radio' name='delivery' id='delivery_2' className='radio' />
          <label htmlFor='delivery_2' className='basket-page__label'>
            {' '}
            СДЕК (самовывоз)
          </label>
        </div>
        <div className='basket-page__radio'>
          <input type='radio' name='delivery' id='delivery_3' className='radio' />
          <label htmlFor='delivery_3' className='basket-page__label'>
            {' '}
            Почта России
          </label>
        </div>
        <div className='basket-page__radio'>
          <input type='radio' name='delivery' id='delivery_4' className='radio' />
          <label htmlFor='delivery_4' className='basket-page__label'>
            {' '}
            Международное отправление
          </label>
        </div>
      </fieldset>
      <TermsCheckbox />
      <Button disabled={true} type='submit' text='Оформить заказ' btnStyle='button_type_order' />
    </form>
  );
}

export default BasketForm;
