import { useCallback, useState } from 'react';

import { XY } from './types';

export type UseApple = (size: number, except: XY[]) => [[number, number], () => void];

export const useApple: UseApple = (size, except) => {
  const getPosition = useCallback((): XY => {
    const index = except.reduce<Record<number, Record<number, true>>>((acc, [x, y]) => {
      acc[x] = acc[x] || {};
      acc[x][y] = true;

      return acc;
    }, {});

    console.log(index);

    const x = Math.floor(Math.random() * size);
    const y = Math.floor(Math.random() * size);

    return [x, y];
  }, [size, except]);

  const [position, setPosition] = useState<XY>(getPosition);

  const change = useCallback(() => setPosition(getPosition()), [getPosition]);

  return [position, change];
};
