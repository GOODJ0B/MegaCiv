const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

var game = {};
// var history = [];
// var currentPhase = 0;

io.on('connection', socket => {

    socket.on('updateGame', incommingGame => {
        console.log("Recieved game from " + socket.id)
        game = incommingGame;
        // if (game.phase !== currentPhase) {
        //     history.push(game);
        //     currentPhase = game.phase;
        //     console.log("Sending History.");
        //     socket.emit('history', history);
        //     socket.broadcast.emit('history', history)
        // }
        socket.broadcast.emit('game', incommingGame);
        socket.emit('game', incommingGame);
    });

    socket.on('resetGame', () => {
        console.log("Resetting game.")
        game = {};
        history = [];
        socket.broadcast.emit('game', game);
        socket.emit('game', game);
    });

    io.emit('game', game);
    console.log(`Socket ${socket.id} has connected`);
});

http.listen(8889, () => {
    console.log('Listening on port 8889');
});
