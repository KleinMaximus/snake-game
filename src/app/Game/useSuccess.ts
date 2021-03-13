import { useEffect } from 'react';

import { XY } from './types';
import { useHandlers } from './useHandlers';

export type UseSuccess = (apple: XY, snake: XY[], ...handlers: (() => void)[]) => void;

export const useSuccess: UseSuccess = ([ax, ay], snake, ...handlers) => {
  const handler = useHandlers(handlers);

  useEffect(() => {
    if (snake.find(([sx, sy]) => sx === ax && sy === ay)) {
      handler();
    }
  }, [ax, ay, handler, snake]);
};
