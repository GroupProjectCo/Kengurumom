/* eslint-disable max-len */
/* eslint-disable no-nested-ternary */
import { useState, useEffect } from 'react';
import './Popular.css';

import PopularItem from '../PopularItem/PopularItem';
import SlickSlider from '../SharedComponents/Slider/SlickSlider';

export default function Popular({ media, products, onPopupAddCartOpen }) {
  const [width, setWidth] = useState(window.innerWidth);
  const [slides, setSlides] = useState(media.isDesktop ? 4 : media.isTabletVert ? 3 : media.isMobileHor ? 2 : 1);
  const [showArrows, setShowArrows] = useState(!!media.isDesktop);

  const updateWidth = () => {
    setWidth(window.innerWidth);
    if (width < 570) {
      setSlides(1);
    } else if (width < 857) {
      setSlides(2);
    } else if (width < 1020) {
      setSlides(3);
    } else {
      setSlides(4);
    }
  };

  const updateShowArrows = () => {
    if (width > 1380) setShowArrows(true);
    else setShowArrows(false);
  };

  useEffect(() => {
    updateWidth();
    updateShowArrows();
    window.addEventListener('resize', updateWidth);
    window.addEventListener('resize', updateShowArrows);
    return () => {
      window.removeEventListener('resize', updateWidth);
      window.removeEventListener('resize', updateShowArrows);
    };
  });

  return (
    <section className="popular">
      <h2 className="popular__title">Популярное</h2>
      <SlickSlider className="content-slider" slides={slides} showArrows={showArrows} arrowType="popular">
        {products.slice(0, 6).map((item) => (
          <PopularItem {...item} key={item.id} component={'popular'} onPopupAddCartOpen={onPopupAddCartOpen}/>
        ))}
      </SlickSlider>
    </section>
  );
}
