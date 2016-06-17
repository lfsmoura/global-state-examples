import React from 'react';
import ReactDOM from 'react-dom';
import Game from './components/Game.js';

import { store } from './store.js';

const render = () => {
  ReactDOM.render(<Game />,
      document.getElementById('main'));
};

store.subscribe(render);
