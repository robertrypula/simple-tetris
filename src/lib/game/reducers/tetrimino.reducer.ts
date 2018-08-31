// Copyright (c) 2018 Robert Rypuła - https://github.com/robertrypula

import { ITetrimino, TETRIMINO_ROTATIONS } from '..';
import * as fromActions from '../actions/game.actions';
import { TETRIMINO_SIZE_Y } from '../constants';
import { Reducer } from '../models/store.model';

const hardDrop = (state: ITetrimino, action: fromActions.IHardDropAction) => {
  return {
    ...state,
    y: state.matrixSizeY - TETRIMINO_SIZE_Y      // TODO this is proof of concept
  };
};

const moveLeft = (state: ITetrimino, action: fromActions.IMoveLeftAction) => {
  return {
    ...state,
    x: state.x - 1    // TODO this is proof of concept
  };
};

const moveRight = (state: ITetrimino, action: fromActions.IMoveRightAction) => {
  return {
    ...state,
    x: state.x + 1    // TODO this is proof of concept
  };
};

const rotate = (state: ITetrimino, action: fromActions.IRotateAction) => {
  return {
    ...state,
    rotation: (state.rotation + 1) % TETRIMINO_ROTATIONS  // TODO this is proof of concept
  };
};

export const tetriminoReducer: Reducer<ITetrimino> = (state: ITetrimino, action: fromActions.ActionsUnion): ITetrimino => {
  switch (action.type) {
    case fromActions.HARD_DROP:
      return hardDrop(state, action as fromActions.IHardDropAction);

    case fromActions.MOVE_LEFT:
      return moveLeft(state, action as fromActions.IMoveLeftAction);

    case fromActions.MOVE_RIGHT:
      return moveRight(state, action as fromActions.IMoveRightAction);

    case fromActions.ROTATE:
      return rotate(state, action as fromActions.IRotateAction);
  }

  return state;
};
