import { useEffect } from 'react';

import { Direction, XY } from './types';
import { useInterval } from './useInterval';
import { useSnakeState } from './useSnakeState';

export type UseSnake = (direction: Direction | false, score: number, initial: XY[]) => [XY[], () => void];

export const useSnake: UseSnake = (direction, score, initial) => {
  const { grow, state, update } = useSnakeState(direction, initial);
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
