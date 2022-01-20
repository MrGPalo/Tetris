import { Actor } from "../types/Actor";

let emptyContainer = [
  "10000011000001",
  "10000000000001",
  "10000000000001",
  "10000000000001",
  "10000000000001",
  "10000000000001",
  "10000000000001",
  "10000000000001",
  "10000000000001",
  "10000000000001",
  "10000000000001",
  "10000000000001",
  "10000000000001",
  "10000000000001",
  "10000000000001",
  "10000000000001",
  "10000000000001",
  "10000000000001",
  "10000000000001",
  "10000000000001",
  "10000000000001",
  "10000000000001",
  "10000000000001",
  "10000000000001",
  "11111111111111",
];
// console.log(emptyContainer[0])
// emptyContainer.map((element, index) => {
//   for (let i = 0; i <element.length; i++){
//   console.log(element[i])
// }
// })

let teste = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 1, 0],
  [0, 1, 1, 1],
];

//console.log(teste[0].map((val, index) => teste.map((row) => row[index]).reverse()))


export class Container extends Actor {
  draw(delta: number, ctx: CanvasRenderingContext2D) {}
}
