import * as React from 'react';

import FilterUI from './UI';
import withConnect from '@/hoc/withConnect';
import useCbWithParam from '@/hooks/useCbWithParam';

import { DispatchProps, Props, StateProps } from './types';
import { useLocation } from 'react-router-dom';

function Filter({ filterSelected, setFilterSelected }: Props) {
  const onTapFilter = useCbWithParam(setFilterSelected);

  const isFilterOnPage = useLocation().pathname === '/';

  return (
    <FilterUI
      filterSelected={filterSelected}
      isFilterOnPage={isFilterOnPage}
      onTapFilter={onTapFilter}
    />
  );
}

export default withConnect<{}, StateProps, DispatchProps>(
  Filter,
  [{ filter: 'filterSelected' }],
  ['filter']
);
