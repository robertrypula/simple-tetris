// Copyright (c) 2018 Robert Rypuła - https://github.com/robertrypula

import * as utilities from './utilities';

describe('utilities', () => {
  describe('generateBlocks', () => {
    it('should generate blocks array for given dimensions and default fill', () => {
      const blocks = utilities.generateBlocks(2, 3);

      expect(blocks).toEqual([
        0, 0,
        0, 0,
        0, 0
      ]);
    });

    it('should generate blocks array for given dimensions and given fill', () => {
      const blocks = utilities.generateBlocks(5, 2, 3);

      expect(blocks).toEqual([
        3, 3, 3, 3, 3,
        3, 3, 3, 3, 3
      ]);
    });
  });
});
