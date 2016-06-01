import React from 'react';

import { store } from '../store.js';

import Cell from './Cell.js';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
  }

  play(i, j) {
    store.dispatch({ type: 'PLAY', i, j });
  }

  render() {
    const state = store.getState();
    return (<div>
        <button onClick={() => store.dispatch({ type: 'RESET' })} >
          Reset
        </button>
        <hr />
        {state.board.map((row, i) => <div key={`row-${i}`} className="t-row" >
          {row.map((col, j) => <Cell onClick={this.play.bind(this, i, j)} key={`col-${j}`} value={col} />)}
        </div>)}
      </div>);
  }
}
