import * as React from 'react';

function useBodyOverflow() {
  React.useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = null;
    };
  }, []);
}

export default useBodyOverflow;
