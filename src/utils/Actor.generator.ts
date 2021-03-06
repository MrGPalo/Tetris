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
import {randomPieceSelect} from "../utils/RandomPiece"

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
  base: number;
  //pieceColor: string;
  constructor(initialPos: Point) {
    super();
    this.pieceSize =pieceUnit;
    this.origin = { x: initialPos.x, y: initialPos.y };
    this.speed = { x: 0, y: pieceUnit / 2 };
    this.base = canvasHeight
    this.currentPiece = randomPieceSelect();
    console.log(typeof(this.currentPiece))
    //console.log(this.pieceSize, randomPieceSelect().length);
    //	this.pieceColor = "red" deberia tener un array de colores para asignarlos a cada pieza
  }
  update(delta: number) {
    let newPosY = (this.origin.y += this.speed.y * delta);
    if (newPosY < canvasHeight - this.pieceSize && newPosY >= 0) {
      this.origin.y = newPosY;
    }
  }
  rotate() {
    
  }

  keyboard_event(key: string) {
    switch (key) {
      case `ArrowRight`:
        if (
          this.origin.y != canvasHeight - this.pieceSize &&
          this.origin.x > canvasWidth/4 - this.pieceSize &&
          this.origin.x < canvasWidth *3/4 - this.pieceSize*3
        ) {
          this.origin.x += this.pieceSize / 2;
        }
        break;
      case `ArrowLeft`:
        if (
          this.origin.y != canvasHeight - this.pieceSize &&
          this.origin.x > playWidth / 2 - this.pieceSize* 3/2 &&
          this.origin.x < (playWidth * 3) / 2 - this.pieceSize / 2
        ) {
          this.origin.x -= this.pieceSize / 2;
        }
        break;
      case `ArrowUp`:
        if (this.origin.y != this.base -this.pieceSize*5) {
          if (this.currentPiece != pieza.Q) {
          this.currentPiece = this.currentPiece.map((e: any, index: any) =>
            this.currentPiece.map((row: any) => row[index]).reverse()
          );
            
          }
        }
        break
      case `ArrowDown`:
        if (this.origin.y == this.base - this.pieceSize*4) {
          this.speed.y = 0;
          this.speed.x = 0;
        } else {
          this.speed.y += this.pieceSize;
        }
        break;
      case ` `:
        this.origin.y = this.base - this.pieceSize*4;
        console.log(this.origin.y)
        this.speed.x = 0;
        this.speed.y = 0;
        break;
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
