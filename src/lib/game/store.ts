// Copyright (c) 2018 Robert Rypuła - https://github.com/robertrypula

import { initializeMatrix } from './actions/actions';
import { IAction, IState, IStore, IStoreOptions, Reducer, StoreFactory } from './game.interface';
import { defaultStoreOptions, initialState } from './models/state';
import * as fromReducers from './reducers/reducers';

export class Store implements IStore {
  protected state: IState;

  public constructor(
    protected reducer: Reducer,
    protected storeOptions: IStoreOptions
  ) {
    this.state = initialState;

    // TODO remove it from here!!!!!!!!!!!!!!!!!!!
    this.dispatch(
      initializeMatrix(this.storeOptions.matrixSizeX, this.storeOptions.matrixSizeY)
    );
  }

  public dispatch<T extends IAction = IAction>(action: T) {
    this.state = this.reducer(this.state, action);
  }

  public getState(): IState {
    return this.state;
  }
}

export const createStore: StoreFactory = (storeOptions: IStoreOptions = defaultStoreOptions) => {
  return new Store(fromReducers.reducer, storeOptions);
};
