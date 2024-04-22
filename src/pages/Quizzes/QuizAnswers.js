import React from 'react';
import {
    Pressable,
    StyleSheet,
    ScrollView,
    Text,
    View,
    Image, 
} from "react-native";

const quizQuestions = {
    ChopinBeginner: require("../../quizzes/ChopinBeginner.js")
}

export function QuizAnswers({ route, navigation }) {
    const {score, composerName} = route.params;
    var scoreString = score + "/5";
    const { questions, correctAnswers } = quizQuestions.ChopinBeginner;

    const styles = StyleSheet.create({
        button: {
            position: "absolute", 
            top: 613, 
            justifyContent: "center", 
            alignItems: "center", 
            width: "40%", 
            height: 40, 
            borderRadius: 32, 
            flex: 1,
            left: 120, 
            backgroundColor: "#e2480d"
        },
        composerName: {
            top:30, 
            fontWeight: "bold", 
            justifyContent: "center", 
            alignSelf: "center", 
            color: "#00347f", 
            fontSize: 32
        },
        questionText: {
            fontSize: 18,
            color: '#fff',
            fontWeight: 'bold',
            marginBottom: 5,
        },
        answerText: {
            fontSize: 16,
            color: '#fff',
        },
        correctAnswerText: {
            fontSize: 16,
            color: '#e2480d',
            fontWeight: 'bold',
        },
        questionContainer: {
            borderRadius: 10,
            padding: 10,
            marginVertical: 5,
            backgroundColor: '#1e2237'
        },
        scrollViewContainer: {
            marginTop: 50,
            borderRadius: 34,

            marginLeft: 10
        },
        text: {
            fontSize: 26,
            fontWeight: "bold",
            color: '#ffffff',
            textAlign: 'center',
            marginBottom: 20
        },
    });
    return (
        <View style={{flexDirection: "column", alignContent: "center", width: '100%', height: '100%'}}>
            <Text style={styles.composerName}>{composerName}</Text>
            <View style={{top: 50, left: '5%', width: '90%', height: '77%', backgroundColor: '#1e2237', borderRadius: 34}}>
                <Text style={[{top: 27, fontSize: 26}, styles.text]}>Answers</Text>
                <View style={{position: "absolute", backgroundColor: '#cccccc', width: '100%', height: 5, top: 85}}/>
                <ScrollView style={styles.scrollViewContainer}>
                    {questions.map((item, index) => {
                        const correct = correctAnswers.find(answer => answer.question === item[0])?.correctAnswer;
                        return (
                            <View key={index} style={styles.questionContainer}>
                                <Text style={styles.questionText}>{index + 1}. {item[0]}</Text>
                                {item.slice(1).map((option, optionIndex) => (
                                    <Text
                                        key={optionIndex}
                                        style={option === correct ? styles.correctAnswerText : styles.answerText}>
                                        {option}
                                    </Text>
                                ))}
                            </View>
                        );
                    })}
                </ScrollView>
            </View>
                <Pressable style={styles.button} onPress={() => navigation.navigate("QuizTopic")}>
                        <Text style={{fontSize: 17, color: "#ffffff", fontWeight: "bold"}}>Back to Quizzes</Text>
                </Pressable>
        </View>
    );
}
  