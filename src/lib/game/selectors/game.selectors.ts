// Copyright (c) 2018 Robert Rypuła - https://github.com/robertrypula

import {
  IState,
  Matrix,
  TETRIMINO_LIST,
  TETRIMINO_SIZE_X,
  TETRIMINO_SIZE_Y
} from '..';

export const fullMatrixSelector = (state: IState): Matrix => {
  const fullMatrix = [...state.matrix];

  for (let y = 0; y < state.matrixSizeY; y++) {
    for (let x = 0; x < state.matrixSizeX; x++) {
      if (isBlockOccupiedByTetrimino(x, y)(state)) {
        fullMatrix[y * state.matrixSizeX + x] = 1;
      }
    }
  }

  return fullMatrix;
};

export const isBlockOccupiedByTetrimino = (x: number, y: number) => {
  return (state: IState): boolean => {
    const tetrimino = TETRIMINO_LIST[state.tetriminoIndex][state.tetriminoRotation];
    const xInTetrimino = x - state.tetriminoX;
    const yInTetrimino = y - state.tetriminoY;

    return (
      xInTetrimino >= 0 && xInTetrimino < TETRIMINO_SIZE_X &&
      yInTetrimino >= 0 && yInTetrimino < TETRIMINO_SIZE_Y &&
      tetrimino[yInTetrimino * TETRIMINO_SIZE_X + xInTetrimino]
    );
  };
};
