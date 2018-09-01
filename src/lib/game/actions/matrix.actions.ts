// Copyright (c) 2018 Robert Rypuła - https://github.com/robertrypula

import { IAction } from '../models/store.model';

export const INITIALIZE_MATRIX = 'INITIALIZE_MATRIX';

// -----------------------------------------

export interface IInitializeMatrixAction extends IAction {
  payload: {
    sizeX: number,
    sizeY: number
  };
}

// -----------------------------------------

export type MatrixActionsUnion =
  IInitializeMatrixAction;

// -----------------------------------------

export const initializeMatrix = (sizeX: number, sizeY: number): IInitializeMatrixAction => {
  return {
    payload: {
      sizeX,
      sizeY
    },
    type: INITIALIZE_MATRIX
  };
};
