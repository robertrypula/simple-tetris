// Copyright (c) 2018 Robert Rypuła - https://github.com/robertrypula

import { IState } from '..';
import { Reducer } from '../models/store.model';
import { matrixReducer } from './matrix.reducer';
import { tetriminoReducer } from './tetrimino.reducer';

export const reducer: Reducer<IState> = (
  state: IState,
  action: fromActions.ActionsUnion
) => {
  return {
    matrix: matrixReducer(state.matrix, action),
    tetrimino: tetriminoReducer(state.tetrimino, action)
  };
};

/*
  // TODO check if it's possible to get rid of 'as' in switch
  // https://github.com/ngrx/platform/blob/master/docs/store/actions.md#action-reducers
  // key is probably the: dispatch<V extends Action = Action>(action: V): void;
  // see https://github.com/ngrx/platform/blob/master/modules/store/src/store.ts#L83

  // see https://medium.com/@wittydeveloper/typescript-generics-and-overloads-999679d121cf
  //        -> Generics can “extends”

  // https://brightinventions.pl/blog/using-typescript-with-redux/

 */
