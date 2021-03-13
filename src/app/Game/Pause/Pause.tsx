import { cnb } from 'cnbuilder';
import React, { useEffect, useRef } from 'react';

import css from './Pause.module.css';

export interface PauseProps {
  className?: string;
  onClick?: () => void;
}

export const Pause: React.FC<PauseProps> = ({ children = 'Paused', className, onClick }) => {
  const button = useRef<HTMLButtonElement>(null);

  useEffect(() => button?.current?.focus(), []);

  return (
    <div className={cnb(className, css.Container)}>
      <div className={css.Content}>{children}</div>

      <button ref={button} className={css.Button} onClick={onClick}>
        Resume
      </button>
    </div>
  );
};
