var app = require('express')();
var cors = require('cors')
app.use(cors());

var http = require('http').createServer(app);

var io = require('socket.io')(http);
io.origins('*:*') // for latest version

const PORT = 9090;
io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('loopValue', (msg) => {
    // console.log('loopValue = ', msg)
    socket.broadcast.emit('loopValueClient', msg)
  });


  socket.on('animationStatus:host', (msg) => {
    console.log('animationStatus:host = ', msg)
    socket.broadcast.emit('animationStatus:client', msg)
  });
});

http.listen(PORT, () => {
  console.log('listening on *:' + PORT);
});

