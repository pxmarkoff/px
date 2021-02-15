import * as React from 'react';

function useCbWithParam(callback: (...args: any[]) => void) {
  return React.useCallback((value: any) => () => callback(value), []);
}

export default useCbWithParam;
