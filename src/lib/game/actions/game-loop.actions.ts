// Copyright (c) 2018 Robert Rypuła - https://github.com/robertrypula

import { isNotCollidingSelector } from '../selectors/game.selectors';
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
    let offsetY = 0;

    // TODO find 'the bootom' in loop via isNotCollidingSelector(0, ++offsetY)
    if (isNotCollidingSelector(0, ++offsetY)(store.getState())) {
      store.dispatch(new fromTetriminoActions.MoveDownAction({ offsetY }));
    }
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
