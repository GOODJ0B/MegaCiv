const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

var game = {};

io.on('connection', socket => {
 
    socket.on('updateGame', incommingGame => {
        console.log("update game: ", incommingGame)
        game = incommingGame;
        socket.broadcast.emit('game', incommingGame);
	socket.emit('game', incommingGame);
    });

    io.emit('game', game);

    console.log(`Socket ${socket.id} has connected`);
});

http.listen(8889, () => {
    console.log('Listening on port 8889');
});
