// Copyright (c) 2018 Robert Rypuła - https://github.com/robertrypula

import { initializeMatrix } from './actions/actions';
import { IAction, IState, IStore, IStoreOptions, Reducer, StoreFactory } from './game.interface';
import { defaultStoreOptions, initialState } from './models/state';
import * as fromReducers from './reducers/reducers';

export class Store implements IStore {
  protected state: IState;

  public constructor(
    protected reducer: Reducer,
    preloadedState: IState
  ) {
    this.state = preloadedState;
  }

  public dispatch<T extends IAction = IAction>(action: T) {
    this.state = this.reducer(this.state, action);
  }

  public getState(): IState {
    return this.state;
  }
}

export const createStore: StoreFactory = (
  storeOptions: IStoreOptions = defaultStoreOptions
): IStore => {
  const store = new Store(fromReducers.reducer, initialState);

  store.dispatch(
    initializeMatrix(storeOptions.matrixSizeX, storeOptions.matrixSizeY)
  );

  return store;
};
