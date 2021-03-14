import { useEffect } from 'react';

import { useSettings } from '../../services';
import { XY } from './types';
import { useHandlers } from './useHandlers';

export type UseFail = (snake: XY[], ...handlers: (() => void)[]) => void;

export const useFail: UseFail = (snake: XY[], ...handlers) => {
  const { size } = useSettings();
  const handler = useHandlers(handlers);

  useEffect(() => {
    const [[hx, hy]] = snake;

    if (hx < 0 || size <= hx || hy < 0 || size <= hy || snake.slice(1).find(([sx, sy]) => sx === hx && sy === hy)) {
      handler();
    }
  }, [size, snake, handler]);
};
