// Copyright (c) 2018 Robert Rypuła - https://github.com/robertrypula

import { IMatrix } from '..';
import * as fromMarixActions from '../actions/matrix.actions';
import { DEFAULT_MATRIX_SIZE_X, DEFAULT_MATRIX_SIZE_Y, DEVELOPMENT_MATRIX_20_10 } from '../constants';
import { initialMatrix } from '../models/matrix.model';
import { IReducerMap, Reducer } from '../simple-redux';
import { generateBlocks } from '../utilities';

const initializeMatrix = (state: IMatrix, action: fromMarixActions.InitializeMatrixAction): IMatrix => {
  const { sizeX, sizeY } = action.payload;

  return {
    ...state,
    blocks: (sizeX === DEFAULT_MATRIX_SIZE_X && sizeY === DEFAULT_MATRIX_SIZE_Y)
      ? [...DEVELOPMENT_MATRIX_20_10]
      : generateBlocks(sizeX, sizeY),
    sizeX,
    sizeY
  };
};

export const matrixReducer: Reducer<IMatrix> = (
  state: IMatrix = initialMatrix,
  action: fromMarixActions.MatrixActionsUnion
): IMatrix => {
  const reducerMap: IReducerMap<IMatrix> = {
    [fromMarixActions.INITIALIZE_MATRIX]: initializeMatrix
  };
  const reducer = reducerMap[action.type];

  return reducer ? reducer(state, action) : state;
};
