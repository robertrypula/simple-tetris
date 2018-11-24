// Copyright (c) 2018 Robert Rypuła - https://github.com/robertrypula

import { IState } from './models/state.model';
import { stateReducer } from './reducers/state.reducer';

export const generateBlocks = (sizeX: number, sizeY: number, fillWith: number = 0): number[] => {
  const blocks = [];

  for (let y = 0; y < sizeY; y++) {
    for (let x = 0; x < sizeX; x++) {
      blocks.push(fillWith);
    }
  }

  return blocks;
};

export const getRandomInt = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getTestingState = (
  blocks: boolean[],
  sizeX: number,
  sizeY: number,
  index: number,
  rotation: number,
  x: number,
  y: number
) => {
  const state: IState = stateReducer(undefined, { type: undefined });

  state.matrix.blocks = blocks.map((item) => item ? 1 : 0);
  state.matrix.sizeX = sizeX;
  state.matrix.sizeY = sizeY;
  state.tetrimino.index = index;
  state.tetrimino.rotation = rotation;
  state.tetrimino.x = x;
  state.tetrimino.y = y;

  return state;
};
