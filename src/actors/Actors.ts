import { IActor, Actor, Size } from "../types/Actor";
import { Point } from "../types/Point";
import {
  canvasWidth,
  canvasHeight,
  playWidth,
  playHeight,
  pieceUnit,
} from "../utils/CanvasMeasureVars";

export class Piece extends Actor implements IActor {
  pieceSize: Size;
  pieceColor: string;
  origin: Point;
  speed: Point;
  maxSpeed: number;
  constructor(
    initialPos: Point,
    initialSpeed = 10,
    size: Size = { w: pieceUnit, h: pieceUnit }
  ) {
    super();
    this.pieceSize = size;
    this.pieceColor = "red";
    this.origin = { x: initialPos.x, y: initialPos.y };
    this.maxSpeed = pieceUnit;
    this.speed = { x: 0, y: this.maxSpeed };
  }
  update(delta: number) {
    let newPosY = this.origin.y + this.speed.y * delta;
    if (newPosY < canvasHeight - this.pieceSize.h && newPosY >= 0) {
      this.origin.y = newPosY;
    }
  }

  keyboard_event(key: string) {
    switch (key) {
      case `ArrowRight`:
        if (
          this.origin.y != canvasHeight - this.pieceSize.h &&
          this.origin.x >= playWidth / 2 &&
          this.origin.x < (playWidth * 3) / 2 - this.pieceSize.w
        ) {
          this.origin.x += this.pieceSize.h / 2;
        }
        break;
      case `ArrowLeft`:
        if (
          this.origin.y != canvasHeight - this.pieceSize.h &&
          this.origin.x > playWidth / 2 + this.pieceSize.w / 2 &&
          this.origin.x < (playWidth * 3) / 2 - this.pieceSize.w / 2
        ) {
          this.origin.x -= this.pieceSize.w / 2;
        }
        break;
      case `ArrowDown`:
        if (this.origin.y == canvasHeight - this.pieceSize.h) {
          this.speed.y = 0
          this.speed.x = 0
        } else {
          this.speed.y += this.pieceSize.h
        }
        // console.log("->")
        // this.speed.y ++
        // console.log(this.speed.y)
        break;
      case ` `:
        this.origin.y = canvasHeight - this.pieceSize.h;
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
