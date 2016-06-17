import createGlobalStore from 'global-state-client';
import reducer from './ticTacToe.js';

export const store = createGlobalStore({ reducer });
