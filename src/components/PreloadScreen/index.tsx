import * as React from 'react';

import useBodyOverflow from '@/hooks/useBodyOverflow';
import withConnect from '@/hoc/withConnect';
import useTimer from '@/hooks/useTimer';
import PreloadScreenUI from './UI';

import { DispatchProps, Props } from './types';

function PreloadScreen({ setIsPreload }: Props) {
  useBodyOverflow();

  useTimer(() => setIsPreload(false), 10000);

  return <PreloadScreenUI />;
}

export default withConnect<{}, {}, DispatchProps>(PreloadScreen, null, ['app']);
