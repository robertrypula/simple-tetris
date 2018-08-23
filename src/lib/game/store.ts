// Copyright (c) 2018 Robert Rypuła - https://github.com/robertrypula/simple-tetris

import { IAction, IState, IStore, Reducer, StoreFactory } from './game.interface';
import { initialState } from './models/state';
import * as fromReducers from './reducers/reducers';

export class Store implements IStore {
  protected state: IState;

  public constructor(
    protected reducer: Reducer
  ) {
    this.state = initialState;
  }

  public dispatch(action: IAction) {
    this.state = this.reducer(this.state, action);
  }

  public getState(): IState {
    return this.state;
  }
}

export const createStore: StoreFactory = () => {
  return new Store(fromReducers.reducer);
};
