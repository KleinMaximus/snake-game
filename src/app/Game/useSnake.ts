import { useCallback, useEffect, useRef, useState } from 'react';

import { Direction, XY } from './types';
import { useUpdateHead } from './useUpdateHead';

export type UseSnake = (direction: Direction | false, interval: number, initial: XY[]) => [XY[], () => void];

export const useSnake: UseSnake = (direction, interval, initial) => {
  const active = !!direction;
  const [state, setState] = useState(initial);
  const directionRef = useRef(direction);
  const increaseRef = useRef(0);
  const updateHead = useUpdateHead(directionRef, increaseRef, setState);

  const grow = useCallback(() => {
    increaseRef.current += 1;
  }, []);

  useEffect(() => {
    directionRef.current = direction;
  }, [direction]);

  useEffect(() => {
    if (!active) {
      return;
    }

    const timer = setInterval(updateHead, interval);

    return (): void => clearInterval(timer);
  }, [active, interval, updateHead]);

  return [state, grow];
};
