import { IActor, Actor, Size } from "../types/Actor";
import { Point } from "../types/Point";

export class Piece extends Actor implements IActor {
  pieceSize: Size;
  pieceColor: string;
	origin: Point;
  //cada pieza tiene que medir 1/24 del ancho/alto del canvas
  constructor(
    initialPos: Point,
    initialSpeed = 10,
    size: Size = { w: 50, h: 50 }
  ) {
    super();
    this.pieceSize = size;
    this.pieceColor = "red";
    this.origin = { x: initialPos.x, y: initialPos.y };
  }
  update(delta: number) {}
  draw(delta: number, ctx: CanvasRenderingContext2D) {
    let origin = this.origin;
	  let pieceSize = this.pieceSize;
	  ctx.strokeStyle = "red"
	  ctx.lineWidth = 4
	  ctx.save()
	  ctx.translate(origin.x, origin.y);
	  ctx.beginPath();
	  ctx.fillStyle = this.pieceColor
		ctx.fillRect(0,0, this.pieceSize.w, this.pieceSize.h)
	  ctx.lineTo(0, 0)
	  ctx.closePath()
	  ctx.stroke()
	  ctx.fill()
	  ctx.restore()
  }
}
