// Copyright (c) 2018 Robert Rypuła - https://github.com/robertrypula/simple-tetris

import { argv, isNode } from 'terminal-game-io';
import { TerminalGameIoClient } from './lib/clients/terminal-game-io-client/terminal-game-io-client';

let terminalGameIoClient: TerminalGameIoClient;

export const run = (domElementId: string = null) => {
  terminalGameIoClient = new TerminalGameIoClient(domElementId);
};

if (isNode && argv.length > 2 && argv[2] === 'run') {
  run();
}
