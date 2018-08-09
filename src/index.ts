// Copyright (c) 2018 Robert Rypuła - https://github.com/robertrypula/simple-tetris

import {
  argv,
  createTerminalGameIo,
  isNode,
  ITerminalGameIo,
  ITerminalGameIoOptions
} from 'terminal-game-io';
import { frameHandler, keypressHandler } from './tetris-logic';

export * from './version';
export * from './tetris-logic';

let terminalGameIo: ITerminalGameIo;

export const run = (domElementId: string = null) => {
  terminalGameIo = createTerminalGameIo({
    domElementId,
    fps: 1,
    frameHandler,
    keypressHandler
  });
};

if (isNode && argv.length > 2 && argv[2] === 'run') {
  run();
}
