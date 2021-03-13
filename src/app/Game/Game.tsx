import React from 'react';

import { Apple } from './Apple';
import { CELL_SIZE, FIELD_SIZE } from './constants';
import { GameProps } from './Game.props';
import { getInterval } from './getInterval';
import { Grid } from './Grid';
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

export const Game: React.FC<GameProps> = ({ size = CELL_SIZE, count = FIELD_SIZE, onFinish }) => {
  const hw = size * count + 1;
  const [stopped, stop] = useResult();
  const initial = useInitial(count);
  const [paused, resume] = usePause(stopped);
  const direction = useDirection(paused || stopped);
  const [score, changeScore] = useScore();
  const [snake, changeSnake] = useSnake(!paused && !stopped && direction, getInterval(score), initial);
  const [apple, changeApple] = useApple(count, snake);
  const [x, y] = apple;

  useFail(snake, count, stop);
  useSuccess(apple, snake, changeScore, changeApple, changeSnake);

  return (
    <Layout notes={<Notes paused={paused} stopped={stopped} />} score={stopped ? undefined : score}>
      <div className={css.Content}>
        <svg height={hw} width={hw}>
          <Grid count={count} size={size} />
          <Snake segments={snake} size={size} />
          <Apple size={size} x={x} y={y} />
        </svg>

        {paused && <Pause className={css.Result} onClick={resume} />}
        {stopped && <Result className={css.Result} score={score} onClick={onFinish} />}
      </div>
    </Layout>
  );
};
