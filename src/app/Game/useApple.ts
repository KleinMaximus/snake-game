import { useCallback, useState } from 'react';

import { useSettings } from '../../services';
import { XY } from './types';

export type UseApple = (except: XY[]) => [[number, number], () => void];

export const useApple: UseApple = (except) => {
  const { size } = useSettings();

  const getPosition = useCallback((): XY => {
    const count = size * size - except.length;
    let pos = Math.floor(Math.random() * count);

    const index = except.reduce<Record<number, true>>((acc, [x, y]) => {
      acc[x * size + y] = true;

      return acc;
    }, {});

    const keys = Object.keys(index)
      .map((item) => Number(item))
      .sort();

    keys.some((key) => {
      if (pos < key) {
        return true;
      }

      pos += 1;

      return false;
    });

    const x = Math.floor(pos / size);
    const y = pos - x * size;

    return [x, y];
  }, [size, except]);

  const [position, setPosition] = useState<XY>(getPosition);

  const change = useCallback(() => setPosition(getPosition()), [getPosition]);

  return [position, change];
};
