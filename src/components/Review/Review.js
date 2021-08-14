/* eslint-disable no-nested-ternary */
import { useState, useEffect } from 'react';
import './Review.css';

import reviewConfig from './test_items';

import ReviewItem from '../ReviewItem/ReviewItem';
import SlickSlider from '../SharedComponents/Slider/SlickSlider';

export default function Review({ media }) {
  const [width, setWidth] = useState(window.innerWidth);
  const [slides, setSlides] = useState(media.isDesktop ? 3 : media.isTabletVert ? 2 : 1);
  const [showArrows, setShowArrows] = useState(!!media.isDesktop);

  const updateWidth = () => {
    setWidth(window.innerWidth);
    if (width < 580) {
      setSlides(1);
    } else if (width < 857) {
      setSlides(2);
    } else {
      setSlides(3);
    }
  };

  const updateShowArrows = () => {
    if (width > 1200) setShowArrows(true);
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
    <section className="review">
      <h2 className="review__title">Отзывы счастливых мам</h2>
      <SlickSlider className="content-slider" slides={slides} showArrows={showArrows} arrowType="review">
        {reviewConfig.map((item) => (
          <ReviewItem {...item} key={item.instaTitle}/>
        ))}
      </SlickSlider>
    </section>
  );
}
