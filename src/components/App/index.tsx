import * as React from 'react';

import AppUI from './UI';
import useRouteName from '@/hooks/useRouteName';
import useScreenMode from '@/hooks/useScreenMode';
import withConnect from '@/hoc/withConnect';

import { Props, StateProps } from './types';

function App({ isPreload }: Props) {
  useScreenMode();
  useRouteName();

  return <AppUI isPreload={isPreload} />;
}

export default withConnect<{}, StateProps, {}>(App, [{ app: 'isPreload' }]);
