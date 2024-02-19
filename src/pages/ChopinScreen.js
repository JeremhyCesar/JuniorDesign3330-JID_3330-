import { StyleSheet, ScrollView, Text, View, Image } from "react-native";
import LessonBlock from "./LessonBlock";

export function ChopinScreen() {
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
    container: {
      flex: 1,
      justifyContent: "center", // Centers the child components vertically in the container
      alignItems: "center", // Centers the child components horizontally in the container
    },
    imageContainer: {
      marginVertical: 0,
    },
    image: {
      width: 300, // Specify a width
      height: 200, // And a height for your image
      resizeMode: "contain", // Adjust the resizeMode as needed
    },
  });

  return (
    <ScrollView
      style={{ backgroundColor: "white" }}
      contentContainerStyle={{ padding: 20 }}
    >
      <View style={styles.centeredContent}>
        <Text style={styles.title}>Frédéric Chopin</Text>
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
            left: "3%",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#ffbb37",
            marginBottom: 10,
          },
        ]}
      >
        <Image
          source={require("../../assets/chopin.png")}
          style={{
            top: 30,
            width: 208,
            height: 290,
            objectFit: "cover",
          }}
        />
      </View>

      <View>
        <Text
          style={{
            fontSize: 24,
            left: "3%",
            textAlign: "left",
            color: "#2f4f4f",
            fontWeight: "500",
            marginBottom: 10,
          }}
        >
          My Tasks:{" "}
          <Text style={{ fontWeight: "bold", color: "#E2480D" }}>0/5</Text>{" "}
          completed
        </Text>
      </View>

      <View>
        <Text
          style={{
            fontSize: 18,
            textAlign: "left",
            left: "3%",
            color: "#717171",
          }}
        >
          Complete them all before you move on to{"\n"}
          <Text style={{ fontWeight: "bold" }}>Ludwig van Beethoven</Text>
        </Text>
      </View>

      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../../assets/video-1.png")}
            style={styles.image}
          />
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={require("../../assets/video-2-1.png")}
            style={styles.image}
          />
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={require("../../assets/worksheet-1.png")}
            style={styles.image}
          />
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={require("../../assets/review-1.png")}
            style={styles.image}
          />
        </View>
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
