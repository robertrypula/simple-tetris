// Copyright (c) 2018 Robert Rypuła - https://github.com/robertrypula

import { TETRIMINO_LIST } from '../constants';
import { isNotCollidingSelector } from '../selectors/game.selectors';
import { IThunkAction } from '../simple-redux';
import { Store } from '../store';
import { getRandomInt } from '../utilities';
import * as fromGameActions from './game.actions';
import * as fromTetriminoActions from './tetrimino.actions';

export const KEY_CODE_HARD_DROP_ACTION = 'KEY_CODE_HARD_DROP_ACTION';
export const KEY_CODE_LEFT_ACTION = 'KEY_CODE_LEFT_ACTION';
export const KEY_CODE_RIGHT_ACTION = 'KEY_CODE_RIGHT_ACTION';
export const KEY_CODE_ROTATE_ACTION = 'KEY_CODE_ROTATE_ACTION';
export const START_NEW_GAME_ACTION = 'START_NEW_GAME_ACTION';
export const TIME_TICK_ACTION = 'TIME_TICK_ACTION';

/*tslint:disable:max-classes-per-file*/

export class KeyCodeHardDropAction implements IThunkAction<Store> {
  public readonly type = KEY_CODE_HARD_DROP_ACTION;

  public constructor(
    public payload: {
      timeStep: number
    }
  ) { }

  public executeThunk(store: Store): void {
    const { timeStep } = this.payload;
    let offsetY = 0;

    /*tslint:disable-next-line:no-empty*/
    while (isNotCollidingSelector(0, ++offsetY)(store.getState())) { }
    store.dispatch(new fromTetriminoActions.MoveDownAction({ offsetY: offsetY - 1 }));
    store.dispatch(new fromTetriminoActions.ResetAutoMoveDownAction({ timeStep }));
  }
}

export class KeyCodeLeftAction implements IThunkAction<Store> {
  public readonly type = KEY_CODE_LEFT_ACTION;

  public executeThunk(store: Store): void {
    if (isNotCollidingSelector(-1)(store.getState())) {
      store.dispatch(new fromTetriminoActions.MoveLeftAction());
    }
  }
}

export class KeyCodeRightAction implements IThunkAction<Store> {
  public readonly type = KEY_CODE_RIGHT_ACTION;

  public executeThunk(store: Store): void {
    if (isNotCollidingSelector(1)(store.getState())) {
      store.dispatch(new fromTetriminoActions.MoveRightAction());
    }
  }
}

export class KeyCodeRotateAction implements IThunkAction<Store> {
  public readonly type = KEY_CODE_ROTATE_ACTION;

  public executeThunk(store: Store): void {
    if (isNotCollidingSelector(0, 0, 1)(store.getState())) {
      store.dispatch(new fromTetriminoActions.RotateAction());
    }
  }
}

export class StartNewGameAction implements IThunkAction<Store> {
  public readonly type = START_NEW_GAME_ACTION;

  public constructor(
    public payload: {
      timeStep: number
    }
  ) { }

  public executeThunk(store: Store): void {
    const { timeStep } = this.payload;

    store.dispatch(new fromGameActions.SetStartedAtAction({ timeStep }));
    store.dispatch(new fromTetriminoActions.CreateNewAction({
      index: getRandomInt(0, TETRIMINO_LIST.length - 1),
      matrixSizeX: store.getState().matrix.sizeX,
      timeStep
    }));
  }
}

export class TimeTickAction implements IThunkAction<Store> {
  public readonly type = TIME_TICK_ACTION;

  public constructor(
    public payload: {
      timeStep: number
    }
  ) { }

  public executeThunk(store: Store): void {
    const { timeStep } = this.payload;

    if (this.isTimeToAutoMoveDown(store, timeStep)) {
      if (isNotCollidingSelector(0, 1)(store.getState())) {
        store.dispatch(new fromTetriminoActions.AutoMoveDownAction({ timeStep }));
      } else {
        store.dispatch(new StartNewGameAction({ timeStep })); // TODO attach to matrix in 1.4.x
      }
    }
  }

  protected isTimeToAutoMoveDown(store: Store, timeStep: number): boolean {
    return timeStep >= store.getState().tetrimino.autoMoveDownAt;
  }
}

export type GameLoopActionsUnion =
  KeyCodeHardDropAction |
  KeyCodeLeftAction |
  KeyCodeRightAction |
  KeyCodeRotateAction |
  StartNewGameAction |
  TimeTickAction;
