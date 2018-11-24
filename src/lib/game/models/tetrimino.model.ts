// Copyright (c) 2018 Robert Rypuła - https://github.com/robertrypula

export type Tetrimino = [
  boolean, boolean, boolean, boolean,
  boolean, boolean, boolean, boolean,
  boolean, boolean, boolean, boolean,
  boolean, boolean, boolean, boolean
];

export type TetriminoRotations = [Tetrimino, Tetrimino, Tetrimino, Tetrimino];
export type TetriminoList = TetriminoRotations[];

export enum TetriminoIndex { // TODO rename it to TetriminoType and add to ITetrimino interface (v2.0.0)
  I = 0,
  J = 1,
  L = 2,
  O = 3,
  S = 4,
  T = 5,
  Z = 6
}

export enum TetriminoRotation { // TODO add to ITetrimino interface (v2.0.0)
  DEGREE_0 = 0,
  DEGREE_90_CW = 1,
  DEGREE_180_CW = 2,
  DEGREE_270_CW = 3
}

export interface ITetrimino {
  index: number;
  rotation: number;
  x: number;
  y: number;
}

export const initialTetrimino: ITetrimino = {
  index: null,
  rotation: null,
  x: null,
  y: null
};
