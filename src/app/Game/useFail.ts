import { useEffect } from 'react';

import { XY } from './types';
import { useHandlers } from './useHandlers';

export type UseFail = (snake: XY[], count: number, ...handlers: (() => void)[]) => void;

export const useFail: UseFail = (snake: XY[], count: number, ...handlers) => {
  const handler = useHandlers(handlers);

  useEffect(() => {
    const [[hx, hy]] = snake;

    if (hx < 0 || count <= hx || hy < 0 || count <= hy || snake.slice(1).find(([sx, sy]) => sx === hx && sy === hy)) {
      handler();
    }
  }, [count, snake, handler]);
};
