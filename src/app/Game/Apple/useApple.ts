import { useMemo } from 'react';

import { normalizeCoords } from '../../../tools';

export type UseApplePosition = {
  cx: number;
  cy: number;
};

export interface UseAppleProps {
  size: number;
  x: number;
  y: number;
}

export type UseApple = (props: UseAppleProps) => UseApplePosition;

export const useApple: UseApple = ({ size, x, y }) =>
  useMemo(
    () => ({
      cx: normalizeCoords(x, size),
      cy: normalizeCoords(y, size),
    }),
    [size, x, y],
  );
