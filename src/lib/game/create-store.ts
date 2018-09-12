// Copyright (c) 2018 Robert Rypuła - https://github.com/robertrypula

import { InitializeMatrixAction } from './actions/matrix.actions';
import { InitNewAction } from './actions/tetrimino.actions';
import { DEFAULT_MATRIX_SIZE_X, DEFAULT_MATRIX_SIZE_Y, TETRIMINO_LIST } from './constants';
import { initialState, IState } from './models/state.model';
import { rootReducer } from './reducers/root.reducer';
import { Store as SimpleReduxStore } from './simple-redux';
import { getRandomInt } from './utils/utils';

export type Store = SimpleReduxStore<IState>;

export interface ICreateStoreOptions {
  matrixSizeX: number;
  matrixSizeY: number;
}

export type StoreFactory = (options?: ICreateStoreOptions) => Store;

export const createStore: StoreFactory = (options?: ICreateStoreOptions): Store => {
  const store: Store = new SimpleReduxStore<IState>(rootReducer, initialState);

  store.dispatch(new InitializeMatrixAction({
    sizeX: options && options.matrixSizeX ? options.matrixSizeX : DEFAULT_MATRIX_SIZE_X,
    sizeY: options && options.matrixSizeY ? options.matrixSizeY : DEFAULT_MATRIX_SIZE_Y
  }));

  store.dispatch(new InitNewAction({
    index: getRandomInt(0, TETRIMINO_LIST.length - 1),
    matrixSizeX: store.getState().matrix.sizeX
  }));

  return store;
};
