import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from "react-native";
import { QuizRoom } from "../../models/QuizRoom";
import { useObject, useUser, useRealm, useQuery } from "@realm/react";
import { BSON } from "realm";
import { User } from "../../models/User";

/*const quizRooms = [
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
];*/

export function JoinOnlineQuizRoom({ navigation }) {
  const realm = useRealm();
  const user = useObject(User, BSON.ObjectId(useUser().id));

  realm.subscriptions.update((mutableSubs) => {
    mutableSubs.add(realm.objects("QuizRoom"), {name: 'quizSubscription'});
  })

  const quizRooms = useQuery(QuizRoom);
  console.log(quizRooms[0]);

  const handleJoinRoom = (room) => {
    if (room.players.findIndex((playerId) => user._id.toString() == playerId) === -1) {
      if (room.players.length < room.roomCapacity) {
      // Handle joining the selected quiz room
      console.log(`Joining room: ${room.roomName}`);
        realm.write(() => {
          user.current_quiz_code = room.joinCode;
          room.players.push(user._id);
        })
        navigation.navigate("OnlineQuizRoom", {joinCode: room.joinCode});
      }
      // Navigate to the OnlineQuizRoom component and pass the selected room details
    } else navigation.navigate("OnlineQuizRoom", {joinCode: room.joinCode});
  };

  const renderQuizRoom = (quizRoom) => {
    console.log(quizRoom);
    return (<TouchableOpacity style={styles.roomContainer} onPress={() => handleJoinRoom(quizRoom.item)}>
      <Text style={styles.roomName}>{quizRoom.item.roomName}</Text>
      <View style={styles.roomDetails}>
        <Text style={styles.detailText}>Music Type: {quizRoom.item.musicType}</Text>
        <Text style={styles.detailText}>Category: {quizRoom.item.category}</Text>
        <Text style={styles.detailText}>Difficulty: {quizRoom.item.difficulty}</Text>
        <Text style={styles.detailText}>Questions: {quizRoom.item.numQuestions}</Text>
        <Text style={styles.detailText}>
          Players: {quizRoom.item.players.length}/{quizRoom.item.roomCapacity}
        </Text>
        <Text style={styles.detailText}>Room Type: {quizRoom.item.private ? "Private" : "Public"}</Text>
      </View>
    </TouchableOpacity>
  );}

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Join Online Quiz Room</Text>
      <FlatList
        data={quizRooms}
        renderItem={renderQuizRoom}
        keyExtractor={(quizRoom) => quizRoom.joinCode}
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