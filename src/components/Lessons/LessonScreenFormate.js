import React, { useState } from "react";
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import LessonBlock from "./LessonBlock";
import worksheetData from "../../data/worksheet.json";
import reviewData from "../../data/review.json";

const imageMap = {
  "Chopin.png": require("../../../assets/composers/Chopin.png"),
  "piano.png": require("../../../assets/instruments/piano.png"),
  "BeethovenAndMozart.png": require("../../../assets/compared/BeethovenAndMozart.png"),
  // Add more mappings for other composers, instruments or other topics
};

export function LessonScreen({ lessonData }) {
  const {
    composerName,
    instrumentName,
    comparedName,
    introduction,
    imageSource,
    videoPages,
  } = lessonData;
  const name = composerName || instrumentName || comparedName;
  const worksheetContent =
    worksheetData.composers[composerName] ||
    worksheetData.instruments[instrumentName] ||
    worksheetData.compared[comparedName];
  const reviewContent =
    reviewData.composers[composerName] ||
    reviewData.instruments[instrumentName] ||
    reviewData.compared[comparedName];

  const [progress, setProgress] = useState(0);
  const [modulesComplete, setModulesComplete] = useState(0);
  const totalTasks = videoPages.length + 3; // Videos + Worksheet + Review

  const navigation = useNavigation();

  // moduleNo should be 0 indexed
  const handlePress = (moduleNo) => {
    setModulesComplete((prevModules) => {
      if ((prevModules & (1 << moduleNo)) === 0) {
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
        <Text style={styles.title}>{name}</Text>
      </View>

      <View style={styles.textContent}>
        <Text style={styles.introduction}>
          {introduction}{" "}
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
            backgroundImage: `url(${imageMap[imageSource]})`,
            backgroundSize: "cover", // or "contain", "stretch"
            backgroundPosition: "center",
          },
        ]}
      >
        <Image
          source={imageMap[imageSource]}
          style={{
            top: 30,
            width: 208,
            height: 290,
            resizeMode: "contain",
          }}
        />
      </View>

      <View>
        <Text style={styles.tasksText}>
          My Tasks:{" "}
          <Text style={styles.progressText}>
            {progress}/{totalTasks}
          </Text>{" "}
          completed
        </Text>
      </View>

      <View style={styles.lessonBlocksContainer}>
        {videoPages.map((videoPage, index) => (
          <LessonBlock
            key={videoPage.title}
            image={require("../../../assets/video-icon.png")}
            title="Video"
            notes={videoPage.title}
            titleColor="#ff9800"
            onPress={() => {
              handlePress(index);
              navigation.navigate("VideoPage", {
                videoTitle: videoPage.title,
                videoID: videoPage.videoID,
              });
            }}
          />
        ))}

        <LessonBlock
          image={require("../../../assets/worksheet-icon.png")}
          title="Worksheet"
          notes={`Complete the worksheet of ${name}`}
          titleColor="#4caf50"
          onPress={() => {
            handlePress(videoPages.length);
            navigation.navigate("Worksheet", { worksheetContent });
          }}
        />

        <LessonBlock
          image={require("../../../assets/worksheet-icon.png")}
          title="Review"
          notes={`Review the knowledge of ${name}`}
          titleColor="#2196f3"
          onPress={() => {
            handlePress(videoPages.length + 1);
            navigation.navigate("ReviewSession", { reviewContent });
          }}
        />

        <LessonBlock
          image={require("../../../assets/quiz-icon.png")}
          title="Mini Quiz"
          notes={`Review the knowledge of ${name}`}
          titleColor="#FFD000"
          onPress={() => {
            handlePress(videoPages.length + 2);
            navigation.navigate("ReviewSession", { reviewContent });
          }}
        />
      </View>
    </ScrollView>
  );
}