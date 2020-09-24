var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
const PORT = 9090;
io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('loopValue', (msg) => {
    console.log('loopValue = ', msg)
    io.sockets.emit('loopValueClient', msg)
  });
});

http.listen(PORT, () => {
  console.log('listening on *:' + PORT);
});

