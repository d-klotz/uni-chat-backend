const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const routes = require('./routes');
const socketio = require('socket.io');
const http = require('http');
const populateInititalData = require('./db/inititalScripts');
const messageController = require('./controllers/messageController'); 

const app = express();
const server = http.Server(app);
const io = socketio(server);

mongoose.connect('mongodb://uni-chat:uni-chat@uni-chat-shard-00-00-vuceq.mongodb.net:27017,uni-chat-shard-00-01-vuceq.mongodb.net:27017,uni-chat-shard-00-02-vuceq.mongodb.net:27017/test?ssl=true&replicaSet=uni-chat-shard-0&authSource=admin&retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

populateInititalData();

const connectedUsers = {};

// adds socket.io to a middleware, so the params and the connected users 
//are available in the whole app.
app.use((req, res, next) => {
  req.io = io;
  req.connectedUsers = connectedUsers;
  return next();
});

// Creates the socket.io connection for real time actions
io.on('connection', socket => {
  const { username } = socket.handshake.query;
  connectedUsers[username] = socket.id;

  socket.on('join', groupId => {
    const message = {
      emitter: 'Unichat Bot', 
      room: 'general',
      timestamp: new Date(),
      group: groupId,
      content: `${username} joined the chat`
    }

    messageController.store(message);
    io.emit('newMessage', message);
  });

  socket.on('createMessage', message => {
    if (message.content !== '') {
      message.timestamp = new Date();
      messageController.store(message);
      io.emit('newMessage', message); 
    }
  });
});

app.use(cors());
app.use(express.json());
app.use(routes);

const PORT = process.env.PORT || 5000;

server.listen(PORT);
