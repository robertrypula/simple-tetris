// Copyright (c) 2018 Robert Rypuła - https://github.com/robertrypula/simple-tetris

import {
  createTerminalGameIo,
  FrameHandler,
  ITerminalGameIo,
  KeypressHandler
} from 'terminal-game-io';
import {
  fullMatrixSelector,
  gameLoopIteration,
  KEY_CODE_HARD_DROP,
  KEY_CODE_LEFT,
  KEY_CODE_RIGHT,
  KEY_CODE_ROTATE,
  MATRIX_SIZE_X,
  MATRIX_SIZE_Y,
  reducer,
  renderMatrixIntoAsciiFrame,
  Store
} from '../../game';

export class TerminalGameIoRunner {
  protected terminalGameIo: ITerminalGameIo;
  protected store: Store;

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
    this.terminalGameIo.triggerKeypress(keyName);
  }

  protected frameHandler: FrameHandler = (instance: ITerminalGameIo) => {
    const fullMatrix = fullMatrixSelector(this.store.getState());
    const frameData = renderMatrixIntoAsciiFrame(fullMatrix);

    instance.drawFrame(
      frameData,
      2 + (2 * MATRIX_SIZE_X) + 2,         // TODO get rid of magic numbers
      MATRIX_SIZE_Y + 2
    );
  }

  protected keypressHandler: KeypressHandler = (instance: ITerminalGameIo, keyName: string) => {
    let keyCode: number = null;

    switch (keyName) {
      case 'up':
      case 'Up':
      case 'ArrowUp':
      case 'ClickUp':
        keyCode = KEY_CODE_ROTATE;
        break;
      case 'left':
      case 'Left':
      case 'ArrowLeft':
      case 'ClickLeft':
        keyCode = KEY_CODE_LEFT;
        break;
      case 'right':
      case 'Right':
      case 'ArrowRight':
      case 'ClickRight':
        keyCode = KEY_CODE_RIGHT;
        break;
      case 'down':
      case 'Down':
      case 'ArrowDown':
      case 'ClickDown':
        keyCode = KEY_CODE_HARD_DROP;
        break;
      case 'escape':
      case 'Esc':
      case 'Escape':
        instance.exit();
        break;
    }

    gameLoopIteration(this.store, this.terminalGameIo.getTime(), keyCode);

    this.frameHandler(instance);
  }
}
