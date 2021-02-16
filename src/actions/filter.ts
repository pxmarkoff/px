import { ReduxAction } from '@/types/types';
import { SET_FILTER_SELECTED } from '@/reducers/filter';

export function setFilterSelected(value: string): ReduxAction {
  return {
    type: SET_FILTER_SELECTED,
    payload: value,
  };
}
