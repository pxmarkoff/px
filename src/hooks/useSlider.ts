import * as React from 'react';

import { ReduxState } from '@/types/types';
import { useDispatch, useSelector } from 'react-redux';
import {
  SET_CURRENT_POS,
  SET_END_POS,
  SET_SLIDE_HEIGHT,
} from '@/reducers/slider';

// Object with id's of DOM elements
interface UseSlider {
  slider: string;
  slide: string;
  slides: string;
}

function useSlider({ slide, slider, slides }: UseSlider) {
  const dispatch = useDispatch();

  // Receive properies from state
  const currentPos = useSelector(
    (state: ReduxState) => state.slider.currentPos
  );
  const slideHeight = useSelector(
    (state: ReduxState) => state.slider.slideHeight
  );
  const endPos = useSelector((state: ReduxState) => state.slider.endPos);

  // Slider movement control
  function moveFront() {
    currentPos < endPos
      ? dispatch({ type: SET_CURRENT_POS, payload: currentPos + 1 })
      : dispatch({ type: SET_CURRENT_POS, payload: 0 });
  }

  function moveBack() {
    currentPos > 0
      ? dispatch({ type: SET_CURRENT_POS, payload: currentPos - 1 })
      : dispatch({ type: SET_CURRENT_POS, payload: endPos });
  }

  // Initialize necessary properties
  React.useEffect(() => {
    const { offsetHeight } = document.getElementById(slide);
    const { childElementCount } = document.getElementById(slides);

    dispatch({ type: SET_SLIDE_HEIGHT, payload: offsetHeight });
    dispatch({ type: SET_END_POS, payload: childElementCount - 1 });
  }, []);

  // Properties for wheel event
  const [count, setCount] = React.useState(0);
  const [direction, setDirection] = React.useState(null);

  React.useEffect(() => {
    function onWheel(e: WheelEvent) {
      const { deltaY } = e;

      if (deltaY > 0) {
        if (direction === 'back') setCount(0);
        setDirection('front');
        setCount(count + 1);
      }
      if (deltaY < 0) {
        if (direction === 'front') setCount(0);
        setDirection('back');
        setCount(count + 1);
      }
    }

    document.getElementById(slider).addEventListener('wheel', onWheel);
    return () =>
      document.getElementById(slider).removeEventListener('wheel', onWheel);
  });

  React.useEffect(() => {
    if (count >= 4) {
      if (direction === 'front') moveFront();
      if (direction === 'back') moveBack();
      setCount(0);
    }
  }, [count, direction]);
}

export default useSlider;
