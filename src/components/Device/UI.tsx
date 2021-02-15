import './device.sass';

import * as React from 'react';

import { PropsUI } from './types';
import { devices } from '@/data/images';
import { motion } from 'framer-motion';

const DeviceOverlayAnimation = {
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
};

function DeviceUI({ cover, deviceType }: PropsUI) {
  return (
    <div className='device'>
      <motion.div className='device__overlay' {...DeviceOverlayAnimation} />
      {deviceType === 'laptop' && <img alt='laptop' />}
      {deviceType === 'tablet' && (
        <motion.div
          animate={{ y: [-5, 5, -5] }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: [0.37, 0, 0.63, 1],
          }}
        >
          <img alt='cover' className='device__cover' src={cover} />
          <img alt='tablet' className='device__tablet' src={devices[0]} />
        </motion.div>
      )}
      {deviceType === 'mobile' && <img alt='mobile' />}
    </div>
  );
}

export default React.memo(DeviceUI);
