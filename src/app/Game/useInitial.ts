import { useMemo } from 'react';

import { XY } from './types';

export type UseInitial = (size: number) => XY[];

export const useInitial: UseInitial = (size) =>
  useMemo(() => {
    const value = Math.floor(size / 2);

    return [[value, value]];
  }, [size]);
