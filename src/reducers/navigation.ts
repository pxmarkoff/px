import { NavigationState, ReduxAction } from '@/types/types';

export const SET_NAVIGATION_SELECTED = 'SET_NAVIGATION_SELECTED';

const inititalState: NavigationState = {
  navigationSelected: 'Projects',
};

export default (
  state = inititalState,
  action: ReduxAction
): NavigationState => {
  const { type, payload } = action;

  switch (type) {
    case SET_NAVIGATION_SELECTED:
      return { ...state, navigationSelected: payload };

    default:
      return state;
  }
};
