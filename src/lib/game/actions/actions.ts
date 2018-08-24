// Copyright (c) 2018 Robert Rypuła - https://github.com/robertrypula

import * as fromAI from './actions.interface';

export const HARD_DROP = 'HARD_DROP';
export const INITIALIZE_MATRIX = 'INITIALIZE_MATRIX';
export const MOVE_LEFT = 'MOVE_LEFT';
export const MOVE_RIGHT = 'MOVE_RIGHT';
export const ROTATE = 'ROTATE';

export const hardDrop = (): fromAI.IHardDropAction => {
  return {
    type: HARD_DROP
  };
};

export const initializeMatrix = (matrixSizeX: number, matrixSizeY: number): fromAI.IInitializeMatrixAction => {
  return {
    payload: {
      matrixSizeX,
      matrixSizeY
    },
    type: INITIALIZE_MATRIX
  };
};

export const moveLeft = (): fromAI.IMoveLeftAction => {
  return {
    type: MOVE_LEFT
  };
};

export const moveRight = (): fromAI.IMoveRightAction => {
  return {
    type: MOVE_RIGHT
  };
};

export const rotate = (): fromAI.IRotateAction => {
  return {
    type: ROTATE
  };
};
