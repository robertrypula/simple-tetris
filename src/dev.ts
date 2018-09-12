// Copyright (c) 2018 Robert Rypuła - https://github.com/robertrypula

import { argv, isNode } from 'terminal-game-io';

import { TerminalGameIoRunner } from './lib';

let terminalGameIoRunner: TerminalGameIoRunner;

if (isNode && argv.length > 2 && argv[2] === 'run') {
  terminalGameIoRunner = new TerminalGameIoRunner();
}
