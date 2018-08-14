// Copyright (c) 2018 Robert Rypuła - https://github.com/robertrypula/simple-tetris

import * as fromActions from './actions/actions';
import { IStore } from './store';

export const gameLoop = (
  store: IStore,
  time: number,
  keyCode: number
): void => {
  switch (keyCode) {
    case 0:
      store.dispatch(fromActions.moveUp());
      break;
    case 1:
      store.dispatch(fromActions.moveRight());
      break;
    case 2:
      store.dispatch(fromActions.moveDown());
      break;
    case 3:
      store.dispatch(fromActions.moveLeft());
      break;
  }
};
