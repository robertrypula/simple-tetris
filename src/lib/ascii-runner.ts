// Copyright (c) 2018 Robert Rypuła - https://github.com/robertrypula

import { createTerminalGameIo, ITerminalGameIo, Key, KeyName } from 'terminal-game-io';

import { render } from './ascii-renderer';
import * as fromGame from './game';

export interface IAsciiRunnerOptions {
  createStoreOptions?: fromGame.ICreateStoreOptions;
  domElementId?: string;
}

export class AsciiRunner {
  protected terminalGameIo: ITerminalGameIo;
  protected store: fromGame.Store;

  public constructor(options?: IAsciiRunnerOptions) {
    this.initializeStore(options);
    this.initializeTerminalGameIo(options);
  }

  public triggerKeypress(keyName: string): void {
    this.terminalGameIo.triggerKeypress(keyName);
  }

  protected initializeStore(options: IAsciiRunnerOptions): void {
    this.store = fromGame.createStore(
      options && options.createStoreOptions ? options.createStoreOptions : null
    );
  }

  protected initializeTerminalGameIo(options: IAsciiRunnerOptions): void {
    this.terminalGameIo = createTerminalGameIo({
      domElementId: options && options.domElementId ? options.domElementId : null,
      fps: 1000 / fromGame.TIME_STEP_DURATION,
      frameHandler: this.frameHandler.bind(this),
      keypressHandler: this.keypressHandler.bind(this)
    });
  }

  protected frameHandler(instance: ITerminalGameIo): void {
    fromGame.gameLoopIteration(this.store, this.terminalGameIo.getTime() * 1000);

    const { data, width, height } = render(this.store.getState());

    this.terminalGameIo.drawFrame(data, width, height);
  }

  protected keypressHandler(instance: ITerminalGameIo, keyName: KeyName): void {
    let keyCode: number = null;

    switch (keyName) {
      case Key.ArrowUp:
        keyCode = fromGame.KEY_CODE_ROTATE;
        break;
      case Key.ArrowLeft:
        keyCode = fromGame.KEY_CODE_LEFT;
        break;
      case Key.ArrowRight:
        keyCode = fromGame.KEY_CODE_RIGHT;
        break;
      case Key.ArrowDown:
        keyCode = fromGame.KEY_CODE_HARD_DROP;
        break;
      case Key.Escape:
        this.terminalGameIo.exit();
        break;
    }

    fromGame.gameLoopIteration(this.store, this.terminalGameIo.getTime() * 1000, keyCode);

    this.frameHandler(instance);
  }
}
