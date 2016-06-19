import createGlobalStore from 'global-state-client';
import reducer from './ticTacToe.js';

const hash = window.location.hash.substr(1);
export const room = hash || Math.trunc(Math.random() * 90000000);

export const store = createGlobalStore({ reducer, room });
export const player = hash ? -1 : 1;
