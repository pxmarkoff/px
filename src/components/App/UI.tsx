import * as React from 'react';

import Routes from '@/pages';
import Header from '../Header';

function AppUI() {
  return (
    <>
      <Header />
      <Routes />
    </>
  );
}

export default React.memo(AppUI);
