'use client';
import Link from 'next/link';
import React, { useState, CSSProperties, useEffect } from 'react';
import { useRouter } from 'next/router';

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [width, setWidth] = useState<any>();

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    // subscribe to window resize event "onComponentDidMount"

    window.addEventListener('resize', handleResizeWindow);
    return () => {
      // unsubscribe "onComponentDestroy"
      window.removeEventListener('resize', handleResizeWindow);
    };
  }, []);

  const breakPoint = 500;
  /** Unique Nav */
  const deskNavBar: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  };

  const deskNavLinks: CSSProperties = {
    display: 'flex',
    listStyle: 'none',
    margin: 0,
    padding: 0,
  };

  const deskNavLinksList: CSSProperties = {
    marginLeft: '10px',
    color: '#fff',
    fontStyle: 'italics',
    fontWeight: '900',
    fontFamily: 'Barlow Condensed',
    fontSize: '20px',
  };

  const desktopNavLogo: CSSProperties = {
    maxWidth: 'max-content',
    width: '100%',
    height: 'auto',
    maxHeight: '120px',
    display: 'flex',
  };
  return (
    <div id='navMenu'>
      {width > breakPoint ? (
        <div className='primaryNav' style={deskNavBar}>
          <a href='/'>
            <img
              style={desktopNavLogo}
              src='/image/mainLogo.png'
              alt='primeFitLogo'
            />
          </a>
          <ul className='navLinks' style={deskNavLinks}>
            <li>
              <a href='/' style={deskNavLinksList}>
                HOME
              </a>
            </li>
            <li>
              <a href='#' style={deskNavLinksList}>
                SERVICE
              </a>
            </li>
            <li>
              <a href='#' style={deskNavLinksList}>
                LOCATION
              </a>
            </li>
            <li>
              <a href='#' style={deskNavLinksList}>
                CONTACT
              </a>
            </li>
            <li>
              <a href='#' style={deskNavLinksList}>
                FAQ
              </a>
            </li>
          </ul>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default NavBar;
