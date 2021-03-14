import { useMemo } from 'react';

import { useSettings } from '../../../services';

export type UseStrokeWidth = () => number;

export const useStrokeWidth: UseStrokeWidth = () => {
  const { scale } = useSettings();

  return useMemo(() => Math.max(1, scale - 3), [scale]);
};
