export default function ticTacToeReducer(state = {}, action) {
  state.board = state.board || [[0,0,0],[0,0,0],[0,0,0]];
  state.turn = state.turn || 1;

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
  }
  return state;
}
