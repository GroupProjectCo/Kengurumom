/* eslint-disable no-nested-ternary */
import { Link } from 'react-router-dom';
import { CONTACTS_PAGE } from '../../config/links';
import Button from '../Button/Button';
// import { PERSONAL_SEWING_PAGE } from '../../config/links';
import './PersonalSewing.css';

function PersonalSewing() {
  return (
    <section className='personal'>
      <h1 className='personal__title'>Индивидуальный пошив</h1>
      <div className='personal__wrapper'>
        <div className='personal__line'>
          <p className='personal__subtitle'>
            Если изделия нужного размера или расцветки не оказалось в наличии, мы изготовим его для
            Вас по заказу на индивидуальный пошив
          </p>
        </div>
      </div>
      {/* <Link className='personal__link' to={CONTACTS_PAGE}>
        Заказать
      </Link> */}
      <Link to={CONTACTS_PAGE}><Button btnStyle={''} text={'Контакты'} type={'button'} /></Link>
    </section>
  );
}

export default PersonalSewing;
