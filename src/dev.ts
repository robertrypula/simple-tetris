// Copyright (c) 2018 Robert Rypuła - https://github.com/robertrypula

import { argv, isNode } from 'terminal-game-io';

import { AsciiRunner } from './lib';

let asciiRunner: AsciiRunner;

if (isNode && argv.length > 2 && argv[2] === 'run') {
  asciiRunner = new AsciiRunner();
}
