import { cnb } from 'cnbuilder';
import React, { DOMAttributes, HTMLAttributes, useEffect, useRef } from 'react';

import css from './Button.module.css';

type ParentProps = Pick<DOMAttributes<HTMLButtonElement>, 'onClick'> &
  Pick<HTMLAttributes<HTMLButtonElement>, 'className' | 'style'>;

export interface ButtonProps extends ParentProps {
  autofocus?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ autofocus, className, children = 'START!', onClick }) => {
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (autofocus && ref.current) {
      ref.current.focus();
    }
  }, [autofocus]);

  return (
    <button ref={ref} className={cnb(css.Button, className)} onClick={onClick}>
      {children}
    </button>
  );
};
