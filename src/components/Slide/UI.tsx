import './slide.sass';

import * as React from 'react';

import Card from '../Card';

import { motion } from 'framer-motion';
import { PropsUI } from './types';

const DeviceLightAnimation = (isAnimation: boolean) => {
  return isAnimation
    ? {
        animate: {
          boxShadow: [
            '0 0 50px #494949, 0 0 100px #494949, 0 0 150px #494949, 0 0 200px #494949, 0 0 250px #494949',
            '0 0 100px #494949, 0 0 150px #494949, 0 0 200px #494949, 0 0 250px #494949, 0 0 300px #494949',
            '0 0 50px #494949, 0 0 100px #494949, 0 0 150px #494949, 0 0 200px #494949, 0 0 250px #494949',
          ],
        },
        transition: {
          duration: 10,
          repeat: Infinity,
        },
      }
    : {};
};

function SlideUI({ isAnimation, project }: PropsUI) {
  return (
    <article className='slide' id='slide'>
      <motion.div
        className='slide__light'
        {...DeviceLightAnimation(isAnimation)}
      />
      <div className='slide__card'>
        <Card isAnimation={isAnimation} project={project} />
      </div>
    </article>
  );
}

export default SlideUI;
