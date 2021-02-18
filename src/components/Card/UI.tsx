import './card.sass';

import * as React from 'react';

import { devices } from '@/data/images';
import { PropsUI } from './types';
import { motion } from 'framer-motion';

const CardDeviceAnimation = (isAnimation: boolean) => {
  return isAnimation
    ? {
        animate: {
          y: [-5, 5, -5],
        },
        transition: {
          duration: 10,
          ease: [0.37, 0, 0.63, 1],
          repeat: Infinity,
          mass: 0.5,
        },
      }
    : {};
};

function CardUI({ isAnimation, project }: PropsUI) {
  return (
    <div className='card'>
      <a className='card__link' href={project.address} target='_blank'>
        <motion.div
          animate={{ opacity: isAnimation ? 1 : 0 }}
          className='card__title'
          transition={{ duration: 1.5 }}
        >
          {project.title.split(' ').map((word) => (
            <React.Fragment key={word}>
              <span>{word}</span>
              <br />
            </React.Fragment>
          ))}
        </motion.div>
        <motion.div
          className='card__device'
          {...CardDeviceAnimation(isAnimation)}
        >
          {project.deviceType === 'tablet' && (
            <img className='card__tablet' src={devices[0]} />
          )}
          <img
            src={project.images[0]}
            alt={`${project.title}-cover`}
            className='card__cover'
          />
        </motion.div>
      </a>
    </div>
  );
}

export default React.memo(CardUI);
