import * as React from 'react';

import withConnect from '@/hoc/withConnect';
import SlideUI from './UI';

import { OwnProps, Props, StateProps } from './types';

function Slide({ currentPos, index, ...project }: Props) {
  const [isAnimation, setIsAnimation] = React.useState(false);

  React.useEffect(() => {
    currentPos === index ? setIsAnimation(true) : setIsAnimation(false);
  }, [currentPos, index]);

  return <SlideUI isAnimation={isAnimation} project={project} />;
}

export default withConnect<OwnProps, StateProps, {}>(Slide, [
  { slider: 'currentPos' },
]);
