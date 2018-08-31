// Copyright (c) 2018 Robert Rypuła - https://github.com/robertrypula

import { IStore } from '..';
import * as fromActions from './actions/game.actions';
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
      store.dispatch(fromActions.rotate());
      break;
    case KEY_CODE_LEFT:
      store.dispatch(fromActions.moveLeft());
      break;
    case KEY_CODE_RIGHT:
      store.dispatch(fromActions.moveRight());
      break;
    case KEY_CODE_HARD_DROP:
      store.dispatch(fromActions.hardDrop());
      break;
  }
};
