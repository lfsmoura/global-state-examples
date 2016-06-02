# global-state-examples

`global-state` is a library that synchronizes `redux` stores across clients. With it you can make a multi-user app by writing only local code. The state state gets automatically synchronized using `socket.io`.

Here we have our first example app.

## Tic-Tac-Toe
[See the working code on Heroku](http://globalstate.herokuapp.com).

Ok, the app is pretty simple. We have a single reducer in `ticTacToe.js`. Pretty straightforward. The UI is also pretty simple, it uses `react`.

Now you have a game that works locally. To make it work across the Internet, you have to wrap your store with `global-state`:

```js
import createGlobalStore from 'global-state-client';
import reducer from './ticTacToe.js'

export var store = createGlobalStore({ reducer },
  () => console.debug('Global state loaded!'));

```
Now in the backend (`web.js`) we have an `express app`:

```js
var express = require('express');
var app = express();

app.set('port', (+process.env.PORT || 8000));

server.listen(app.get('port'), function () {
  console.log('Game on port ' + app.get('port'));
});
```

We just have to call our configuration module:

```js
var server = require('http').Server(app);
var io = require('socket.io')(server);
require('global-state')(io);
```
That's it, two lines in the frontend and three on the backend and we got ourselves a multi-user app.

In the next tutorial we are going to learn how we create multiple rooms and how we split clients.
