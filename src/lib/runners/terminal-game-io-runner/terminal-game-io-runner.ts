// Copyright (c) 2018 Robert Rypuła - https://github.com/robertrypula

import {
  createTerminalGameIo,
  FrameHandler,
  ITerminalGameIo,
  KeypressHandler
} from 'terminal-game-io';
import {
  createStore,
  fullMatrixSelector,
  gameLoopIteration,
  IStore,
  IStoreOptions,
  KEY_CODE_HARD_DROP,
  KEY_CODE_LEFT,
  KEY_CODE_RIGHT,
  KEY_CODE_ROTATE
} from '../../game';
import { renderMatrixIntoAsciiFrame } from '../../game/utils/utils'; // TODO consider adding it into public API

interface ITerminalGameIoRunnerOptions {
  domElementId: string;
  storeOptions: IStoreOptions;
}

const defaultOptions: ITerminalGameIoRunnerOptions = {
  domElementId: null,
  storeOptions: null
};

export class TerminalGameIoRunner {
  protected terminalGameIo: ITerminalGameIo;
  protected store: IStore;

  constructor(options: ITerminalGameIoRunnerOptions = defaultOptions) {
    this.store = createStore(
      options && options.storeOptions ? options.storeOptions : null
    );
    this.terminalGameIo = createTerminalGameIo({
      domElementId: options && options.domElementId ? options.domElementId : null,
      fps: 0.5,
      frameHandler: this.frameHandler,
      keypressHandler: this.keypressHandler
    });
  }

  public triggerKeypress(keyName: string) {
    this.terminalGameIo.triggerKeypress(keyName);
  }

  protected frameHandler: FrameHandler = (instance: ITerminalGameIo) => {
    const state = this.store.getState();
    const fullMatrix = fullMatrixSelector(state);
    const frameData = renderMatrixIntoAsciiFrame(fullMatrix);

    instance.drawFrame(
      frameData,
      2 + (2 * state.matrixSizeX) + 2,         // TODO get rid of magic numbers
      state.matrixSizeY + 2
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
