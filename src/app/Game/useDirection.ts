import { useEffect, useState } from 'react';

import { Direction } from './types';

const DIRECTION_UP: Direction = { y: -1 };

const serialize = (direction: Direction) => Object.keys(direction).sort().join('');
const init = (): Direction => DIRECTION_UP;

const codes: Record<string, Direction> = {
  ArrowDown: { y: 1 },
  ArrowLeft: { x: -1 },
  ArrowRight: { x: 1 },
  ArrowUp: DIRECTION_UP,
};

export type UseDirection = (canReverse: boolean, inactive?: boolean) => Direction;

export const useDirection: UseDirection = (canReverse, inactive) => {
  const [state, setState] = useState(init);

  useEffect(() => {
    if (inactive) {
      return;
    }

    const eventHandler = (event: KeyboardEvent) => {
      if (codes[event.code]) {
        setState((prev) => {
          const next = codes[event.code];

          if (canReverse) {
            return next;
          }

          return serialize(prev) === serialize(next) ? prev : codes[event.code];
        });
      }
    };

    document.addEventListener('keydown', eventHandler);

    return (): void => document.removeEventListener('keydown', eventHandler);
  }, [canReverse, inactive]);

  return state;
};
