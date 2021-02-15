import * as React from 'react';

import DeviceUI from './UI';

import { Props } from './types';

function Device(props: Props) {
  return <DeviceUI {...props} />;
}

export default Device;
