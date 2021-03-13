import React from 'react';

import { Game } from './Game';
import { StartButton } from './StartButton';
import { useStart } from './useStart';

import css from './App.module.css';

export const App: React.FC = () => {
  const { finish, start, started } = useStart();

  const content = started ? <Game onFinish={finish} /> : <StartButton onClick={start} />;

  return <div className={css.Layout}>{content}</div>;
};
