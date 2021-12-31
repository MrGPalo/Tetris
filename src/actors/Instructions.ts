import { Actor } from "../types/Actor";

export class Instructions extends Actor {
  update() {}
  keyboard_event() {}
  draw(delta: number, ctx: CanvasRenderingContext2D) {
    ctx.font = "15px Arial";
    ctx.fillStyle = "red";
	  ctx.fillText(`Instructions`, 625, 30);
	  ctx.fillText(`ArrowUp: Rotate`, 625, 60);
	  ctx.fillText(`ArrowLeft: Move left`, 625, 90);
	  ctx.fillText(`ArrowRight: Move right`, 625, 120);
	  ctx.fillText(`ArrowDown: Soft drop`, 625, 150);
    ctx.fillText(`Spacebar: Hard drop`, 625, 180);
  }
}
