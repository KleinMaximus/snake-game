import React from 'react';

import { XY } from '../types';
import { usePath } from './usePath';

export interface SnakeProps {
  segments: XY[];
  size: number;
}

export const Snake: React.FC<SnakeProps> = ({ segments, size }) => {
  const path = usePath(size, segments);

  return <path d={path} fillOpacity={0} stroke="darkgreen" strokeLinecap="round" strokeWidth={size - 3} />;
};
