import * as React from 'react';

import AppUI from './UI';
import useRouteName from '@/hooks/useRouteName';
import useScreenMode from '@/hooks/useScreenMode';

function App() {
  useScreenMode();
  useRouteName();

  return <AppUI />;
}

export default App;
