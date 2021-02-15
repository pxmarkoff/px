import { ReduxAction } from '@/types/types';

export function setFilterSelected(value: string): ReduxAction {
  return {
    type: 'SET_FILTER_SELECTED',
    payload: value,
  };
}
