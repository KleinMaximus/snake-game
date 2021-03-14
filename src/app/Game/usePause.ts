import { useCallback, useEffect, useState } from 'react';

import { useSettings } from '../../services';

export type UsePause = (inactive?: boolean) => [boolean, () => void];

export const usePause: UsePause = (inactive) => {
  const { pauseCode } = useSettings();
  const [state, setState] = useState(false);

  const resume = useCallback(() => setState(false), []);

  useEffect(() => {
    if (inactive) {
      return;
    }

    const eventHandler = (event: KeyboardEvent) => {
      if (event.code === pauseCode) {
        setState(true);
      }
    };

    document.addEventListener('keydown', eventHandler);

    return (): void => document.removeEventListener('keydown', eventHandler);
  }, [inactive, pauseCode]);

  return [state, resume];
};
