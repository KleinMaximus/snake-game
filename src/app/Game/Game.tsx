import React from 'react';

import { Apple } from './Apple';
import { Field } from './Field';
import { GameProps } from './Game.props';
import { Layout } from './Layout';
import { Notes } from './Notes';
import { Pause } from './Pause';
import { Result } from './Result';
import { Snake } from './Snake';
import { useApple } from './useApple';
import { useDirection } from './useDirection';
import { useFail } from './useFail';
import { useInitial } from './useInitial';
import { usePause } from './usePause';
import { useResult } from './useResult';
import { useScore } from './useScore';
import { useSnake } from './useSnake';
import { useSuccess } from './useSuccess';

import css from './Game.module.css';

export const Game: React.FC<GameProps> = ({ onFinish }) => {
  const [stopped, stop] = useResult();
  const [paused, resume] = usePause(stopped);
  const direction = useDirection(paused || stopped);
  const [score, changeScore] = useScore();
  const [snake, changeSnake] = useSnake(!paused && !stopped && direction, score, useInitial());
  const [apple, changeApple] = useApple(snake);
  const [x, y] = apple;

  useFail(snake, stop);
  useSuccess(apple, snake, changeScore, changeApple, changeSnake);

  return (
    <Layout notes={<Notes paused={paused} stopped={stopped} />} score={stopped ? undefined : score}>
      <div className={css.Content}>
        <Field>
          <Snake segments={snake} />
          <Apple x={x} y={y} />
        </Field>

        {paused && <Pause className={css.Result} onClick={resume} />}
        {stopped && <Result className={css.Result} score={score} onClick={onFinish} />}
      </div>
    </Layout>
  );
};
