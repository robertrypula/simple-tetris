// Copyright (c) 2018 Robert Rypuła - https://github.com/robertrypula

export type Tetrimino = [
  boolean, boolean, boolean, boolean,
  boolean, boolean, boolean, boolean,
  boolean, boolean, boolean, boolean,
  boolean, boolean, boolean, boolean
];

export type TetriminoRotations = [Tetrimino, Tetrimino, Tetrimino, Tetrimino];
export type TetriminoList = TetriminoRotations[];

export type Matrix = number[];

export interface IState {
  matrix: Matrix;
  matrixSizeX: number;
  matrixSizeY: number;
  tetriminoIndex: number;
  tetriminoRotation: number;
  tetriminoX: number;
  tetriminoY: number;
}

export const initialState: IState = {
  matrix: [],
  matrixSizeX: null,
  matrixSizeY: null,
  tetriminoIndex: 0,
  tetriminoRotation: 0,
  tetriminoX: 0,           // TODO it will be different on other matrix sizes
  tetriminoY: 0
};
