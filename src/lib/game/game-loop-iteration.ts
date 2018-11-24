// Copyright (c) 2018 Robert Rypuła - https://github.com/robertrypula

import * as fromGameLoopActions from './actions/game-loop.actions';
import * as fromConstants from './constants';
import { Store } from './store';

export const gameLoopIteration: GameLoopIteration = (
  store: Store,
  time: number,
  keyCode: number
): void => {
  switch (keyCode) {
    case fromConstants.KEY_CODE_HARD_DROP:
      store.dispatch(new fromGameLoopActions.KeyCodeHardDropAction());
      break;
    case fromConstants.KEY_CODE_LEFT:
      store.dispatch(new fromGameLoopActions.KeyCodeLeftAction());
      break;
    case fromConstants.KEY_CODE_RIGHT:
      store.dispatch(new fromGameLoopActions.KeyCodeRightAction());
      break;
    case fromConstants.KEY_CODE_ROTATE:
      store.dispatch(new fromGameLoopActions.KeyCodeRotateAction());
      break;
  }
};

/*
Dedicated 'GameLoopIteration' type solves the problem in the *.d.ts file:
  ERROR in node_modules/simple-tetris/dist/lib/game/game-loop-iteration.d.ts(1,49): error TS1110: Type expected.
  node_modules/simple-tetris/dist/lib/game/game-loop-iteration.d.ts(1,124): error TS1109: Expression expected.

It look like older typescript compilers does't understand types expressed as inline import:
  export declare const gameLoopIteration: (
    store: import("./simple-redux").SimpleStore<import("./models/state.model").IState>,
    time: number,
    keyCode: number
  ) => void;

TODO keep an eye on this problem
 */
export type GameLoopIteration = (store: Store, time: number, keyCode: number) => void;
