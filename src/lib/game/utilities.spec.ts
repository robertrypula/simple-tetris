// Copyright (c) 2018 Robert Rypuła - https://github.com/robertrypula

import { _, f, X } from './constants';
import { IState } from './models/state.model';
import { TetriminoIndex, TetriminoRotation } from './models/tetrimino.model';
import * as utilities from './utilities';

describe('Utilities', () => {
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

  describe('getTestingState', () => {
    it('should return full simple-tetris state from data provided in simpler form', () => {
      const blocks = [
        _, _, _, _, f,
        _, _, _, _, f,
        X, _, _, f, f,
        X, X, _, _, _
      ];
      const state: IState = utilities.getTestingState(
        blocks, 5, 4, TetriminoIndex.J, TetriminoRotation.DEGREE_90_CW, 3, 0
      );

      expect(state).toEqual({
        matrix: {
          blocks: [
            0, 0, 0, 0, 0,
            0, 0, 0, 0, 0,
            1, 0, 0, 0, 0,
            1, 1, 0, 0, 0
          ],
          sizeX: 5,
          sizeY: 4
        },
        tetrimino: {
          index: TetriminoIndex.J,
          rotation: TetriminoRotation.DEGREE_90_CW,
          x: 3,
          y: 0
        }
      });
    });
  });
});
