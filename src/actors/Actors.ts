import { IActor, Actor, Size } from "../types/Actor";
import { Point } from "../types/Point";

export class Piece extends Actor implements IActor {
  pieceSize: Size;
  pieceColor: string;
  origin: Point;
  speed: Point;
  maxSpeed: number;
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
    this.maxSpeed = 10 * 10;
    this.speed = { x: 0, y: this.maxSpeed };
  }
  update(delta: number) {
    let newPosY = this.origin.y + this.speed.y * delta;
    if (newPosY < 1024 && newPosY >= 0) {
      this.origin.y = newPosY;
    }
  }

  keyboard_event(key: string) {
    switch (key) {
      case `ArrowRight`:
        console.log("Right");
        this.origin.x += 10;
        break;
      case `ArrowLeft`:
        console.log("Left");
        this.origin.x -= 10;
        break;
      case `ArrowDown`:
        console.log("Down");
        this.speed.y + 5;
        break;
      case ` `:
        console.log("Spacebar");
        break;
    }
  }

  // keyboard_event_up(key: string) {
  // 	switch (key) {
  // 		case `ArrowRight`:
  // 			console.log("Right up");
  // 			break
  // 		case `ArrowLeft`:
  // 			console.log("Left up")
  // 			break
  // 	}
  // }

  draw(delta: number, ctx: CanvasRenderingContext2D) {
    let origin = this.origin;
    let pieceSize = this.pieceSize;
    ctx.strokeStyle = "red";
    ctx.lineWidth = 4;
    ctx.save();
    ctx.translate(origin.x, origin.y);
    ctx.beginPath();
    ctx.fillStyle = this.pieceColor;
    ctx.fillRect(0, 0, this.pieceSize.w, this.pieceSize.h);
    ctx.closePath();
    ctx.restore();
  }
}
