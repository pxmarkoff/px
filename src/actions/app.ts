import { ReduxAction, ScreenMode } from '@/types/types';

export function setIsPreload(value: boolean): ReduxAction {
  return {
    type: 'SET_IS_PRELOAD',
    payload: value,
  };
}

export function setRoute(value: string): ReduxAction {
  return {
    type: 'SET_ROUTE',
    payload: value,
  };
}

export function setScreenMode(value: ScreenMode): ReduxAction {
  return {
    type: 'SET_SCREEN_MODE',
    payload: value,
  };
}
