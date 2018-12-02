// Copyright (c) 2018 Robert Rypuła - https://github.com/robertrypula

import { IAction } from '../simple-redux';

export const INITIALIZE_MATRIX_ACTION = 'INITIALIZE_MATRIX_ACTION';

/*tslint:disable:max-classes-per-file*/

export class InitializeMatrixAction implements IAction {
  public readonly type = INITIALIZE_MATRIX_ACTION;

  public constructor(
    public payload: {
      sizeX: number,
      sizeY: number
    }
  ) { }
}

export type MatrixActionsUnion =
  InitializeMatrixAction;
