import React, { DOMAttributes } from 'react';

import { Button } from '../../ui';

import css from './StartButton.module.css';

export type StartButtonProps = Pick<DOMAttributes<HTMLButtonElement>, 'onClick'>;

export const StartButton: React.FC<StartButtonProps> = ({ children = 'START!', onClick }) => {
  return (
    <Button className={css.Button} onClick={onClick}>
      {children}
    </Button>
  );
};
