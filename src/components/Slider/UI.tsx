import './slider.sass';

import * as React from 'react';

import Slide from '../Slide';
import projects from '@/data/projects';

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
        <section className='slider__container' id='slides'>
          {/* {projects.map(({}) => ( */}
          <Slide index={0} />
          <Slide index={1} />
          <Slide index={2} />
          <Slide index={3} />
          {/* //   ))} */}
        </section>
      </motion.div>
    </div>
  );
}

export default React.memo(SliderUI);
