import './ProductPage.css';
import ProdGallery from './ProdGallery/ProdGallery';
import { useParams } from 'react-router-dom';

function ProductPage({ products, media, onPopupCareOpen, onPopupAddCartOpen}) {
  let { id } = useParams();
  const product = products.find((product) => product.id === id);

  const handlePopupAddCartOpen = () => {
    onPopupAddCartOpen({
      id: product.id,
      src: product.photos[0],
      title: product.name,
      num: 1,
      price: product.sale ? 
        Math.floor(product.price - (product.price * product.sale) / 100) : product.price
    });
  }

  return (
    <section className="product">
      <ProdGallery photos={product.photos} media={media} />
      <div className="product__specifications">
        <h2 className="product__title">{product.name}</h2>
        <div className="product__price-box">
          <h3 className="product__price">
            {product.sale
              ? Math.floor(product.price - (product.price * product.sale) / 100)
              : product.price}{' '}
            &#8381;
          </h3>
          {product.sale && (
            <h3 className="product__price product__price_old">
              {product.price} &#8381;
            </h3>
          )}
        </div>
        <div className="product__specification-box">
          <p className="product__text">Размер:</p>
          <select
            className="select-custom"
            id="product-clothes-size"
            name="clothes-size"
          >
            <option value="0-3">0-3 мес (55 см)</option>
            <option value="3-6">3-6 мес (65 см)</option>
            <option value="7-12">7-12 мес (77 см)</option>
          </select>
        </div>
        <button className="button button_type_add-to-card" onClick={handlePopupAddCartOpen}>В корзину</button>
        <div className="product__specification-box">
          <p className="product__text">Рекомендуемый возраст:</p>
          <p className="product__text" id="product-recommended-age">
            {product.recommendedAge}
          </p>
        </div>
        <div className="product__specification-box">
          <p className="product__text">Состав:</p>
          <p className="product__text" id="product-structure">
            {product.structure}
          </p>
        </div>
        {product.description.map((element, i) => (
          <p key={i} className="product__description">
            {element}
          </p>
        ))}
        <div className="product__specification-box">
          <p className="product__text">Артикул:</p>
          <p className="product__text" id="product-vendor-code">
            {product.vendorCode}
          </p>
        </div>
        <p className="product__care-link" onClick={onPopupCareOpen}>
          Рекомендация по уходу
        </p>
      </div>
    </section>
  );
}

export default ProductPage;
