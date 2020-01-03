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
      <div className='accent_line'></div>
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
      <div className='accent_line'></div>
      <p>{desc}</p>
    </div>
  </div>
);

export const Members = ({ membersList, exMembersList }) => {
  return (
    <div className='members'>
      <h2 className='members__header'>Aktualni członkowie</h2>
      <div className='members__items members__items--current'>
        {membersList.map(member => (
          <MemberItem {...member} />
        ))}
      </div>
      <h2 className='members__header'>Byli członkowie</h2>
      <div className='members__items members__items--ex'>
        {exMembersList.map(member => (
          <MemberItem {...member} />
        ))}
      </div>
    </div>
  );
};

const MemberItem = ({ name, url, tags }) => {
  return (
    <div className='members__item'>
      <img
        className='members__item_image'
        src={url || '/assets/images/avatar-placeholder.png'}
      />
      <p className='members__item_name'>{name}</p>
      <p className='members__item_tags'>{tags.length ? tags[0] : 'brak?'}</p>
    </div>
  );
};
