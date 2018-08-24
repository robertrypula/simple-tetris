// Copyright (c) 2018 Robert Rypuła - https://github.com/robertrypula

export type Tetrimino = [
  boolean, boolean, boolean, boolean,
  boolean, boolean, boolean, boolean,
  boolean, boolean, boolean, boolean,
  boolean, boolean, boolean, boolean
];

export type TetriminoRotations = [Tetrimino, Tetrimino, Tetrimino, Tetrimino];
export type TetriminoList = TetriminoRotations[];

export type Matrix = number[];

export interface IAction {
  type: string;
  payload?: any;
}

export interface IState {
  matrix: Matrix;
  matrixSizeX: number;
  matrixSizeY: number;
  tetriminoIndex: number;
  tetriminoRotation: number;
  tetriminoX: number;
  tetriminoY: number;
}

export type Reducer = (state: IState, action: IAction) => IState;

export interface IStore {
  dispatch(action: IAction): void;
  getState(): IState;
}

export interface IStoreStatic {
  new(reducer: Reducer): IStore;
}

export interface IStoreOptions {
  matrixSizeX: number;
  matrixSizeY: number;
}

export type StoreFactory = (storeOptions?: IStoreOptions) => IStore;
