import { useEffect, useState } from 'react';

import { Direction } from './types';

const DIRECTION_UP: Direction = { y: -1 };

const init = (): Direction => DIRECTION_UP;

const codes: Record<string, Direction> = {
  ArrowDown: { y: 1 },
  ArrowLeft: { x: -1 },
  ArrowRight: { x: 1 },
  ArrowUp: DIRECTION_UP,
};

export type UseDirection = (inactive?: boolean) => Direction;

export const useDirection: UseDirection = (inactive) => {
  const [state, setState] = useState(init);

  useEffect(() => {
    if (inactive) {
      return;
    }

    const eventHandler = (event: KeyboardEvent) => {
      if (codes[event.code]) {
        setState((prev) => {
          const next = codes[event.code];
          const isReverse =
            ('x' in prev && 'x' in next && prev.x !== next.x) || ('y' in prev && 'y' in next && prev.y !== next.y);
          return isReverse ? prev : codes[event.code];
        });
      }
    };

    document.addEventListener('keydown', eventHandler);

    return (): void => document.removeEventListener('keydown', eventHandler);
  }, [inactive]);

  return state;
};
