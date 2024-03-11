import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  Image,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import LessonBlock from "./LessonBlock";

import { useNavigation } from "@react-navigation/native";

export function CompareDemo() {
  const [progress, setProgress] = useState(0);
  const [modulesComplete, setModulesComplete] = useState(0);
  const totalTasks = 3; // Total number of tasks, could be dynamic as well

  const navigation = useNavigation();
  /// update needed on navigation!!!!!!!!!!

  // moduleNo should be 0 indexed
  const handlePress = (moduleNo) => {
    setModulesComplete((prevModules) => {
      if ((prevModules & (1 << moduleNo)) == 0) {
        setProgress((prevProgress) => prevProgress + 1);
        return prevModules + (1 << moduleNo);
      }
      return prevModules;
    });
  };

  const styles = StyleSheet.create({
    button: {
      borderRadius: 30,
      shadowOffset: { width: 4, height: 4 },
      shadowColor: "black",
      shadowOpacity: 0.25,
      width: "84%",
      height: 125,
      cursor: "pointer",
    },
    centeredContent: {
      alignItems: "center",
    },
    textContent: {
      left: "8%",
      width: "100%", // Take up full width to align text from left
    },
    title: {
      fontWeight: "bold",
      fontSize: 48,
      color: "#333",
      marginBottom: 10,
      marginTop: 40,
    },
    introduction: {
      fontSize: 20,
      color: "#717171",
      marginBottom: 10, // Spacing below the text
    },
    tasksText: {
      fontSize: 24,
      left: "5%",
      textAlign: "left",
      color: "#2f4f4f",
      fontWeight: "500",
      marginBottom: 10,
    },
    progressText: {
      fontWeight: "bold",
      color: "#E2480D",
    },
    container: {
      alignItems: "center", // Centers the child components horizontally in the container
    },
    imageContainer: {
      alignItems: "center",
      marginVertical: 5,
    },
    image: {
      width: 300,
      height: 100,
    },
    pressableImage: {
      alignItems: "center",
      justifyContent: "center",
    },
  });

  return (
    <ScrollView
      style={{ backgroundColor: "white" }}
      contentContainerStyle={{ padding: 20 }}
    >
      <View style={styles.centeredContent}>
        <Text style={styles.title}></Text>
      </View>

      <View style={styles.textContent}>
        <Text style={styles.introduction}>
          Let's go to work,{" "}
          <Text style={{ fontWeight: "bold", color: "#E2480D" }}>Julie!</Text>
        </Text>
      </View>

      <View
        style={[
          styles.button,
          {
            width: 350,
            height: 249,
            left: "5%",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#ffbb37",
            marginBottom: 10,
          },
        ]}
      >
        {/* <Image
          source={require("../../assets/chopin.png")}
          style={{
            top: 30,
            width: 208,
            height: 290,
            objectFit: "cover",
          }}
        /> */}
      </View>

      <View>
        <Text style={styles.tasksText}>
          My Tasks:{" "}
          <Text style={styles.progressText}>
            {progress}/{totalTasks}
          </Text>{"Exploring Beethoven's Symphony No. 5 in C minor: A Triumph of Human Spirit"}
          completed
        </Text>
      </View>

      <View>
        <Text
          style={{
            fontSize: 18,
            textAlign: "left",
            left: "5%",
            color: "#717171",
          }}
        >
          Complete them all before you move on to{"\n"}
          <Text style={{ fontWeight: "bold" }}>Ludwig van Beethoven</Text>
        </Text>
      </View>

      <View style={[{ top: 20, left: "8%", backgroundColor: "#ffffff" }]}>
        <Image
          source={require("../../assets/video-1.png")}
          style={{
            position: "absolute",
            top: 0,
            left: "4%",
            width: 120,
            height: 120,
          }}
        />
      </View>

      <View style={[{ top: 20, backgroundColor: "#ffffff" }]}>
        {/* <Pressable
          style={styles.imageContainer}
          onPress={() => {
            handlePress(0);
            navigation.navigate("VideoPage", {
              composerName: "Chopin's life", 
              videoID: "-4mVVRO_98Y"
            });
          }}
        >
          <Image
            source={require("../../assets/video-1.png")}
            style={styles.image}
          />
        </Pressable>

        <Pressable
          style={styles.imageContainer}
          onPress={() => {
            handlePress(1);
            navigation.navigate("VideoPage", {
              composerName: "Chopin's music",
              videoID: "w4YyTQduZDc",
            });
          }}
        >
          <Image
            source={require("../../assets/video-2-1.png")}
            style={styles.image}
          />
        </Pressable> */}

        <Pressable
          style={styles.imageContainer}
          onPress={() => {
            handlePress(2);
            navigation.navigate("Worksheet");
          }}
        >
          <Image
            source={require("../../assets/worksheet-1.png")}
            style={styles.image}
          />
        </Pressable>

        <Pressable style={styles.imageContainer} onPress={() => {
          handlePress(3);
          navigation.navigate("ReviewSession");
          }}>
          <Image
            source={require("../../assets/review-1.png")}
            style={styles.image}
          />
        </Pressable>

        <View style={styles.imageContainer}>
          <Image
            source={require("../../assets/mini-quiz-1.png")}
            style={styles.image}
          />
        </View>
      </View>
    </ScrollView>
  );
}
