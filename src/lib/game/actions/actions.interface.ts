// Copyright (c) 2018 Robert Rypuła - https://github.com/robertrypula

import { IAction } from '../game.interface';

/*tslint:disable-next-line*/
export interface IHardDropAction extends IAction {}

export interface IInitializeMatrixAction extends IAction {
  payload: {
    matrixSizeX: number,
    matrixSizeY: number
  };
}

/*tslint:disable-next-line*/
export interface IMoveLeftAction extends IAction {}

/*tslint:disable-next-line*/
export interface IMoveRightAction extends IAction {}

/*tslint:disable-next-line*/
export interface IRotateAction extends IAction {}

export type Actions =
  | IHardDropAction
  | IInitializeMatrixAction
  | IMoveLeftAction
  | IMoveRightAction
  | IRotateAction;
