// Copyright (c) 2018 Robert Rypuła - https://github.com/robertrypula

import { IThunkAction } from '../simple-redux';
import { Store } from '../store';

export const KEY_CODE_HARD_DROP_ACTION = 'KEY_CODE_HARD_DROP_ACTION';
export const KEY_CODE_LEFT_ACTION = 'KEY_CODE_LEFT_ACTION';
export const KEY_CODE_RIGHT_ACTION = 'KEY_CODE_RIGHT_ACTION';
export const KEY_CODE_ROTATE_ACTION = 'KEY_CODE_ROTATE_ACTION';

/*tslint:disable:max-classes-per-file*/

export class KeyCodeHardDropAction implements IThunkAction<Store> {
  public readonly type = KEY_CODE_HARD_DROP_ACTION;

  public executeThunk(store: Store): void {
  }
}

export class KeyCodeLeftAction implements IThunkAction<Store> {
  public readonly type = KEY_CODE_LEFT_ACTION;

  public executeThunk(store: Store): void {
  }
}

export class KeyCodeRightAction implements IThunkAction<Store> {
  public readonly type = KEY_CODE_RIGHT_ACTION;

  public executeThunk(store: Store): void {
  }
}

export class KeyCodeRotateAction implements IThunkAction<Store> {
  public readonly type = KEY_CODE_ROTATE_ACTION;

  public executeThunk(store: Store): void {
  }
}
