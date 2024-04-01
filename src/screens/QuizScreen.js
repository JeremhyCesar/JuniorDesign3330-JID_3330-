import React from "react";
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
    block: {
      borderRadius: 31,
      shadowOffset: { width: 4, height: 4 },
      shadowColor: "black",
      shadowOpacity: 0.25,
      width: "84%",
      height: 250,
      cursor: "pointer",
      paddingHorizontal: 20,
      paddingVertical: 15,
    },
    title: {
      fontSize: 28,
      textAlign: "left",
      fontWeight: "bold",
      color: "white",
      marginBottom: 15,
    },
    buttonContainer: {
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "flex-start",
    },
    button: {
      backgroundColor: "white",
      borderRadius: 20,
      paddingHorizontal: 15,
      paddingVertical: 10,
      marginBottom: 10,
    },
    buttonText: {
      fontSize: 18,
      textAlign: "center",
      fontWeight: "bold",
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
      <View
        style={[
          { top: 94, left: "8%", backgroundColor: "#ffbb37" },
          styles.block,
        ]}
      >
        <Text style={styles.title}>Online Quiz</Text>
        <View style={styles.buttonContainer}>
          <Pressable
            style={[styles.button, { marginBottom: 20 }]}
            onPress={() => navigation.navigate("CreateRoomScreen")}
          >
            <Text style={[styles.buttonText, { color: "#ffbb37" }]}>
              Create Room
            </Text>
          </Pressable>
          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate("JoinOnlineQuizRoom")}
          >
            <Text style={[styles.buttonText, { color: "#ffbb37" }]}>
              Join Room
            </Text>
          </Pressable>
        </View>
        <Image
          source={require("../../assets/girl-playing-violin.png")}
          style={{
            position: "absolute",
            top: 0,
            right: 30,
            width: 160,
            height: 250,
            objectFit: "cover",
          }}
        />
      </View>
      <View
        style={[
          { top: 124, left: "8%", backgroundColor: "#e24808" },
          styles.block,
        ]}
      >
        <Text style={styles.title}>Offline Quiz</Text>
        <View style={styles.buttonContainer}>
          <Pressable
            style={[styles.button, { marginBottom: 20 }]}
            onPress={() => navigation.navigate("QuizTopic")}
            // Change this onPress to navigate to the OfflineQuiz screen once it is created
            // onPress={() => navigation.navigate("OfflineQuiz")}
          >
            <Text style={[styles.buttonText, { color: "#e24808" }]}>
              Start Practicing
            </Text>
          </Pressable>
        </View>
        <Image
          source={require("../../assets/couple-dance-party.png")}
          style={{
            position: "absolute",
            top: 45,
            right: 0,
            width: 220,
            height: 180,
            objectFit: "cover",
          }}
        />
      </View>
      <View
        style={[
          { top: 154, left: "8%", backgroundColor: "#00347f" },
          styles.block,
        ]}
      >
        <Text style={styles.title}>Create Quiz</Text>
        <View style={styles.buttonContainer}>
          <Pressable
            style={[styles.button, { marginBottom: 20 }]}
            onPress={() => navigation.navigate("CreateQuiz")}
          >
            <Text style={[styles.buttonText, { color: "#00347f" }]}>
              Create New Quiz
            </Text>
          </Pressable>
        </View>
        <Image
          source={require("../../assets/saxophonist.png")}
          style={{
            position: "absolute",
            top: 30,
            right: 10,
            width: 160,
            height: 200,
            objectFit: "cover",
          }}
        />
      </View>
      <View style={{ height: 180 }} />
    </ScrollView>
  );
}