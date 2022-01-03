import { Actor, IActor } from "./types/Actor"
import { Piece } from "./actors/Actors"
import { FPSViewer } from "./actors/FPSViewer"
import { Timer } from "./actors/Timer"
import { Score } from "./actors/Score"
import { Instructions } from "./actors/Instructions"
import { GameSpace } from "./actors/GameSpace"
import { canvasWidth, pieceUnit } from "./utils/CanvasMeasureVars"
import { PieceViewer } from "./actors/NextPiece"
import {PiecesActors} from "./utils/Actor.generator"

window.onload = () => {
	const canvas = document.getElementById("canvas") as HTMLCanvasElement;
	const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

	let instructions = new Instructions
	let gameSpace = new GameSpace
	let pieceViewer = new PieceViewer
	let fps = new FPSViewer
	let timer = new Timer
	let score = new Score
	// let piece = new Piece({ x: canvas.width/2 - pieceUnit/2, y: 0 });
	let pieces = new PiecesActors({ x: canvasWidth / 2 - pieceUnit * 1.5, y: 0 });


	let actors: Array<IActor> = [instructions, gameSpace,pieceViewer,pieces, fps, timer, score]
	console.log(canvas.width/2)
	let lastFrame = 0;
	const render = (time: number) => {
		let delta = (time - lastFrame) / 1000;
		lastFrame = time;
		actors.forEach(e => e.update(delta))
		ctx.clearRect(0, 0, canvas.width, canvas.width);
		actors.forEach(e => {
			ctx.save()
			e.draw(delta, ctx)
			ctx.restore()
		})
		window.requestAnimationFrame(render)
	}
	window.requestAnimationFrame(render)

	document.body.addEventListener("keydown", e => {
		actors.forEach(actor => {
			actor.keyboard_event(e.key)
		})
	})

}