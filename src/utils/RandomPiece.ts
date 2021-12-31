import { pieza } from "../actors/Piece";
import _ from 'lodash'

export const randomPieceSelect = () => {
	return _.sample(pieza)
}