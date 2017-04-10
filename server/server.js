const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

require('./config/config');

const publicPath = path.join(__dirname, '../public');

var port = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app);
var io = socketIO(server);
app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected to the server');

  socket.emit('newMessage', {
    from: 'Mike',
    text: 'What is going on?',
    createdAt: 123
  });

  socket.on('createMessage', (message) => {
    console.log(message);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected from server');
  });
});

server.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

module.exports = {app};
