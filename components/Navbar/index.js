import React, { useState } from 'react';
import Link from 'next/link';
import { ReactSVG } from 'react-svg';

import './navbar.scss';

const Navbar = () => {
  const [isMenuActive, setIsMenuActive] = useState(true);
  function toggleMenu() {
    console.log(window.pageYOffset);
    setIsMenuActive(state => !state);
  }
  return (
    <nav className='navbar'>
      <div className='navbar__header'>
        {/* <img
          className='navbar__header_logo'
          src='/assets/icons/logo-dark.svg'
          alt='logo-light'
        /> */}
        <ReactSVG
          src='/assets/icons/logo.svg'
          className={[
            'navbar__header_logo',
            isMenuActive && 'navbar__header_logo--reversed'
          ]
            .filter(s => s)
            .join(' ')}
        />
        <img
          className='navbar__header_button'
          src='/assets/icons/menu.svg'
          alt='menu_burger'
          onClick={toggleMenu}
        />
      </div>
      <ul
        className={['navbar__list', isMenuActive && 'navbar__list--active']
          .filter(s => s)
          .join(' ')}
      >
        <li className='navbar__list_item'>
          <Link href='/'>
            <a>O nas</a>
          </Link>
        </li>
        <li className='navbar__list_item'>
          <Link href='/wydarzenia'>
            <a>Wydarzenia</a>
          </Link>
        </li>
        <li className='navbar__list_item'>
          <Link href='/blog'>
            <a>Blog</a>
          </Link>
        </li>
        <li className='navbar__list_item navbar__list_item--alternative'>
          <a href='https://apps.akai.org.pl' target='_blank'>
            Projekty
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
