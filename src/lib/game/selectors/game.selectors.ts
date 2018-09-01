// Copyright (c) 2018 Robert Rypuła - https://github.com/robertrypula

import {
  IState,
  TETRIMINO_LIST,
  TETRIMINO_SIZE_X,
  TETRIMINO_SIZE_Y
} from '..';

export const fullMatrixSelector = (state: IState): number[] => {
  const fullMatrix = [...state.matrix.blocks];

  for (let y = 0; y < state.matrix.sizeY; y++) {
    for (let x = 0; x < state.matrix.sizeX; x++) {
      if (isBlockOccupiedByTetrimino(x, y)(state)) {
        fullMatrix[y * state.matrix.sizeX + x] = 1;
      }
    }
  }

  return fullMatrix;
};

export const isBlockOccupiedByTetrimino = (x: number, y: number) => {
  return (state: IState): boolean => {
    const tetrimino = TETRIMINO_LIST[state.tetrimino.index][state.tetrimino.rotation];
    const xInTetrimino = x - state.tetrimino.x;
    const yInTetrimino = y - state.tetrimino.y;

    return (
      xInTetrimino >= 0 && xInTetrimino < TETRIMINO_SIZE_X &&
      yInTetrimino >= 0 && yInTetrimino < TETRIMINO_SIZE_Y &&
      tetrimino[yInTetrimino * TETRIMINO_SIZE_X + xInTetrimino]
    );
  };
};
