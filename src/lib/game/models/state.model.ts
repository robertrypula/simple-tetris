// Copyright (c) 2018 Robert Rypuła - https://github.com/robertrypula

import { IMatrix, initialMatrix } from './matrix.model';
import { initialTetrimino, ITetrimino } from './tetrimino.model';

export interface IState {
  matrix: IMatrix;
  tetrimino: ITetrimino;
}

export const initialState: IState = {
  matrix: initialMatrix,
  tetrimino: initialTetrimino
};
