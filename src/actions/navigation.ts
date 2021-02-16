import { ReduxAction } from '@/types/types';
import { SET_NAVIGATION_SELECTED } from '@/reducers/navigation';

export function setNavigationSelected(value: string): ReduxAction {
  return {
    type: SET_NAVIGATION_SELECTED,
    payload: value,
  };
}
