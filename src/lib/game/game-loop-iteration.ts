// Copyright (c) 2018 Robert Rypuła - https://github.com/robertrypula

import { IStore } from '..';
import * as fromTetriminoActions from './actions/tetrimino.actions';
import {
  KEY_CODE_HARD_DROP,
  KEY_CODE_LEFT,
  KEY_CODE_RIGHT,
  KEY_CODE_ROTATE
} from './constants';

export const gameLoopIteration = (
  store: IStore,
  time: number,
  keyCode: number
): void => {
  switch (keyCode) {
    case KEY_CODE_ROTATE:
      store.dispatch(fromTetriminoActions.rotate());
      break;
    case KEY_CODE_LEFT:
      store.dispatch(fromTetriminoActions.moveLeft());
      break;
    case KEY_CODE_RIGHT:
      store.dispatch(fromTetriminoActions.moveRight());
      break;
    case KEY_CODE_HARD_DROP:
      store.dispatch(fromTetriminoActions.hardDrop(store.getState().matrix.sizeY));
      break;
  }
};
