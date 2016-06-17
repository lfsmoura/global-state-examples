const defaultState = {
  board: [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
  turn: 1,
};

export default function ticTacToeReducer({
  board = defaultState.board,
  turn = defaultState.turn,
} = {}, action) {
  if (action.type === 'PLAY') {
    if (!board[action.i][action.j]) {
      return {
        turn: -turn,
        board: [
          ...board.slice(0, action.i),
          [
            ...board[action.i].slice(0, action.j),
            turn,
            ...board[action.i].slice(action.j + 1),
          ],
          ...board.slice(action.i + 1),
        ],
      };
    }
    return { board, turn };
  } else if (action.type === 'RESET') {
    return defaultState;
  }
  return { board, turn };
}
