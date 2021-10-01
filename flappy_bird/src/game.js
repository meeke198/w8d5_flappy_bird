import Level from "./level"
import Bird from "./bird"

export default class FlappyBird {
  constructor(canvas){
    this.ctx = canvas.getContext("2d");
    this.dimensions = { width: canvas.width, height: canvas.height };
  }

  restart() {
    this.level = new Level(this.dimensions);
    this.bird = new Bird(this.dimensions);
    this.animate();
  }

  animate() {
    this.level.drawBackground(this.ctx);
    this.bird.drawBird(this.ctx);
  }
}
