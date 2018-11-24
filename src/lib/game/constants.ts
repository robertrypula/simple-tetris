// Copyright (c) 2018 Robert Rypuła - https://github.com/robertrypula

import { TetriminoList } from './models/tetrimino.model';

export const DEFAULT_MATRIX_SIZE_X = 10;
export const DEFAULT_MATRIX_SIZE_Y = 20;

export const KEY_CODE_HARD_DROP = 0;     // TODO move all KeyCodes to 'Key' Enum (v2.0.0)
export const KEY_CODE_LEFT = 1;
export const KEY_CODE_RIGHT = 2;
export const KEY_CODE_ROTATE = 3;

export const TETRIMINO_ROTATIONS = 4;
export const TETRIMINO_SIZE_X = 4;
export const TETRIMINO_SIZE_Y = 4;

export const _ = false;
export const f = false;
export const X = true;

export const TETRIMINO_LIST: TetriminoList = [
  [
    // piece I - index 0
    [
      _, _, _, _,      // rotation 0
      X, X, X, X,
      _, _, _, _,
      _, _, _, _
    ],
    [
      _, _, X, _,      // rotation 1
      _, _, X, _,
      _, _, X, _,
      _, _, X, _
    ],
    [
      _, _, _, _,      // rotation 2
      _, _, _, _,
      X, X, X, X,
      _, _, _, _
    ],
    [
      _, X, _, _,      // rotation 3
      _, X, _, _,
      _, X, _, _,
      _, X, _, _
    ]
  ],
  [
    // piece J - index 1
    [
      _, _, _, _,      // rotation 0
      X, X, X, _,
      _, _, X, _,
      _, _, _, _
    ],
    [
      _, X, _, _,      // rotation 1
      _, X, _, _,
      X, X, _, _,
      _, _, _, _
    ],
    [
      X, _, _, _,      // rotation 2
      X, X, X, _,
      _, _, _, _,
      _, _, _, _
    ],
    [
      _, X, X, _,      // rotation 3
      _, X, _, _,
      _, X, _, _,
      _, _, _, _
    ]
  ],
  [
    // piece L - index 2
    [
      _, _, _, _,      // rotation 0
      X, X, X, _,
      X, _, _, _,
      _, _, _, _
    ],
    [
      X, X, _, _,      // rotation 1
      _, X, _, _,
      _, X, _, _,
      _, _, _, _
    ],
    [
      _, _, X, _,      // rotation 2
      X, X, X, _,
      _, _, _, _,
      _, _, _, _
    ],
    [
      _, X, _, _,      // rotation 3
      _, X, _, _,
      _, X, X, _,
      _, _, _, _
    ]
  ],
  [
    // piece O - index 3
    [
      _, _, _, _,      // rotation 0
      _, X, X, _,
      _, X, X, _,
      _, _, _, _
    ],
    [
      _, _, _, _,      // rotation 1
      _, X, X, _,
      _, X, X, _,
      _, _, _, _
    ],
    [
      _, _, _, _,      // rotation 2
      _, X, X, _,
      _, X, X, _,
      _, _, _, _
    ],
    [
      _, _, _, _,      // rotation 3
      _, X, X, _,
      _, X, X, _,
      _, _, _, _
    ]
  ],
  [
    // piece S - index 4
    [
      _, _, _, _,      // rotation 0
      _, X, X, _,
      X, X, _, _,
      _, _, _, _
    ],
    [
      X, _, _, _,      // rotation 1
      X, X, _, _,
      _, X, _, _,
      _, _, _, _
    ],
    [
      _, X, X, _,      // rotation 2
      X, X, _, _,
      _, _, _, _,
      _, _, _, _
    ],
    [
      _, X, _, _,      // rotation 3
      _, X, X, _,
      _, _, X, _,
      _, _, _, _
    ]
  ],
  [
    // piece T - index 5
    [
      _, _, _, _,      // rotation 0
      X, X, X, _,
      _, X, _, _,
      _, _, _, _
    ],
    [
      _, X, _, _,      // rotation 1
      X, X, _, _,
      _, X, _, _,
      _, _, _, _
    ],
    [
      _, X, _, _,      // rotation 2
      X, X, X, _,
      _, _, _, _,
      _, _, _, _
    ],
    [
      _, X, _, _,      // rotation 3
      _, X, X, _,
      _, X, _, _,
      _, _, _, _
    ]
  ],
  [
    // piece Z - index 6
    [
      _, _, _, _,      // rotation 0
      X, X, _, _,
      _, X, X, _,
      _, _, _, _
    ],
    [
      _, X, _, _,      // rotation 1
      X, X, _, _,
      X, _, _, _,
      _, _, _, _
    ],
    [
      X, X, _, _,      // rotation 2
      _, X, X, _,
      _, _, _, _,
      _, _, _, _
    ],
    [
      _, _, X, _,      // rotation 3
      _, X, X, _,
      _, X, _, _,
      _, _, _, _
    ]
  ]
];

export const DEVELOPMENT_MATRIX_20_10: number[] = [ // TODO delete at the end
  _, _, _, _, _, _, _, _, _, _,
  _, _, _, _, _, _, _, _, _, _,
  _, _, _, _, _, _, _, _, _, _,
  _, _, _, _, _, _, _, _, _, _,
  _, _, _, _, _, _, _, _, _, _,
  _, _, _, _, _, _, _, _, _, _,
  _, _, _, _, _, _, _, _, _, _,
  _, _, _, _, _, _, _, _, _, _,
  _, _, X, _, _, _, _, _, _, _,
  _, _, X, _, X, X, _, _, _, _,
  _, _, X, X, X, _, _, _, _, _,
  _, X, X, X, _, _, _, _, _, _,
  X, X, _, _, _, _, _, _, _, _,
  X, X, _, _, _, _, _, _, _, _,
  X, _, _, _, _, _, _, _, _, _,
  X, _, _, _, _, _, X, _, _, _,
  X, X, _, _, _, _, X, X, X, X,
  X, _, _, _, X, X, X, _, X, _,
  _, _, _, _, X, _, X, X, X, X,
  _, _, _, X, X, _, _, X, X, X
].map((item) => item ? 1 : 0);
