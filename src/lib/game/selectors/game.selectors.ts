// Copyright (c) 2018 Robert Rypuła - https://github.com/robertrypula

import { IState } from '..';
import {
  TETRIMINO_LIST,
  TETRIMINO_SIZE_X,
  TETRIMINO_SIZE_Y
} from '../constants';

export const matrixBlocksToRenderSelector = (state: IState): number[] => {
  const { sizeX, sizeY } = state.matrix;
  const fullMatrix = [...state.matrix.blocks];

  for (let y = 0; y < sizeY; y++) {
    for (let x = 0; x < sizeX; x++) {
      if (isBlockOccupiedByTetrimino(x, y)(state)) {
        fullMatrix[y * sizeX + x] = 1;
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
