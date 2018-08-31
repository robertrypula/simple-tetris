// Copyright (c) 2018 Robert Rypuła - https://github.com/robertrypula

import { IAction } from '../models/store.model';

export const INITIALIZE_MATRIX = 'INITIALIZE_MATRIX';

// -----------------------------------------

export interface IInitializeMatrixAction extends IAction {
  payload: {
    matrixSizeX: number,
    matrixSizeY: number
  };
}

// -----------------------------------------

export type MatrixActionsUnion =
  IInitializeMatrixAction;

// -----------------------------------------

export const initializeMatrix = (matrixSizeX: number, matrixSizeY: number): IInitializeMatrixAction => {
  return {
    payload: {
      matrixSizeX,
      matrixSizeY
    },
    type: INITIALIZE_MATRIX
  };
};
