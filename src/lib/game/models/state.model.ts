// Copyright (c) 2018 Robert Rypuła - https://github.com/robertrypula

import { IGame } from './game.model';
import { IMatrix } from './matrix.model';
import { ITetrimino } from './tetrimino.model';

export interface IState {
  game: IGame;
  matrix: IMatrix;
  tetrimino: ITetrimino;
}

export const initialState: IState = {
  game: undefined,
  matrix: undefined,
  tetrimino: undefined
};
