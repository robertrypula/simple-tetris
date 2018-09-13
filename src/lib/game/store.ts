// Copyright (c) 2018 Robert Rypuła - https://github.com/robertrypula

import { InitializeGameAction } from './actions/game.actions';
import { DEFAULT_MATRIX_SIZE_X, DEFAULT_MATRIX_SIZE_Y } from './constants';
import { initialState, IState } from './models/state.model';
import { stateReducer } from './reducers/state.reducer';
import { SimpleStore } from './simple-redux';

export type Store = SimpleStore<IState>;

export interface ICreateStoreOptions {
  matrixSizeX: number;
  matrixSizeY: number;
}

export type StoreFactory = (options?: ICreateStoreOptions) => Store;

export const createStore: StoreFactory = (options?: ICreateStoreOptions): Store => {
  const store: Store = new SimpleStore<IState>(stateReducer, initialState);

  store.dispatch(new InitializeGameAction({
    matrixSizeX: options && options.matrixSizeX ? options.matrixSizeX : DEFAULT_MATRIX_SIZE_X,
    matrixSizeY: options && options.matrixSizeY ? options.matrixSizeY : DEFAULT_MATRIX_SIZE_Y
  }));

  return store;
};
