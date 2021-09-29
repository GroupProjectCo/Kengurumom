import React from 'react';
import './AboutPage.css';
import StyledText from '../StyledText/StyledText';

import { photoAbout } from './constants';
import { ABOUT } from './texts';

export default function AboutPage() {
  return (
    <section className='about-page'>
      <h2 className='about-page__title'>О бренде</h2>
      {ABOUT.map((item, i) =>
        (i + 1) % 2 === 1 ? (
          <div className='about-page__group about-page__group_type_img-right' key={i}>
            <StyledText
              text={item}
              styles={{
                default: { className: 'about-page__text about-page__text_type_left' },
                colored: { className: 'about-page__text_colored' },
              }}
            />
            <img
              src={photoAbout[i]}
              className='about-page__img about-page__img_type_right'
              alt={`О бренде. Изображение ${i}`}
            />
          </div>
        ) : (
          <div className='about-page__group about-page__group_type_img-left' key={i}>
            <img
              src={photoAbout[i]}
              className='about-page__img about-page__img_type_left'
              alt={`О бренде. Изображение ${i}`}
            />
            <StyledText
              text={item}
              styles={{
                default: { className: 'about-page__text about-page__text_type_right' },
                colored: { className: 'about-page__text_colored' },
              }}
            />
          </div>
        ),
      )}
    </section>
  );
}
