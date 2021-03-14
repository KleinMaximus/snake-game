import { useEffect } from 'react';

import { Direction, XY } from './types';
import { useInterval } from './useInterval';
import { useSnakeState } from './useSnakeState';

export type UseSnake = (direction: Direction | false, score: number) => [XY[], () => void];

export const useSnake: UseSnake = (direction, score) => {
  const { grow, state, update } = useSnakeState(direction);
  const interval = useInterval(score);
  const active = !!direction;

  useEffect(() => {
    if (!active) {
      return;
    }

    const timer = setTimeout(update, interval);

    return (): void => clearTimeout(timer);
  }, [active, interval, update]);

  return [state, grow];
};
