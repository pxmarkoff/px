import './slide.sass';

import * as React from 'react';

import Device from '../Device';

import { budgetTracker } from '@/data/images';

function SlideUI() {
  return (
    <article className='slide'>
      <Device cover={budgetTracker[0]} deviceType='tablet' />
    </article>
  );
}

export default SlideUI;
