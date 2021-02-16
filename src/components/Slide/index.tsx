import * as React from 'react';

import withConnect from '@/hoc/withConnect';
import SlideUI from './UI';

import { OwnProps, Props, StateProps } from './types';

export const SlideContext = React.createContext(undefined);

function Slide({ currentPos, index }: Props) {
  const [isAnimation, setIsAnimation] = React.useState(false);

  React.useEffect(() => {
    currentPos === index ? setIsAnimation(true) : setIsAnimation(false);
  }, [currentPos, index]);

  return (
    <SlideContext.Provider value={{ isAnimation }}>
      <SlideUI />
    </SlideContext.Provider>
  );
}

export default withConnect<OwnProps, StateProps, {}>(Slide, [
  { slider: 'currentPos' },
]);
