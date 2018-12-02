// Copyright (c) 2018 Robert Rypuła - https://github.com/robertrypula

import { IAction } from '../simple-redux';

export const SET_STARTED_AT_ACTION = 'SET_STARTED_AT_ACTION';

/*tslint:disable:max-classes-per-file*/

export class SetStartedAtAction implements IAction {
  public readonly type = SET_STARTED_AT_ACTION;

  public constructor(
    public payload: {
      timeStep: number
    }
  ) { }
}

export type GameActionsUnion =
  SetStartedAtAction;
