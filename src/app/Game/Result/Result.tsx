import { cnb } from 'cnbuilder';
import React from 'react';

import { Button } from '../../../ui';

import css from './Result.module.css';

export interface ResultProps {
  className?: string;
  onClick?: () => void;
  score: number;
}

export const Result: React.FC<ResultProps> = ({ children = 'Game over!', className, onClick, score }) => (
  <div className={cnb(className, css.Container)}>
    <div className={css.Content}>{children}</div>

    <div className={css.Score}>
      Your score is <b>{score}</b>
    </div>

    <Button autofocus className={css.Button} onClick={onClick}>
      Finish
    </Button>
  </div>
);
