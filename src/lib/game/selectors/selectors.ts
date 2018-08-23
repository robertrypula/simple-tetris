// Copyright (c) 2018 Robert Rypuła - https://github.com/robertrypula

import { MATRIX_SIZE_X, MATRIX_SIZE_Y, TETRIMINO_LIST, TETRIMINO_SIZE_X, TETRIMINO_SIZE_Y } from '../constants';
import { IState, Matrix } from '../game.interface';

export const fullMatrixSelector = (state: IState): Matrix => {
  const fullMatrix = [...state.matrix];

  for (let y = 0; y < MATRIX_SIZE_Y; y++) {
    for (let x = 0; x < MATRIX_SIZE_X; x++) {
      if (isBlockOccupiedByTetrimino(x, y)(state)) {
        fullMatrix[y * MATRIX_SIZE_X + x] = 1;
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
