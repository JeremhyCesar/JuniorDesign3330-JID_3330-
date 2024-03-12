import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Pressable, StyleSheet, ScrollView, Text, View, Image } from "react-native";
import { QuizQuestion } from "./QuizQuestion"
import { QuizTopic } from "./QuizTopic"

export function Quizzes() {
    const Stack = createNativeStackNavigator();
    return (
      <Stack.Navigator
        initialRouteName="QuizSelection"
        backBehavior="history"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="QuizSelection" component={QuizSelection} />
        <Stack.Screen name="QuizQuestion" component={QuizQuestion} />
        <Stack.Screen name="QuizTopic" component={QuizTopic} />
      </Stack.Navigator>
    );
}

function QuizSelection({ navigation }) {
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
             width: 150,
             flexWrap: "wrap",
           }}
         >
           Beginner
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
           Intermediate
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
           Expert
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
       </Pressable>
        <View style={{ height: 180 }} />
      </ScrollView>
    );
  }
  