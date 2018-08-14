// Copyright (c) 2018 Robert Rypuła - https://github.com/robertrypula/simple-tetris

export interface IAction {
  type: string;
  payload?: any;
}

export const MOVE_LEFT = 'MOVE_LEFT';
export const MOVE_RIGHT = 'MOVE_RIGHT';
export const MOVE_DOWN = 'MOVE_DOWN';
export const MOVE_UP = 'MOVE_UP';

export const moveLeft = (): IAction => {
  return {
    type: MOVE_LEFT
  };
};

export const moveRight = (): IAction => {
  return {
    type: MOVE_RIGHT
  };
};

export const moveDown = (): IAction => {
  return {
    type: MOVE_DOWN
  };
};

export const moveUp = (): IAction => {
  return {
    type: MOVE_UP
  };
};
