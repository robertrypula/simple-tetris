// Copyright (c) 2018 Robert Rypuła - https://github.com/robertrypula

import { IState } from '..';
import { TETRIMINO_LIST, TETRIMINO_ROTATIONS, TETRIMINO_SIZE_X, TETRIMINO_SIZE_Y } from '../constants';

export const isNotCollidingSelector = (
  offsetX: number = 0,
  offsetY: number = 0,
  offsetRotation: number = 0
) => {
  return (state: IState): boolean => {
    const rotation = (state.tetrimino.rotation + TETRIMINO_ROTATIONS + offsetRotation) % TETRIMINO_ROTATIONS;
    const tetrimino = TETRIMINO_LIST[state.tetrimino.index][rotation];
    const { blocks, sizeX, sizeY } = state.matrix;

    for (let y = 0; y < TETRIMINO_SIZE_Y; y++) {
      for (let x = 0; x < TETRIMINO_SIZE_X; x++) {
        const xInMatrix = state.tetrimino.x + offsetX + x;
        const yInMatrix = state.tetrimino.y + offsetY + y;

        if (
          tetrimino[y * TETRIMINO_SIZE_X + x] && ( // TODO move to helper function with name that will explain the logic
            xInMatrix < 0 || sizeX <= xInMatrix ||
            yInMatrix < 0 || sizeY <= yInMatrix ||
            blocks[yInMatrix * sizeX + xInMatrix]
          )
        ) {
          return false;
        }
      }
    }

    return true;
  };
};

export const matrixBlocksToRenderSelector = (state: IState): number[] => {
  const tetrimino = TETRIMINO_LIST[state.tetrimino.index][state.tetrimino.rotation];
  const { sizeX, sizeY } = state.matrix;
  const resultingBlocks = [...state.matrix.blocks];

  for (let y = 0; y < TETRIMINO_SIZE_Y; y++) {
    for (let x = 0; x < TETRIMINO_SIZE_X; x++) {
      const xInMatrix = state.tetrimino.x + x;
      const yInMatrix = state.tetrimino.y + y;

      if (
        0 <= xInMatrix && xInMatrix < sizeX &&   // TODO move to helper function with name that will explain the logic
        0 <= yInMatrix && yInMatrix < sizeY &&
        tetrimino[y * TETRIMINO_SIZE_X + x]
      ) {
        resultingBlocks[yInMatrix * sizeX + xInMatrix] = 1; // TODO here implement tetrimino colors in the future
      }
    }
  }

  return resultingBlocks;
};
