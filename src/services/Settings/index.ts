import constate from 'constate';

import { settingsProvider } from './settingsProvider';

const [SettingsProvider, useSettings] = constate(settingsProvider);

export { SettingsProvider, useSettings };
export * from './types';
