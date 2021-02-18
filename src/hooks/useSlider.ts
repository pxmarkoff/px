import * as React from 'react';

import {
  SET_CURRENT_POS,
  SET_END_POS,
  SET_SLIDE_HEIGHT,
} from '@/reducers/slider';
import { ReduxState } from '@/types/types';
import { useDispatch, useSelector } from 'react-redux';

interface UseSlider {
  slider: string;
  slide: string;
  slides: string;
}

enum Direction {
  Forward = 'Forward',
  Back = 'Back',
}

function useWheelSlider(
  isReady: boolean,
  moveForward: () => void,
  moveBack: () => void
) {
  const [count, setCount] = React.useState(0);
  const [direction, setDirection] = React.useState(null);

  const resetCount = () => setCount(0);

  function onWheel(e: WheelEvent) {
    function initializeDirection(deltaCondition: boolean, _direction: string) {
      if (deltaCondition) {
        if (_direction !== direction) resetCount();
        setDirection(_direction);
        setCount(count + 1);
      }
    }

    initializeDirection(e.deltaY > 0, Direction.Forward);
    initializeDirection(e.deltaY < 0, Direction.Back);
  }

  React.useEffect(() => {
    if (isReady) {
      document.addEventListener('wheel', onWheel);
      return () => document.removeEventListener('wheel', onWheel);
    }
  });

  React.useEffect(() => {
    if (count >= 4) {
      switch (direction) {
        case Direction.Forward:
          moveForward();
          break;
        case Direction.Back:
          moveBack();
          break;
        default:
          break;
      }
      resetCount();
    }
  }, [count, direction]);
}

function useTouchSlider(
  isReady: boolean,
  moveForward: () => void,
  moveBack: () => void
) {
  const [touchStart, setTouchStart] = React.useState(null);
  const [touchEnd, setTouchEnd] = React.useState(null);

  const onTouchStart = (e: TouchEvent) => {
    setTouchStart(e.touches[0].clientY);
  };
  const onTouchMove = (e: TouchEvent) => {
    setTouchEnd(e.touches[0].clientY);
  };
  const onTouchEnd = () => {
    const threshold = window.innerHeight / 2;

    if (touchStart < threshold && touchEnd > threshold) moveBack();
    if (touchStart > threshold && touchEnd < threshold) moveForward();

    setTouchStart(null);
    setTouchEnd(null);
  };

  React.useEffect(() => {
    if (isReady) {
      document.addEventListener('touchstart', onTouchStart);
      document.addEventListener('touchmove', onTouchMove);
      document.addEventListener('touchend', onTouchEnd);
      return () => {
        document.removeEventListener('touchstart', onTouchStart);
        document.removeEventListener('touchmove', onTouchMove);
        document.removeEventListener('touchend', onTouchEnd);
      };
    }
  });
}

function useSlider({ slide, slider, slides }: UseSlider) {
  const dispatch = useDispatch();

  const currentPos = useSelector(
    (state: ReduxState) => state.slider.currentPos
  );
  const endPos = useSelector((state: ReduxState) => state.slider.endPos);

  function onDispatch(type: string, payload: any) {
    dispatch({ type, payload });
  }

  function moveForward() {
    currentPos < endPos
      ? onDispatch(SET_CURRENT_POS, currentPos + 1)
      : onDispatch(SET_CURRENT_POS, 0);
  }

  function moveBack() {
    currentPos > 0
      ? onDispatch(SET_CURRENT_POS, currentPos - 1)
      : onDispatch(SET_CURRENT_POS, endPos);
  }

  const [isReady, setIsReady] = React.useState(false);

  React.useEffect(() => {
    document.getElementById(slide) &&
    document.getElementById(slider) &&
    document.getElementById(slides)
      ? setIsReady(true)
      : setIsReady(false);
  }, []);

  React.useEffect(() => {
    if (isReady) {
      const { offsetHeight } = document.getElementById(slide);
      const { childElementCount } = document.getElementById(slides);

      onDispatch(SET_SLIDE_HEIGHT, offsetHeight);
      onDispatch(SET_END_POS, childElementCount - 1);
    }
  }, [isReady]);

  useWheelSlider(isReady, moveForward, moveBack);

  useTouchSlider(isReady, moveForward, moveBack);
}

export default useSlider;
