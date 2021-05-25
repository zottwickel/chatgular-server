const express = require('express')
const app = express();

const http = require('http');
const server = http.createServer(app);

const { Server } = require('socket.io');
const io = new Server(server);

const port = process.env.PORT || 3000;

io.on('connection', (socket) => {
    console.log('user connected');
    socket.on('chat message', (msg) => {
      console.log('message: ', msg);
      io.emit('chat message', msg);
    });
    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
});

app.get('/', (req, res) => {
  res.send('<h1><a href="http://localhost:4200">Go to Angular</a></h1>');
  console.log(`GET /`);
});

server.listen(port, () => {
    console.log(`node server running at http://localhost:${port}`);
});
