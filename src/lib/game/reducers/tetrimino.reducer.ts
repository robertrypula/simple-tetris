// Copyright (c) 2018 Robert Rypuła - https://github.com/robertrypula

import { TETRIMINO_ROTATIONS, TETRIMINO_SIZE_X } from '..';
import * as fromTetriminoActions from '../actions/tetrimino.actions';
import { Reducer } from '../models/store.model';
import { ITetrimino } from '../models/tetrimino.model';

const hardDrop = (state: ITetrimino, action: fromTetriminoActions.IHardDropAction): ITetrimino => {
  return {
    ...state,
    // y: action.payload.matrixSizeY - TETRIMINO_SIZE_Y      // TODO only for testing it's moving one block down
    y: state.y + 1
  };
};

const initNew = (state: ITetrimino, action: fromTetriminoActions.IInitNewAction): ITetrimino => {
  return {
    ...state,
    index: action.payload.index,
    rotation: 0,
    x: Math.round((action.payload.matrixSizeX - TETRIMINO_SIZE_X) / 2),
    y: 0
  };
};

const moveLeft = (state: ITetrimino, action: fromTetriminoActions.IMoveLeftAction): ITetrimino => {
  return {
    ...state,
    x: state.x - 1    // TODO this is proof of concept
  };
};

const moveRight = (state: ITetrimino, action: fromTetriminoActions.IMoveRightAction): ITetrimino => {
  return {
    ...state,
    x: state.x + 1    // TODO this is proof of concept
  };
};

const rotate = (state: ITetrimino, action: fromTetriminoActions.IRotateAction): ITetrimino => {
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
      return hardDrop(state, action as fromTetriminoActions.IHardDropAction);

    case fromTetriminoActions.INIT_NEW:
      return initNew(state, action as fromTetriminoActions.IInitNewAction);

    case fromTetriminoActions.MOVE_LEFT:
      return moveLeft(state, action as fromTetriminoActions.IMoveLeftAction);

    case fromTetriminoActions.MOVE_RIGHT:
      return moveRight(state, action as fromTetriminoActions.IMoveRightAction);

    case fromTetriminoActions.ROTATE:
      return rotate(state, action as fromTetriminoActions.IRotateAction);
  }

  return state;
};
