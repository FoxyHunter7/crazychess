/** 
 * @param {ActionsLibrary} library
 * @param {[row, col]} originPos 
 * 
 * ### KEEP IN MIND: 
 * The Y should be relative to the player,
 * - FOR BLACK: 
 *      - Y = 0 is where black starts
 * - FOR WHITE: 
 *      - Y = 0 is where white starts
 *
 * Y & X are 0-based
 */
function calcPossibleActions(library, originPos) {
    return actions = {
        moves : calcMovesActions(library, originPos),
        takes : calcTakesActions(library, originPos)
    }
}

function calcMovesActions(library, originPos) {
}

function calcTakesActions(library, originPos) {
}

export { calcPossibleActions };