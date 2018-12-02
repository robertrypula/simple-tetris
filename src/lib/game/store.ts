// Copyright (c) 2018 Robert Rypuła - https://github.com/robertrypula

import * as fromGameLoopActions from './actions/game-loop.actions';
import * as fromMatrixActions from './actions/matrix.actions';
import { DEFAULT_CREATE_STORE_TIME, DEFAULT_MATRIX_SIZE_X, DEFAULT_MATRIX_SIZE_Y } from './constants';
import { IState } from './models/state.model';
import { stateReducer } from './reducers/state.reducer';
import { SimpleStore } from './simple-redux';
import { getTimeStep } from './utilities';

export type Store = SimpleStore<IState>;

export interface ICreateStoreOptions {
  matrixSizeX?: number;
  matrixSizeY?: number;
  time?: number;
}

export type StoreFactory = (options?: ICreateStoreOptions) => Store;

export const createStore: StoreFactory = (options?: ICreateStoreOptions): Store => {
  const store: Store = new SimpleStore<IState>(stateReducer);

  store.dispatch(new fromMatrixActions.InitializeMatrixAction({
    sizeX: (options && options.matrixSizeX) || DEFAULT_MATRIX_SIZE_X,
    sizeY: (options && options.matrixSizeY) || DEFAULT_MATRIX_SIZE_Y
  }));

  store.dispatch(new fromGameLoopActions.StartNewGameAction({
    timeStep: getTimeStep((options && options.time) || DEFAULT_CREATE_STORE_TIME)
  }));

  return store;
};
