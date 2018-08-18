// Copyright (c) 2018 Robert Rypuła - https://github.com/robertrypula/simple-tetris

import { IAction, IState, IStore, Reducer } from './game.interface';
import { initialState } from './models/state';

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
