import React from 'react';
import {
    Pressable,
    StyleSheet,
    ScrollView,
    Text,
    View,
    Image, 
} from "react-native";

import fullStar from '../../../assets/fullStar.png';
import emptyStar from '../../../assets/emptyStar.png';

export function QuizResults({ route, navigation }) {
    const {score, composerName, highScore} = route.params;
    var scoreString = score + "/5";

    const renderStars = () => {
      let stars = [];
      for (let i = 0; i < score; i++) {
          stars.push(<Image key={`full_${i}`} source={fullStar} style={styles.star} />);
      }
      for (let i = score; i < 5; i++) {
          stars.push(<Image key={`empty_${i}`} source={emptyStar} style={styles.star} />);
      }
      return stars;
  };

    const styles = StyleSheet.create({
      button: {
        position: "absolute", 
        top: 330, 
        justifyContent: "center", 
        alignItems: "center", 
        width: "40%", 
        height: 40, 
        borderRadius: 32, 
        flex: 1
      },

      star: {
        width: 40,
        height: 40,
        resizeMode: 'cover',
        marginRight: 20,
        left: 10
      },

      composerName: {
        top:30, 
        fontWeight: "bold", 
        justifyContent: "center", 
        alignSelf: "center", 
        color: "#00347f", 
        fontSize: 32
      },

      text: {
        position: "absolute", 
        textAlign: "center", 
        alignSelf: "center", 
        flexWrap: "wrap",
        width: '70%', 
        fontWeight: "bold", 
        color: '#ffffff'
      },
    });
    return (
        <View style={{flexDirection: "column", alignContent: "center", width: '100%', height: '100%'}}>
              <Text style={styles.composerName}>{composerName}</Text>
              <View style={{top: 50, left: '5%', width: '90%', height: '83%', backgroundColor: '#1e2237', borderRadius: 34}}>
                  <Text style={[{top: 27, fontSize: 26}, styles.text]}>Congrats!</Text>
                  <View style={{position: "absolute", backgroundColor: '#cccccc', width: '100%', height: 5, top: 85}}/>
                  <Text style={[{top: 100, fontSize: 40}, styles.text]}>Quiz Complete!</Text>
                  <View style={{position: "absolute", top: 200, flexDirection: 'row', justifyContent: 'center', width: '100%' }}>{renderStars()}</View>
                  <Text style={[{top: 255, fontSize: 33}, styles.text]}>{scoreString} Correct</Text>
                  <Text style={[{top: 295, fontSize: 12}, styles.text]}>You unlocked the next level!</Text>
                  <Pressable style={[{left: 25, backgroundColor: "#e2480d"}, styles.button]} onPress={() => navigation.navigate("QuizTopic")}>
                      <Text style={{fontSize: 17, color: "#ffffff", fontWeight: "bold"}}>Back to Quizzes</Text>
                  </Pressable>
                  <Pressable style={[{right: 25, backgroundColor: "#2d6f9a"}, styles.button]} onPress={() => navigation.navigate('QuizAnswers', { score: score, composerName: composerName, screen: 'QuizAnswers'})}>
                      <Text style={{fontSize: 17, color: "#ffffff", fontWeight: "bold"}}>Review Answers</Text>
                  </Pressable>
                  <Text style={[{top: 380, fontSize: 30}, styles.text]}>High Score: {highScore}/5</Text>
                  <Image style={{position: "absolute", top: 420, alignSelf: "center", width: 120, height: 170}} source={require('../../../assets/chopin.png')}/>
              </View>
        </View>
    );
}
  