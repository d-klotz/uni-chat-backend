const express = require('express');
const cors = require('cors');
const path = require('path');
const routes = require('./routes');
const socketio = require('socket.io');
const http = require('http');

const app = express();
const server = http.Server(app);
const io = socketio(server);

const connectedUsers = {};

// Creates the socket.io connection for real time actions
io.on('connection', socket => {
  const { userId } = socket.handshake.query;
  connectedUsers[userId] = socket.id;

  socket.on('join', user => {
    io.emit(
      'newMessage', 
    {
        emitter: 'Bot', 
        room: 'general', 
        content: `${user} joined the chat`
      }
    );
  });

  socket.on('createMessage', message => {
    console.log(message);
    if (message.content !== '') {
      io.emit('newMessage', message);
    }
  });
});

// adds socket.io to a middleware, so the params and the connected users 
//are available in the whole app.
app.use((req, res, next) => {
  req.io = io;
  req.connectedUsers = connectedUsers;
  return next();
});

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);
