// Copyright (c) 2018 Robert Rypuła - https://github.com/robertrypula/simple-tetris

import { IAction } from './actions/actions';
import { initialState, IState } from './models/state';
import { Reducer } from './reducers/reducers';

export interface IStore {
  dispatch(action: IAction): void;
  getState(): IState;
}

export interface IStoreStatic {
  new(reducer: Reducer): IStore;
}

export class Store implements IStore {
  protected state: IState;

  constructor(
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
