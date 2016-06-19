import createGlobalStore from 'global-state-client';
import reducer from './ticTacToe.js';

const room = window.location.hash.substr(1) || Math.trunc(Math.random() * 90000000);
window.location = `#${room}`;
export const store = createGlobalStore({ reducer, room });
