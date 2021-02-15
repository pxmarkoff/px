import { ReduxAction } from '@/types/types';

export function setCurrentPos(value: number): ReduxAction {
  return {
    type: 'SET_CURRENT_POS',
    payload: value,
  };
}

export function setEndPos(value: number): ReduxAction {
  return {
    type: 'SET_END_POS',
    payload: value,
  };
}
