import { MAX_INTERVAL, MIN_INTERVAL, PAUSE_CODE, SCALE, SIZE, SPEED_LEVELS } from '../../constants';
import { SettingsContext } from './types';

export type SettingsProvider = () => SettingsContext;

export const settingsProvider: SettingsProvider = () => ({
  maxInterval: MAX_INTERVAL,
  minInterval: MIN_INTERVAL,
  pauseCode: PAUSE_CODE,
  scale: SCALE,
  size: SIZE,
  speedLevels: SPEED_LEVELS,
});
