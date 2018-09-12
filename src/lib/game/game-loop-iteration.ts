// Copyright (c) 2018 Robert Rypuła - https://github.com/robertrypula

import * as fromTetriminoActions from './actions/tetrimino.actions';
import {
  KEY_CODE_HARD_DROP,
  KEY_CODE_LEFT,
  KEY_CODE_RIGHT,
  KEY_CODE_ROTATE
} from './constants';
import { GameStore } from './create-store';

export const gameLoopIteration = (
  store: GameStore,
  time: number,
  keyCode: number
): void => {
  switch (keyCode) {
    case KEY_CODE_ROTATE:
      store.dispatch(new fromTetriminoActions.RotateAction());
      break;
    case KEY_CODE_LEFT:
      store.dispatch(new fromTetriminoActions.MoveLeftAction());
      break;
    case KEY_CODE_RIGHT:
      store.dispatch(new fromTetriminoActions.MoveRightAction());
      break;
    case KEY_CODE_HARD_DROP:
      store.dispatch(new fromTetriminoActions.HardDropAction({
        matrixSizeY: store.getState().matrix.sizeY
      }));
      break;
  }
};
