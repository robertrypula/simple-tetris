// Copyright (c) 2018 Robert Rypuła - https://github.com/robertrypula/simple-tetris

import {
  createTerminalGameIo,
  FrameHandler,
  ITerminalGameIo,
  KeypressHandler
} from 'terminal-game-io';

export class TerminalGameIoRunner {
  protected terminalGameIo: ITerminalGameIo;

  constructor(domElementId: string = null) {
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
