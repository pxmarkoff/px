import * as React from 'react';

import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

function useRouteName() {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  function setRouteName(value: string) {
    dispatch({ type: 'SET_ROUTE', payload: value });
  }

  React.useEffect(() => {
    if (pathname === '/') setRouteName('Home');
    if (pathname === '/contact') setRouteName('Contact');
  }, [pathname]);
}

export default useRouteName;
