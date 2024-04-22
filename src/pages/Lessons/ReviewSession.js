import React from "react";
import { ScrollView, Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

export function ReviewSession({ reviewContent, navigation }) {
  if (!reviewContent || !reviewContent.sections) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>No review content available.</Text>
      </View>
    );
  }

  const name = Object.keys(reviewContent)[0];

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
          <Text style={styles.reviewTitle}>Review</Text>
          <Text style={styles.subtitle}>Review {name}'s stylistic choices</Text>
        </View>
      </View>
      <View style={styles.instructionContainer}>
        <Text style={styles.instruction}>Reflect on the key points below!</Text>
      </View>
      <ScrollView style={{ marginTop: 20 }}>
        {reviewContent.sections.map((section, index) => (
          <View key={index} style={styles.section}>
            <Text style={styles.header}>{section.title}</Text>
            <Text style={styles.detail}>{section.content}</Text>
            {section.points &&
              section.points.map((point, pointIndex) => (
                <View key={pointIndex} style={styles.pointContainer}>
                  <Text style={styles.pointTitle}>{point.title}</Text>
                  <Text style={styles.pointDescription}>{point.description}</Text>
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
    backgroundColor: "#f88379",
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
  reviewTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#006400",
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
    color: "#006400",
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
    fontSize: 16,
    marginBottom: 10,
    color: "#000",
  },
  pointContainer: {
    marginBottom: 10,
  },
  pointTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#000",
  },
  pointDescription: {
    fontSize: 15,
    marginLeft: 10,
    color: "#000",
  },
});