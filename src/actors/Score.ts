import { Actor } from "../types/Actor";

export class Score extends Actor {
  update() {}
  keyboard_event() {}
  draw(delta: number, ctx: CanvasRenderingContext2D) {
    const score = "00";
    ctx.font = "30px Arial";
    ctx.fillStyle = "red";
    ctx.fillText(`Score: ${score}`, 5, 130);
  }
}
