import { ReduxAction, SliderState } from '@/types/types';

export const SET_CURRENT_POS = 'SET_CURRENT_POS';
export const SET_END_POS = 'SET_END_POS';
export const SET_SLIDE_HEIGHT = 'SET_SLIDE_HEIGHT';

const initialState: SliderState = {
  currentPos: 0,
  endPos: null,
  slideHeight: null,
};

export default (state = initialState, action: ReduxAction): SliderState => {
  const { type, payload } = action;

  switch (type) {
    case SET_CURRENT_POS:
      return { ...state, currentPos: payload };
    case SET_END_POS:
      return { ...state, endPos: payload };
    case SET_SLIDE_HEIGHT:
      return { ...state, slideHeight: payload };

    default:
      return state;
  }
};
