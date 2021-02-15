import { ReduxAction, SliderState } from '@/types/types';

const initialState: SliderState = {
  currentPos: 0,
  endPos: null,
};

export default (state = initialState, action: ReduxAction): SliderState => {
  const { type, payload } = action;

  switch (type) {
    case 'SET_CURRENT_POS':
      return { ...state, currentPos: payload };
    case 'SET_END_POS':
      return { ...state, endPos: payload };

    default:
      return state;
  }
};
