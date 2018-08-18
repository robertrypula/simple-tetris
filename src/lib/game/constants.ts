// Copyright (c) 2018 Robert Rypuła - https://github.com/robertrypula/simple-tetris

import { TetriminoList } from './game.interface';

export const KEY_CODE_ROTATE = 0;
export const KEY_CODE_LEFT = 1;
export const KEY_CODE_RIGHT = 2;
export const KEY_CODE_HARD_DROP = 3;

export const MATRIX_SIZE_X = 10;
export const MATRIX_SIZE_Y = 20;

export const TETRIMINO_SIZE_X = 4;
export const TETRIMINO_SIZE_Y = 4;
export const TETRIMINO_ROTATIONS = 4;

const _ = false;
const X = true;

export const TETRIMINO_LIST: TetriminoList = [
  [
    // piece I
    [
      _, _, _, _,      // rotation 0
      X, X, X, X,
      _, _, _, _,
      _, _, _, _
    ],
    [
      _, X, _, _,      // rotation 1
      _, X, _, _,
      _, X, _, _,
      _, X, _, _
    ],
    [
      _, _, _, _,      // rotation 2
      _, _, _, _,
      X, X, X, X,
      _, _, _, _
    ],
    [
      _, _, X, _,      // rotation 3
      _, _, X, _,
      _, _, X, _,
      _, _, X, _
    ]
  ],
  [
    // piece J
    [
      _, _, _, _,      // rotation 0
      X, X, X, _,
      _, _, X, _,
      _, _, _, _
    ],
    [
      _, _, _, _,      // rotation 1 TODO prepare it
      X, X, X, _,
      _, _, X, _,
      _, _, X, _
    ],
    [
      _, _, _, _,      // rotation 2 TODO prepare it
      X, X, X, _,
      _, _, X, _,
      _, X, X, _
    ],
    [
      _, _, _, _,      // rotation 3 TODO prepare it
      X, X, X, _,
      _, _, X, _,
      X, _, X, X
    ]
  ],
  [
    // piece L
    [
      _, _, _, _,      // rotation 0
      X, X, X, _,
      X, _, _, _,
      _, _, _, _
    ],
    [
      _, _, _, _,      // rotation 1 TODO prepare it
      X, X, X, _,
      X, _, X, _,
      _, _, _, _
    ],
    [
      _, _, _, _,      // rotation 2 TODO prepare it
      X, X, X, _,
      X, _, X, _,
      _, _, X, _
    ],
    [
      _, _, _, _,      // rotation 3 TODO prepare it
      X, X, X, _,
      X, _, X, _,
      _, _, X, X
    ]
  ],
  [
    // piece O
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
    // piece S
    [
      _, _, _, _,      // rotation 0
      _, X, X, _,
      X, X, _, _,
      _, _, _, _
    ],
    [
      _, _, _, _,      // rotation 1 TODO prepare it
      _, X, X, _,
      X, X, X, _,
      _, _, X, _
    ],
    [
      _, _, _, _,      // rotation 2 TODO prepare it
      _, X, X, _,
      X, X, X, _,
      _, X, X, _
    ],
    [
      _, _, _, _,      // rotation 3 TODO prepare it
      _, X, X, _,
      X, X, _, _,
      X, X, _, _
    ]
  ],
  [
    // piece T
    [
      _, _, _, _,      // rotation 0
      X, X, X, _,
      _, X, _, _,
      _, _, _, _
    ],
    [
      _, X, _, _,      // rotation 1
      _, X, X, _,
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
      X, X, _, _,
      _, X, _, _,
      _, _, _, _
    ]
  ],
  [
    // piece Z
    [
      _, _, _, _,      // rotation 0
      X, X, _, _,
      _, X, X, _,
      _, _, _, _
    ],
    [
      _, _, X, _,      // rotation 1
      _, X, X, _,
      _, X, _, _,
      _, _, _, _
    ],
    [
      X, X, _, _,      // rotation 2
      _, X, X, _,
      _, _, _, _,
      _, _, _, _
    ],
    [
      _, X, _, _,      // rotation 3
      X, X, _, _,
      X, _, _, _,
      _, _, _, _
    ]
  ]
];

// --------------------------------
// TODO remove this temporary solution - begin
function shuffle(a: any[]) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}

shuffle(TETRIMINO_LIST);
// TODO remove this temporary solution - end
// --------------------------------
