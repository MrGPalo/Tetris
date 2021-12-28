import { IActor } from "./types/Actor"
import{ Piece } from "./actors/Actors"

window.onload = () => {
	const canvas = document.getElementById("canvas") as HTMLCanvasElement;
	const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

	let piece = new Piece ({x:100, y:100})

	let actors: Array<IActor> =[piece]
		
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

}