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

const renderMatrix = (
  blocks: number[],
  sizeX: number,
  sizeY: number
): IAsciiFrame => {
  const left = '<|';
  const right = '|>';
  const squareEmpty = ' .';
  const squareFilled = '[]';
  const bottom1 = '==';
  const bottom2 = '\\/';
  const bottomLeft = '  ';
  const bottomRight = '  ';
  let data = '';

  for (let y = 0; y < sizeY; y++) {
    data += left;
    for (let x = 0; x < sizeX; x++) {
      data += blocks[y * sizeX + x] ? squareFilled : squareEmpty;
    }
    data += right;
  }

  data += left;
  for (let x = 0; x < sizeX; x++) {
    data += bottom1;
  }
  data += right;

  data += bottomLeft;
  for (let x = 0; x < sizeX; x++) {
    data += bottom2;
  }
  data += bottomRight;

  return {
    data,
    height: sizeY + 2,
    width: 2 + (2 * sizeX) + 2
  };
};
