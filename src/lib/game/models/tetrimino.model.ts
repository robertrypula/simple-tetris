// Copyright (c) 2018 Robert Rypuła - https://github.com/robertrypula

export type Tetrimino = [
  boolean, boolean, boolean, boolean,
  boolean, boolean, boolean, boolean,
  boolean, boolean, boolean, boolean,
  boolean, boolean, boolean, boolean
  ];

export type TetriminoRotations = [Tetrimino, Tetrimino, Tetrimino, Tetrimino];
export type TetriminoList = TetriminoRotations[];

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
