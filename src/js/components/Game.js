import React from 'react';

import { store, player, room } from '../store.js';

import Cell from './Cell.js';

export default class Game extends React.Component {
  play(i, j) {
    store.dispatch({ type: 'PLAY', i, j, player });
  }

  render() {
    const state = store.getState();
    const shareLink = player === 1 ?
      <div className="game-link">{location.toString()}#{room}</div> : '';

    return (<div>
      <button onClick={() => store.dispatch({ type: 'RESET' })} >
        Reset
      </button>
      <hr />
        {state.board.map((row, i) => <div key={`row-${i}`} className="t-row" >
          {row.map((col, j) => <Cell
            onClick={this.play.bind(this, i, j)}
            key={`col-${j}`}
            value={col}
          />)}
        </div>)}
      {shareLink}
    </div>);
  }
}
