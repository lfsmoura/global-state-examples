import createGlobalStore from 'global-state-client';
import reducer from './ticTacToe.js'

export var store = createGlobalStore({ reducer }, () => console.debug('Global state loaded!'));
