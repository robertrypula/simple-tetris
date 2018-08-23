# Simple Tetris

[![npm version](https://badge.fury.io/js/simple-tetris.svg)](https://badge.fury.io/js/simple-tetris)
[![Build Status](https://travis-ci.org/robertrypula/simple-tetris.svg?branch=master)](https://travis-ci.org/robertrypula/simple-tetris)
[![Coverage Status](https://coveralls.io/repos/github/robertrypula/simple-tetris/badge.svg?branch=master)](https://coveralls.io/github/robertrypula/simple-tetris?branch=master)
[![dependencies Status](https://david-dm.org/robertrypula/simple-tetris/status.svg)](https://david-dm.org/robertrypula/simple-tetris)
[![devDependencies Status](https://david-dm.org/robertrypula/simple-tetris/dev-status.svg)](https://david-dm.org/robertrypula/simple-tetris?type=dev)

Simple tetris implementation based on some of the Redux concepts written from scratch. It provides game logic for your application.

Web example available [here](http://rypula.pl/simple-tetris/terminal-game-io-runner-browser.html)

## Installation

```
npm install simple-tetris
```

# TODO

- [DONE] assets to templates
- [DONE] rename terminal-game-io-runner to node and browser
- [DONE] createStore factory that hides reducers
- write real readme :)
- ...
- finish the game logic, currently it supports only moving the tetrimino by arrows and simple rotations
- finish rotation database for all tetriminos

## Want to check this project in development mode?

```
git clone https://github.com/robertrypula/simple-tetris.git
cd simple-tetris
npm install

npm run dev-node
```

This library can run also in the browser:

```
npm run dev-browser
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
