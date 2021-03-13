import { useMemo } from 'react';

const calcPosition = (value: number, size: number, shift = 0.5) => value * size + shift;

export type UsePath = (size: number, count: number) => string;

export const usePath: UsePath = (size, count) => {
  return useMemo(() => {
    const max = calcPosition(count, size, 1);

    const result: string[] = [];

    for (let x = 0; x <= count; x++) {
      result.push(`M${calcPosition(x, size)} 0`, `l0 ${max}`);
    }

    for (let y = 0; y <= count; y++) {
      result.push(`M0 ${calcPosition(y, size)}`, `l${max} 0`);
    }

    return result.join(' ');
  }, [count, size]);
};
