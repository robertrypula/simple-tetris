// Copyright (c) 2018 Robert Rypuła - https://github.com/robertrypula

import * as fromGame from './game';

export interface IAsciiFrame {
  data: string;
  width: number;
  height: number;
}

export const render = (state: fromGame.IState): IAsciiFrame => {
  const { sizeX, sizeY } = state.matrix;
  const matrixBlocksToRender = fromGame.matrixBlocksToRenderSelector(state);

  return renderMatrix(matrixBlocksToRender, sizeX, sizeY);
};

const renderMatrix = (blocks: number[], sizeX: number, sizeY: number): IAsciiFrame => {
  const left = '<|';
  const right = '|>';
  const squareEmpty = ' .';
  const squareFilled = '[]';
  const bottomRows = [
    [left, '==', right],
    ['  ', '\\/', '  ']
  ];
  let data = '';

  for (let y = 0; y < sizeY; y++) {
    data += left;
    for (let x = 0; x < sizeX; x++) {
      data += blocks[y * sizeX + x] ? squareFilled : squareEmpty;
    }
    data += right;
  }

  bottomRows.forEach((row) => {
    data += row[0];
    for (let x = 0; x < sizeX; x++) {
      data += row[1];
    }
    data += row[2];
  });

  return {
    data,
    height: sizeY + bottomRows.length,
    width: left.length + (squareEmpty.length * sizeX) + right.length
  };
};
