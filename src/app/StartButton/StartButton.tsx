import React, { DOMAttributes } from 'react';

import css from './StartButton.module.css';

export type StartButtonProps = Pick<DOMAttributes<HTMLButtonElement>, 'onClick'>;

export const StartButton: React.FC<StartButtonProps> = ({ children = 'START!', onClick }) => (
  <button className={css.Button} onClick={onClick}>
    {children}
  </button>
);
