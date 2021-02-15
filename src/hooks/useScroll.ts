import * as React from 'react';

type UseScrollReturn<T> = T extends number ? boolean : number;

function useScroll<T extends any>(position?: T): UseScrollReturn<T> {
  const [scrollTrigger, setScrollTrigger] = React.useState(false);

  React.useEffect(() => {
    const onScrollTrigger = () =>
      window.pageYOffset > position
        ? setScrollTrigger(true)
        : setScrollTrigger(false);

    window.addEventListener('scroll', onScrollTrigger);
    onScrollTrigger();
    return () => window.removeEventListener('scroll', onScrollTrigger);
  });

  const [scrollPos, setScrollPos] = React.useState(0);

  React.useEffect(() => {
    function onScrollPos() {
      setScrollPos(window.pageYOffset);
    }
    window.addEventListener('scroll', onScrollPos);
    onScrollPos();
    return () => window.removeEventListener('scroll', onScrollPos);
  });

  return (position ? scrollTrigger : scrollPos) as UseScrollReturn<T>;
}

export default useScroll;
