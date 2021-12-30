import { Actor } from "../types/Actor"
import {canvasWidth, playWidth, playHeight } from "../utils/CanvasMeasureVars"

export class GameSpace extends Actor {
	update() { }
	keyboard_event() { }
	draw(delta: number, ctx: CanvasRenderingContext2D) {
		ctx.strokeStyle = "Red"
		ctx.strokeRect(canvasWidth/4, 0, playWidth, playHeight)
	}
}