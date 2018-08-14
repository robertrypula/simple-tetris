// Copyright (c) 2018 Robert Rypuła - https://github.com/robertrypula/simple-tetris

import {
  createTerminalGameIo,
  FrameHandler,
  ITerminalGameIo,
  KeypressHandler
} from 'terminal-game-io';
import { gameLoop, IStore, reducer, Store } from '../../game';

export class TerminalGameIoRunner {
  protected terminalGameIo: ITerminalGameIo;
  protected store: IStore;

  constructor(domElementId: string = null) {
    this.store = new Store(reducer);
    this.terminalGameIo = createTerminalGameIo({
      domElementId,
      fps: 0.5,
      frameHandler: this.frameHandler,
      keypressHandler: this.keypressHandler
    });
  }

  public triggerKeypress(keyName: string) {
    // this.terminalGameIo.triggerKeypress(keyName);   // TODO uncomment when terminal-game-io v2.1.1 will be released
  }

  protected frameHandler: FrameHandler = (instance: ITerminalGameIo) => {
    const left = '<|';
    const right = '|>';
    const squareEmpty = ' .';
    const squareFilled = '[]';
    const bottom1 = '==';
    const bottom2 = '\\/';
    const bottomLeftRight = '  ';
    const board = this.store.getState().board;
    const piece = this.store.getState().tetriminoCurrent;
    const pieceX = this.store.getState().tetriminoCurrentX;
    const pieceY = this.store.getState().tetriminoCurrentY;
    let frameData: string = '';

    for (let y = 0; y < 20; y++) {
      frameData += left;
      for (let x = 0; x < 10; x++) {
        frameData += board[y * 10 + x] || (
          x - pieceX >= 0 && x - pieceX < 4 &&
          y - pieceY >= 0 && y - pieceY < 4 &&
          piece[(y - pieceY) * 4 + (x - pieceX)]
        )
          ? squareFilled
          : squareEmpty;
      }
      frameData += right;
    }

    frameData += left;
    for (let x = 0; x < 10; x++) {
      frameData += bottom1;
    }
    frameData += right;

    frameData += bottomLeftRight;
    for (let x = 0; x < 10; x++) {
      frameData += bottom2;
    }
    frameData += bottomLeftRight;

    instance.drawFrame(
      frameData,
      left.length + squareEmpty.length * 10 + right.length,
      20 + 2
    );
  }

  protected keypressHandler: KeypressHandler = (instance: ITerminalGameIo, keyName: string) => {
    let keyCode: number = null;

    switch (keyName) {
      case 'down':
      case 'Down':
      case 'ArrowDown':
      case 'ClickDown':
        keyCode = 2;
        break;
      case 'up':
      case 'Up':
      case 'ArrowUp':
      case 'ClickUp':
        keyCode = 0;
        break;
      case 'left':
      case 'Left':
      case 'ArrowLeft':
      case 'ClickLeft':
        keyCode = 3;
        break;
      case 'right':
      case 'Right':
      case 'ArrowRight':
      case 'ClickRight':
        keyCode = 1;
        break;
      case 'escape':
      case 'Esc':
      case 'Escape':
        instance.exit();
        break;
    }

    gameLoop(this.store, this.terminalGameIo.getTime(), keyCode);

    this.frameHandler(instance);
  }
}
