// Copyright (c) 2018 Robert Rypuła - https://github.com/robertrypula

import {
  createTerminalGameIo,
  FrameHandler,
  ITerminalGameIo,
  KeypressHandler
} from 'terminal-game-io';
import {
  createStore,
  effectiveMatrixBlocksSelector,
  gameLoopIteration,
  ICreateStoreOptions,
  IStore,
  KEY_CODE_HARD_DROP,
  KEY_CODE_LEFT,
  KEY_CODE_RIGHT,
  KEY_CODE_ROTATE
} from '../game';
import { renderMatrixBlocksIntoAsciiFrame } from '../game/utils/utils'; // TODO consider adding it into public API

interface ITerminalGameIoRunnerOptions {
  createStoreOptions: ICreateStoreOptions;
  domElementId: string;
}

const defaultOptions: ITerminalGameIoRunnerOptions = {
  createStoreOptions: null,
  domElementId: null
};

export class TerminalGameIoRunner {
  protected terminalGameIo: ITerminalGameIo;
  protected store: IStore;

  constructor(options: ITerminalGameIoRunnerOptions = defaultOptions) {
    this.store = createStore(
      options && options.createStoreOptions ? options.createStoreOptions : null
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
    const { sizeX, sizeY } = state.matrix;
    const effectiveMatrixBlocks = effectiveMatrixBlocksSelector(state);
    const frameData = renderMatrixBlocksIntoAsciiFrame(effectiveMatrixBlocks, sizeX, sizeY);

    instance.drawFrame(
      frameData,
      2 + (2 * sizeX) + 2,         // TODO get rid of magic numbers
      sizeY + 2
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
