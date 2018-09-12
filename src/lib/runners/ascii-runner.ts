// Copyright (c) 2018 Robert Rypuła - https://github.com/robertrypula

import { createTerminalGameIo, ITerminalGameIo } from 'terminal-game-io';

import * as fromGame from '../game';
import { renderMatrixBlocksIntoAsciiFrame } from '../game/utils/utils'; // TODO consider adding it into public API

export interface IAsciiRunnerOptions {
  createStoreOptions: fromGame.ICreateStoreOptions;
  domElementId: string;
}

export class AsciiRunner {
  protected terminalGameIo: ITerminalGameIo;
  protected store: fromGame.Store;

  constructor(options?: IAsciiRunnerOptions) {
    this.store = fromGame.createStore(
      options && options.createStoreOptions ? options.createStoreOptions : null
    );
    this.terminalGameIo = createTerminalGameIo({
      domElementId: options && options.domElementId ? options.domElementId : null,
      fps: 0.5,
      frameHandler: (instance: ITerminalGameIo) => this.frameHandler(instance),
      keypressHandler: (instance: ITerminalGameIo, keyName: string) => this.keypressHandler(instance, keyName)
    });
  }

  public triggerKeypress(keyName: string) {
    this.terminalGameIo.triggerKeypress(keyName);
  }

  protected frameHandler(instance: ITerminalGameIo) {
    const state: fromGame.IState = this.store.getState();
    const { sizeX, sizeY } = state.matrix;
    const matrixBlocksToRender = fromGame.matrixBlocksToRenderSelector(state);
    const frameData = renderMatrixBlocksIntoAsciiFrame(matrixBlocksToRender, sizeX, sizeY);

    instance.drawFrame(
      frameData,
      2 + (2 * sizeX) + 2,         // TODO get rid of magic numbers
      sizeY + 2
    );
  }

  protected keypressHandler(instance: ITerminalGameIo, keyName: string) {
    let keyCode: number = null;

    switch (keyName) {
      case 'up':
      case 'Up':
      case 'ArrowUp':
      case 'ClickUp':
        keyCode = fromGame.KEY_CODE_ROTATE;
        break;
      case 'left':
      case 'Left':
      case 'ArrowLeft':
      case 'ClickLeft':
        keyCode = fromGame.KEY_CODE_LEFT;
        break;
      case 'right':
      case 'Right':
      case 'ArrowRight':
      case 'ClickRight':
        keyCode = fromGame.KEY_CODE_RIGHT;
        break;
      case 'down':
      case 'Down':
      case 'ArrowDown':
      case 'ClickDown':
        keyCode = fromGame.KEY_CODE_HARD_DROP;
        break;
      case 'escape':
      case 'Esc':
      case 'Escape':
        instance.exit();
        break;
    }

    fromGame.gameLoopIteration(this.store, this.terminalGameIo.getTime(), keyCode);

    this.frameHandler(instance);
  }
}
