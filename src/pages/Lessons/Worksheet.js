import React from "react";
import { ScrollView, Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

export function Worksheet({ worksheetContent, navigation }) {
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
          backgroundColor: "#e2480d",
          paddingHorizontal: 10,
          paddingTop: 55,
          paddingBottom: 10,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={25} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.titleContainer}>
        <View style={styles.iconContainer}>
          <Image
            source={require("../../../assets/teaching-icon.png")}
            style={styles.headerImage}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.worksheetTitle}>Worksheet</Text>
          <Text style={styles.subtitle}>practice your knowledge</Text>
        </View>
      </View>
      <View style={styles.instructionContainer}>
        <Text style={styles.instruction}>Answer these questions on your own paper!</Text>
      </View>
      <ScrollView style={{ marginTop: 20 }}>
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
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 25,
    paddingVertical: 20,
  },
  iconContainer: {
    backgroundColor: "#e3c565",
    borderRadius: 31,
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  headerImage: {
    width: 80,
    height: 80,
    resizeMode: "contain",
  },
  textContainer: {
    marginLeft: 20,
  },
  worksheetTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#3e8ede",
  },
  subtitle: {
    fontSize: 16,
    color: "gray",
  },
  instructionContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    padding: 10,
    marginHorizontal: 25,
    marginBottom: 10,
    elevation: 2,
  },
  instruction: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#3e8ede",
    textAlign: "center",
  },
  section: {
    marginHorizontal: 25,
    marginBottom: 20,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#000",
  },
  detail: {
    fontSize: 15,
    marginLeft: 10,
    color: "#000",
  },
});