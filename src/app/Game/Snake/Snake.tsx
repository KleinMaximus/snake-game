import React from 'react';

import { XY } from '../types';
import { usePath } from './usePath';
import { useStrokeWidth } from './useStrokeWidth';

export interface SnakeProps {
  segments: XY[];
  stroke?: string;
}

export const Snake: React.FC<SnakeProps> = ({ segments, stroke = 'darkgreen' }) => {
  const path = usePath(segments);
  const strokeWidth = useStrokeWidth();

  return <path d={path} fillOpacity={0} stroke={stroke} strokeLinecap="round" strokeWidth={strokeWidth} />;
};
