import { useEffect, useState } from 'react';
import './ContactsPage.css';
import Button from '../Button/Button';
import useTermsCheckbox from '../TermsCheckbox/TermsCheckbox';
import { TEL, PHONE_TEXT, TEL_WA, TEL_TG } from '../../config/texts';
import mainApi from '../../utils/MainApi';

function ContactsPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [checked, ThermsCheckbox] = useTermsCheckbox(isLoading);
  const [isValidForm, setIsValidForm] = useState(false);
  const [clientName, setName] = useState('');
  const [clientPhone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    setIsValidForm(checked);
  }, [checked]);

  function handleSubmit(order) {
    setIsLoading(true);
    mainApi
      .sendMessage(order)
      .then(() => {
        setName('');
        setPhone('');
        setMessage('');
      })
      .catch(err => console.log(err))
      .finally(() => {
        setIsLoading(false);
      });
  }
  const handleSubmitForm = e => {
    e.preventDefault();
    handleSubmit({
      clientName,
      clientPhone,
      message,
    });
  };

  return (
    <section className='contacts contacts_centered'>
      <h2 className='contacts__title'>Контакты</h2>
      <div className='contacts__inner'>
        <ul className='contacts__data'>
          <li className='contacts__item'>
            <h3 className='contacts__item-title'>Телефон</h3>
            <a href={`tel:${TEL}`} className='contacts__link'>
              {PHONE_TEXT}
            </a>
          </li>
          <li className='contacts__item'>
            <a
              href={`https://wa.me/${TEL_WA}`}
              target='_blank'
              rel='noreferrer'
              className='contacts__link'
            >
              Написать нам в WhatsApp
            </a>
          </li>
          <li className='contacts__item'>
            <a
              href={`https://telegram.me/${TEL_TG}`}
              target='_blank'
              rel='noreferrer'
              className='contacts__link'
            >
              Написать нам в Telegram
            </a>
          </li>
          <li className='contacts__item'>
            <h3 className='contacts__item-title'>Instagram</h3>
            <a
              href='https://www.instagram.com/kenguru.mom/'
              target='_blank'
              rel='noreferrer'
              className='contacts__link'
            >
              kenguru.mom
            </a>
          </li>
          <li className='contacts__item'>
            <h3 className='contacts__item-title'>Почта</h3>
            <a href='mailto:kenguru.mom@gmail.com' className='contacts__link'>
              kenguru.mom@gmail.com
            </a>
          </li>
        </ul>
        <form className='contacts__form' onSubmit={handleSubmitForm}>
          <h3 className='contacts__form-title'>Хотите мы вам перезвоним?</h3>
          <fieldset className='contacts__fieldset'>
            <input
              type='text'
              value={clientName || ''}
              onChange={e => setName(e.target.value)}
              className='contacts__input'
              placeholder='Имя'
            />
            <input
              type='phone'
              value={clientPhone || ''}
              onChange={e => setPhone(e.target.value)}
              className='contacts__input'
              placeholder='Телефон'
              required
            />
            <textarea
              value={message || ''}
              onChange={e => setMessage(e.target.value)}
              className='contacts__input contacts__textarea'
              placeholder='Ваше сообщение'
            />
          </fieldset>
          <Button
            disabled={!isValidForm}
            type='submit'
            text='Отправить'
            btnStyle='button_type_contacts'
          />
          {ThermsCheckbox}
        </form>
      </div>
    </section>
  );
}

export default ContactsPage;
