import { ReduxAction, ScreenMode } from '@/types/types';
import { SET_IS_PRELOAD, SET_ROUTE, SET_SCREEN_MODE } from '@/reducers/app';

export function setIsPreload(value: boolean): ReduxAction {
  return {
    type: SET_IS_PRELOAD,
    payload: value,
  };
}

export function setRoute(value: string): ReduxAction {
  return {
    type: SET_ROUTE,
    payload: value,
  };
}

export function setScreenMode(value: ScreenMode): ReduxAction {
  return {
    type: SET_SCREEN_MODE,
    payload: value,
  };
}
