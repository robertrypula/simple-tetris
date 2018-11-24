// Copyright (c) 2018 Robert Rypuła - https://github.com/robertrypula

import { IMatrix } from './matrix.model';
import { ITetrimino } from './tetrimino.model';

export interface IState {
  matrix: IMatrix;
  tetrimino: ITetrimino;
}

export const initialState: IState = {
  matrix: undefined,
  tetrimino: undefined
};
