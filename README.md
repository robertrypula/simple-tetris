# Simple Tetris

[![npm version](https://badge.fury.io/js/simple-tetris.svg)](https://badge.fury.io/js/simple-tetris)
[![Build Status](https://travis-ci.org/robertrypula/simple-tetris.svg?branch=master)](https://travis-ci.org/robertrypula/simple-tetris)
[![Coverage Status](https://coveralls.io/repos/github/robertrypula/simple-tetris/badge.svg?branch=master)](https://coveralls.io/github/robertrypula/simple-tetris?branch=master)
[![dependencies Status](https://david-dm.org/robertrypula/simple-tetris/status.svg)](https://david-dm.org/robertrypula/simple-tetris)
[![devDependencies Status](https://david-dm.org/robertrypula/simple-tetris/dev-status.svg)](https://david-dm.org/robertrypula/simple-tetris?type=dev)

Tetris game implementation based on some of the Redux concepts written from scratch in TypeScript. It provides
API that allows you to write your own Tetris application in few minutes.

Playable browser example is available [here](http://rypula.pl/simple-tetris/terminal-game-io-runner-browser.html).

This project uses my other library ([terminal-game-io](https://github.com/robertrypula/terminal-game-io)) as a wrapper
to simplify basic input and output.

It you still want to implement your own Tetris game you can use simple-tetris API. For the details 
please visit example hosted on [CodeSandbox.io](https://codesandbox.io/s/l9o0lmm607)

## Installation

```
npm install simple-tetris
```

# TODO

- [DONE] assets to templates
- [DONE] rename terminal-game-io-runner to node and browser
- [DONE] createStore factory that hides reducers
- [DONE] finish rotation database for all tetriminos
- [DONE] project setup based on terminal-game-io wrapper
- [DONE in 1.1.0] split store into matrix and tetrimino sections
- [DONE in 1.1.0] moving the tetrimino by arrows and simple rotations
- detecting collisions both with borders and other blocks (probably in 1.2.x)
- implement hard drop and integrate it with collision detection (probably in 1.3.x)
- move tetrimino one line down after given interval (probably in 1.4.x) 
- when tetrimino will hit the 'ground' trigger new tetrimino (probably in 1.5.x)
- detect and remove completely filled lines (probably in 1.6.x)
- detect game over (probably in 1.7.x)
- more?
- ...   
- extend the readme
- ...

## Want to check this project in development mode?

```
git clone https://github.com/robertrypula/simple-tetris.git
cd simple-tetris
npm install

npm run dev-browser
```

You can also play Tetris directly in the terminal! It works even via the SSH connections.

```
npm run dev-node
```

## Licence

The MIT License (MIT)

Copyright (c) 2018 Robert Rypuła - https://github.com/robertrypula/simple-tetris

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
