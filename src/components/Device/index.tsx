import * as React from 'react';

import DeviceUI from './UI';

import { Props } from './types';
import { SlideContext } from '../Slide';

function Device(props: Props) {
  const { isAnimation } = React.useContext(SlideContext);

  console.log(isAnimation);

  return <DeviceUI isAnimation={isAnimation} {...props} />;
}

export default Device;
