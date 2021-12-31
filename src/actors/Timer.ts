import { Actor } from "../types/Actor"

export class Timer extends Actor {
	update() { }
	keyboard_event() { }
	draw(delta: number, ctx: CanvasRenderingContext2D) {
		const timer = "00:00"
		ctx.font = "20px Arial"
		ctx.fillStyle = "red"
		ctx.fillText(`Time: ${timer}`, 5, 50)
	}
}

//generar un cronometro solo para segundos y minutos