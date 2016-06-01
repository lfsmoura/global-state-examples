const defaultState = {
  board: [[0,0,0],[0,0,0],[0,0,0]],
  turn: 1
}

export default function ticTacToeReducer(state = {}, action) {
  state.board = state.board || defaultState.board;
  state.turn = state.turn || defaultState.turn;

  if (action.type === 'PLAY') {
    if (!state.board[action.i][action.j]) {
      return {
        turn: -state.turn,
        board: [
          ...state.board.slice(0, action.i),
          [
            ...state.board[action.i].slice(0, action.j),
            state.turn,
            ...state.board[action.i].slice(action.j + 1)
          ],
          ...state.board.slice(action.i + 1)
        ]
      };
    }
    return state;
  } else if (action.type === 'RESET') {
    return defaultState;
  }
  return state;
}
