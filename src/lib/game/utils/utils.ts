// Copyright (c) 2018 Robert Rypuła - https://github.com/robertrypula

export const getRandomInt = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const generateBlocks = (sizeX: number, sizeY: number, fillWith: number = 0): number[] => {
  const blocks = [];

  for (let y = 0; y < sizeY; y++) {
    for (let x = 0; x < sizeX; x++) {
      blocks.push(fillWith);
    }
  }

  return blocks;
};

export const renderMatrixBlocksIntoAsciiFrame = (
  blocks: number[],
  sizeX: number,
  sizeY: number
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

  for (let y = 0; y < sizeY; y++) {
    asciiFrame += left;
    for (let x = 0; x < sizeX; x++) {
      asciiFrame += blocks[y * sizeX + x]
        ? squareFilled
        : squareEmpty;
    }
    asciiFrame += right;
  }

  asciiFrame += left;
  for (let x = 0; x < sizeX; x++) {
    asciiFrame += bottom1;
  }
  asciiFrame += right;

  asciiFrame += bottomLeft;
  for (let x = 0; x < sizeX; x++) {
    asciiFrame += bottom2;
  }
  asciiFrame += bottomRight;

  return asciiFrame;
};
