// Copyright (c) 2018 Robert Rypuła - https://github.com/robertrypula

import { TETRIMINO_LIST } from '../constants';
import { IThunkAction } from '../simple-redux';
import { Store } from '../store';
import { getRandomInt } from '../utilities';
import { InitializeMatrixAction } from './matrix.actions';
import { InitNewAction } from './tetrimino.actions';

export const INITIALIZE_GAME_ACTION = 'INITIALIZE_GAME_ACTION';

/*tslint:disable:max-classes-per-file*/

export class InitializeGameAction implements IThunkAction<Store> {
  public readonly type = INITIALIZE_GAME_ACTION;

  public constructor(
    public payload: {
      matrixSizeX: number,
      matrixSizeY: number
    }
  ) { }

  public executeThunk(store: Store): void {
    const { matrixSizeX, matrixSizeY } = this.payload;

    store.dispatch(new InitializeMatrixAction({
      sizeX: matrixSizeX,
      sizeY: matrixSizeY
    }));

    store.dispatch(new InitNewAction({
      index: getRandomInt(0, TETRIMINO_LIST.length - 1),
      matrixSizeX
    }));
  }
}
