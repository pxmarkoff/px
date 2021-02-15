import * as React from 'react';

import useScreenWidth from './useScreenWidth';

import { useDispatch } from 'react-redux';

function useScreenMode() {
  const dispatch = useDispatch();
  const isDesktopScreen = useScreenWidth(1024);

  function setScreenMode(value: string) {
    dispatch({ type: 'SET_SCREEN_MODE', payload: value });
  }

  React.useEffect(() => {
    isDesktopScreen ? setScreenMode('desktop') : setScreenMode('mobile');
  }, [isDesktopScreen]);
}

export default useScreenMode;
