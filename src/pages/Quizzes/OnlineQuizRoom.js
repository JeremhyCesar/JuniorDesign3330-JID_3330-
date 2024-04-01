import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export function OnlineQuizRoom({ route, navigation }) {
  const { musicType, category, difficulty, numQuestions, roomCapacity, roomType, roomName } = route.params;
  const [isReady, setIsReady] = useState(false);

  const handleReadyPress = () => {
    setIsReady(!isReady);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{roomName}</Text>

      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Music Type:</Text>
        <Text style={styles.infoValue}>{musicType}</Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Category:</Text>
        <Text style={styles.infoValue}>{category}</Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Difficulty:</Text>
        <Text style={styles.infoValue}>{difficulty}</Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Number of Questions:</Text>
        <Text style={styles.infoValue}>{numQuestions}</Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Room Capacity:</Text>
        <Text style={styles.infoValue}>{roomCapacity}</Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Room Type:</Text>
        <Text style={styles.infoValue}>{roomType}</Text>
      </View>

      <View style={styles.waitingContainer}>
        <Text style={styles.waitingText}>Waiting for other players to join...</Text>
      </View>

      <TouchableOpacity
        style={[styles.readyButton, isReady && styles.readyButtonActive]}
        onPress={handleReadyPress}
      >
        <Text style={styles.readyButtonText}>{isReady ? "Ready!" : "Ready"}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#ffbb37",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "white",
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  infoLabel: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    marginRight: 10,
  },
  infoValue: {
    fontSize: 18,
    color: "white",
  },
  waitingContainer: {
    marginTop: 40,
    marginBottom: 20,
  },
  waitingText: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
  },
  readyButton: {
    backgroundColor: "white",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 24,
  },
  readyButtonActive: {
    backgroundColor: "#4CAF50",
  },
  readyButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffbb37",
  },
});