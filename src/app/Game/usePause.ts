import { useCallback, useEffect, useState } from 'react';

export type UsePause = (inactive?: boolean) => [boolean, () => void];

export const usePause: UsePause = (inactive) => {
  const [state, setState] = useState(false);

  const resume = useCallback(() => setState(false), []);

  useEffect(() => {
    if (inactive) {
      return;
    }

    const eventHandler = (event: KeyboardEvent) => {
      if (event.code === 'Space') {
        setState(true);
      }
    };

    document.addEventListener('keydown', eventHandler);

    return (): void => document.removeEventListener('keydown', eventHandler);
  }, [inactive]);

  return [state, resume];
};
