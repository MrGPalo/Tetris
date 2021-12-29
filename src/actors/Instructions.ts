import { Actor } from "../types/Actor";

export class Instructions extends Actor {
  update() {}
  keyboard_event() {}
  draw(delta: number, ctx: CanvasRenderingContext2D) {
    ctx.font = "20px Arial";
    ctx.fillStyle = "red";
	  ctx.fillText(`Instructions`, 780, 30);
	  ctx.fillText(`ArrowUp: Rotate`, 780, 70);
	  ctx.fillText(`ArrowLeft: Move to left`, 780, 110);
	  ctx.fillText(`ArrowRight: Move to right`, 780, 150);
	  ctx.fillText(`ArrowDown: Soft drop`, 780, 190);
    ctx.fillText(`Spacebar: Hard drop`, 780, 230);
  }
}
