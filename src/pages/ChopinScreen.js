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
      marginVertical: 20, // Spacing around the title
    },
    introduction: {
      fontSize: 20,
      color: "#717171",
      marginBottom: 20, // Spacing below the text
    },
    imageContainer: {
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
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
      contentContainerStyle={{ alignItems: 'center', padding: 20 }}
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
            left: "8%",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#ffbb37",
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
            left: "8%",
            fontSize: 24,
            textAlign: "left",
            color: "#2f4f4f",
            fontWeight: "500",
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
            left: "8%",
            fontSize: 18,
            textAlign: "left",
            color: "#717171",
          }}
        >
          Complete them all before you move on to{"\n"}
          <Text style={{ fontWeight: "bold" }}>Ludwig van Beethoven</Text>
        </Text>
      </View>

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


    </ScrollView>
  );
}
