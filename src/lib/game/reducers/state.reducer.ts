// Copyright (c) 2018 Robert Rypuła - https://github.com/robertrypula

import { IState } from '..';
import { MatrixActionsUnion } from '../actions/matrix.actions';
import { TetriminoActionsUnion } from '../actions/tetrimino.actions';
import { Reducer } from '../simple-redux';
import { matrixReducer } from './matrix.reducer';
import { tetriminoReducer } from './tetrimino.reducer';

export const stateReducer: Reducer<IState> = (
  state: IState,
  action: MatrixActionsUnion | TetriminoActionsUnion
): IState => {
  return {
    matrix: matrixReducer(state.matrix, action),
    tetrimino: tetriminoReducer(state.tetrimino, action)
  };
};
