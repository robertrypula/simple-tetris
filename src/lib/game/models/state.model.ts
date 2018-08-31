// Copyright (c) 2018 Robert Rypuła - https://github.com/robertrypula

import * as fromMatrixModel from './matrix.model';
import * as fromTetriminoModel from './tetrimino.model';

export interface IState {
  matrix: fromMatrixModel.IMatrix;
  tetrimino: fromTetriminoModel.ITetrimino;
}

export const initialState: IState = {
  matrix: fromMatrixModel.initialMatrix,
  tetrimino: fromTetriminoModel.initialTetrimino
};
