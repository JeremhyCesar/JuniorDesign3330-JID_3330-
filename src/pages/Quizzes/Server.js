const express = require('express');
const http = require('http');
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.get('/', (req, res) => {
    res.send("Hello World!");
});

io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('startQuiz', () => {
        const quiz = loadQuiz();  // Function to load quiz data
        socket.emit('quizStarted', quiz);
    });

    socket.on('submitAnswer', (data) => {
        // Evaluate answer, update score, and broadcast update
        console.log(data);
    });

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});


// event handling:
// Connection: To handle any new user joining.
// startQuiz: Triggered by the host to start the quiz.
// submitAnswer: Used by participants to submit their answers.
// quizStarted: Used to broadcast quiz data to all connected clients.
// disconnect: To clean up when a user disconnects.

