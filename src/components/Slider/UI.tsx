import './slider.sass';

import * as React from 'react';

import Slide from '../Slide';
import projects from '@/data/projects';

import { motion } from 'framer-motion';

function SliderUI() {
  return (
    <div className='slider'>
      <motion.div className='slider__wrapper'>
        <section className='slider__container'>
          {/* {projects.map(({}) => ( */}
          <Slide />
          <Slide />
          {/* //   ))} */}
        </section>
      </motion.div>
    </div>
  );
}

export default React.memo(SliderUI);
