// Copyright (c) 2018 Robert Rypuła - https://github.com/robertrypula

import * as fromGameActions from '../actions/game.actions';
import { IGame, initialGame } from '../models/game.model';
import { IReducerMap, Reducer } from '../simple-redux';

const setStartedAt = (state: IGame, action: fromGameActions.SetStartedAtAction): IGame => {
  return {
    ...state,
    startedAt: action.payload.timeStep
  };
};

export const gameReducer: Reducer<IGame> = (
  state: IGame = initialGame,
  action: fromGameActions.GameActionsUnion
): IGame => {
  const reducerMap: IReducerMap<IGame> = {
    [fromGameActions.SET_STARTED_AT_ACTION]: setStartedAt
  };
  const reducer = reducerMap[action.type];

  return reducer ? reducer(state, action) : state;
};
