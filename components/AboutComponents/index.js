import React from 'react';
import { ReactSVG } from 'react-svg';

export const Hero = ({ title, desc }) => {
  const scrollDown = () => {
    const el = document.querySelector('#scroll-divider');
    const yOffset = document.querySelector('#header').offsetHeight;
    const scrollValue =
      el.getBoundingClientRect().top + window.pageYOffset - yOffset;
    window.scrollTo({ top: scrollValue, behavior: 'smooth' });
  };

  return (
    <div className='divider divider--hero'>
      <h1 className='divider__title'>{title}</h1>
      <span className='accent_line'></span>
      <p className='divider__paragraph'>{desc}</p>
      <div onClick={scrollDown} className='learn_more'>
        <span>Dowiedz się więcej</span>
        <ReactSVG src='/assets/icons/arrow_down.svg' />
      </div>
    </div>
  );
};

export const Divider = ({ title, paragraph_text }) => {
  return (
    <div id='scroll-divider' className='divider'>
      <h1 className='divider__title'>{title}</h1>
      <span className='accent_line'></span>
      <p className='divider__paragraph'>{paragraph_text}</p>
    </div>
  );
};

export const Sections = ({ sectionsContent }) => {
  return (
    <div className='sections'>
      {sectionsContent.map(section => (
        <SectionItem {...section} />
      ))}
    </div>
  );
};

const SectionItem = ({ title, img_src, desc }) => (
  <div className='sections__item'>
    <img className='sections__item_image' src={img_src} alt={title} />
    <div className='sections__item_description'>
      <h2>{title}</h2>
      <span className='accent_line'></span>
      <p>{desc}</p>
    </div>
  </div>
);
