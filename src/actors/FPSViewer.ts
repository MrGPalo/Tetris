import { Actor } from "../types/Actor"

export class FPSViewer extends Actor {
	update() { }
	keyboard_event() { }
	draw(delta: number, ctx: CanvasRenderingContext2D) {
		const fps = (1 / delta).toFixed(0)
		ctx.font = "20px Arial"
		ctx.fillStyle = "red"
		ctx.fillText(`FPS: ${fps}`, 5, 20)
	}
}