import React from "react";
import { ScrollView, Text, StyleSheet, View, Image } from "react-native";

export function Worksheet({ worksheetContent }) {
  if (!worksheetContent) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>No worksheet content available.</Text>
      </View>
    );
  }
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          top: 92,
          left: "12%",
          borderRadius: 31,
          backgroundColor: "#e3c565",
          width: "40%",
          height: 110,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={require("../../../assets/teaching-icon.png")}
          style={{
            width: 130,
            height: 130,
            resizeMode: "contain",
          }}
        />
      </View>
      <Text
        style={{
          fontWeight: "bold",
          top: 0,
          left: "63%",
          fontSize: 20,
          color: "#3e8ede",
        }}
      >
        Worksheet
      </Text>
      <View
        style={{
          top: 0,
          left: "61%",
          borderRadius: 5,
          padding: 10,
          width: "40%",
          height: 90,
          elevation: 2,
        }}
      >
        <Text
          style={{
            fontSize: 15,
            color: "gray",
          }}
        >
          practice your knowledge
        </Text>
      </View>
      <View
        style={{
          top: 0,
          left: "7%",
          borderRadius: 5,
          padding: 5,
          width: "90%",
          height: 90,
          elevation: 2,
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 30,
            color: "#3e8ede",
          }}
        >
          Answer these questions on your own paper!
        </Text>
      </View>
      <ScrollView style={{ marginTop: 0 }}>
        {worksheetContent.sections.map((section, index) => (
          <View key={index} style={styles.section}>
            <Text style={styles.header}>{section.title}</Text>
            {section.questions.map((question, questionIndex) => (
              <View key={questionIndex}>
                <Text style={styles.detail}>· {question.question}</Text>
                {question.details.map((detail, detailIndex) => (
                  <Text key={detailIndex} style={styles.detail}>
                    · {detail}
                  </Text>
                ))}
              </View>
            ))}
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 25,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },
  headerImage: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  textContainer: {
    marginLeft: 20,
  },
  worksheetTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#07a3e0",
  },
  subtitle: {
    fontSize: 16,
    color: "#07a3e0",
    fontStyle: "italic",
  },
  instruction: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#07a3e0",
    marginVertical: -10,
    textAlign: "center",
  },
  section: {
    marginLeft: "8%",
    marginRight: "5%",
    marginBottom: 20,
    marginTop: 10,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#000",
  },
  question: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 8,
    color: "#000",
  },
  detail: {
    fontSize: 15,
    marginLeft: 10,
    color: "#000",
  },
});
