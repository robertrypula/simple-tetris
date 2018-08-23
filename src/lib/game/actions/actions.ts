// Copyright (c) 2018 Robert Rypuła - https://github.com/robertrypula

import { IAction } from '../game.interface';

export const ROTATE = 'ROTATE';
export const MOVE_LEFT = 'MOVE_LEFT';
export const MOVE_RIGHT = 'MOVE_RIGHT';
export const HARD_DROP = 'HARD_DROP';

export const rotate = (): IAction => {
  return {
    type: ROTATE
  };
};

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

export const hardDrop = (): IAction => {
  return {
    type: HARD_DROP
  };
};
