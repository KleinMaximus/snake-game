import { MAX_INTERVAL, MIN_INTERVAL, SPEED_LEVELS } from './constants';

export type GetIntervalOptions = {
  count?: number;
  max?: number;
  min?: number;
};

export type GetInterval = (score: number, options?: GetIntervalOptions) => number;

export const getInterval: GetInterval = (
  score,
  { count = SPEED_LEVELS, max = MAX_INTERVAL, min = MIN_INTERVAL } = {},
) => Math.round(Math.max(min, max - ((max - min) / count) * score));
