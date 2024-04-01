import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from "react-native";

const quizRooms = [
  {
    id: "1",
    roomName: "Music Trivia",
    musicType: "Classical",
    category: "Composer",
    difficulty: "Easy",
    numQuestions: 10,
    roomCapacity: 4,
    roomType: "Public",
    players: 2,
  },
  {
    id: "2",
    roomName: "Pop Music Quiz",
    musicType: "Contemporary",
    category: "Music Work",
    difficulty: "Medium",
    numQuestions: 15,
    roomCapacity: 3,
    roomType: "Public",
    players: 1,
  },
  {
    id: "3",
    roomName: "Instrument Challenge",
    musicType: "Classical",
    category: "Instrument",
    difficulty: "Hard",
    numQuestions: 20,
    roomCapacity: 5,
    roomType: "Private",
    players: 3,
  },
];

export function JoinOnlineQuizRoom({ navigation }) {
  const handleJoinRoom = (room) => {
    // Handle joining the selected quiz room
    console.log(`Joining room: ${room.roomName}`);
    // Navigate to the OnlineQuizRoom component and pass the selected room details
    navigation.navigate("OnlineQuizRoom", room);
  };

  const renderQuizRoom = ({ item }) => (
    <TouchableOpacity style={styles.roomContainer} onPress={() => handleJoinRoom(item)}>
      <Text style={styles.roomName}>{item.roomName}</Text>
      <View style={styles.roomDetails}>
        <Text style={styles.detailText}>Music Type: {item.musicType}</Text>
        <Text style={styles.detailText}>Category: {item.category}</Text>
        <Text style={styles.detailText}>Difficulty: {item.difficulty}</Text>
        <Text style={styles.detailText}>Questions: {item.numQuestions}</Text>
        <Text style={styles.detailText}>
          Players: {item.players}/{item.roomCapacity}
        </Text>
        <Text style={styles.detailText}>Room Type: {item.roomType}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Join Online Quiz Room</Text>
      <FlatList
        data={quizRooms}
        renderItem={renderQuizRoom}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#ffbb37",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "white",
  },
  listContainer: {
    paddingBottom: 20,
  },
  roomContainer: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  roomName: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#ffbb37",
  },
  roomDetails: {
    marginLeft: 10,
  },
  detailText: {
    fontSize: 16,
    color: "#666",
    marginBottom: 5,
  },
});