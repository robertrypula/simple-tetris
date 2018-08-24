// Copyright (c) 2018 Robert Rypuła - https://github.com/robertrypula

import * as fromActions from '../actions/actions';
import * as fromAI from '../actions/actions.interface';
import {
  TETRIMINO_ROTATIONS,
  TETRIMINO_SIZE_Y
} from '../constants';
import { IState, Reducer } from '../game.interface';

const hardDrop = (state: IState, action: fromAI.IHardDropAction) => {
  return {
    ...state,
    tetriminoY: state.matrixSizeY - TETRIMINO_SIZE_Y      // TODO this is proof of concept
  };
};

const initializeMatrix = (state: IState, action: fromAI.IInitializeMatrixAction) => {
  return {
    ...state,
    matrixSizeX: action.payload.matrixSizeX,
    matrixSizeY: action.payload.matrixSizeY
  };
};

const moveLeft = (state: IState, action: fromAI.IMoveLeftAction) => {
  return {
    ...state,
    tetriminoX: state.tetriminoX - 1    // TODO this is proof of concept
  };
};

const moveRight = (state: IState, action: fromAI.IMoveRightAction) => {
  return {
    ...state,
    tetriminoX: state.tetriminoX + 1    // TODO this is proof of concept
  };
};

const rotate = (state: IState, action: fromAI.IRotateAction) => {
  return {
    ...state,
    tetriminoRotation: (state.tetriminoRotation + 1) % TETRIMINO_ROTATIONS  // TODO this is proof of concept
  };
};

export const reducer: Reducer = (state: IState, action: fromAI.ActionsUnion) => {
  // TODO check if it's possible to get rid of 'as' in switch
  // https://github.com/ngrx/platform/blob/master/docs/store/actions.md#action-reducers
  // key is probably the: dispatch<V extends Action = Action>(action: V): void;
  // see https://github.com/ngrx/platform/blob/master/modules/store/src/store.ts#L83

  // see https://medium.com/@wittydeveloper/typescript-generics-and-overloads-999679d121cf
  //        -> Generics can “extends”

  // https://brightinventions.pl/blog/using-typescript-with-redux/

  switch (action.type) {
    case fromActions.HARD_DROP:
      return hardDrop(state, action as fromAI.IHardDropAction);

    case fromActions.INITIALIZE_MATRIX:
      return initializeMatrix(state, action as fromAI.IInitializeMatrixAction);

    case fromActions.MOVE_LEFT:
      return moveLeft(state, action as fromAI.IMoveLeftAction);

    case fromActions.MOVE_RIGHT:
      return moveRight(state, action as fromAI.IMoveRightAction);

    case fromActions.ROTATE:
      return rotate(state, action as fromAI.IRotateAction);
  }

  return state;
};
