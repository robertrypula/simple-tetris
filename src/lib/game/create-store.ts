// Copyright (c) 2018 Robert Rypuła - https://github.com/robertrypula

import { initializeMatrix } from './actions/matrix.actions';
import { initNew } from './actions/tetrimino.actions';
import { TETRIMINO_LIST } from './constants';
import { initialState } from './models/state.model';
import { IStore, Store } from './models/store.model';
import * as fromReducers from './reducers/game.reducer';
import { getRandomInt } from './utils/utils';

export interface ICreateStoreOptions {
  matrixSizeX: number;
  matrixSizeY: number;
}

export type StoreFactory = (createStoreOptions?: ICreateStoreOptions) => IStore;

const defaultStoreOptions: ICreateStoreOptions = {
  matrixSizeX: 10,  // values comes from Classic Tetris implementation
  matrixSizeY: 20   // values comes from Classic Tetris implementation
};

export const createStore: StoreFactory = (
  createStoreOptions: ICreateStoreOptions = defaultStoreOptions
): IStore => {
  const store = new Store(fromReducers.reducer, initialState);

  createStoreOptions = createStoreOptions
    ? createStoreOptions
    : defaultStoreOptions;

  store.dispatch(
    initializeMatrix(createStoreOptions.matrixSizeX, createStoreOptions.matrixSizeY)
  );

  store.dispatch(
    initNew(getRandomInt(0, TETRIMINO_LIST.length - 1), store.getState().matrix.sizeX)
  );

  return store;
};
