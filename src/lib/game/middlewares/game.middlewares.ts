// Copyright (c) 2018 Robert Rypuła - https://github.com/robertrypula

import { InitializeMatrixAction } from '../actions/matrix.actions';
import { InitNewAction } from '../actions/tetrimino.actions';
import { TETRIMINO_LIST } from '../constants';
import { Store } from '../store';
import { getRandomInt } from '../utilities';

export class InitializeMiddleware {
  public constructor(
    public payload: {
      matrixSizeX: number,
      matrixSizeY: number
    }
  ) { }

  public execute(store: Store) {
    store.dispatch(new InitializeMatrixAction({
      sizeX: this.payload.matrixSizeX,
      sizeY: this.payload.matrixSizeY
    }));

    store.dispatch(new InitNewAction({
      index: getRandomInt(0, TETRIMINO_LIST.length - 1),
      matrixSizeX: store.getState().matrix.sizeX
    }));
  }
}
