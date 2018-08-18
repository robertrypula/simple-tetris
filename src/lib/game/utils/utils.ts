// Copyright (c) 2018 Robert Rypuła - https://github.com/robertrypula/simple-tetris

import { MATRIX_SIZE_X, MATRIX_SIZE_Y } from '../constants';
import { Matrix } from '../game.interface';

export const renderMatrixIntoAsciiFrame = (matrix: Matrix): string => {
  const left = '<|';
  const right = '|>';
  const squareEmpty = ' .';
  const squareFilled = '[]';
  const bottom1 = '==';
  const bottom2 = '\\/';
  const bottomLeft = '  ';
  const bottomRight = '  ';
  let asciiFrame = '';

  for (let y = 0; y < MATRIX_SIZE_Y; y++) {
    asciiFrame += left;
    for (let x = 0; x < MATRIX_SIZE_X; x++) {
      asciiFrame += matrix[y * MATRIX_SIZE_X + x]
        ? squareFilled
        : squareEmpty;
    }
    asciiFrame += right;
  }

  asciiFrame += left;
  for (let x = 0; x < MATRIX_SIZE_X; x++) {
    asciiFrame += bottom1;
  }
  asciiFrame += right;

  asciiFrame += bottomLeft;
  for (let x = 0; x < MATRIX_SIZE_X; x++) {
    asciiFrame += bottom2;
  }
  asciiFrame += bottomRight;

  return asciiFrame;
};
