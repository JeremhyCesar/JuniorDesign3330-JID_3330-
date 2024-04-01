import { View, Text, Pressable, Image, TouchableOpacity } from "react-native"; 
import { questions, correctAnswers } from '../../quizzes/ChopinBeginner.js';
import { Asset } from "expo-asset";

const quizQuestions = {
    ChopinBeginner: require("../../quizzes/ChopinBeginner.js")
}

score = 0;

export function QuizQuestion ({ route, navigation}) {
    const {composerName, quizId, questionNo, answers} = route.params;
    var quizPath = "../quizzes/" + quizId;
    const { questions } = quizQuestions["ChopinBeginner"];
    let ansOrder = [1, 2, 3, 4];
    ansOrder.sort(() => Math.random() - 0.5);

    if (questionNo == 1) {
        score = 0;
    }

    return (
        <View style={{flexDirection: "column", alignContent: "center", width: '100%', height: '100%'}}>
            <Text style={{top:50, fontWeight: "bold", justifyContent: "center", alignSelf: "center", color: "#00347f", fontSize: 32}}>{composerName}</Text>
            <View style={{top: 75, left: '5%', width: '90%', height: '83%', backgroundColor: '#1e2237', borderRadius: 34}}>
                {questionNo != 1 && 
                    <TouchableOpacity onPress={() => navigation.navigate("QuizQuestion", {composerName: composerName, quizId: quizId, questionNo: questionNo - 1, answers: answers})}>
                        <Image source={require("../../../assets/back-arrow.png")} style={{top: 25, left: 10, width: 40, }}/>
                    </TouchableOpacity>}
                <Text style={{color: '#ffffff', position: "absolute", fontSize: 26, alignSelf: "center", fontWeight: "bold", top: 27}}>Question {questionNo}</Text>
                <View style={{position: "absolute", backgroundColor: '#cccccc', width: '100%', height: 5, top: 85}}/>
                <Text style={{position: "absolute", top: 120, textAlign: "center", alignSelf: "center", flexWrap: "wrap", width: '70%', fontSize: 34, fontWeight: "bold", color: '#ffffff'}}>{questions[questionNo - 1][0]}</Text>
                <Pressable onPress={() => recordAnswer(composerName, quizId, questionNo, answers, questions[questionNo - 1][ansOrder[0]], navigation)} style={{position: "absolute", top: 300, left: "4%", width: "92%", height: 72, backgroundColor: "#e2480d", borderRadius: 32}}>
                    <Text style={{fontSize: 26, color: "#ffffff", top: 20, left: '10%', fontWeight: "bold"}}>A.  {questions[questionNo - 1][ansOrder[0]]}</Text>
                </Pressable>
                <Pressable onPress={() => recordAnswer(composerName, quizId, questionNo, answers, questions[questionNo - 1][ansOrder[1]], navigation)} style={{position: "absolute", top: 380, left: "4%", width: "92%", height: 72, backgroundColor: "#FFBB37", borderRadius: 32}}>
                    <Text style={{fontSize: 26, color: "#ffffff", top: 20, left: '10%', fontWeight: "bold"}}>B.  {questions[questionNo - 1][ansOrder[1]]}</Text>
                </Pressable>
                <Pressable onPress={() => recordAnswer(composerName, quizId, questionNo, answers, questions[questionNo - 1][ansOrder[2]], navigation)} style={{position: "absolute", top: 460, left: "4%", width: "92%", height: 72, backgroundColor: "#2d6f9a", borderRadius: 32}}>
                    <Text style={{fontSize: 26, color: "#ffffff", top: 20, left: '10%', fontWeight: "bold"}}>C.  {questions[questionNo - 1][ansOrder[2]]}</Text>
                </Pressable>
                <Pressable onPress={() => recordAnswer(composerName, quizId, questionNo, answers, questions[questionNo - 1][ansOrder[3]], navigation)} style={{position: "absolute", top: 540, left: "4%", width: "92%", height: 72, backgroundColor: "#979797", borderRadius: 32}}>
                    <Text style={{fontSize: 26, color: "#ffffff", top: 20, left: '10%', fontWeight: "bold"}}>D.  {questions[questionNo - 1][ansOrder[3]]}</Text>
                </Pressable>
            </View>
        </View>
    );
}

function recordAnswer(composerName, quizId, questionNo, answers, answer, navigation) {
    let newAnswers;
    if (answers !== undefined) {
        console.log(answers);
        newAnswers = Array.from(answers);
    } else {
        newAnswers = []
    }
    let newQuestionNo = questionNo + 1;
    newAnswers[questionNo - 1] = answer;

    // Increase score if the answer is correct
    if (isAnswerCorrect(questions[questionNo - 1][0], answer)) {
        score++;
    }
    
    // When the quiz is finished and the question number exceeds 5, direct to the QuizResults page
    if (newQuestionNo > 5) {
        navigation.navigate('QuizResults', { score: score, composerName: composerName, screen: 'QuizResults'})
    } else {
        navigation.navigate('QuizQuestion', {composerName: composerName, quizId: quizId, questionNo: newQuestionNo, answers: newAnswers})
    }
    
}

function isAnswerCorrect(questionAsked, userAnswer) {
    // Find the correct answer object based on the question asked
    const correctAnswerObj = correctAnswers.find(answerObj => answerObj.question === questionAsked);
  
    // If the question exists in our data, check the user's answer against the correct answer
    if (correctAnswerObj && correctAnswerObj.correctAnswer === userAnswer) {
      return true; // The answer is correct
    } else {
      return false; // The answer is incorrect or the question was not found
    }
}