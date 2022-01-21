import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './BasketForm.css';
import Button from '../Button/Button';
import useTermsCheckbox from '../TermsCheckbox/TermsCheckbox';
import { ORDER_SUCCESS_PAGE } from '../../config/links';
import { clearBasket } from '../../redux/GoodsInBasket/actions';
import mainApi from '../../utils/MainApi';

function BasketForm() {
  const [isValidForm, setIsValidForm] = useState(false);
  const [clientName, setName] = useState('');
  const [clientPhone, setPhone] = useState('');
  const [clientAddress, setAddress] = useState('');
  const [deliveryType, setDeliveryType] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [checked, ThermsCheckbox] = useTermsCheckbox(isLoading);
  const goods = useSelector(state => state.goods.goodsInBasket);
  const goodsCounterInBasket = useSelector(state => state.goods.goodsCounterInBasket);
  const goodsTotalSum = useSelector(state => state.goods.goodsTotalSumInBasket);
  const dispatch = useDispatch();

  const history = useHistory();

  useEffect(() => {
    setIsValidForm(checked);
  }, [checked]);

  function handleSubmit(order) {
    setIsLoading(true);
    mainApi
      .sendOrder(order)
      .then((res) => {
        console.log(res);
        history.push(`${ORDER_SUCCESS_PAGE}/${res.id}`);
        dispatch(clearBasket());
      })
      .catch(err => console.log(err))
      .finally(() => {
        // setIsLoading(false);
      });
  }
  const handleSubmitForm = e => {
    e.preventDefault();
    handleSubmit({
      clientName,
      clientPhone,
      clientAddress,
      deliveryType,
      goods,
      goodsCounterInBasket,
      goodsTotalSum,
    });
  };

  return (
    <form className='basket-page__form' onSubmit={handleSubmitForm}>
      <fieldset className='basket-page__fieldset'>
        <input
          required
          value={clientName || ''}
          onChange={e => setName(e.target.value)}
          type='text'
          className='basket-page__input'
          placeholder='Имя'
          minLength='3'
        />
        <input
          required
          value={clientPhone || ''}
          onChange={e => setPhone(e.target.value)}
          type='tel'
          className='basket-page__input'
          placeholder='+7(___)-___-__-__'
          // pattern='/\d/g'
        />
        <textarea
          value={clientAddress || ''}
          onChange={e => setAddress(e.target.value)}
          className='basket-page__address'
          placeholder='Адрес (улица, дом, квартира / офис)'
        />
      </fieldset>
      <fieldset className='basket-page__fieldset' onChange={e => setDeliveryType(e.target.value)}>
        <div className='basket-page__radio'>
          <input
            type='radio'
            name='delivery'
            id='delivery_1'
            className='radio'
            value={'СДЕК (курьер)'}
            checked={deliveryType === 'СДЕК (курьер)'}
          />
          <label htmlFor='delivery_1' className='basket-page__label'>
            {' '}
            СДЕК (курьер)
          </label>
        </div>
        <div className='basket-page__radio'>
          <input
            type='radio'
            name='delivery'
            id='delivery_2'
            className='radio'
            value={'СДЕК (самовывоз)'}
            checked={deliveryType === 'СДЕК (самовывоз)'}
          />
          <label htmlFor='delivery_2' className='basket-page__label'>
            {' '}
            СДЕК (самовывоз)
          </label>
        </div>
        <div className='basket-page__radio'>
          <input
            type='radio'
            name='delivery'
            id='delivery_3'
            className='radio'
            value={'Почта России'}
            checked={deliveryType === 'Почта России'}
          />
          <label htmlFor='delivery_3' className='basket-page__label'>
            {' '}
            Почта России
          </label>
        </div>
        <div className='basket-page__radio'>
          <input
            type='radio'
            name='delivery'
            id='delivery_4'
            className='radio'
            value={'Международное отправление'}
            checked={deliveryType === 'Международное отправление'}
          />
          <label htmlFor='delivery_4' className='basket-page__label'>
            {' '}
            Международное отправление
          </label>
        </div>
      </fieldset>

      {ThermsCheckbox}

      <Button
        disabled={!isValidForm}
        type='submit'
        text='Оформить заказ'
        btnStyle='button_type_order'
      />
    </form>
  );
}

export default BasketForm;
