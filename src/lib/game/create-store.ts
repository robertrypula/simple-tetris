// Copyright (c) 2018 Robert Rypuła - https://github.com/robertrypula

import { InitializeMatrixAction } from './actions/matrix.actions';
import { InitNewAction } from './actions/tetrimino.actions';
import { DEFAULT_MATRIX_SIZE_X, DEFAULT_MATRIX_SIZE_Y, TETRIMINO_LIST } from './constants';
import { initialState, IState } from './models/state.model';
import * as fromReducers from './reducers/game.reducer';
import { IStore, Store } from './simple-redux';
import { getRandomInt } from './utils/utils';

export type GameStore = IStore<IState>;

export interface ICreateStoreOptions {
  matrixSizeX: number;
  matrixSizeY: number;
}

export type StoreFactory = (createStoreOptions?: ICreateStoreOptions) => GameStore;

export const createStore: StoreFactory = (
  createStoreOptions?: ICreateStoreOptions
): GameStore => {
  const store: GameStore = new Store<IState>(fromReducers.reducer, initialState);

  store.dispatch(new InitializeMatrixAction({
    sizeX: createStoreOptions && createStoreOptions.matrixSizeX
      ? createStoreOptions.matrixSizeX
      : DEFAULT_MATRIX_SIZE_X,
    sizeY: createStoreOptions && createStoreOptions.matrixSizeY
      ? createStoreOptions.matrixSizeY
      : DEFAULT_MATRIX_SIZE_Y
  }));

  store.dispatch(new InitNewAction({
    index: getRandomInt(0, TETRIMINO_LIST.length - 1),
    matrixSizeX: store.getState().matrix.sizeX
  }));

  return store;
};
