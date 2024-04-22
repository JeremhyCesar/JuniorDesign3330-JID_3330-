import React, { useState } from "react";
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  Image,
  Pressable,
} from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import LessonBlock from "./LessonBlock";
import worksheetData from "../../data/worksheet.json";
import reviewData from "../../data/review.json";
import { useObject, useRealm, useUser } from "@realm/react";
import { BSON } from "realm";
import { User } from "../../models/User";

const imageMap = {
  // composers
  "Chopin.png": require("../../../assets/composers/Chopin.png"),
  "Beethoven.png": require("../../../assets/composers/Beethoven.png"),
  "Bach.png": require("../../../assets/composers/Bach.png"),
  "Mozart.png": require("../../../assets/composers/Mozart.png"),
  "Tchaikovsky.png": require("../../../assets/composers/Tchaikovsky.png"),
  "Rachmaninoff.png": require("../../../assets/composers/Rachmaninoff.png"),
  "Brahms.png": require("../../../assets/composers/Brahms.png"),
  "Schubert.png": require("../../../assets/composers/Schubert.png"),
  "Vivaldi.png": require("../../../assets/composers/Vivaldi.png"),
  "Haydn.png": require("../../../assets/composers/Haydn.png"),
  "Debussy.png": require("../../../assets/composers/Debussy.png"),
  "Strauss_II.png": require("../../../assets/composers/Strauss_II.png"),
  "Liszt.png": require("../../../assets/composers/Liszt.png"),
  "Dvorak.png": require("../../../assets/composers/Dvorak.png"),
  "Handel.png": require("../../../assets/composers/Handel.png"),

  // instruments
  "piano.png": require("../../../assets/instruments/piano.png"),
  "frenchhorn.png": require("../../../assets/instruments/frenchhorn.png"),

  // compared
  "BeethovenAndMozart.png": require("../../../assets/compared/BeethovenAndMozart.png"),
  "TchaikovskyAndBach.png": require("../../../assets/compared/TchaikovskyAndBach.png"),
  "ChopinLiszt.png": require("../../../assets/compared/ChopinLiszt.png"),
  "DebussyRavel.png": require("../../../assets/compared/DebussyRavel.png"),
  "StravinskySchoenberg.png": require("../../../assets/compared/StravinskySchoenberg.png")



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
  const user = useObject(User, BSON.ObjectId(useUser().id));
  const realm = useRealm();
  // sync module progress with database
  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      lessonIndex = user.lesson_topics.indexOf(name)
      if (lessonIndex !== -1) {
        let prog = user.lesson_progress[lessonIndex];
        setModulesComplete(prog);
        setProgress(0)
        for (i = 0; i < 5; i++) {
          if ((prog >> i) & 1 === 1) setProgress((prev) => prev + 1);
        }
      }
    });
    return unsubscribe;
  }, [navigation]);

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      realm.write(() => {
        if (user.lesson_topics.indexOf(name) === -1) {
          user.lesson_topics.push(name);
          user.lesson_progress.push(modulesComplete);
        } else {
          user.lesson_progress[user.lesson_topics.indexOf(name)] = modulesComplete;
        }
      })
    });
    return unsubscribe;
  }, [modulesComplete]);
  
  
  // moduleNo should be 0 indexed
  const completeModule = (moduleNo) => {
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
      fontSize: 40,
      color: "#333",
      marginBottom: 10,
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
    lessonBlocksContainer: {
      paddingLeft: 20,
    },
  });

  return (
    <ScrollView
      style={{ backgroundColor: "white" }}
      contentContainerStyle={{ paddingTop: 100, padding: 20 }}
    >
      <View style={styles.centeredContent}>
        <Text style={styles.title}>{name}</Text>
      </View>

      <View style={styles.textContent}>
        <Text style={styles.introduction}>
          {introduction}{" "}
          <Text style={{ fontWeight: "bold", color: "#E2480D" }}>{user.full_name.split(" ")[0]}!</Text>
        </Text>
      </View>

      <View
        style={[
          styles.button,
          {
            width: 350,
            height: 249,
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
              completeModule(index);
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
            completeModule(videoPages.length);
            navigation.navigate("Worksheet", { worksheetContent });
          }}
        />

        <LessonBlock
          image={require("../../../assets/worksheet-icon.png")}
          title="Review"
          notes={`Review the knowledge of ${name}`}
          titleColor="#2196f3"
          onPress={() => {
            completeModule(videoPages.length + 1);
            navigation.navigate("ReviewSession", { reviewContent });
          }}
        />

        <LessonBlock
          image={require("../../../assets/quiz-icon.png")}
          title="Mini Quiz"
          notes={`Test your knowledge of ${name}`}
          titleColor="#FFD000"
          onPress={() => {
            completeModule(videoPages.length + 2);
            navigation.navigate("ReviewSession", { reviewContent });
          }}
        />
      </View>
    </ScrollView>
  );
}
