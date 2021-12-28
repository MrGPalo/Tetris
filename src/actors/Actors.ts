export interface IActor {
	position: number;
	update: (delta: number) => void;
	draw: (delta: number, ctx: CanvasRenderingContext2D) => void;
}

export class Actor implements IActor {
	position: ;
	constructor(position: Point);
	
}
