import React from 'react';

import { useHW } from './useHW';
import { usePath } from './usePath';

export interface FieldProps {
  stroke?: string;
}

export const Field: React.FC<FieldProps> = ({ children, stroke = 'black' }) => {
  const path = usePath();
  const hw = useHW();

  return (
    <svg height={hw} width={hw}>
      <path d={path} fillOpacity={0} stroke={stroke} strokeWidth="1" />

      {children}
    </svg>
  );
};
