// Copyright (c) 2018 Robert Rypuła - https://github.com/robertrypula

import { IState } from '..';
import * as fromConstants from '../constants';

export const isAbleToMoveSelector = (x: number, y: number) => {
  return (state: IState): boolean => {
    return true;
  };
};

export const isAbleToRotateSelector =
  (state: IState): boolean => {
    return true;
  };

export const isBlockOccupiedByTetriminoSelector = (x: number, y: number) => {
  return (state: IState): boolean => {
    const tetrimino = fromConstants.TETRIMINO_LIST[state.tetrimino.index][state.tetrimino.rotation];
    const xInTetrimino = x - state.tetrimino.x;
    const yInTetrimino = y - state.tetrimino.y;

    return (
      xInTetrimino >= 0 && xInTetrimino < fromConstants.TETRIMINO_SIZE_X &&
      yInTetrimino >= 0 && yInTetrimino < fromConstants.TETRIMINO_SIZE_Y &&
      tetrimino[yInTetrimino * fromConstants.TETRIMINO_SIZE_X + xInTetrimino]
    );
  };
};

export const matrixBlocksToRenderSelector = (state: IState): number[] => {
  const { sizeX, sizeY } = state.matrix;
  const fullMatrix = [...state.matrix.blocks];

  for (let y = 0; y < sizeY; y++) {
    for (let x = 0; x < sizeX; x++) {
      if (isBlockOccupiedByTetriminoSelector(x, y)(state)) {
        fullMatrix[y * sizeX + x] = 1;
      }
    }
  }

  return fullMatrix;
};
