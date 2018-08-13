// Copyright (c) 2018 Robert Rypuła - https://github.com/robertrypula/simple-tetris

import {
  createTerminalGameIo,
  FrameHandler,
  ITerminalGameIo,
  KeypressHandler
} from 'terminal-game-io';

export class TerminalGameIoClient {
  protected terminalGameIo: ITerminalGameIo;

  constructor(domElementId: string = null) {
    this.terminalGameIo = createTerminalGameIo({
      domElementId,
      fps: 10,
      frameHandler: this.frameHandler,
      keypressHandler: this.keypressHandler
    });
  }

  protected frameHandler: FrameHandler = (instance: ITerminalGameIo) => {
    // let index: number;
    const frameData =
      '<| . . . . . . . . . .|>' +
      '<| . . . . . . . . . .|>' +
      '<| . . . . . . . . . .|>' +
      '<| . . . . . . . . . .|>' +
      '<| . . . . . . . . . .|>' +
      '<| . . . . . . . . . .|>' +
      '<| . . . . . . . . . .|>' +
      '<| . . . . . . . . . .|>' +
      '<| . . . . . . . . . .|>' +
      '<| . . . . . . . . . .|>' +
      '<| . . . . . . . . . .|>' +
      '<| . . . . . . . . . .|>' +
      '<| . . . . . . . . . .|>' +
      '<| . . . . . . . . . .|>' +
      '<| . . . . . . . . . .|>' +
      '<| . . . . . . . . . .|>' +
      '<| . . . . . . . . . .|>' +
      '<| . . . . . . . . . .|>' +
      '<| . . . . . . . . . .|>' +
      '<| . . . . . . . . . .|>' +
      '<|====================|>' +
      '  \\/\\/\\/\\/\\/\\/\\/\\/\\/\\/  ';

    // index = posY * (2 * 10 + 2 * 2) + (2 + posX * 2);
    // frameData = setCharAt(frameData, index, '[');
    // frameData = setCharAt(frameData, index + 1, ']');

    instance.drawFrame(
      frameData,
      2 * 10 + 2 * 2,
      22
    );
  }

  protected keypressHandler: KeypressHandler = (instance: ITerminalGameIo, keyName: string) => {
    switch (keyName) {
      case 'down':
      case 'Down':
      case 'ArrowDown':
      case 'ClickDown':

        break;
      case 'up':
      case 'Up':
      case 'ArrowUp':
      case 'ClickUp':

        break;
      case 'left':
      case 'Left':
      case 'ArrowLeft':
      case 'ClickLeft':

        break;
      case 'right':
      case 'Right':
      case 'ArrowRight':
      case 'ClickRight':

        break;
      case 'escape':
      case 'Esc':
      case 'Escape':
        instance.exit();
        break;
    }

    this.frameHandler(instance);
  }
}
