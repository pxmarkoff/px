import * as React from 'react';

import SliderUI from './UI';
import withConnect from '@/hoc/withConnect';

import { Props, StateProps } from './types';
import useSlider from '@/hooks/useSlider';

function Slider({ currentPos, slideHeight }: Props) {
  useSlider({ slide: 'slide', slider: 'slider', slides: 'slides' });
  return <SliderUI currentPos={currentPos} slideHeight={slideHeight} />;
}

export default withConnect<{}, StateProps, {}>(Slider, [
  { slider: 'currentPos' },
  { slider: 'slideHeight' },
]);
