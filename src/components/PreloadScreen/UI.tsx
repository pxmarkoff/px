import './preload-screen.sass';

import * as React from 'react';

import { motion } from 'framer-motion';

const PreloadScreenAnimation = {
  animate: { opacity: 0 },
  transition: { delay: 9, duration: 1 },
};

const PreloadScreenOverlayAnimation = {
  animate: {
    width: ['0vw', '100vw'],
  },
  transition: {
    duration: 4,
    delay: 5,
    ease: [0.65, 0.05, 0.36, 1],
  },
};

const PreloadScreenContentAnimation = {};

const PreloadScreenAuthorAnimation = {
  animate: { opacity: 1 },
  initial: { opacity: 0 },
  transition: { delay: 1, duration: 1.4 },
};

const PreloadScreenDashAnimation = {
  animate: { opacity: 1 },
  initial: { opacity: 0 },
  transition: { delay: 6.6, duration: 1 },
};

const PreloadScreenTitleAnimation = {
  variants: {
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        delay: 3 + i * 0.075,
        staggerDirection: -1,
        ease: [0.37, 0, 0.63, 1],
      },
    }),
    initial: {
      opacity: 0,
    },
  },
  animate: 'visible',
  initial: 'initial',
};

const splittedTitle = 'Frontend Developer'.split('');

function PreloadScreenUI() {
  return (
    <motion.div className='preload-screen' {...PreloadScreenAnimation}>
      <motion.div
        className='preload-screen__overlay'
        {...PreloadScreenOverlayAnimation}
      />
      <motion.section
        className='preload-screen__content'
        {...PreloadScreenContentAnimation}
      >
        <motion.span
          className='preload-screen__author'
          {...PreloadScreenAuthorAnimation}
        >
          Pavel Markov
        </motion.span>
        <motion.span
          className='preload-screen__dash'
          {...PreloadScreenDashAnimation}
        >
          {' '}
          —{' '}
        </motion.span>
        <span className='preload-screen__title'>
          {splittedTitle.map((letter, i) => (
            <motion.span
              custom={i}
              key={letter + i}
              {...PreloadScreenTitleAnimation}
            >
              {letter}
            </motion.span>
          ))}
        </span>
      </motion.section>
    </motion.div>
  );
}

export default React.memo(PreloadScreenUI);
