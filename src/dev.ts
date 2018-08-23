// Copyright (c) 2018 Robert Rypuła - https://github.com/robertrypula/simple-tetris

import { argv, isNode } from 'terminal-game-io';
import { TerminalGameIoRunner } from './main';

let terminalGameIoRunner: TerminalGameIoRunner;

if (isNode && argv.length > 2 && argv[2] === 'run') {
  terminalGameIoRunner = new TerminalGameIoRunner();
}
