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
    size: Size = { w: 512 / 12, h: 512 / 12 }
  ) {
    super();
    this.pieceSize = size;
    this.pieceColor = "red";
    this.origin = { x: initialPos.x, y: initialPos.y };
    this.maxSpeed = 512 / 12;
    this.speed = { x: 0, y: this.maxSpeed };
  }
  update(delta: number) {
    let newPosY = this.origin.y + this.speed.y * delta;
    if (newPosY < 912 - this.pieceSize.h && newPosY >= 0) {
      this.origin.y = newPosY;
    }
  }

  keyboard_event(key: string) {
    switch (key) {
      case `ArrowRight`:
        if (
          this.origin.y != 912 - this.pieceSize.h &&
          this.origin.x >= 256  &&
          this.origin.x < 768 - this.pieceSize.w
        ) {
          this.origin.x += this.pieceSize.h / 2;
        }
        break;
      case `ArrowLeft`:
        if (
          this.origin.y != 912 - this.pieceSize.h &&
          this.origin.x > 256 + this.pieceSize.w / 2 &&
          this.origin.x < 768 - this.pieceSize.w / 2
        ) {
          this.origin.x -= this.pieceSize.w / 2;
        }
        break;
      case `ArrowDown`:
        if (this.origin.y ==912-this.pieceSize.h) {
          this.speed.x = 0;
          this.speed.y = 0;
        }
        if (this.origin.y < 912 - this.pieceSize.h) {
          this.origin.y += this.pieceSize.w;
        }
        break;
      case ` `:
        this.origin.y = 912 - this.pieceSize.h;
        this.speed.x = 0;
        this.speed.y = 0;
        break;
    }
  }

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
