// Copyright (c) 2018 Robert Rypuła - https://github.com/robertrypula

import { IState } from '..';
import { _, f, X } from '../constants';
import { TetriminoIndex, TetriminoRotation } from '../models/tetrimino.model';
import { getTestingState } from '../utilities';
import * as fromGameSelectors from './game.selectors';

fdescribe('Game Selectors', () => {
  describe('isNotCollidingSelector', () => {
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
});
