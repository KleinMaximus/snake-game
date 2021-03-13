import { cnb } from 'cnbuilder';
import React, { useEffect, useRef } from 'react';

import css from './Result.module.css';

export interface ResultProps {
  className?: string;
  onClick?: () => void;
  score: number;
}

export const Result: React.FC<ResultProps> = ({ children = 'Game over!', className, onClick, score }) => {
  const button = useRef<HTMLButtonElement>(null);

  useEffect(() => button?.current?.focus(), []);

  return (
    <div className={cnb(className, css.Container)}>
      <div className={css.Content}>{children}</div>

      <div className={css.Score}>
        Your score is <b>{score}</b>
      </div>

      <button ref={button} className={css.Button} onClick={onClick}>
        Finish
      </button>
    </div>
  );
};
