import { Actor, Size } from "../types/Actor";
import { Point } from "../types/Point";
import {
  canvasWidth,
  canvasHeight,
  playWidth,
  playHeight,
  pieceUnit,
} from "../utils/CanvasMeasureVars";
import { pieza } from "../actors/Piece";

//deberia tener un array para las rotaciones de cada pieza?
let piecesColor = [
  "yellow",
  "blue",
  "orange",
  "red",
  "green",
  "cyan",
  "purple",
];

export class PiecesActors extends Actor {
  pieceSize: number;
  origin: Point;
  speed: Point;
  currentPiece: any;
  //pieceColor: string;
  constructor(initialPos: Point) {
    super();
    this.pieceSize = 10;
    this.origin = { x: initialPos.x, y: initialPos.y };
    this.speed = { x: 0, y: 10 };
    this.currentPiece = pieza.LL;
    //	this.pieceColor = "red" deberia tener un array de colores para asignarlos a cada pieza
  }
  update(delta: number) {
    let newPosY = this.origin.y + this.speed.y * delta;
    if (newPosY < canvasHeight - this.pieceSize && newPosY >= 0) {
      this.origin.y = newPosY;
    }
  }
  draw(delta: number, ctx: CanvasRenderingContext2D) {
    ctx.save();
    ctx.translate(this.origin.x, this.origin.y);
    for (let x = 0; x < this.currentPiece.length; x++) {
      for (let y = 0; y < this.currentPiece[x].length; y++) {
        if (this.currentPiece[x][y] == 1) {
          ctx.fillRect(
            this.pieceSize * y,
            this.pieceSize * x,
            this.pieceSize,
            this.pieceSize
          );
        }
      }
    }
    ctx.restore();
  }
}
