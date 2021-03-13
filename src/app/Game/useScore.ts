import { useCallback, useState } from 'react';

export type UseScore = (initial?: number) => [number, () => void];

export const useScore: UseScore = (initial = 0) => {
  const [state, setState] = useState(initial);
  const increase = useCallback(() => setState((prev) => prev + 1), [setState]);

  return [state, increase];
};
