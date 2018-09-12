// Copyright (c) 2018 Robert Rypuła - https://github.com/robertrypula

import { IMatrix } from '..';
import * as fromMarixActions from '../actions/matrix.actions';
import { DEVELOPMENT_MATRIX_20_10 } from '../constants';
import { IReducerMap, Reducer } from '../simple-redux';
import { generateBlocks } from '../utils/utils';

const initializeMatrix = (state: IMatrix, action: fromMarixActions.InitializeMatrixAction): IMatrix => {
  const { sizeX, sizeY } = action.payload;

  return {
    ...state,
    blocks: (sizeX === 10 && sizeY === 20)
      ? [...DEVELOPMENT_MATRIX_20_10]
      : generateBlocks(sizeX, sizeY),
    sizeX,
    sizeY
  };
};

export const matrixReducer: Reducer<IMatrix> = (
  state: IMatrix,
  action: fromMarixActions.MatrixActionsUnion
): IMatrix => {
  const reducerMap: IReducerMap<IMatrix> = {
    [fromMarixActions.INITIALIZE_MATRIX]: initializeMatrix
  };
  const reducer = reducerMap[action.type];

  return reducer ? reducer(state, action) : state;
};
