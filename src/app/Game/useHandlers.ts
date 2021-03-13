import { useCallback } from 'react';

export type UseHandlers = (handlers: (() => void)[]) => () => void;

export const useHandlers: UseHandlers = (handlers) =>
  useCallback(() => handlers.forEach((handler) => handler()), [handlers]);
