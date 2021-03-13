import { Direction, XY } from './types';

export type CalcNewHead = (prev: XY[], direction: Direction) => XY[];

export const calcNewHead: CalcNewHead = (prev, direction) => {
  const result = [...prev];

  let [[x, y]] = result;

  if ('x' in direction) {
    x += direction.x;
  }

  if ('y' in direction) {
    y += direction.y;
  }

  result.unshift([x, y]);

  return result;
};
