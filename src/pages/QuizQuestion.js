import { View, Text, Pressable } from "react-native"; 
import { Asset } from "expo-asset";

const quizQuestions = {
    ChopinBeginner: require("../quizzes/ChopinBeginner")
}
export function QuizQuestion ({ route, navigation}) {
    const {composerName, quizId, questionNo, answers} = route.params;
    var quizPath = "../quizzes/" + quizId;
    const { questions } = quizQuestions["ChopinBeginner"];
    return (
        <View style={{flexDirection: "column", alignContent: "center", width: '100%', height: '100%'}}>
            <Text style={{top:50, fontWeight: "bold", justifyContent: "center", alignSelf: "center", color: "#00347f", fontSize: 32}}>{composerName}</Text>
            <View style={{top: 75, left: '5%', width: '90%', height: '83%', backgroundColor: '#1e2237', borderRadius: 34}}>
                <Text style={{color: '#ffffff', fontSize: 26, alignSelf: "center", fontWeight: "bold", top: 30}}>Question {questionNo}</Text>
                <View style={{backgroundColor: '#cccccc', width: '100%', height: 5, top: 50}}/>
                <Text style={{top: 80, textAlign: "center", alignSelf: "center", flexWrap: "wrap", width: '70%', fontSize: 34, fontWeight: "bold", color: '#ffffff'}}>{questions[questionNo - 1][0]}</Text>
                <Pressable style={{top: 225, left: "4%", width: "92%", height: 72, backgroundColor: "#e2480d", borderRadius: 32}}>
                    <Text style={{fontSize: 26, color: "#ffffff", top: 20, left: '10%', fontWeight: "bold"}}>A.  {questions[questionNo - 1][1]}</Text>
                </Pressable>
                <Pressable style={{top: 235, left: "4%", width: "92%", height: 72, backgroundColor: "#FFBB37", borderRadius: 32}}>
                    <Text style={{fontSize: 26, color: "#ffffff", top: 20, left: '10%', fontWeight: "bold"}}>B.  {questions[questionNo - 1][2]}</Text>
                </Pressable>
                <Pressable style={{top: 245, left: "4%", width: "92%", height: 72, backgroundColor: "#2d6f9a", borderRadius: 32}}>
                    <Text style={{fontSize: 26, color: "#ffffff", top: 20, left: '10%', fontWeight: "bold"}}>C.  {questions[questionNo - 1][3]}</Text>
                </Pressable>
                <Pressable style={{top: 255, left: "4%", width: "92%", height: 72, backgroundColor: "#979797", borderRadius: 32}}>
                    <Text style={{fontSize: 26, color: "#ffffff", top: 20, left: '10%', fontWeight: "bold"}}>D.  {questions[questionNo - 1][4]}</Text>
                </Pressable>
            </View>
        </View>
    );
}

export function ParseQuestions(quizFile) {
    let questions;
    fs.readFile("../quizzes/" + quizFile)
    .then((data) => {
        questions = data.split("~");
        questions.forEach(question => question = question.split("\n"));
    }).catch((err) => console.log(err));
    return questions;
}