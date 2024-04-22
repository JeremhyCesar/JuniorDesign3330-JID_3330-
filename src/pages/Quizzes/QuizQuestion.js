import { View, Text, Pressable, Image, TouchableOpacity, StyleSheet } from "react-native"; 
import { questions, correctAnswers } from '../../quizzes/ChopinBeginner.js';
import { Asset } from "expo-asset";

const quizQuestions = {
    ChopinBeginner: require("../../quizzes/ChopinBeginner.js")
}

score = 0;
highScore = 0;

// Styles for the tracker
const styles = StyleSheet.create({
    trackerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        bottom: 25,
        

    },
    circle: {
        width: 40,
        height: 40,
        borderRadius: 12.5,
        top: 90
    },
    circleText: {
        color: 'white',
        fontSize: 20, 
        fontWeight: 'bold',
        textAlign: 'center',
        lineHeight: 40,
    }
});

export function QuizQuestion ({ route, navigation}) {
    const {composerName, quizId, questionNo, answers} = route.params;
    var quizPath = "../quizzes/" + quizId;
    const { questions } = quizQuestions["ChopinBeginner"];
    let ansOrder = [1, 2, 3, 4];
    ansOrder.sort(() => Math.random() - 0.5);

    // Function to render the question tracker circles
    const renderCircle = (index) => {
        let backgroundColor = index < questionNo ? '#00FF00' : '#808080'; // Green if answered, grey if not
        return (
            <View 
                key={index}
                style={[styles.circle, {backgroundColor}]}>

                <Text style={styles.circleText}>{index}</Text>
            </View>
            
        );
    }

    return (
        <View style={{flexDirection: "column", alignContent: "center", width: '100%', height: '90%'}}>
            <Text style={{top:30, fontWeight: "bold", justifyContent: "center", alignSelf: "center", color: "#00347f", fontSize: 32}}>{composerName}</Text>
            <View style={{top: 50, left: '5%', width: '90%', height: '85%', backgroundColor: '#1e2237', borderRadius: 34}}>
            {questionNo !== 1 && 
                <TouchableOpacity onPress={() => navigation.navigate("QuizQuestion", {composerName: composerName, quizId: quizId, questionNo: questionNo - 1, answers: answers})}>
                    <Image source={require("../../../assets/back-arrow.png")} style={{top: 25, left: 10, width: 40, }}/>
                </TouchableOpacity>
            }
            {questionNo === 1 &&
                <View style={{ width: 40, height: 40 }}></View>
            }
                <Text style={{color: '#ffffff', position: "absolute", fontSize: 26, alignSelf: "center", fontWeight: "bold", top: 27}}>Question {questionNo}</Text>
                <View style={{position: "absolute", backgroundColor: '#cccccc', width: '100%', height: 5, top: 85}}/>
                <View style={{marginTop: 60, width: '100%', height: 130, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{textAlign: "center", flexWrap: "wrap", fontSize: 25, fontWeight: "bold", color: '#ffffff', paddingHorizontal: 20}} adjustsFontSizeToFit numberOfLines={10}>{questions[questionNo - 1][0]}</Text>
                </View>
                <Pressable onPress={() => recordAnswer(composerName, quizId, questionNo, answers, questions[questionNo - 1][ansOrder[0]], navigation)} style={{position: "absolute", top: 230, left: "4%", width: "92%", height: 55, backgroundColor: "#e2480d", borderRadius: 32}}>
                    <Text style={{fontSize: 26, color: "#ffffff", top: 10, left: '8%', fontWeight: "bold", width: '88%'}} adjustsFontSizeToFit numberOfLines={2}>A.  {questions[questionNo - 1][ansOrder[0]]}</Text>
                </Pressable>
                <Pressable onPress={() => recordAnswer(composerName, quizId, questionNo, answers, questions[questionNo - 1][ansOrder[1]], navigation)} style={{position: "absolute", top:290, left: "4%", width: "92%", height: 55, backgroundColor: "#FFBB37", borderRadius: 32}}>
                    <Text style={{fontSize: 26, color: "#ffffff", top: 10, left: '8%', fontWeight: "bold", width: '88%'}} adjustsFontSizeToFit numberOfLines={2}>B.  {questions[questionNo - 1][ansOrder[1]]}</Text>
                </Pressable>
                <Pressable onPress={() => recordAnswer(composerName, quizId, questionNo, answers, questions[questionNo - 1][ansOrder[2]], navigation)} style={{position: "absolute", top: 350, left: "4%", width: "92%", height: 55, backgroundColor: "#2d6f9a", borderRadius: 32}}>
                    <Text style={{fontSize: 26, color: "#ffffff", top: 10, left: '8%', fontWeight: "bold", width: '88%'}} adjustsFontSizeToFit numberOfLines={2}>C.  {questions[questionNo - 1][ansOrder[2]]}</Text>
                </Pressable>
                <Pressable onPress={() => recordAnswer(composerName, quizId, questionNo, answers, questions[questionNo - 1][ansOrder[3]], navigation)} style={{position: "absolute", top: 410, left: "4%", width: "92%", height: 55, backgroundColor: "#979797", borderRadius: 32}}>
                    <Text style={{fontSize: 26, color: "#ffffff", top: 10, left: '8%', fontWeight: "bold", width: '88%'}} adjustsFontSizeToFit numberOfLines={2}>D.  {questions[questionNo - 1][ansOrder[3]]}</Text>
                </Pressable>
            </View>
            <View style={styles.trackerContainer}>
                {[1, 2, 3, 4, 5].map(renderCircle)}
            </View>
        </View>
        
    );
}

function recordAnswer(composerName, quizId, questionNo, answers, answer, navigation) {
    let newAnswers;
    if (answers !== undefined) {
        newAnswers = Array.from(answers);
    } else {
        newAnswers = [];
        if (questionNo === 1) {
            score = 0;
        }
    }
    let newQuestionNo = questionNo + 1;

    const previousAnswer = newAnswers[questionNo - 1];
    newAnswers[questionNo - 1] = answer;

    if (previousAnswer === undefined) {
        if (isAnswerCorrect(questions[questionNo - 1][0], answer)) {
            score++;
        }
    } else {
        if (isAnswerCorrect(questions[questionNo - 1][0], answer)) {
            if (!isAnswerCorrect(questions[questionNo - 1][0], previousAnswer)) {
                score++; 
            }
        } else {
            if (isAnswerCorrect(questions[questionNo - 1][0], previousAnswer)) {
                score--;
            }
        }
    }

    // When the quiz is finished and the question number exceeds 5, direct to the QuizResults page
    if (newQuestionNo > 5) {
        highScoreCalculator(score);
        navigation.navigate('QuizResults', { score: score, composerName: composerName, highScore: highScore, screen: 'QuizResults' });
    } else {
        navigation.navigate('QuizQuestion', { composerName: composerName, quizId: quizId, questionNo: newQuestionNo, answers: newAnswers });
    }

    console.log(newAnswers);
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

function highScoreCalculator(questionsCorrect) {
    highScore = Math.max(highScore, questionsCorrect);
    return highScore;
}