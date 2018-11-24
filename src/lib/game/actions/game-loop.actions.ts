// Copyright (c) 2018 Robert Rypuła - https://github.com/robertrypula

import { isAbleToMoveSelector, isAbleToRotateSelector } from '../selectors/game.selectors';
import { IThunkAction } from '../simple-redux';
import { Store } from '../store';
import * as fromTetriminoActions from './tetrimino.actions';

export const KEY_CODE_HARD_DROP_ACTION = 'KEY_CODE_HARD_DROP_ACTION';
export const KEY_CODE_LEFT_ACTION = 'KEY_CODE_LEFT_ACTION';
export const KEY_CODE_RIGHT_ACTION = 'KEY_CODE_RIGHT_ACTION';
export const KEY_CODE_ROTATE_ACTION = 'KEY_CODE_ROTATE_ACTION';

/*tslint:disable:max-classes-per-file*/

export class KeyCodeHardDropAction implements IThunkAction<Store> {
  public readonly type = KEY_CODE_HARD_DROP_ACTION;

  public executeThunk(store: Store): void {
    let yRelative = 0;

    yRelative++; // TODO find 'the bootom' in loop via isAbleToMoveSelector(0, yRelative++)
    store.dispatch(new fromTetriminoActions.MoveDownAction({ yRelative }));
  }
}

export class KeyCodeLeftAction implements IThunkAction<Store> {
  public readonly type = KEY_CODE_LEFT_ACTION;

  public executeThunk(store: Store): void {
    if (isAbleToMoveSelector(-1, 0)(store.getState())) {
      store.dispatch(new fromTetriminoActions.MoveLeftAction());
    }
  }
}

export class KeyCodeRightAction implements IThunkAction<Store> {
  public readonly type = KEY_CODE_RIGHT_ACTION;

  public executeThunk(store: Store): void {
    if (isAbleToMoveSelector(1, 0)(store.getState())) {
      store.dispatch(new fromTetriminoActions.MoveRightAction());
    }
  }
}

export class KeyCodeRotateAction implements IThunkAction<Store> {
  public readonly type = KEY_CODE_ROTATE_ACTION;

  public executeThunk(store: Store): void {
    if (isAbleToRotateSelector(store.getState())) {
      store.dispatch(new fromTetriminoActions.RotateAction());
    }
  }
}
