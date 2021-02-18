import * as React from 'react';

import Routes from '@/pages';
import Header from '../Header';

import { PropsUI } from './types';
import PreloadScreen from '../PreloadScreen';

function AppUI({ isPreload }: PropsUI) {
  return (
    <div className='layout'>
      {/* {isPreload && <PreloadScreen />} */}
      <Header />
      <Routes />
    </div>
  );
}

export default React.memo(AppUI);
