import { AppState, ReduxAction } from '@/types/types';

export const SET_IS_PRELOAD = 'SET_IS_PRELOAD';
export const SET_ROUTE = 'SET_ROUTE';
export const SET_SCREEN_MODE = 'SET_SCREEN_MODE';

const inititalState: AppState = {
  isPreload: true,
  route: 'Home',
  screenMode: 'mobile',
};

export default function (state = inititalState, action: ReduxAction): AppState {
  const { type, payload } = action;

  switch (type) {
    case SET_IS_PRELOAD:
      return { ...state, isPreload: payload };
    case SET_ROUTE:
      return { ...state, route: payload };
    case SET_SCREEN_MODE:
      return { ...state, screenMode: payload };
    default:
      return state;
  }
}
