// Copyright (c) 2018 Robert Rypuła - https://github.com/robertrypula

import { IState } from '..';
import { GameLoopActionsUnion } from '../actions/game-loop.actions';
import { GameActionsUnion } from '../actions/game.actions';
import { MatrixActionsUnion } from '../actions/matrix.actions';
import { TetriminoActionsUnion } from '../actions/tetrimino.actions';
import { initialState } from '../models/state.model';
import { Reducer } from '../simple-redux';
import { gameReducer } from './game.reducer';
import { matrixReducer } from './matrix.reducer';
import { tetriminoReducer } from './tetrimino.reducer';

export const stateReducer: Reducer<IState> = (
  state: IState = initialState,
  action: GameActionsUnion | GameLoopActionsUnion | MatrixActionsUnion | TetriminoActionsUnion
): IState => {
  return {
    game: gameReducer(state.game, action),
    matrix: matrixReducer(state.matrix, action),
    tetrimino: tetriminoReducer(state.tetrimino, action)
  };
};
