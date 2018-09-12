// Copyright (c) 2018 Robert Rypuła - https://github.com/robertrypula

import { TETRIMINO_ROTATIONS, TETRIMINO_SIZE_X } from '..';
import * as fromTetriminoActions from '../actions/tetrimino.actions';
import { Reducer } from '../models/store.model';
import { ITetrimino } from '../models/tetrimino.model';

const hardDrop = (state: ITetrimino, action: fromTetriminoActions.HardDropAction): ITetrimino => {
  return {
    ...state,
    // y: action.payload.matrixSizeY - TETRIMINO_SIZE_Y      // TODO only for testing it's moving one block down
    y: state.y + 1
  };
};

const initNew = (state: ITetrimino, action: fromTetriminoActions.InitNewAction): ITetrimino => {
  return {
    ...state,
    index: action.payload.index,
    rotation: 0,
    x: Math.round((action.payload.matrixSizeX - TETRIMINO_SIZE_X) / 2),
    y: 0
  };
};

const moveLeft = (state: ITetrimino, action: fromTetriminoActions.MoveLeftAction): ITetrimino => {
  return {
    ...state,
    x: state.x - 1    // TODO this is proof of concept
  };
};

const moveRight = (state: ITetrimino, action: fromTetriminoActions.MoveRightAction): ITetrimino => {
  return {
    ...state,
    x: state.x + 1    // TODO this is proof of concept
  };
};

const rotate = (state: ITetrimino, action: fromTetriminoActions.RotateAction): ITetrimino => {
  return {
    ...state,
    rotation: (state.rotation + 1) % TETRIMINO_ROTATIONS  // TODO this is proof of concept
  };
};

export const tetriminoReducer: Reducer<ITetrimino> = (
  state: ITetrimino,
  action: fromTetriminoActions.TetriminoActionsUnion
): ITetrimino => {
  switch (action.type) {
    case fromTetriminoActions.HARD_DROP:
      return hardDrop(state, action as fromTetriminoActions.HardDropAction);

    case fromTetriminoActions.INIT_NEW:
      return initNew(state, action as fromTetriminoActions.InitNewAction);

    case fromTetriminoActions.MOVE_LEFT:
      return moveLeft(state, action as fromTetriminoActions.MoveLeftAction);

    case fromTetriminoActions.MOVE_RIGHT:
      return moveRight(state, action as fromTetriminoActions.MoveRightAction);

    case fromTetriminoActions.ROTATE:
      return rotate(state, action as fromTetriminoActions.RotateAction);
  }

  return state;
};
