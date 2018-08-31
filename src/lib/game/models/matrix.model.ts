// Copyright (c) 2018 Robert Rypuła - https://github.com/robertrypula

export interface IMatrix {
  blocks: number[];
  sizeX: number;
  sizeY: number;
}

export const initialMatrix: IMatrix = {
  blocks: [],
  sizeX: null,
  sizeY: null
};
