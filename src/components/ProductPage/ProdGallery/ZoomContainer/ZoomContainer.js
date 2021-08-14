/* eslint-disable react-hooks/exhaustive-deps */
import './ZoomContainer.css';
import { useState, useEffect } from 'react';
import loopImg from '../../../../images/product/loop.svg';
import arrowImg from '../../../../images/product/product-arrow.jpg';
import PopupProductGallery from './PopupProductGallery/PopupProductGallery';

function ZoomContainer({ slides, currentThumb, media }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPopupOpened, setIsPopupOpened] = useState(false);

  useEffect(() => {
    if (!media.isMobileVert) {
      setIsPopupOpened(false);
    }
  }, [media.isMobileVert]);

  useEffect(() => {
    if (currentThumb !== null && currentThumb !== currentIndex) {
      setCurrentIndex(currentThumb);
    }
  }, [currentThumb]);

  const [activeSlide, setActiveSlide] = useState(slides[0]);

  const [zoomParams, setZoomParams] = useState({
    backgroundPosition: '0% 0%',
    backgroundImage: `url(${slides[0]})`,
  });

  const handleRightArrowClick = () => {
    if (currentIndex === slides.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleLeftArrowClick = () => {
    if (currentIndex === 0) {
      setCurrentIndex(slides.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  useEffect(() => {
    setActiveSlide(slides[currentIndex]);
  }, [currentIndex]);

  useEffect(() => {
    setZoomParams({ ...zoomParams, backgroundImage: `url(${activeSlide})` });
  }, [activeSlide]);

  const handleZoomMove = (evt) => {
    const { width, height } = evt.target.getBoundingClientRect();
    const x = (evt.nativeEvent.offsetX / width) * 100;
    const y = (evt.nativeEvent.offsetY / height) * 100;
    setZoomParams({ ...zoomParams, backgroundPosition: `${x}% ${y}%` });
  };

  const handleLoopClick = () => {
    if (media.isMobileVert) {
      setIsPopupOpened(true);
    }
  };

  const closedPopup = () => {
    setIsPopupOpened(false);
  };

  return (
    <>
      <PopupProductGallery isOpened={isPopupOpened} image={activeSlide} closePopup={closedPopup} />
      <div className='zoom-container'>
        <img
          onClick={handleLoopClick}
          src={loopImg}
          alt='Лупа'
          className='zoom-container__loop-icon'
        />
        <img
          src={arrowImg}
          alt='Предыдущая'
          className='zoom-container__arrow'
          onClick={handleLeftArrowClick}
        />
        <img
          src={arrowImg}
          alt='Следующая'
          className='zoom-container__arrow zoom-container__arrow_right'
          onClick={handleRightArrowClick}
        />
        {!media.isMobileVert ? (
          <figure
            onMouseMove={handleZoomMove}
            style={zoomParams}
            className='zoom-container__image-wrapper'
          >
            <img className='zoom-container__image' src={activeSlide} alt='Главное изображение' />
          </figure>
        ) : (
          <img className='zoom-container__image' src={activeSlide} alt='Главное изображение' />
        )}
      </div>
    </>
  );
}

export default ZoomContainer;
