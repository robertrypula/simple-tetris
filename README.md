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

[![Api client browser](https://cdn.rypula.pl/simple-tetris/api-client-browser.gif)](https://cdn.rypula.pl/simple-tetris/api-client-browser.gif)

You can check playable version [here](https://cdn.rypula.pl/simple-tetris/v1.2.0-rc/api-client-browser.html) (use WSAD keys on Desktop or on-screen buttons on Mobile devices)

Simplest code example:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Simple Tetris - Simplest example</title>
  <style>
    #game-root {
      height: 480px;
      margin-bottom: 8px;
      width: 240px;
    }
    #game-root > div {
      background-color: lightgray;
      border: 1px solid white;
      box-sizing: border-box;
      float: left;
      height: 24px;
      width: 24px;
    }
    #game-root > div.filled { background-color: gray; }
  </style>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body onLoad="run()">
  <div id="game-root"></div>

  <button onClick="handleEvent(SimpleTetris.KEY_CODE_LEFT);">left</button>
  <button onClick="handleEvent(SimpleTetris.KEY_CODE_RIGHT);">right</button>
  <button onClick="handleEvent(SimpleTetris.KEY_CODE_HARD_DROP);">down</button>
  <button onClick="handleEvent(SimpleTetris.KEY_CODE_ROTATE);">rotate</button>

  <script>
    var store;

    function handleEvent(keyCode) {
      SimpleTetris.gameLoopIteration(store, 0.0, keyCode);
      render();
    }

    function render() {
      var matrixBlocksToRender = SimpleTetris.matrixBlocksToRenderSelector(store.getState());
      var html = '';

      for (var i = 0; i < matrixBlocksToRender.length; i++) {
        html += matrixBlocksToRender[i] ? '<div class="filled"></div>' : '<div></div>';
      }
      document.getElementById('game-root').innerHTML = html;
    }

    function run() {
      store = new SimpleTetris.createStore();
      render();
    }
  </script>
  <script src="https://unpkg.com/simple-tetris"></script>
</body>
</html>
```

Interactive code examples:
- Clean JavaScript simplest example [here](https://stackblitz.com/edit/simple-tetris-js-simplest?file=index.html)
- Clean JavaScript full example with mobile support [here](https://stackblitz.com/edit/simple-tetris-js-full?file=index.html)
- **Angular 7** example [here](https://stackblitz.com/edit/simple-tetris-angular?file=src%2Fapp%2Fapp.component.html)

## Installation

```
npm install simple-tetris
```

## Ascii Runner alternative

If you just want to play the game and don't want to use any API you can simply use build-in Ascii Runner.

Playable browser example available [here](https://cdn.rypula.pl/simple-tetris/v1.2.0-rc/ascii-runner-browser.html) (use Arrows on Desktop or on-screen buttons on Mobile devices).

```html
<pre id="root"></pre>
<script src="https://unpkg.com/simple-tetris"></script>
<script>
  var asciiRunner = new SimpleTetris.AsciiRunner();
</script>
```

[![Ascii Runner browser](https://cdn.rypula.pl/simple-tetris/ascii-runner-browser.gif)](https://cdn.rypula.pl/simple-tetris/ascii-runner-browser.gif)

It works in terminal as well:

```
npm install simple-tetris && node node_modules/simple-tetris/dist/ascii-runner-node.js
```

[![Ascii Runner node](https://cdn.rypula.pl/simple-tetris/ascii-runner-node.gif)](https://cdn.rypula.pl/simple-tetris/ascii-runner-node.gif)

Content of the `ascii-runner-node.js` is as simple as:

```javascript
const SimpleTetris = require('simple-tetris');
const asciiRunner = new SimpleTetris.AsciiRunner();
```

ASCII runner uses my other library ([terminal-game-io](https://github.com/robertrypula/terminal-game-io)) 
that simplifies basic input and output of the text based games.

## Changelog

### Still TODO
- implement hard drop and integrate it with collision detection (probably in 1.3.x)
- move tetrimino one line down after given interval (probably in 1.4.x) 
- when tetrimino will hit the 'ground' trigger new tetrimino (probably in 1.5.x)
- detect and remove completely filled lines (probably in 1.6.x)
- detect game over / pause game (probably in 1.7.x)
- more?
- ...   
- extend the readme?
- ...

### 1.2.0 - ?? November 2018
- [todo] fix keyName parameter usage in ascii-runner.ts
- [todo] collision detection both with borders and other blocks

### 1.1.1 - 18 November 2018
- adds dedicated 'GameLoopIteration' type that solves the problem in the *.d.ts file used by older typescript compilers
- version upgrade of terminal-game-io (2.1.2 -> 3.1.0) - thanks to the new version of terminal-game-io all externals could be removed ('process' and 'readline')
- npm keywords update
- big update in examples (external stackblitz examples, internal API client example)
- big update in readme (code examples, animated gifs)
- simple-tetris is finally easy to import in any other project

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

Development mode is using Ascii Runner supported by `terminal-game-io` library.

```
git clone https://github.com/robertrypula/simple-tetris.git
cd simple-tetris
npm install

npm run dev-browser
```

You can develop and play Tetris directly in the terminal. It works even via the SSH connections.

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
