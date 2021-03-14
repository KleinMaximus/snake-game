import { cnb } from 'cnbuilder';
import React from 'react';

import { Button } from '../../../ui';

import css from './Pause.module.css';

export interface PauseProps {
  className?: string;
  onClick?: () => void;
}

export const Pause: React.FC<PauseProps> = ({ children = 'Paused', className, onClick }) => (
  <div className={cnb(className, css.Container)}>
    <div className={css.Content}>{children}</div>

    <Button autofocus className={css.Button} onClick={onClick}>
      Resume
    </Button>
  </div>
);
