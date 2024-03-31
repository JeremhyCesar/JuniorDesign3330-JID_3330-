import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LockIcon from "../../assets/-icon-lock-locked.svg";
import {
  Pressable,
  StyleSheet,
  ScrollView,
  Text,
  View,
  Image,
} from "react-native";

export function QuizScreen({ navigation }) {
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
          fontSize: 48,
          color: "#333",
        }}
      >
        My Quizzes
      </Text>
      <Text
        style={{
          top: 68,
          left: "8%",
          fontSize: 20,
          textAlign: "left",
          color: "#717171",
        }}
      >
        Test your knowledge
      </Text>
      <Pressable
        onPress={() => navigation.navigate("QuizTopic")}
        style={[
          { top: 94, left: "8%", backgroundColor: "#ffbb37" },
          styles.button,
        ]}
      >
        <Text
          style={{
            top: 26,
            left: "10%",
            fontSize: 28,
            textAlign: "left",
            fontWeight: "bold",
            color: "white",
            width: 200,
            flexWrap: "wrap",
          }}
        >
          Online Quiz
        </Text>
        <Image
          source={require("../../assets/girl-playing-violin.png")}
          style={{
            position: "absolute",
            top: 0,
            left: "45%",
            width: 160,
            height: 250,
            objectFit: "cover",
          }}
        />
        {/* <View
          style={{
            borderRadius: 31,
            backgroundColor: "white",
            width: 200,
            height: 9,
            marginLeft: 83,
            top: 184,
          }}
        />
        <Text
          style={{
            top: 186,
            marginLeft: 135,
            fontSize: 13,
            textAlign: "left",
            fontWeight: "bold",
            color: "white",
            flexWrap: "wrap",
          }}
        >
          0% completed
        </Text> */}
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate("QuizTopic")}
        style={[
          { top: 124, left: "8%", backgroundColor: "#e24808" },
          styles.button,
        ]}
      >
        <Text
          style={{
            top: 26,
            left: "10%",
            fontSize: 28,
            textAlign: "left",
            fontWeight: "bold",
            color: "white",
            width: "55%",
            flexWrap: "wrap",
          }}
        >
          Offline Quiz
        </Text>
        <Image
          source={require("../../assets/couple-dance-party.png")}
          style={{
            position: "absolute",
            top: 45,
            left: "35%",
            width: 220,
            height: 180,
            objectFit: "cover",
          }}
        />
        {/* <View
          style={{
            borderRadius: 31,
            backgroundColor: "white",
            width: 200,
            height: 9,
            marginLeft: 83,
            top: 184,
          }}
        />
        <Text
          style={{
            top: 186,
            marginLeft: 135,
            fontSize: 13,
            textAlign: "left",
            fontWeight: "bold",
            color: "white",
            flexWrap: "wrap",
          }}
        >
          0% completed
        </Text> */}
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate("QuizTopic")}
        style={[
          { top: 154, left: "8%", backgroundColor: "#00347f" },
          styles.button,
        ]}
      >
        <Text
          style={{
            top: 26,
            left: "10%",
            fontSize: 28,
            textAlign: "left",
            fontWeight: "bold",
            color: "white",
            width: "50%",
            flexWrap: "wrap",
          }}
        >
          Create Quiz
        </Text>
        <Image
          source={require("../../assets/saxophonist.png")}
          style={{
            position: "absolute",
            top: 30,
            left: "50%",
            width: 160,
            height: 200,
            objectFit: "cover",
          }}
        />
        {/* <View
          style={{
            borderRadius: 31,
            backgroundColor: "white",
            width: 200,
            height: 9,
            marginLeft: 83,
            top: 184,
          }}
        />
        <Text
          style={{
            top: 186,
            marginLeft: 135,
            fontSize: 13,
            textAlign: "left",
            fontWeight: "bold",
            color: "white",
            flexWrap: "wrap",
          }}
        >
          0% completed
        </Text> */}
      </Pressable>
      <View style={{ height: 180 }} />
    </ScrollView>
  );
}
