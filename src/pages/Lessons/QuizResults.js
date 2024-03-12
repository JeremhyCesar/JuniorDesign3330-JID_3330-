import React from 'react';
import {
    Pressable,
    StyleSheet,
    ScrollView,
    Text,
    View,
    Image, 
} from "react-native";

// TO DO: EDIT THE RESULTS TO BE BASED ON SCORE

export function QuizResults({ route, navigation }) {
    const {score} = route.params;
    var scoreString = score + "/5";
    const styles = StyleSheet.create({
      button: {
        borderRadius: 31,
        shadowOffset: { width: 4, height: 4 },
        shadowColor: "black",
        shadowOpacity: 0.25,
        width: "84%",
        height: 250,
        cursor: "pointer",
      },
    });
    return (
      <ScrollView style={{ backgroundColor: "white" }}>
        <Text
          style={{
            fontWeight: "bold",
            top: 64,
            left: "8%",
            fontSize: 42,
            color: "#333",
          }}
        >
          Your Quiz Results
        </Text>

    
        <Text
          style={{
            top: 68,
            left: "48%",
            fontSize: 20,
            textAlign: "left",
            color: "#717171",
          }}
        >
            2/5 
        </Text>
        <Pressable
          onPress={() => navigation.navigate("Home")}
          style={[
            { top: 94, left: "8%", backgroundColor: "#ffbb37" },
            styles.button,
          ]}
        >
          <Text
            style={{
              top: 26,
              left: "25%",
              fontSize: 28,
              textAlign: "left",
              fontWeight: "bold",
              color: "white",
            }}
          >
            Return Home
          </Text>
          <Image
            source={require("../../../assets/confetti.png")}
            style={{
              position: "absolute",
              top: 60,
              left: "17%",
              width: 220,
              height: 170,
              objectFit: "cover",
            }}
          />
        </Pressable>
        <View style={{ height: 180 }} />
      </ScrollView>
    );
  }
  