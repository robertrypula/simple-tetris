// Copyright (c) 2018 Robert Rypuła - https://github.com/robertrypula

import { IAction } from '../simple-redux';

export const HARD_DROP = 'HARD_DROP';
export const INIT_NEW = 'INIT_NEW';
export const MOVE_LEFT = 'MOVE_LEFT';
export const MOVE_RIGHT = 'MOVE_RIGHT';
export const ROTATE = 'ROTATE';

/*tslint:disable:max-classes-per-file*/

export class HardDropAction implements IAction {
  public readonly type = HARD_DROP;

  public constructor(
    public payload: {
      matrixSizeY: number
    }
  ) { }
}

export class InitNewAction implements IAction {
  public readonly type = INIT_NEW;

  public constructor(
    public payload: {
      index: number,
      matrixSizeX: number
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
  HardDropAction |
  InitNewAction |
  MoveLeftAction |
  MoveRightAction |
  RotateAction;
