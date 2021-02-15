import './header.sass';

import * as React from 'react';

import Navigation from '../Navigation';
import Filter from '../Filter';

import { PropsUI } from './types';
import { motion } from 'framer-motion';

const HeaderContentAnimation = (isHeaderHide: boolean) => {
  return {
    animate: {
      display: isHeaderHide ? 'none' : 'flex',
      opacity: isHeaderHide ? 0 : 1,
    },
    initial: {
      display: 'flex',
      opacity: 1,
    },
    transition: {
      opacity: { duration: 0.25 },
      display: { delay: isHeaderHide ? 0.25 : 0 },
    },
  };
};

function HeaderUI({ isHeaderHide }: PropsUI) {
  return (
    <header className='header'>
      <motion.div
        className='header__content'
        {...HeaderContentAnimation(isHeaderHide)}
        // animate={{ opacity: isHeaderHide ? 0 : 1 }}
      >
        <Navigation />
        <Filter />
      </motion.div>
    </header>
  );
}

export default React.memo(HeaderUI);
