// Copyright (c) 2018 Robert Rypuła - https://github.com/robertrypula

import { IState } from '..';
import { _, f, X } from '../constants';
import { TetriminoIndex, TetriminoRotation } from '../models/tetrimino.model';
import { getTestingState } from '../utilities';
import * as fromGameSelectors from './game.selectors';

describe('Game Selectors', () => {
  describe('isNotCollidingSelector - movement on empty matrix', () => {
    let state: IState;

    beforeEach(() => {
      const blocks = [
        _, _, _, _, _,
        _, f, f, f, _,
        _, _, f, _, _,
        _, _, _, _, _
      ];
      state = getTestingState(blocks, 5, 4, TetriminoIndex.T, TetriminoRotation.DEGREE_0, 1, 0);
    });

    it('should allow to remain in the same position', () => {
      expect(fromGameSelectors.isNotCollidingSelector()(state)).toEqual(true);
    });

    it('should allow to move one unit in any direction', () => {
      expect(fromGameSelectors.isNotCollidingSelector(-1, -1)(state)).toEqual(true);
      expect(fromGameSelectors.isNotCollidingSelector(0, -1)(state)).toEqual(true);
      expect(fromGameSelectors.isNotCollidingSelector(1, -1)(state)).toEqual(true);

      expect(fromGameSelectors.isNotCollidingSelector(-1)(state)).toEqual(true);
      expect(fromGameSelectors.isNotCollidingSelector(1)(state)).toEqual(true);

      expect(fromGameSelectors.isNotCollidingSelector(-1, 1)(state)).toEqual(true);
      expect(fromGameSelectors.isNotCollidingSelector(0, 1)(state)).toEqual(true);
      expect(fromGameSelectors.isNotCollidingSelector(1, 1)(state)).toEqual(true);
    });

    it('should NOT allow to move outside the matrix boundaries', () => {
      expect(fromGameSelectors.isNotCollidingSelector(-2, -2)(state)).toEqual(false);
      expect(fromGameSelectors.isNotCollidingSelector(0, -2)(state)).toEqual(false);
      expect(fromGameSelectors.isNotCollidingSelector(2, -2)(state)).toEqual(false);

      expect(fromGameSelectors.isNotCollidingSelector(-2)(state)).toEqual(false);
      expect(fromGameSelectors.isNotCollidingSelector(2)(state)).toEqual(false);

      expect(fromGameSelectors.isNotCollidingSelector(-2, 2)(state)).toEqual(false);
      expect(fromGameSelectors.isNotCollidingSelector(0, 2)(state)).toEqual(false);
      expect(fromGameSelectors.isNotCollidingSelector(2, 2)(state)).toEqual(false);
    });
  });

  describe('isNotCollidingSelector - movement on matrix with blocks', () => {
    let state: IState;

    beforeEach(() => {
      const blocks = [
        _, X, _, _, _,
        X, f, f, f, X,
        _, _, f, _, _,
        _, _, X, _, _
      ];
      state = getTestingState(blocks, 5, 4, TetriminoIndex.T, TetriminoRotation.DEGREE_0, 1, 0);
    });

    it('should allow to remain in the same position', () => {
      expect(fromGameSelectors.isNotCollidingSelector()(state)).toEqual(true);
    });

    it('should NOT allow to move one unit in the direction that will cause collision with existing block', () => {
      expect(fromGameSelectors.isNotCollidingSelector(-1, -1)(state)).toEqual(false);
      expect(fromGameSelectors.isNotCollidingSelector(0, -1)(state)).toEqual(false);
      expect(fromGameSelectors.isNotCollidingSelector(1, -1)(state)).toEqual(true);

      expect(fromGameSelectors.isNotCollidingSelector(-1)(state)).toEqual(false);
      expect(fromGameSelectors.isNotCollidingSelector(1)(state)).toEqual(false);

      expect(fromGameSelectors.isNotCollidingSelector(-1, 1)(state)).toEqual(true);
      expect(fromGameSelectors.isNotCollidingSelector(0, 1)(state)).toEqual(false);
      expect(fromGameSelectors.isNotCollidingSelector(1, 1)(state)).toEqual(true);
    });
  });

  describe('isNotCollidingSelector - rotations on empty matrix', () => {
    let state: IState;

    beforeEach(() => {
      const blocks = [
        _, _, _, _, f,
        _, _, _, _, f,
        _, _, _, f, f,
        _, _, _, _, _
      ];
      state = getTestingState(blocks, 5, 4, TetriminoIndex.J, TetriminoRotation.DEGREE_90_CW, 3, 0);
    });

    it('should allow to remain in the same position', () => {
      expect(fromGameSelectors.isNotCollidingSelector()(state)).toEqual(true);
    });

    it('should NOT allow rotation when it will cause collision with matrix boundary', () => {
      expect(fromGameSelectors.isNotCollidingSelector(0, 0, 1)(state)).toEqual(false);
    });
  });

  describe('isNotCollidingSelector - rotations on matrix with blocks', () => {
    let state: IState;

    beforeEach(() => {
      const blocks = [
        _, _, X, f, _,
        _, _, _, f, _,
        _, _, f, f, _,
        _, _, _, _, _
      ];
      state = getTestingState(blocks, 5, 4, TetriminoIndex.J, TetriminoRotation.DEGREE_90_CW, 2, 0);
    });

    it('should allow to remain in the same position', () => {
      expect(fromGameSelectors.isNotCollidingSelector()(state)).toEqual(true);
    });

    it('should NOT allow rotation when it will cause collision with existing blocks', () => {
      expect(fromGameSelectors.isNotCollidingSelector(0, 0, 1)(state)).toEqual(false);
      expect(fromGameSelectors.isNotCollidingSelector(0, 0, -1)(state)).toEqual(true);
    });
  });

  describe('matrixBlocksToRenderSelector', () => {
    let state: IState;

    beforeEach(() => {
      const blocks = [
        _, _, _, _, _,
        _, f, f, f, _,
        X, _, f, _, _,
        X, X, X, _, X
      ];
      state = getTestingState(blocks, 5, 4, TetriminoIndex.T, TetriminoRotation.DEGREE_0, 1, 0);
    });

    it('should properly include tetrimino blocks into the current matrix blocks', () => {
      expect(fromGameSelectors.matrixBlocksToRenderSelector(state)).toEqual([
        _, _, _, _, _,
        _, X, X, X, _,
        X, _, X, _, _,
        X, X, X, _, X
      ].map((item) => item ? 1 : 0));
    });
  });
});
