import * as React from 'react';

import useScroll from '@/hooks/useScroll';
import HeaderUI from './UI';

function Header() {
  const isHeaderHide = useScroll(300);

  return <HeaderUI isHeaderHide={isHeaderHide} />;
}

export default Header;
