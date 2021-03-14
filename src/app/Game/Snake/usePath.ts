import { useMemo } from 'react';

import { useSettings } from '../../../services';
import { normalizeCoords } from '../../../tools';
import { XY } from '../types';

export type UsePath = (segments: XY[]) => string;

export const usePath: UsePath = (segments) => {
  const { scale } = useSettings();

  return useMemo(() => {
    const result = segments.map(([x, y], index) => `L${normalizeCoords(x, scale)} ${normalizeCoords(y, scale)}`);

    if (result.length === 0) {
      return '';
    }

    const [first] = result;
    result.unshift(`M${first.substr(1)}`);

    return result.join(' ');
  }, [scale, segments]);
};
