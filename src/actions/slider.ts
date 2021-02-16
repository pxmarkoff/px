import { ReduxAction } from '@/types/types';
import {
  SET_CURRENT_POS,
  SET_END_POS,
  SET_SLIDE_HEIGHT,
} from '@/reducers/slider';

export function setCurrentPos(value: number): ReduxAction {
  return {
    type: SET_CURRENT_POS,
    payload: value,
  };
}

export function setEndPos(value: number): ReduxAction {
  return {
    type: SET_END_POS,
    payload: value,
  };
}

export function setSlideHeight(value: number): ReduxAction {
  return {
    type: SET_SLIDE_HEIGHT,
    payload: value,
  };
}
