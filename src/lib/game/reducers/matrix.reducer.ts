// Copyright (c) 2018 Robert Rypuła - https://github.com/robertrypula

import { IMatrix } from '../models/matrix.model';
import { Reducer } from '../models/store.model';

const initializeMatrix = (state: IMatrix, action: fromActions.IInitializeMatrixAction): IMatrix => {
  return {
    ...state,
    sizeX: action.payload.sizeX,
    sizeY: action.payload.sizeY
  };
};

export const matrixReducer: Reducer<IMatrix> = (
  state: IMatrix,
  action: fromActions.ActionsUnion
): IMatrix => {
  switch (action.type) {
    case fromActions.INITIALIZE_MATRIX:
      return initializeMatrix(state, action as fromActions.IInitializeMatrixAction);
  }

  return state;
};
