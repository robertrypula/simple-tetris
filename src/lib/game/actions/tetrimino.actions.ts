// Copyright (c) 2018 Robert Rypuła - https://github.com/robertrypula

import { IAction } from '../models/store.model';

export const HARD_DROP = 'HARD_DROP';
export const INIT_NEW = 'INIT_NEW';
export const MOVE_LEFT = 'MOVE_LEFT';
export const MOVE_RIGHT = 'MOVE_RIGHT';
export const ROTATE = 'ROTATE';

// -----------------------------------------

export interface IHardDropAction extends IAction {
  payload: {
    matrixSizeY: number
  };
}

export interface IInitNewAction extends IAction {
  payload: {
    index: number,
    matrixSizeX: number
  };
}

/*tslint:disable-next-line*/
export interface IMoveLeftAction extends IAction { }

/*tslint:disable-next-line*/
export interface IMoveRightAction extends IAction { }

/*tslint:disable-next-line*/
export interface IRotateAction extends IAction { }

// -----------------------------------------

export type TetriminoActionsUnion =
  IHardDropAction |
  IMoveLeftAction |
  IMoveRightAction |
  IRotateAction;

// -----------------------------------------

export const hardDrop = (matrixSizeY: number): IHardDropAction => {
  return {
    payload: {
      matrixSizeY
    },
    type: HARD_DROP
  };
};

export const initNew = (index: number, matrixSizeX: number): IInitNewAction => {
  return {
    payload: {
      index,
      matrixSizeX
    },
    type: INIT_NEW
  };
};

export const moveLeft = (): IMoveLeftAction => {
  return {
    type: MOVE_LEFT
  };
};

export const moveRight = (): IMoveRightAction => {
  return {
    type: MOVE_RIGHT
  };
};

export const rotate = (): IRotateAction => {
  return {
    type: ROTATE
  };
};
