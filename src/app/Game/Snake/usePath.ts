import { useMemo } from 'react';

import { normalizeCoords } from '../../../tools';
import { XY } from '../types';

export type UsePath = (size: number, segments: XY[]) => string;

export const usePath: UsePath = (size, segments) =>
  useMemo(() => {
    const result = segments.map(([x, y], index) => `L${normalizeCoords(x, size)} ${normalizeCoords(y, size)}`);

    if (result.length === 0) {
      return '';
    }

    const [first] = result;
    result.unshift(`M${first.substr(1)}`);

    return result.join(' ');
  }, [segments, size]);
