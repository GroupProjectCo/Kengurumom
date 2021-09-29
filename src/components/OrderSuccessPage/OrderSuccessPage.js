import { Link, useParams } from 'react-router-dom';
import { CATALOGUE_PAGE } from '../../config/links';
import Button from '../Button/Button';
import './OrderSuccessPage.css';

export default function OrderSuccessPage() {
  const { id } = useParams();

  return (
    <section className="order-success">
      <h2 className="order-success__title">Спасибо за ваш заказ!</h2>
      <div className="order-success__info-block">
        <h3 className="order-success__info-block-title">
          Ваш заказ #{id} успешно оформлен.
        </h3>

        <p className="order-success__info-block-text">
          Мы свяжемся с Вами в ближайшее время для подтверждения заказа.
        </p>

        <p className="order-success__info-block-text">
          Ссылка на оплату будет доступна после подтверждения заказа.
        </p>

        <Link to={CATALOGUE_PAGE}>
          <Button text="Продолжить покупки" type="button" btnStyle="button_type_not-found"/>
        </Link>
      </div>
    </section>
  );
}
