import { useMemo } from 'react';

import { useSettings } from '../../services';
import { XY } from './types';

export type UseInitial = () => XY[];

export const useInitial: UseInitial = () => {
  const { size } = useSettings();

  return useMemo(() => {
    const value = Math.floor(size / 2);

    return [[value, value]];
  }, [size]);
};
