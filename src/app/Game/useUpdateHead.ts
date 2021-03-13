import { Dispatch, MutableRefObject, SetStateAction, useCallback } from 'react';

import { calcNewHead } from './calcNewHead';
import { Direction, XY } from './types';

export type UseUpdateHead = (
  directionRef: MutableRefObject<false | Direction>,
  increaseRef: MutableRefObject<number>,
  dispatch: Dispatch<SetStateAction<XY[]>>,
) => () => void;

export const useUpdateHead: UseUpdateHead = (directionRef, increaseRef, dispatch) =>
  useCallback(() => {
    const direction = directionRef.current;

    if (!direction) {
      return;
    }

    dispatch((prev) => {
      const result = calcNewHead(prev, direction);

      if (increaseRef.current === 0) {
        result.pop();
      } else {
        increaseRef.current -= 1;
      }

      return result;
    });
  }, [directionRef, dispatch, increaseRef]);
