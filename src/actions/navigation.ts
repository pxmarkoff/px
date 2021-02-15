import { ReduxAction } from '@/types/types';

export function setNavigationSelected(value: string): ReduxAction {
  return {
    type: 'SET_NAVIGATION_SELECTED',
    payload: value,
  };
}
