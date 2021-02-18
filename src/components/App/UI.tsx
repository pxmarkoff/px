import * as React from 'react';

import Routes from '@/pages';
import Header from '../Header';
import PreloadScreen from '../PreloadScreen';

import { PropsUI } from './types';

function AppUI({ isPreload }: PropsUI) {
  return (
    <div className='layout'>
      {isPreload && <PreloadScreen />}
      <Header />
      <Routes />
    </div>
  );
}

export default React.memo(AppUI);
