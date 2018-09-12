// Copyright (c) 2018 Robert Rypuła - https://github.com/robertrypula

export interface IAction {
  type: string;
}

export type Reducer<S> = (state: S, action: IAction) => S;

export interface IReducerMap<S> {
  [key: string]: Reducer<S>;
}

export class Store<S> {
  protected state: S;

  public constructor(
    protected reducer: Reducer<S>,
    preloadedState: S
  ) {
    this.state = preloadedState;
  }

  public dispatch(action: IAction) {
    this.state = this.reducer(this.state, action);
  }

  public getState(): S {
    return this.state;
  }
}
