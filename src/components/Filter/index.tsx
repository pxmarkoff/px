import * as React from 'react';

import FilterUI from './UI';
import withConnect from '@/hoc/withConnect';
import useCbWithParam from '@/hooks/useCbWithParam';

import { DispatchProps, Props, StateProps } from './types';
import { useLocation } from 'react-router-dom';

function Filter({ filterSelected, setFilterSelected }: Props) {
  const onTapFilter = useCbWithParam(setFilterSelected);

  const isFilterOnPage = useLocation().pathname === '/';

  const [underlinePos, setUnderlinePos] = React.useState(0);
  const [underlineWidth, setUnderlineWidth] = React.useState(0);

  React.useEffect(() => {
    const element = document.getElementById(`filter-${filterSelected}`);

    if (element) {
      const { paddingLeft, paddingRight } = getComputedStyle(element);

      const contentWidth =
        element.clientWidth -
        parseFloat(paddingLeft) -
        parseFloat(paddingRight);

      setUnderlineWidth(contentWidth);

      const positionX = element.offsetLeft + 20;

      setUnderlinePos(positionX);
    }
  }, [filterSelected]);

  return (
    <FilterUI
      filterSelected={filterSelected}
      isFilterOnPage={isFilterOnPage}
      onTapFilter={onTapFilter}
      underlinePos={underlinePos}
      underlineWidth={underlineWidth}
    />
  );
}

export default withConnect<{}, StateProps, DispatchProps>(
  Filter,
  [{ filter: 'filterSelected' }],
  ['filter']
);
