import { ActionsLibrary } from "./data/actionsLibrary.js"
import { calcPossibleActions } from "./logic/actionsCalc.js";
//const socket = io("http://localhost:3000")

const defaultLibrary = new ActionsLibrary();
const UberPawnsLibrary = new ActionsLibrary({
    pawn: {
        takes: {
            type: "insert",
            content: [
                {
                    single: false,
                    takes: [1, 1],
                    movesTo: [1, 1],
                    conditions: null
                },
                {
                    single: false,
                    takes: [-1, -1],
                    movesTo: [-1, -1],
                    conditions: null
                }
            ]
        }
    },
    rook: {
        moves: {
            type: "replace",
            content: [
                {
                    single: false,
                    dest: [1, 1],
                    conditions: null
                }
            ]
        }
    }
});

console.log(calcPossibleActions(UberPawnsLibrary, [2, 3]));