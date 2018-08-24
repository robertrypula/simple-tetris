// Copyright (c) 2018 Robert Rypuła - https://github.com/robertrypula

import { IState, IStoreOptions } from '../game.interface';

export const defaultStoreOptions: IStoreOptions = {
  matrixSizeX: 10,  // values comes from Classic Tetris implementation
  matrixSizeY: 20   // values comes from Classic Tetris implementation
};

export const initialState: IState = {
  matrix: [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 1, 0, 0, 0, 0, 0,
    1, 1, 1, 1, 1, 0, 0, 0, 0, 0,
    1, 0, 0, 1, 1, 0, 0, 0, 0, 0,
    1, 1, 1, 1, 1, 0, 0, 0, 0, 0
  ],
  matrixSizeX: null,
  matrixSizeY: null,
  tetriminoIndex: 0,
  tetriminoRotation: 0,
  tetriminoX: 3,           // TODO it will be different on other matrix sizes
  tetriminoY: 0
};
