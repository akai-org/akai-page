import React from 'react';
import '../styles/about.scss';
import MainLayout from '../components/Layouts/MainLayout';
import { Hero, Divider, Sections } from '../components/AboutComponents';

const sectionsContent = [
  {
    title: 'Front-end development',
    img_src: '/assets/images/section-frontend.jpg',
    desc:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    title: 'Back-end development',
    img_src: '/assets/images/section-backend.jpg',
    desc:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    title: 'Graphic design',
    img_src: '/assets/images/section-design.jpg',
    desc:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    title: 'Mobile',
    img_src: '/assets/images/section-mobile.jpg',
    desc:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  }
];

const heroContent = {
  title: 'Akademickie Koło Aplikacji Internetowych',
  desc: (
    <>
      Działamy na terenie całego Poznania.
      <br />
      Damy ci szansę rozwinąc
      <br />
      Twoją pasję oraz wiedzę. Pokażemy Ci
      <br />
      jak rozpocząć karierę, bazując na doświadczeniu i
      <br />
      umiejętnościach - nie na papierze.
    </>
  )
};

const dividerSectionsContent = {
  title: 'Dołącz do nas',
  paragraph_text:
    'Interesujesz się back-endem, front-endem, masz wyczucie designu czy może chcesz sprawdzić swoje zdolności do zarządzania i organizacji? Dołącz do nas, w każdej z tych ról będziesz mógł się realizować w AKAI.'
};

const Home = () => {
  return (
    <MainLayout>
      <main className='about_page'>
        <Hero {...heroContent} />
        <Divider {...dividerSectionsContent} />
        <Sections sectionsContent={sectionsContent} />
      </main>
    </MainLayout>
  );
};

export default Home;
