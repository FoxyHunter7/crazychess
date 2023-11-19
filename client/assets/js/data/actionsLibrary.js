// KEEP IN MIND: THE Y SHOULD BE RELATIVE TO THE PLAYER, 
// FOR BLACK: Y = 0 IS WHERE BLACK STARTS
// FOR WHITE: Y = 0 IS WHERE WHITE STARTS

// Y & X ARE 0-BASED IN THE CODE, NOT ZERO BASED

class ActionsLibrary {
    pawn;
    bishop;
    knight;
    rook;
    queen;
    king;

    constructor(actionOverrides) {
        if (actionOverrides) {
            this.pawn = new PawnActions(actionOverrides.pawn);
            this.bishop = new BishopActions(actionOverrides.bishop);
            this.knight = new knightActions(actionOverrides.knight);
            this.rook = new RookActions(actionOverrides.rook);
            this.queen = new QueenActions(actionOverrides.queen);
            this.king = new KingActions(actionOverrides.king);
        } else {
            this.pawn = new PawnActions();
            this.bishop = new BishopActions();
            this.knight = new knightActions();
            this.rook = new RookActions();
            this.queen = new QueenActions();
            this.king = new KingActions();
        }
    }

    getTakesFor(piece) {
        switch (piece) {
            case "pawn":
                return this.pawn.takes;
            case "bishop":
                return this.bishop.takes;
            case "knight":
                return this.knight.takes;
            case "rook":
                return this.rook.takes;
            case "queen":
                return this.queen.takes;
            case "king":
                return this.king.takes;
            default:
                throw new Error("Invalid piece type");
        }
    }

    getMovesFor(piece) {
        switch (piece) {
            case "pawn":
                return this.pawn.moves;
            case "bishop":
                return this.bishop.moves;
            case "knight":
                return this.knight.moves;
            case "rook":
                return this.rook.moves;
            case "queen":
                return this.queen.moves;
            case "king":
                return this.king.moves;
            default:
                throw new Error("Invalid piece type");
        }
    }
}

class PawnActions {
    moves = [
        {
            single: true,
            dest: [0, 1],
        },
        {
            single: true,
            dest: [0, 2],
            conditions: {
                y: 1,
                x: null
            }
        }
    ];
    takes = [
        {
            single: true,
            takes: [1, 1],
            movesTo: [1, 1],
        },
        {
            single: true,
            takes: [-1, 1],
            movesTo: [-1, 1],
        },
        {
            single: true,
            takes: [1, 0],
            movesTo: [1, 1],
            conditions: {
                y: 4,
                x: null
            }
        },
        {
            single: false,
            takes: [-1, 0],
            movesTo: [-1, 1],
            conditions: {
                y: 4,
                x: null
            }
        }
    ];

    constructor(actionOverrides) {
        if (actionOverrides  && actionOverrides != null) {
            if (actionOverrides.takes) {
                switch (actionOverrides.takes.type) {
                    case "replace":
                        this.takes = actionOverrides.takes.content;
                        break;
                    case "insert":
                        this.takes = this.takes.concat(actionOverrides.takes.content);
                        break;
                    default:
                        throw new Error("Invalid Override type for takes override");
                }
            }
            if (actionOverrides.moves) {
                switch (actionOverrides.moves) {
                    case "replace":
                        this.moves = actionOverrides.moves.content;
                        break;
                    case "insert":
                        this.moves = this.moves.concat(actionOverrides.moves.content);
                        break;
                    default:
                        throw new Error("Invalid Override type for moves override");
                }
            }
        }
    }
}

class BishopActions {
    moves = DIAGONAL_MOVES;
    takes = DIAGONAL_TAKES;

    constructor(actionOverrides) {
        if (actionOverrides  && actionOverrides != null) {
            if (actionOverrides.takes) {
                switch (actionOverrides.takes.type) {
                    case "replace":
                        this.takes = actionOverrides.takes.content;
                        break;
                    case "insert":
                        this.takes = this.takes.concat(actionOverrides.takes.content);
                        break;
                    default:
                        throw new Error("Invalid Override type for takes override");
                }
            }
            if (actionOverrides.moves) {
                switch (actionOverrides.moves) {
                    case "replace":
                        this.moves = actionOverrides.moves.content;
                        break;
                    case "insert":
                        this.moves = this.moves.concat(actionOverrides.moves.content);
                        break;
                    default:
                        throw new Error("Invalid Override type for moves override");
                }
            }
        }
    }
}

class knightActions {
    moves = [
        {
            single: true,
            dest: [1, 2]
        },
        {
            single: true,
            dest: [2, 1]
        },
        {
            single: true,
            dest: [-1, 2]
        },
        {
            single: true,
            dest: [-2, 1]
        },
        {
            single: true,
            dest: [1, -2]
        },
        {
            single: true,
            dest: [2, -1]
        },
        {
            single: true,
            dest: [-1, -2]
        },
        {
            single: true,
            dest: [-2, -1]
        }
    ];
    takes = [
        {
            single: true,
            takes: [1, 2],
            movesTo: [1, 2]
        },
        {
            single: true,
            takes: [2, 1],
            movesTo: [2, 1]
        },
        {
            single: true,
            takes: [-1, 2],
            movesTo: [-1, 2]
        },
        {
            single: true,
            takes: [-2, 1],
            movesTo: [-2, 1]
        },
        {
            single: true,
            takes: [1, -2],
            movesTo: [1, -2]
        },
        {
            single: true,
            takes: [2, -1],
            movesTo: [2, -1]
        },
        {
            single: true,
            takes: [-1, -2],
            movesTo: [-1, -2]
        },
        {
            single: true,
            takes: [-2, -1],
            movesTo: [-2, -1]
        }
    ];

    constructor(actionOverrides) {
        if (actionOverrides  && actionOverrides != null) {
            if (actionOverrides.takes) {
                switch (actionOverrides.takes.type) {
                    case "replace":
                        this.takes = actionOverrides.takes.content;
                        break;
                    case "insert":
                        this.takes = this.takes.concat(actionOverrides.takes.content);
                        break;
                    default:
                        throw new Error("Invalid Override type for takes override");
                }
            }
            if (actionOverrides.moves) {
                switch (actionOverrides.moves) {
                    case "replace":
                        this.moves = actionOverrides.moves.content;
                        break;
                    case "insert":
                        this.moves = this.moves.concat(actionOverrides.moves.content);
                        break;
                    default:
                        throw new Error("Invalid Override type for moves override");
                }
            }
        }
    }
}

class RookActions {
    moves = AXIS_MOVES;
    takes = AXIS_TAKES;

    constructor(actionOverrides) {
        if (actionOverrides  && actionOverrides != null) {
            if (actionOverrides.takes) {
                switch (actionOverrides.takes.type) {
                    case "replace":
                        this.takes = actionOverrides.takes.content;
                        break;
                    case "insert":
                        this.takes = this.takes.concat(actionOverrides.takes.content);
                        break;
                    default:
                        throw new Error("Invalid Override type for takes override");
                }
            }
            if (actionOverrides.moves) {
                switch (actionOverrides.moves.type) {
                    case "replace":
                        this.moves = actionOverrides.moves.content;
                        break;
                    case "insert":
                        this.moves = this.moves.concat(actionOverrides.moves.content);
                        break;
                    default:
                        throw new Error("Invalid Override type for moves override");
                }
            }
        }
    }
}

class QueenActions {
    moves = DIAGONAL_MOVES.concat(AXIS_MOVES).concat(SURROUND_MOVES);
    takes = DIAGONAL_TAKES.concat(AXIS_TAKES).concat(SURROUND_TAKES);

    constructor(actionOverrides) {
        if (actionOverrides  && actionOverrides != null) {
            if (actionOverrides.takes) {
                switch (actionOverrides.takes.type) {
                    case "replace":
                        this.takes = actionOverrides.takes.content;
                        break;
                    case "insert":
                        this.takes = this.takes.concat(actionOverrides.takes.content);
                        break;
                    default:
                        throw new Error("Invalid Override type for takes override");
                }
            }
            if (actionOverrides.moves) {
                switch (actionOverrides.moves) {
                    case "replace":
                        this.moves = actionOverrides.moves.content;
                        break;
                    case "insert":
                        this.moves = this.moves.concat(actionOverrides.moves.content);
                        break;
                    default:
                        throw new Error("Invalid Override type for moves override");
                }
            }
        }
    }
}

class KingActions {
    moves = SURROUND_MOVES;
    takes = SURROUND_TAKES;

    constructor(actionOverrides) {
        if (actionOverrides  && actionOverrides != null) {
            if (actionOverrides.takes) {
                switch (actionOverrides.takes.type) {
                    case "replace":
                        this.takes = actionOverrides.takes.content;
                        break;
                    case "insert":
                        this.takes = this.takes.concat(actionOverrides.takes.content);
                    default:
                        throw new Error("Invalid Override type for takes override");
                }
            }
            if (actionOverrides.moves) {
                switch (actionOverrides.moves) {
                    case "replace":
                        this.moves = actionOverrides.moves.content;
                        break;
                    case "insert":
                        this.moves = this.moves.concat(actionOverrides.moves.content);
                        break;
                    default:
                        throw new Error("Invalid Override type for moves override");
                }
            }
        }
    }
}

const DIAGONAL_TAKES = [
    {
        single: false,
        takes: [1, 1],
        movesTo: [1, 1]
    },
    {
        single: false,
        takes: [1, -1],
        movesTo: [1, -1]
    },
    {
        single: false,
        takes: [-1, 1],
        movesTo: [-1, 1]
    },
    {
        single: false,
        takes: [-1, -1],
        movesTo: [-1, -1]
    }
];

const AXIS_TAKES = [
    {
        single: false,
        takes: [1, 0],
        movesTo: [1, 0]
    },
    {
        single: false,
        takes: [-1, 0],
        movesTo: [-1, 0]
    },
    {
        single: false,
        takes: [0, 1],
        movesTo: [0, 1]
    },
    {
        single: false,
        takes: [0, -1],
        movesTo: [0, -1]
    }
];

const SURROUND_TAKES = [
    {
        single: true,
        takes: [-1, 1],
        movesTo: [-1, 1]
    },
    {
        single: true,
        takes: [0, 1],
        movesTo: [0, 1]
    },
    {
        single: true,
        takes: [1, 1],
        movesTo: [1, 1]
    },
    {
        single: true,
        takes: [1, 0],
        movesTo: [1, 0]
    },
    {
        single: true,
        takes: [1, -1],
        movesTo: [1, -1]
    },
    {
        single: true,
        takes: [0, -1],
        movesTo: [0, -1]
    },
    {
        single: true,
        takes: [-1, -1],
        movesTo: [-1, -1]
    },
    {
        single: true,
        takes: [-1, 0],
        movesTo: [-1, 0]
    }
];

const DIAGONAL_MOVES = [
    {
        single: false,
        dest: [1, 1]
    },
    {
        single: false,
        dest: [1, -1]
    },
    {
        single: false,
        dest: [-1, 1]
    },
    {
        single: false,
        dest: [-1, -1]
    }
];

const AXIS_MOVES = [
    {
        single: false,
        dest: [1, 0]
    },
    {
        single: false,
        dest: [-1, 0]
    },
    {
        single: false,
        dest: [0, 1]
    },
    {
        single: false,
        dest: [0, -1]
    }
];

const SURROUND_MOVES = [
    {
        single: true,
        dest: [-1, 1]
    },
    {
        single: true,
        dest: [0, 1]
    },
    {
        single: true,
        dest: [1, 1]
    },
    {
        single: true,
        dest: [1, 0]
    },
    {
        single: true,
        dest: [1, -1]
    },
    {
        single: true,
        dest: [0, -1]
    },
    {
        single: true,
        dest: [-1, -1]
    },
    {
        single: true,
        dest: [-1, 0]
    }
];

export { ActionsLibrary };