import './slider.sass';

import * as React from 'react';

import SliderContainer from '../SliderContainer';

import { motion } from 'framer-motion';
import { PropsUI } from './types';

const SliderWrapperAnimation = (currentPos: number, slideHeight: number) => {
  return {
    animate: { y: currentPos * -slideHeight },
    transition: {
      duration: 0.6,
      ease: [0.65, 0.05, 0.36, 1],
    },
  };
};

function SliderUI({ currentPos, slideHeight }: PropsUI) {
  return (
    <div className='slider' id='slider'>
      <motion.div
        className='slider__wrapper'
        {...SliderWrapperAnimation(currentPos, slideHeight)}
      >
        <SliderContainer />
      </motion.div>
    </div>
  );
}

export default React.memo(SliderUI);
