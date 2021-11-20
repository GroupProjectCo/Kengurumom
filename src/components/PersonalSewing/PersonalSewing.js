/* eslint-disable no-nested-ternary */
import './PersonalSewing.css';

function PersonalSewing() {
  return (
    <section className='personal'>
      <h1 className='personal__title'>Индивидуальный пошив</h1>
      <div className='personal__wrapper'>
        <div className="personal__line">
          <p className='personal__subtitle'>Если изделия нужного размера или расцветки
              не оказалось в наличии, мы изготовим его для Вас
              по заказу на индивидуальный пошив</p>
        </div>
      </div>
    </section>
  );
}

export default PersonalSewing;
