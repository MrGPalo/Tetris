import { Actor, IActor } from "./types/Actor"
import { Piece } from "./actors/Actors"
import { FPSViewer } from "./actors/FPSViewer"
import { Timer } from "./actors/Timer"
import {Score} from "./actors/Score"

window.onload = () => {
	const canvas = document.getElementById("canvas") as HTMLCanvasElement;
	const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

	let fps = new FPSViewer
	let timer = new Timer
	let score = new Score
	let piece = new Piece ({x:100, y:100})

	let actors: Array<IActor> =[fps,timer,score, piece]
		
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