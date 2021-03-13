import { useEffect } from 'react';

import { Direction, XY } from './types';
import { useSnakeState } from './useSnakeState';

export type UseSnake = (direction: Direction | false, interval: number, initial: XY[]) => [XY[], () => void];

export const useSnake: UseSnake = (direction, interval, initial) => {
  const active = !!direction;
  const { grow, state, update } = useSnakeState(direction, initial);

  useEffect(() => {
    if (!active) {
      return;
    }

    const timer = setTimeout(update, interval);

    return (): void => clearTimeout(timer);
  }, [active, interval, update]);

  return [state, grow];
};
