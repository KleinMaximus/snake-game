import React from 'react';

import { useSettings } from '../../../services';
import { useApple, UseAppleProps } from './useApple';

export type AppleProps = UseAppleProps;

export const Apple: React.FC<AppleProps> = (props) => {
  const { scale } = useSettings();
  const coords = useApple(props);

  return <circle fill="red" r={scale / 2 - 2} {...coords} />;
};
