import React from 'react';

import { useApple, UseAppleProps } from './useApple';

export type AppleProps = UseAppleProps;

export const Apple: React.FC<AppleProps> = (props) => {
  const { size } = props;
  const coords = useApple(props);

  return <circle fill="red" r={size / 2 - 2} {...coords} />;
};
