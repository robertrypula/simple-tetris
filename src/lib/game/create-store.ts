// Copyright (c) 2018 Robert Rypuła - https://github.com/robertrypula

import { initializeMatrix } from './actions/game.actions';
import { initialState } from './models/state.model';
import { IStore, Store } from './models/store.model';
import * as fromReducers from './reducers/game.reducer';

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

  return store;
};
