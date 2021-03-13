import { useCallback, useState } from 'react';

export type UseStartResult = {
  finish: () => void;
  start: () => void;
  started: boolean;
};

export type UseStart = () => UseStartResult;

export const useStart: UseStart = () => {
  const [started, setStarted] = useState(false);
  const finish = useCallback(() => setStarted(false), []);
  const start = useCallback(() => setStarted(true), []);

  return { finish, start, started };
};
