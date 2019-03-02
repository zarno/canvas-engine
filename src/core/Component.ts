import { Engine } from './Engine';

export class Component {
  engine: Engine;
  delta: DOMHighResTimeStamp;
  ctx: CanvasRenderingContext2D;

  setup(engine: Engine) {
    this.engine = engine;
  }
  update(delta: DOMHighResTimeStamp) {
    this.delta = delta;
  }
  draw(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx;
  }
}
