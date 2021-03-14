import { useMemo } from 'react';

import { useSettings } from '../../services';

export type UseInterval = (score: number) => number;

export const useInterval: UseInterval = (score) => {
  const { maxInterval, minInterval, speedLevels } = useSettings();

  return useMemo(
    () => Math.round(Math.max(minInterval, maxInterval - ((maxInterval - minInterval) / speedLevels) * score)),
    [maxInterval, minInterval, score, speedLevels],
  );
};
