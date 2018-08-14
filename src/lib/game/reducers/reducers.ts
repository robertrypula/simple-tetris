// Copyright (c) 2018 Robert Rypuła - https://github.com/robertrypula/simple-tetris

import * as fromActions from '../actions/actions';
import { IState } from '../models/state';

export type Reducer = (state: IState, action: fromActions.IAction) => IState;

export const reducer: Reducer = (state: IState, action: fromActions.IAction) => {
  switch (action.type) {
    case fromActions.MOVE_RIGHT:
      state = {
        ...state,
        tetriminoCurrentX: state.tetriminoCurrentX + 1
      };
      break;
    case fromActions.MOVE_LEFT:
      state = {
        ...state,
        tetriminoCurrentX: state.tetriminoCurrentX - 1
      };
      break;
    case fromActions.MOVE_DOWN:
      state = {
        ...state,
        tetriminoCurrentY: state.tetriminoCurrentY + 1
      };
      break;
    case fromActions.MOVE_UP:
      state = {
        ...state,
        tetriminoCurrentY: state.tetriminoCurrentY - 1
      };
      break;
  }

  return state;
};
