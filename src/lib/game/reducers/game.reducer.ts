// Copyright (c) 2018 Robert Rypuła - https://github.com/robertrypula

import { IState, TETRIMINO_ROTATIONS } from '..';
import * as fromActions from '../actions/game.actions';
import { TETRIMINO_SIZE_Y } from '../constants';
import { Reducer } from '../models/store.model';

const hardDrop = (state: IState, action: fromActions.IHardDropAction) => {
  return {
    ...state,
    tetriminoY: state.matrixSizeY - TETRIMINO_SIZE_Y      // TODO this is proof of concept
  };
};

const initializeMatrix = (state: IState, action: fromActions.IInitializeMatrixAction) => {
  return {
    ...state,
    matrixSizeX: action.payload.matrixSizeX,
    matrixSizeY: action.payload.matrixSizeY
  };
};

const moveLeft = (state: IState, action: fromActions.IMoveLeftAction) => {
  return {
    ...state,
    tetriminoX: state.tetriminoX - 1    // TODO this is proof of concept
  };
};

const moveRight = (state: IState, action: fromActions.IMoveRightAction) => {
  return {
    ...state,
    tetriminoX: state.tetriminoX + 1    // TODO this is proof of concept
  };
};

const rotate = (state: IState, action: fromActions.IRotateAction) => {
  return {
    ...state,
    tetriminoRotation: (state.tetriminoRotation + 1) % TETRIMINO_ROTATIONS  // TODO this is proof of concept
  };
};

export const reducer: Reducer = (state: IState, action: fromActions.ActionsUnion) => {
  // TODO check if it's possible to get rid of 'as' in switch
  // https://github.com/ngrx/platform/blob/master/docs/store/actions.md#action-reducers
  // key is probably the: dispatch<V extends Action = Action>(action: V): void;
  // see https://github.com/ngrx/platform/blob/master/modules/store/src/store.ts#L83

  // see https://medium.com/@wittydeveloper/typescript-generics-and-overloads-999679d121cf
  //        -> Generics can “extends”

  // https://brightinventions.pl/blog/using-typescript-with-redux/

  switch (action.type) {
    case fromActions.HARD_DROP:
      return hardDrop(state, action as fromActions.IHardDropAction);

    case fromActions.INITIALIZE_MATRIX:
      return initializeMatrix(state, action as fromActions.IInitializeMatrixAction);

    case fromActions.MOVE_LEFT:
      return moveLeft(state, action as fromActions.IMoveLeftAction);

    case fromActions.MOVE_RIGHT:
      return moveRight(state, action as fromActions.IMoveRightAction);

    case fromActions.ROTATE:
      return rotate(state, action as fromActions.IRotateAction);
  }

  return state;
};
