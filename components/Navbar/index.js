import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactSVG } from 'react-svg';

import './navbar.scss';
import useScrollPosition from '../../hooks/useScrollPosition';

const Navbar = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const scrollPosition = useScrollPosition();
  const { route } = useRouter();

  function toggleMenu() {
    setIsMenuActive(state => !state);
  }

  const headerClasses = [
    'navbar__header',
    route == '/' && scrollPosition == 0 && 'navbar__header--transparent',
    route == '/' &&
      !isMenuActive &&
      scrollPosition == 0 &&
      'navbar__header--reversed'
  ]
    .filter(s => s)
    .join(' ');

  return (
    <div className='navbar'>
      <div id='header' className={headerClasses}>
        <ReactSVG
          src='/assets/icons/logo.svg'
          className='navbar__header_logo'
        />
        <div
          className={[
            'navbar__header_button',
            isMenuActive && 'navbar__header_button--animated'
          ]
            .filter(s => s)
            .join(' ')}
          onClick={toggleMenu}
        >
          <div></div>
        </div>
      </div>
      <nav
        className={[
          'navbar__navigation',
          isMenuActive && 'navbar__navigation--active'
        ]
          .filter(s => s)
          .join(' ')}
      >
        <ul className='navigation__list'>
          <li className='navigation__list_item'>
            <Link href='/'>
              <a>O nas</a>
            </Link>
          </li>
          <li className='navigation__list_item'>
            <Link href='/wydarzenia'>
              <a>Wydarzenia</a>
            </Link>
          </li>
          <li className='navigation__list_item'>
            <Link href='/blog'>
              <a>Blog</a>
            </Link>
          </li>
          <li className='navigation__list_item navigation__list_item--alternative'>
            <a href='https://apps.akai.org.pl' target='_blank'>
              Projekty
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
