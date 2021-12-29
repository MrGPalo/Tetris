import { Actor } from "../types/Actor"

export class GameSpace extends Actor {
	update() { }
	keyboard_event() { }
	draw(delta: number, ctx: CanvasRenderingContext2D) {
		ctx.strokeStyle = "Red"
		ctx. strokeRect(256,112,512,800)
	}
}