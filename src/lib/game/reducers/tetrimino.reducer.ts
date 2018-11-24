// Copyright (c) 2018 Robert Rypuła - https://github.com/robertrypula

import { ITetrimino } from '..';
import * as fromTetriminoActions from '../actions/tetrimino.actions';
import { TETRIMINO_ROTATIONS, TETRIMINO_SIZE_X } from '../constants';
import { initialTetrimino, TetriminoRotation } from '../models/tetrimino.model';
import { IReducerMap, Reducer } from '../simple-redux';

const initNew = (state: ITetrimino, action: fromTetriminoActions.InitNewAction): ITetrimino => {
  return {
    ...state,
    index: action.payload.index,
    rotation: TetriminoRotation.DEGREE_0,
    x: Math.round((action.payload.matrixSizeX - TETRIMINO_SIZE_X) / 2),
    y: 0
  };
};

const moveLeft = (state: ITetrimino, action: fromTetriminoActions.MoveLeftAction): ITetrimino => {
  return {
    ...state,
    x: state.x - 1
  };
};

const moveDown = (state: ITetrimino, action: fromTetriminoActions.MoveDownAction): ITetrimino => {
  return {
    ...state,
    y: state.y + action.payload.offsetY
  };
};

const moveRight = (state: ITetrimino, action: fromTetriminoActions.MoveRightAction): ITetrimino => {
  return {
    ...state,
    x: state.x + 1
  };
};

const rotate = (state: ITetrimino, action: fromTetriminoActions.RotateAction): ITetrimino => {
  return {
    ...state,
    rotation: (state.rotation + 1) % TETRIMINO_ROTATIONS
  };
};

export const tetriminoReducer: Reducer<ITetrimino> = (
  state: ITetrimino = initialTetrimino,
  action: fromTetriminoActions.TetriminoActionsUnion
): ITetrimino => {
  const reducerMap: IReducerMap<ITetrimino> = {
    [fromTetriminoActions.INIT_NEW]: initNew,
    [fromTetriminoActions.MOVE_DOWN]: moveDown,
    [fromTetriminoActions.MOVE_LEFT]: moveLeft,
    [fromTetriminoActions.MOVE_RIGHT]: moveRight,
    [fromTetriminoActions.ROTATE]: rotate
  };
  const reducer = reducerMap[action.type];

  return reducer ? reducer(state, action) : state;
};
