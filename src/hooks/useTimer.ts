import * as React from 'react';

function useTimer(callback: (...args: any[]) => void, ms: number) {
  React.useEffect(() => {
    let timer;

    timer = setTimeout(() => {
      callback();
    }, ms);

    return () => {
      clearTimeout(timer);
    };
  });
}

export default useTimer;
