// Copyright (c) 2018 Robert Rypuła - https://github.com/robertrypula

import { IAction } from '../simple-redux';

export const AUTO_MOVE_DOWN_ACTION = 'AUTO_MOVE_DOWN_ACTION';
export const CREATE_NEW_ACTION = 'CREATE_NEW_ACTION';
export const MOVE_DOWN_ACTION = 'MOVE_DOWN_ACTION';
export const MOVE_LEFT_ACTION = 'MOVE_LEFT_ACTION';
export const MOVE_RIGHT_ACTION = 'MOVE_RIGHT_ACTION';
export const RESET_AUTO_MOVE_DOWN_ACTION = 'RESET_AUTO_MOVE_DOWN_ACTION';
export const ROTATE_ACTION = 'ROTATE_ACTION';

/*tslint:disable:max-classes-per-file*/

export class AutoMoveDownAction implements IAction {
  public readonly type = AUTO_MOVE_DOWN_ACTION;

  public constructor(
    public payload: {
      timeStep: number
    }
  ) { }
}

export class CreateNewAction implements IAction {
  public readonly type = CREATE_NEW_ACTION;

  public constructor(
    public payload: {
      index: number,
      matrixSizeX: number,
      timeStep: number
    }
  ) { }
}

export class MoveDownAction implements IAction {
  public readonly type = MOVE_DOWN_ACTION;

  public constructor(
    public payload: {
      offsetY: number
    }
  ) { }
}

export class MoveLeftAction implements IAction {
  public readonly type = MOVE_LEFT_ACTION;
}

export class MoveRightAction implements IAction {
  public readonly type = MOVE_RIGHT_ACTION;
}

export class ResetAutoMoveDownAction implements IAction {
  public readonly type = RESET_AUTO_MOVE_DOWN_ACTION;

  public constructor(
    public payload: {
      timeStep: number
    }
  ) { }
}

export class RotateAction implements IAction {
  public readonly type = ROTATE_ACTION;
}

export type TetriminoActionsUnion =
  AutoMoveDownAction |
  CreateNewAction |
  MoveDownAction |
  MoveLeftAction |
  MoveRightAction |
  ResetAutoMoveDownAction |
  RotateAction;
