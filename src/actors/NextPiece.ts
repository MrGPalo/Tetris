import { Actor } from "../types/Actor";
import { canvasWidth, canvasHeight } from "../utils/CanvasMeasureVars";

export class PieceViewer extends Actor {
  update() {}
  keyboard_event() {}
  draw(delta: number, ctx: CanvasRenderingContext2D) {
    ctx.strokeStyle = "Red";
    ctx.strokeRect(canvasWidth*13/16, canvasHeight*5/8, canvasWidth * 2/16, canvasHeight*2/8);
  }
}
