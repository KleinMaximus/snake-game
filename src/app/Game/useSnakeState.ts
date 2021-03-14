import { useCallback, useEffect, useRef, useState } from 'react';

import { Direction, XY } from './types';
import { useInitial } from './useInitial';

export type UseSnakeStateResult = {
  grow: () => void;
  state: XY[];
  update: () => void;
};

export type UseSnakeState = (direction: Direction | false) => UseSnakeStateResult;

export const useSnakeState: UseSnakeState = (direction) => {
  const initial = useInitial();
  const [state, setState] = useState(initial);
  const directionRef = useRef(direction);
  const increaseRef = useRef(0);

  const update = useCallback(() => {
    const direction = directionRef.current;

    if (!direction) {
      return;
    }

    const result = [...state];
    const [[hx, hy]] = result;

    result.unshift([hx + ('x' in direction ? direction.x : 0), hy + ('y' in direction ? direction.y : 0)]);

    if (increaseRef.current === 0) {
      result.pop();
    } else {
      increaseRef.current -= 1;
    }

    setState(result);
  }, [state]);

  const grow = useCallback(() => {
    increaseRef.current += 1;
  }, []);

  useEffect(() => {
    directionRef.current = direction;
  }, [direction]);

  return { grow, state, update };
};
