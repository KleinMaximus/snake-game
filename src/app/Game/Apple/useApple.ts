import { useMemo } from 'react';

import { useSettings } from '../../../services';
import { normalizeCoords } from '../../../tools';

export type UseApplePosition = {
  cx: number;
  cy: number;
};

export interface UseAppleProps {
  x: number;
  y: number;
}

export type UseApple = (props: UseAppleProps) => UseApplePosition;

export const useApple: UseApple = ({ x, y }) => {
  const { scale } = useSettings();

  return useMemo(
    () => ({
      cx: normalizeCoords(x, scale),
      cy: normalizeCoords(y, scale),
    }),
    [scale, x, y],
  );
};
