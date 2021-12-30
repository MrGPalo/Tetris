const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

export const canvasWidth: number = canvas.width;
export const canvasHeight: number = canvas.height;
export const playWidth: number = canvas.width / 2;
export const playHeight: number = canvasHeight;
export const pieceUnit: number = playWidth / 12;