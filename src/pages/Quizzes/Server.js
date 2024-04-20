const express = require('express');
const http = require('http');
const { Server } = require("socket.io");
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.static('public'));

const server = http.createServer(app);
const io = new Server(server);

// MongoDB connections: set up client and API connection to mongodb 
const { MongoClient, ServerApiVersion } = require('mongodb');
const mongoUrl = 'mongodb+srv://borthwickbenjamin:<password>@notemakers.luedqgj.mongodb.net/?retryWrites=true&w=majority&appName=Notemakers'; 
// Notemaker connection string: mongodb+srv://borthwickbenjamin:<password>@notemakers.luedqgj.mongodb.net/?retryWrites=true&w=majority&appName=Notemakers

const client = new MongoClient(mongoUrl, {
    serverApi: { version: ServerApiVersion.v1 } // API supported by MongoDB 
});

async function connectToMongo() {
    try {
        await client.connect();
        console.log("Successfully connected to MongoDB!");
        return client;
    } catch (error) {
        console.error("Failed to connect to MongoDB", error);
        process.exit(1); // Exit if there is a connection error
    }
}

connectToMongo();


// MongoDB getClass and getUser

// Basic structure:
// Class: {"_id":{"$oid":"6622f20cbd39907ce121e9c0"},"class_name":"My Fun Class","join_code":{"$numberLong":"869960"},"teacher":{"$oid":"6621acd496939a7ddd0beba6"},"students":[{"$oid":"6622fa245c295b1c187367d2"}]}
// User: {"_id":{"$oid":"660b549a7403ac7f3ae1bf02"},"full_name":"Benjamin Borthwick","user_type":"Student","lesson_progress":[{"$numberLong":"7"},{"$numberLong":"9"}],"lesson_topics":["Frédéric Chopin","Wolfgang Amadeus Mozart"]}
async function getClassByJoinCode(joinCode) {
    const database = client.db("Notemakers");
    const classes = database.collection("Class");

    const classInfo = await classes.findOne({ "join_code": joinCode });
    return classInfo;
}

async function getUserById(userId) {
    const database = client.db("Notemakers");
    const users = database.collection("User");

    const userInfo = await users.findOne({ "_id": new MongoClient.ObjectId(userId) });
    return userInfo;
}

// JOIN CLASS:
// 1. Student submits a join code via the frontend.
// 2. The backend receives the join code and retrieves the corresponding class.
// 3. If the class exists, add the student's ID to the class's students array.
// 4. Update the student's records to include this class in their profile if necessary.
async function joinClass(userId, joinCode) {
    const classInfo = await getClassByJoinCode(joinCode);
    if (!classInfo) {
        throw new Error("Class not found");
    }

    // Add user to the class's student list: "students":[{"$oid":"6622fa245c295b1c187367d2"}]
    const updatedClassInfo = await client.db("Notemakers").collection("Class").updateOne(
        { "_id": classInfo._id },
        { $addToSet: { "students": new MongoClient.ObjectId(userId) } }
    );

    return { class: updatedClassInfo, user: updatedUserInfo };
}



// EVENT HANDLERS NEEDED 
// Connection: To handle any new user joining.
// startQuiz: Triggered by the host to start the quiz.
// submitAnswer: Used by participants to submit their answers.
// quizStarted: Used to broadcast quiz data to all connected clients.
// disconnect: To clean up when a user disconnects.
io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);  

    // startQuiz: Triggered by the host to start the quiz.
    socket.on('startQuiz', () => {
        const quiz = loadQuiz();  // This should fetch quiz data
        io.emit('quizStarted', quiz);  // Broadcast to all connected clients
        console.log("Quiz started!");
    });

    // submitAnswer: Used by participants to submit their answers.
    socket.on('submitAnswer', (data) => {
        const result = evaluateAnswer(data);
        io.to(socket.id).emit('answerResult', result);  // Emit result back to the participant
        console.log(`Answer received from ${socket.id}:`, data);
    });

    // disconnect: To clean up when a user disconnects.
    socket.on('disconnect', () => {
        console.log('User disconnected:', socket.id);
        // Perform any necessary cleanup
    });
});

// HELPER FUNCTION:

// Function to load quiz data
function loadQuiz() {
    // fetch the quiz from a database or file
    return {
        questions: [
            { id: 1, text: 'Question 1', options: ['A', 'B', 'C', 'D'], answer: 'A' },
            
        ],
        currentQuestionIndex: 0
    };
}

// Function to evaluate answer
function evaluateAnswer(data) {
    // Extract the answer and question ID from data object
    const { questionId, answer } = data;

    // Fetch the correct answer from your storage based on questionId
    // For demonstration, assuming a correct answer of 'A'
    const correctAnswer = 'A';

    // Compare the participant's answer with the correct answer
    const isCorrect = answer === correctAnswer;

    // Return an object with the result
    return {
        questionId,
        correct: isCorrect,
        correctAnswer: isCorrect ? null : correctAnswer // Don't send the answer if correct to avoid cheating
    };
}

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});





// Quiz logic handling:
// Manage Quiz Logic
// The backend needs to manage the quiz logic:

// Loading Quiz Data: Fetch quiz data from a file, database, or in -memory storage.
// Broadcasting Questions: Send questions to all connected users.
// Receiving and Evaluating Answers: Check submitted answers and calculate scores.
// Result Compilation: At the end of the quiz, compile and send results.

