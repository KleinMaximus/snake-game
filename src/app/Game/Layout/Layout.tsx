import React, { ReactNode } from 'react';

import css from './Layout.module.css';

export interface LayoutProps {
  notes: ReactNode;
  score?: number;
}

export const Layout: React.FC<LayoutProps> = ({ children, notes, score }) => (
  <div className={css.Container}>
    <header className={css.Header}>
      <div className={css.Score}>{typeof score === 'undefined' ? <br /> : <>Score: {score}</>}</div>
    </header>

    <section className={css.Content}>{children}</section>

    <footer className={css.Footer}>{notes || <br />}</footer>
  </div>
);
