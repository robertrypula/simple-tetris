// Copyright (c) 2018 Robert Rypuła - https://github.com/robertrypula

/*
 * This file provides very simple store functionality inspired by:
 *
 *   - Redux
 *     https://github.com/reduxjs/redux
 *
 *   - Redux Thunk
 *     https://github.com/reduxjs/redux-thunk
 *
 *   - NgRx
 *     https://github.com/ngrx/platform
 *
 */

export interface IAction {
  type: string;
}

export interface IThunkAction<S> extends IAction {
  executeThunk(store: S): void;
}

const isThunkAction = <S>(action: IAction | IThunkAction<SimpleStore<S>>): action is IThunkAction<SimpleStore<S>> => {
  return (action as IThunkAction<SimpleStore<S>>).executeThunk !== undefined;
};

export type Reducer<S> = (state: S, action: IAction) => S;

export interface IReducerMap<S> {
  [key: string]: Reducer<S>;
}

export class SimpleStore<S> {
  protected state: S;

  public constructor(
    protected reducer: Reducer<S>,
    preloadedState: S
  ) {
    this.state = preloadedState;
  }

  public dispatch(action: IAction | IThunkAction<SimpleStore<S>>) {
    if (!action) {
      throw new Error('Please provide valid action!');
    }

    // console.log(action.type, (action as any).payload);

    this.state = this.reducer(this.state, action);

    if (isThunkAction(action)) {
      action.executeThunk(this);
    }
  }

  public getState(): S {
    return this.state;
  }
}
