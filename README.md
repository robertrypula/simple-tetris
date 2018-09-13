# Simple Tetris

[![npm version](https://badge.fury.io/js/simple-tetris.svg)](https://badge.fury.io/js/simple-tetris)
[![Build Status](https://travis-ci.org/robertrypula/simple-tetris.svg?branch=master)](https://travis-ci.org/robertrypula/simple-tetris)
[![Coverage Status](https://coveralls.io/repos/github/robertrypula/simple-tetris/badge.svg?branch=master)](https://coveralls.io/github/robertrypula/simple-tetris?branch=master)
[![dependencies Status](https://david-dm.org/robertrypula/simple-tetris/status.svg)](https://david-dm.org/robertrypula/simple-tetris)
[![devDependencies Status](https://david-dm.org/robertrypula/simple-tetris/dev-status.svg)](https://david-dm.org/robertrypula/simple-tetris?type=dev)

This package provides API that allows you to easily create clones of the 
Tetris game. It handles game core - your role is to write the UI. Library
was inspired by Redux and was written from scratch in TypeScript.

**NOTE:** This project is still not finished. More details in the TODO section below.

Code example of the simple API client is available on [CodeSandbox.io](https://codesandbox.io/s/l9o0lmm607)

Library is shipped with ASCII runner - a simple way of bootstrapping Tetris game without the need of using 
the API. Browser example is available [here](https://cdn.rypula.pl/simple-tetris/v1.1.0/ascii-runner-browser.html).
ASCII runner uses my other library ([terminal-game-io](https://github.com/robertrypula/terminal-game-io)) 
that simplifies basic input and output of the text based games.

## Installation

```
npm install simple-tetris
```

## TODO

- detecting collisions both with borders and other blocks (probably in 1.2.x)
- implement hard drop and integrate it with collision detection (probably in 1.3.x)
- move tetrimino one line down after given interval (probably in 1.4.x) 
- when tetrimino will hit the 'ground' trigger new tetrimino (probably in 1.5.x)
- detect and remove completely filled lines (probably in 1.6.x)
- detect game over / pause game (probably in 1.7.x)
- more?
- ...   
- extend the readme
- ...

## Changelog

### 1.1.0 - 13 September 2018

- rename 'assets' directory to 'templates'
- rename suffix of terminal-game-io-runner-* to node and browser
- createStore factory that hides reducers
- finish rotation database for all tetriminos
- project setup based on terminal-game-io wrapper
- split store into matrix and tetrimino sections
- moving the tetrimino by arrows and simple rotations
- let actions dispatch own actions and check store state
- finalization of the project structure that will be used across all 1.x.x versions

### 1.0.0 - 06 August 2018

- initial version of the project, nothing more than the PoC

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
