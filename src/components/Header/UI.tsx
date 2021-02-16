import './header.sass';

import * as React from 'react';

import Navigation from '../Navigation';
import Filter from '../Filter';

import { PropsUI } from './types';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

const HeaderContentAnimation = (isHeaderHide: boolean) => {
  return {
    animate: {
      display: isHeaderHide ? 'none' : 'flex',
      opacity: isHeaderHide ? 0 : 1,
      width: isHeaderHide ? 0 : undefined,
    },
    initial: {
      display: 'flex',
      opacity: 1,
    },
    transition: {
      display: { delay: isHeaderHide ? 0.25 : 0 },
    },
  };
};

const HeaderLogoAnimation = (isHeaderHide: boolean) => {
  return {
    animate: {
      display: !isHeaderHide ? 'none' : 'flex',
      opacity: !isHeaderHide ? 0 : 1,
    },
    initial: {
      display: 'none',
      opacity: 0,
    },
    transition: { display: { delay: 0.25 } },
  };
};

function HeaderUI({ isHeaderHide }: PropsUI) {
  return (
    <header className='header'>
      {isHeaderHide && (
        <motion.div
          className='header__logo'
          {...HeaderLogoAnimation(isHeaderHide)}
        >
          <NavLink to='/'>
            <span>PX</span>
          </NavLink>
        </motion.div>
      )}
      <motion.div
        className='header__content'
        {...HeaderContentAnimation(isHeaderHide)}
      >
        <Navigation />
        <Filter />
      </motion.div>
    </header>
  );
}

export default React.memo(HeaderUI);
