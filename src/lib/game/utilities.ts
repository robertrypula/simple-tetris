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
