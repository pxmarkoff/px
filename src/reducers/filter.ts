import { FilterState, ReduxAction } from '@/types/types';

export const SET_FILTER_SELECTED = 'SET_FILTER_SELECTED';

const inititalState: FilterState = {
  filterSelected: 'All',
};

export default (state = inititalState, action: ReduxAction): FilterState => {
  const { type, payload } = action;

  switch (type) {
    case SET_FILTER_SELECTED:
      return { ...state, filterSelected: payload };

    default:
      return state;
  }
};
