import { useEffect, useState } from 'react';
import './ProductPage.css';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import ProdGallery from './ProdGallery/ProdGallery';
import CustomSelect from '../CustomSelect/CustomSelect';
import { addProduct } from '../../redux/GoodsInBasket/actions';
import { openPopupAddInBasket } from '../../redux/PopupAddInBasket/actions';
import { BASE_URL } from '../../config/constants';

function ProductPage({ products, media, onPopupCareOpen }) {
  const [product, setProduct] = useState(null);

  const { id } = useParams();
  useEffect(() => {
    if (id) setProduct(products.find(productData => productData.id === +id));
  }, [id, products]);

  const dispatch = useDispatch();

  const addProductHandler = () => {
    dispatch(addProduct(product));
    dispatch(openPopupAddInBasket(product));
  };

  return (
    <section className='product'>
      {product ? (
        <>
          <ProdGallery
            photos={product.photos.map(p => ({ ...p, url: `${BASE_URL}${p.url}` }))}
            media={media}
          />
          <div className='product__specifications'>
            <h2 className='product__title'>{product.name}</h2>
            <div className='product__price-box'>
              <h3 className='product__price'>
                {product.sale > 0
                  ? Math.floor(product.price - (product.price * product.sale) / 1000)
                  : product.price}{' '}
                &#8381;
              </h3>
              {product.sale > 0 && (
                <h3 className='product__price product__price_old'>{product.price} &#8381;</h3>
              )}
            </div>
            <div className='product__specification-box'>
              <p className='product__text'>Размер:</p>
              <CustomSelect
                // startValue='Выбрать...'
                page='product'
                options={product.sizes?.map(size => ({
                  value: size.age || '',
                  label: size.age || '',
                  // age: size.age || '',
                }))}
                startValue='0-3 мес'
                // cb={handleOrderDirection}
              />
            </div>
            <button className='button button_type_add-to-card' onClick={addProductHandler}>
              В корзину
            </button>
            <div className='product__specification-box'>
              <p className='product__text'>Рекомендуемый возраст:</p>
              <p className='product__text' id='product-recommended-age'>
                {product.recommendedAge}
              </p>
            </div>
            <div className='product__specification-box'>
              <p className='product__text'>Состав:</p>
              <p className='product__text' id='product-structure'>
                {product.structure}
              </p>
            </div>
            {/* {productItem.description.map((element, i) => (
                  <p key={i} className='product__description'>
                    {element}
                  </p>
                ))} */}
            <p className='product__description'>{product.description}</p>
            <div className='product__specification-box'>
              <p className='product__text'>Артикул:</p>
              <p className='product__text' id='product-vendor-code'>
                {product.vendorCode}
              </p>
            </div>
            <p className='product__care-link' onClick={onPopupCareOpen}>
              Рекомендация по уходу
            </p>
          </div>
        </>
      ) : null}
    </section>
  );
}

export default ProductPage;
