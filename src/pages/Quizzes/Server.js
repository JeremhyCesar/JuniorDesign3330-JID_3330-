const express = require('express');
const http = require('http');
const { Server } = require("socket.io");
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.static('public'));

const server = http.createServer(app);
const io = new Server(server);



// When a user visits the root URL (/) of your server, 
// this code will respond by sending "Hello World!" back to the browser. 
// req represents the HTTP request and contains details like query parameters, URL, headers, etc. res is used to send back responses to the client.
// app.get('/', (req, res) => {
//     res.send("Hello World!");
// }); 
// ^^ overriding so comment it out

// event listener for new WebSocket connections to the server.
io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('startQuiz', () => {
        const quiz = loadQuiz();  // Function to load quiz data
        // socket.emit('quizStarted', quiz);
        console.log("launching quiz~");
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

// Quiz logic handling:
// Manage Quiz Logic
// The backend needs to manage the quiz logic:

// Loading Quiz Data: Fetch quiz data from a file, database, or in -memory storage.
// Broadcasting Questions: Send questions to all connected users.
// Receiving and Evaluating Answers: Check submitted answers and calculate scores.
// Result Compilation: At the end of the quiz, compile and send results.

