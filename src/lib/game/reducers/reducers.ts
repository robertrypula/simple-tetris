// Copyright (c) 2018 Robert Rypuła - https://github.com/robertrypula/simple-tetris

import * as fromActions from '../actions/actions';
import { MATRIX_SIZE_Y, TETRIMINO_ROTATIONS, TETRIMINO_SIZE_Y } from '../constants';
import { IAction, IState, Reducer } from '../game.interface';

export const reducer: Reducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case fromActions.ROTATE:
      state = {
        ...state,
        // TODO this is proof of concept
        tetriminoRotation: (state.tetriminoRotation + 1) % TETRIMINO_ROTATIONS
      };
      break;
    case fromActions.MOVE_LEFT:
      state = {
        ...state,
        // TODO this is proof of concept
        tetriminoX: state.tetriminoX - 1
      };
      break;
    case fromActions.MOVE_RIGHT:
      state = {
        ...state,
        // TODO this is proof of concept
        tetriminoX: state.tetriminoX + 1
      };
      break;
    case fromActions.HARD_DROP:
      state = {
        ...state,
        // TODO this is proof of concept
        tetriminoY: MATRIX_SIZE_Y - TETRIMINO_SIZE_Y
      };
      break;
  }

  return state;
};
