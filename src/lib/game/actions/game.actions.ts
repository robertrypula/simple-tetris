// Copyright (c) 2018 Robert Rypuła - https://github.com/robertrypula

import { IAction } from '../models/store.model';

export const HARD_DROP = 'HARD_DROP';
export const INITIALIZE_MATRIX = 'INITIALIZE_MATRIX';
export const MOVE_LEFT = 'MOVE_LEFT';
export const MOVE_RIGHT = 'MOVE_RIGHT';
export const ROTATE = 'ROTATE';

// -----------------------------------------

/*tslint:disable-next-line*/
export interface IHardDropAction extends IAction { }

export interface IInitializeMatrixAction extends IAction {
  payload: {
    matrixSizeX: number,
    matrixSizeY: number
  };
}

/*tslint:disable-next-line*/
export interface IMoveLeftAction extends IAction { }

/*tslint:disable-next-line*/
export interface IMoveRightAction extends IAction { }

/*tslint:disable-next-line*/
export interface IRotateAction extends IAction { }

// -----------------------------------------

export type ActionsUnion =
  IHardDropAction |
  IInitializeMatrixAction |
  IMoveLeftAction |
  IMoveRightAction |
  IRotateAction;

// -----------------------------------------

export const hardDrop = (): IHardDropAction => {
  return {
    type: HARD_DROP
  };
};

export const initializeMatrix = (matrixSizeX: number, matrixSizeY: number): IInitializeMatrixAction => {
  return {
    payload: {
      matrixSizeX,
      matrixSizeY
    },
    type: INITIALIZE_MATRIX
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
