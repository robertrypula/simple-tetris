// Copyright (c) 2018 Robert Rypuła - https://github.com/robertrypula

import * as fromMarixActions from '../actions/matrix.actions';
import { IMatrix } from '../models/matrix.model';
import { Reducer } from '../models/store.model';
import { generateBlocks } from '../utils/utils';

const _ = 0;
const X = 1;
const testMatrixBlocks10x20 = [          // only for developement
  _, _, _, _, _, _, _, _, _, _,
  _, _, _, _, _, _, _, _, _, _,
  _, _, _, _, _, _, _, _, _, _,
  _, _, _, _, _, _, _, _, _, _,
  _, _, _, _, _, _, _, _, _, _,
  _, _, _, _, _, _, _, _, _, _,
  _, _, _, _, _, _, _, _, _, _,
  _, _, _, _, _, _, _, _, _, _,
  _, _, X, _, _, _, _, _, _, _,
  _, _, X, _, X, X, _, _, _, _,
  _, _, X, X, X, _, _, _, _, _,
  _, X, X, X, _, _, _, _, _, _,
  X, X, _, _, _, _, _, _, _, _,
  X, X, _, _, _, _, _, _, _, _,
  X, _, _, _, _, _, _, _, _, _,
  X, _, _, _, _, _, X, _, _, _,
  X, X, _, _, _, _, X, X, X, X,
  X, _, _, _, X, X, X, _, X, _,
  _, _, _, _, X, _, X, X, X, X,
  _, _, _, X, X, _, _, X, X, X
];

const initializeMatrix = (state: IMatrix, action: fromMarixActions.IInitializeMatrixAction): IMatrix => {
  const { sizeX, sizeY } = action.payload;

  return {
    ...state,
    blocks: (sizeX === 10 && sizeY === 20)
      ? [...testMatrixBlocks10x20]
      : generateBlocks(sizeX, sizeY),
    sizeX,
    sizeY
  };
};

export const matrixReducer: Reducer<IMatrix> = (
  state: IMatrix,
  action: fromMarixActions.MatrixActionsUnion
): IMatrix => {
  switch (action.type) {
    case fromMarixActions.INITIALIZE_MATRIX:
      return initializeMatrix(state, action as fromMarixActions.IInitializeMatrixAction);
  }

  return state;
};
