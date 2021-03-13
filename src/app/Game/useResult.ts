import { useCallback, useState } from 'react';

export type UseResult = (initial?: boolean) => [boolean, () => void];

export const useResult: UseResult = () => {
  const [state, setState] = useState(false);

  const change = useCallback(() => setState(true), []);

  return [state, change];
};
