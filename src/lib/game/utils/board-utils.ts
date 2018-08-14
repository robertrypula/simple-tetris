// Copyright (c) 2018 Robert Rypuła - https://github.com/robertrypula/simple-tetris

export const getBoard = (x: number, y: number, fill: number): number[] => {
  const result: number[] = [];

  for (let j = 0; j < y; j++) {
    for (let i = 0; i < x; i++) {
      result.push(fill);
    }
  }

  return result;
};
