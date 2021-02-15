import * as React from 'react';

type UseScreenWidthReturn<T> = T extends number ? boolean : number;

function useScreenWidth<T extends any>(position?: T): UseScreenWidthReturn<T> {
  const [swTrigger, setSwTrigger] = React.useState(false);

  const onSwTrigger = () => {
    window.innerWidth >= position! ? setSwTrigger(true) : setSwTrigger(false);
  };

  React.useEffect(() => {
    window.addEventListener('resize', onSwTrigger);
    onSwTrigger();
    return () => window.removeEventListener('resize', onSwTrigger);
  });

  const [swPosition, setSwPosition] = React.useState(0);

  const onSwPosition = () => {
    setSwPosition(window.innerWidth);
  };

  React.useEffect(() => {
    window.addEventListener('resize', onSwPosition);
    onSwPosition();
    return () => window.removeEventListener('resize', onSwPosition);
  });

  return (position ? swTrigger : swPosition) as UseScreenWidthReturn<T>;
}

export default useScreenWidth;
