import * as React from 'react';

function useDocumentSubtitle(value: string) {
  React.useEffect(() => {
    document.title = `${value} — Pavel Markov`;
  }, []);
}

export default useDocumentSubtitle;
