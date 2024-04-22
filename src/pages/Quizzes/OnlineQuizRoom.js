import { useQuery } from "@realm/react";
import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { QuizRoom } from "../../models/QuizRoom";
import { User } from "../../models/User";

export function OnlineQuizRoom({ route, navigation }) {
  const room = useQuery(QuizRoom).find((object) => object.joinCode === route.params.joinCode);
  const players = useQuery(User).filtered('current_quiz_code == $0', route.params.joinCode);
  const [isReady, setIsReady] = useState(false);

  console.log(players);

  const handleReadyPress = () => {
    setIsReady(!isReady);
  };

  return (
    <View style={styles.container}>
      <View style={styles.roomDetailsBlock}>
        <Text style={styles.title}>{room.roomName}</Text>
        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Music Type:</Text>
          <Text style={styles.infoValue}>{room.musicType}</Text>
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Category:</Text>
          <Text style={styles.infoValue}>{room.category}</Text>
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Difficulty:</Text>
          <Text style={styles.infoValue}>{room.difficulty}</Text>
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Number of Questions:</Text>
          <Text style={styles.infoValue}>{room.numQuestions}</Text>
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Players:</Text>
          <Text style={styles.infoValue}>{players.length}/{room.roomCapacity}</Text>
        </View>
      </View>

      <View style={styles.waitingContainer}>
        <Text style={styles.waitingText}>Waiting for other players to join...</Text>
      </View>
      {
        <View style={styles.nameRow}>
          {players.map((player, index) => {
            return index < 3 ? <Text key={index} style={styles.nameText}>{player.full_name.split(' ')[0]}</Text> : null;
          })}
        </View>
      }
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
  roomDetailsBlock: {
    borderRadius: 24,
    backgroundColor: '#40406f',
    width: '80%',
    paddingLeft: 25,
    paddingBottom: 5,
    paddingTop: 5
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#211454",
    alignItems: "center",
  },
  nameRow: {
    flexDirection: 'row',
    padding: 10,
    paddingBottom: 20
  },
  nameText: {
    color: 'white',
    fontSize: 20,
    flex: 1
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
    color: "white",
    top: 5,
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
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
    marginTop: 20,
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