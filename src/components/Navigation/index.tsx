import * as React from 'react';

import withConnect from '@/hoc/withConnect';
import NavigationUI from './UI';
import useCbWithParam from '@/hooks/useCbWithParam';
import routes from '@/data/routes';

import { DispatchProps, Props, StateProps } from './types';
import { useLocation } from 'react-router-dom';

function Navigation({ navigationSelected, setNavigationSelected }: Props) {
  const { pathname } = useLocation();

  const onFollowingLink = useCbWithParam(setNavigationSelected);

  React.useEffect(
    () =>
      setNavigationSelected(
        routes.find(({ route }) => route === pathname).name
      ),
    [pathname]
  );

  return (
    <NavigationUI
      navigationSelected={navigationSelected}
      onFollowingLink={onFollowingLink}
    />
  );
}

export default withConnect<{}, StateProps, DispatchProps>(
  Navigation,
  [{ navigation: 'navigationSelected' }],
  ['navigation']
);
