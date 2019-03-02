import FPSMeter from 'fpsmeter';

import { Component } from './Component';

export class Engine {
  components: Component[] = [];
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  fps: FPSMeter = new FPSMeter();
  isRunning: boolean = false;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
  }

  add(component: Component) {
    this.components.push(component);
  }

  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }

  step(delta: DOMHighResTimeStamp) {
    // window.requestAnimationFrame(dt => {
    // this.step(dt);
    // });
    this.clear();
    for (let i = 0; i < this.components.length; i++) {
      this.components[i].update(delta);
      this.components[i].draw(this.ctx);
    }
    this.fps.tick();
  }

  run() {
    for (let i = 0; i < this.components.length; i++) {
      this.components[i].setup(this);
    }

    this.step(window.performance.now());
  }
}
