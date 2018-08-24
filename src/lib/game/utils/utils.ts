// Copyright (c) 2018 Robert Rypuła - https://github.com/robertrypula

import { Matrix } from '../game.interface';

export const renderMatrixIntoAsciiFrame = (
  matrix: Matrix,
  matrixSizeX: number,
  matrixSizeY: number
): string => {
  const left = '<|';
  const right = '|>';
  const squareEmpty = ' .';
  const squareFilled = '[]';
  const bottom1 = '==';
  const bottom2 = '\\/';
  const bottomLeft = '  ';
  const bottomRight = '  ';
  let asciiFrame = '';

  for (let y = 0; y < matrixSizeY; y++) {
    asciiFrame += left;
    for (let x = 0; x < matrixSizeX; x++) {
      asciiFrame += matrix[y * matrixSizeX + x]
        ? squareFilled
        : squareEmpty;
    }
    asciiFrame += right;
  }

  asciiFrame += left;
  for (let x = 0; x < matrixSizeX; x++) {
    asciiFrame += bottom1;
  }
  asciiFrame += right;

  asciiFrame += bottomLeft;
  for (let x = 0; x < matrixSizeX; x++) {
    asciiFrame += bottom2;
  }
  asciiFrame += bottomRight;

  return asciiFrame;
};
