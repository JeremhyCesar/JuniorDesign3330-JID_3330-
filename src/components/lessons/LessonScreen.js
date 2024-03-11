import React, { useState } from "react";
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  Image,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";


export function LessonScreen({ lessonData }) {
  const {
    composerName,
    introduction,
    imageSource,
    videoPages,
    worksheet,
    review,
    quizRoute,
  } = lessonData;

  const [progress, setProgress] = useState(0);
  const [modulesComplete, setModulesComplete] = useState(0);
  const totalTasks = videoPages.length + 3; // Total number of tasks (videos + worksheet + review + quiz)

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
        <Text style={styles.title}>{composerName}</Text>
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
          },
        ]}
      >
        <Image
          source={require("../../../assets/composers/Chopin.png")}
          style={{
            top: 30,
            width: 208,
            height: 290,
            objectFit: "cover",
          }}
        />
      </View>

      <View style={[{ top: 20, backgroundColor: "#ffffff" }]}>
        {videoPages.map((videoPage, index) => (
          <Pressable
            key={videoPage.title}
            style={styles.imageContainer}
            onPress={() => {
              if (videoPage.videoID) {
                handlePress(index);
                navigation.navigate("VideoPage", {
                  composerName: videoPage.title,
                  videoID: videoPage.videoID,
                });
              }
            }}
          >
            <Image
              source={require("../../../assets/video-1.png")}
              style={styles.image}
            />
          </Pressable>
        ))}

        {videoPages.length < 2 && (
          <View style={styles.imageContainer}>
            <Image source={video2} style={styles.image} />
          </View>
        )}

        <Pressable
          style={styles.imageContainer}
          onPress={() => {
            handlePress(videoPages.length);
            navigation.navigate("Worksheet");
          }}
        >
          <Image
            source={require("../../../assets/worksheet-1.png")}
            style={styles.image}
          />
        </Pressable>

        <Pressable
          style={styles.imageContainer}
          onPress={() => {
            handlePress(videoPages.length + 1);
            navigation.navigate("ReviewSession");
          }}
        >
          <Image
            source={require("../../../assets/review-1.png")}
            style={styles.image}
          />
        </Pressable>

        <Pressable
          style={styles.imageContainer}
          onPress={() => {
            handlePress(videoPages.length + 2);
            navigation.navigate(quizRoute);
          }}
        >
          <Image
            source={require("../../../assets/mini-quiz-1.png")}
            style={styles.image}
          />
        </Pressable>
      </View>
    </ScrollView>
  );
}
