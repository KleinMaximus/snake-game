import { useMemo } from 'react';

import { useSettings } from '../../../services';

const calcPosition = (value: number, scale: number, shift = 0.5) => value * scale + shift;

export type UsePath = () => string;

export const usePath: UsePath = () => {
  const { scale, size } = useSettings();

  return useMemo(() => {
    const max = calcPosition(size, scale, 1);

    const result: string[] = [];

    for (let x = 0; x <= size; x++) {
      result.push(`M${calcPosition(x, scale)} 0`, `l0 ${max}`);
    }

    for (let y = 0; y <= size; y++) {
      result.push(`M0 ${calcPosition(y, scale)}`, `l${max} 0`);
    }

    return result.join(' ');
  }, [size, scale]);
};
