// Copyright (c) 2018 Robert Rypuła - https://github.com/robertrypula

import * as fromTetriminoActions from './actions/tetrimino.actions';
import {
  KEY_CODE_HARD_DROP,
  KEY_CODE_LEFT,
  KEY_CODE_RIGHT,
  KEY_CODE_ROTATE
} from './constants';
import { Store } from './store';

export const gameLoopIteration: GameLoopIteration = (
  store: Store,
  time: number,
  keyCode: number
): void => {
  switch (keyCode) {
    case KEY_CODE_HARD_DROP:
      store.dispatch(new fromTetriminoActions.HardDropAction({
        matrixSizeY: store.getState().matrix.sizeY
      }));
      break;
    case KEY_CODE_LEFT:
      store.dispatch(new fromTetriminoActions.MoveLeftAction());
      break;
    case KEY_CODE_RIGHT:
      store.dispatch(new fromTetriminoActions.MoveRightAction());
      break;
    case KEY_CODE_ROTATE:
      store.dispatch(new fromTetriminoActions.RotateAction());
      break;
  }
};

/*
Dedicated 'GameLoopIteration' type solves the problem in the *.d.ts file:
  ERROR in node_modules/simple-tetris/dist/lib/game/game-loop-iteration.d.ts(1,49): error TS1110: Type expected.
  node_modules/simple-tetris/dist/lib/game/game-loop-iteration.d.ts(1,124): error TS1109: Expression expected.

It look like older typescript compilers does't understand types expressed as inline import:
  export declare const gameLoopIteration: (
    store: import("./simple-redux").SimpleStore<import("./models/state.model").IState>,
    time: number,
    keyCode: number
  ) => void;

TODO keep an eye on this problem
 */
export type GameLoopIteration = (store: Store, time: number, keyCode: number) => void;
