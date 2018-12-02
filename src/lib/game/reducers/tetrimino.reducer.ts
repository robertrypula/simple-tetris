// Copyright (c) 2018 Robert Rypuła - https://github.com/robertrypula

import { ITetrimino } from '..';
import * as fromTetriminoActions from '../actions/tetrimino.actions';
import { AUTO_MOVE_DOWN_TIME_STEPS, TETRIMINO_ROTATIONS, TETRIMINO_SIZE_X } from '../constants';
import { initialTetrimino, TetriminoRotation } from '../models/tetrimino.model';
import { IReducerMap, Reducer } from '../simple-redux';

const autoMoveDown = (state: ITetrimino, action: fromTetriminoActions.AutoMoveDownAction): ITetrimino => {
  return {
    ...state,
    autoMoveDownAt: action.payload.timeStep + AUTO_MOVE_DOWN_TIME_STEPS,
    y: state.y + 1
  };
};

const createNew = (state: ITetrimino, action: fromTetriminoActions.CreateNewAction): ITetrimino => {
  const { index, matrixSizeX, timeStep } = action.payload;

  return {
    ...state,
    autoMoveDownAt: timeStep + AUTO_MOVE_DOWN_TIME_STEPS,
    index,
    rotation: TetriminoRotation.DEGREE_0,
    x: Math.round((matrixSizeX - TETRIMINO_SIZE_X) / 2),
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

const resetAutoMoveDown = (state: ITetrimino, action: fromTetriminoActions.AutoMoveDownAction): ITetrimino => {
  return {
    ...state,
    autoMoveDownAt: action.payload.timeStep + AUTO_MOVE_DOWN_TIME_STEPS
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
    [fromTetriminoActions.AUTO_MOVE_DOWN_ACTION]: autoMoveDown,
    [fromTetriminoActions.CREATE_NEW_ACTION]: createNew,
    [fromTetriminoActions.MOVE_DOWN_ACTION]: moveDown,
    [fromTetriminoActions.MOVE_LEFT_ACTION]: moveLeft,
    [fromTetriminoActions.MOVE_RIGHT_ACTION]: moveRight,
    [fromTetriminoActions.RESET_AUTO_MOVE_DOWN_ACTION]: resetAutoMoveDown,
    [fromTetriminoActions.ROTATE_ACTION]: rotate
  };
  const reducer = reducerMap[action.type];

  return reducer ? reducer(state, action) : state;
};
