import React from 'react';

import { usePath } from './usePath';

export interface GridProps {
  count: number;
  size: number;
  stroke?: string;
}

export const Grid: React.FC<GridProps> = ({ count, size, stroke = 'black' }) => {
  const path = usePath(size, count);

  return <path d={path} fillOpacity={0} stroke={stroke} strokeWidth="1" />;
};
