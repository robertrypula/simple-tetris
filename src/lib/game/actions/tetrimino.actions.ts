// Copyright (c) 2018 Robert Rypuła - https://github.com/robertrypula

import { IAction } from '../simple-redux';

export const INIT_NEW = 'INIT_NEW';
export const MOVE_DOWN = 'MOVE_DOWN';
export const MOVE_LEFT = 'MOVE_LEFT';
export const MOVE_RIGHT = 'MOVE_RIGHT';
export const ROTATE = 'ROTATE';

/*tslint:disable:max-classes-per-file*/

export class InitNewAction implements IAction {
  public readonly type = INIT_NEW;

  public constructor(
    public payload: {
      index: number,
      matrixSizeX: number
    }
  ) { }
}

export class MoveDownAction implements IAction {
  public readonly type = MOVE_DOWN;

  public constructor(
    public payload: {
      offsetY: number
    }
  ) { }
}

export class MoveLeftAction implements IAction {
  public readonly type = MOVE_LEFT;
}

export class MoveRightAction implements IAction {
  public readonly type = MOVE_RIGHT;
}

export class RotateAction implements IAction {
  public readonly type = ROTATE;
}

export type TetriminoActionsUnion =
  InitNewAction |
  MoveDownAction |
  MoveLeftAction |
  MoveRightAction |
  RotateAction;
