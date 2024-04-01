import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ScrollView,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export function CreateRoomScreen({ navigation }) {
  const [musicType, setMusicType] = useState("Classical");
  const [category, setCategory] = useState("Composer");
  const [difficulty, setDifficulty] = useState("Easy");
  const [numQuestions, setNumQuestions] = useState(5);
  const [roomCapacity, setRoomCapacity] = useState(2);
  const [roomType, setRoomType] = useState("Public");
  const [roomName, setRoomName] = useState("");

  const handleCreateRoom = () => {
    // Handle room creation logic here
    console.log("Creating an online quiz room:");
    console.log("Music Type:", musicType);
    console.log("Category:", category);
    console.log("Difficulty:", difficulty);
    console.log("Number of Questions:", numQuestions);
    console.log("Room Capacity:", roomCapacity);
    console.log("Room Type:", roomType);
    console.log("Room Name:", roomName);
    // Navigate to the quiz room or display a success message
  };

  return (
    <ScrollView style={styles.container}>
      <KeyboardAwareScrollView
        contentContainerStyle={styles.container}
        resetScrollToCoords={{ x: 0, y: 0 }}
        scrollEnabled={true}
      >
        <Text style={styles.title}>Create Quiz Room</Text>

        <View style={styles.filterContainer}>
          <Text style={styles.filterLabel}>Music Type:</Text>
          <View style={styles.optionContainer}>
            <TouchableOpacity
              style={[
                styles.option,
                musicType === "Classical" && styles.selectedOption,
              ]}
              onPress={() => setMusicType("Classical")}
            >
              <Text
                style={[
                  styles.optionText,
                  musicType === "Classical" && styles.selectedText,
                ]}
              >
                Classical
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.option,
                musicType === "Contemporary" && styles.selectedOption,
              ]}
              onPress={() => setMusicType("Contemporary")}
            >
              <Text
                style={[
                  styles.optionText,
                  musicType === "Contemporary" && styles.selectedText,
                ]}
              >
                Contemporary
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.filterContainer}>
          <Text style={styles.filterLabel}>Category:</Text>
          <View style={styles.optionContainer}>
            <TouchableOpacity
              style={[
                styles.option,
                category === "Composer" && styles.selectedOption,
              ]}
              onPress={() => setCategory("Composer")}
            >
              <Text
                style={[
                  styles.optionText,
                  category === "Composer" && styles.selectedText,
                ]}
              >
                Composer
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.option,
                category === "Music Work" && styles.selectedOption,
              ]}
              onPress={() => setCategory("Music Work")}
            >
              <Text
                style={[
                  styles.optionText,
                  category === "Music Work" && styles.selectedText,
                ]}
              >
                Music Work
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.option,
                category === "Instrument" && styles.selectedOption,
              ]}
              onPress={() => setCategory("Instrument")}
            >
              <Text
                style={[
                  styles.optionText,
                  category === "Instrument" && styles.selectedText,
                ]}
              >
                Instrument
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.filterContainer}>
          <Text style={styles.filterLabel}>Difficulty:</Text>
          <View style={styles.optionContainer}>
            <TouchableOpacity
              style={[
                styles.option,
                difficulty === "Easy" && styles.selectedOption,
              ]}
              onPress={() => setDifficulty("Easy")}
            >
              <Text
                style={[
                  styles.optionText,
                  difficulty === "Easy" && styles.selectedText,
                ]}
              >
                Easy
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.option,
                difficulty === "Medium" && styles.selectedOption,
              ]}
              onPress={() => setDifficulty("Medium")}
            >
              <Text
                style={[
                  styles.optionText,
                  difficulty === "Medium" && styles.selectedText,
                ]}
              >
                Medium
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.option,
                difficulty === "Hard" && styles.selectedOption,
              ]}
              onPress={() => setDifficulty("Hard")}
            >
              <Text
                style={[
                  styles.optionText,
                  difficulty === "Hard" && styles.selectedText,
                ]}
              >
                Hard
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.filterContainer}>
          <Text style={styles.filterLabel}>Number of Questions:</Text>
          <View style={styles.optionContainer}>
            <TouchableOpacity
              style={[
                styles.option,
                numQuestions === 5 && styles.selectedOption,
              ]}
              onPress={() => setNumQuestions(5)}
            >
              <Text
                style={[
                  styles.optionText,
                  numQuestions === 5 && styles.selectedText,
                ]}
              >
                5
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.option,
                numQuestions === 10 && styles.selectedOption,
              ]}
              onPress={() => setNumQuestions(10)}
            >
              <Text
                style={[
                  styles.optionText,
                  numQuestions === 10 && styles.selectedText,
                ]}
              >
                10
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.option,
                numQuestions === 20 && styles.selectedOption,
              ]}
              onPress={() => setNumQuestions(20)}
            >
              <Text
                style={[
                  styles.optionText,
                  numQuestions === 20 && styles.selectedText,
                ]}
              >
                20
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.filterContainer}>
          <Text style={styles.filterLabel}>Room Capacity:</Text>
          <View style={styles.optionContainer}>
            <TouchableOpacity
              style={[
                styles.option,
                roomCapacity === 2 && styles.selectedOption,
              ]}
              onPress={() => setRoomCapacity(2)}
            >
              <Text
                style={[
                  styles.optionText,
                  roomCapacity === 2 && styles.selectedText,
                ]}
              >
                2
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.option,
                roomCapacity === 3 && styles.selectedOption,
              ]}
              onPress={() => setRoomCapacity(3)}
            >
              <Text
                style={[
                  styles.optionText,
                  roomCapacity === 3 && styles.selectedText,
                ]}
              >
                3
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.option,
                roomCapacity === 4 && styles.selectedOption,
              ]}
              onPress={() => setRoomCapacity(4)}
            >
              <Text
                style={[
                  styles.optionText,
                  roomCapacity === 4 && styles.selectedText,
                ]}
              >
                4
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.option,
                roomCapacity === 5 && styles.selectedOption,
              ]}
              onPress={() => setRoomCapacity(5)}
            >
              <Text
                style={[
                  styles.optionText,
                  roomCapacity === 5 && styles.selectedText,
                ]}
              >
                5
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.filterContainer}>
          <Text style={styles.filterLabel}>Room Type:</Text>
          <View style={styles.optionContainer}>
            <TouchableOpacity
              style={[
                styles.option,
                roomType === "Public" && styles.selectedOption,
              ]}
              onPress={() => setRoomType("Public")}
            >
              <Text
                style={[
                  styles.optionText,
                  roomType === "Public" && styles.selectedText,
                ]}
              >
                Public
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.option,
                roomType === "Private" && styles.selectedOption,
              ]}
              onPress={() => setRoomType("Private")}
            >
              <Text
                style={[
                  styles.optionText,
                  roomType === "Private" && styles.selectedText,
                ]}
              >
                Private
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.filterContainer}>
          <Text style={styles.filterLabel}>Room Name:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setRoomName(text)}
            value={roomName}
            placeholder="Enter room name"
            placeholderTextColor="white"
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={handleCreateRoom}>
          <Text style={styles.buttonText}>Create Room</Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#ffbb37",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    color: "white",
  },
  filterContainer: {
    marginBottom: 20,
  },
  filterLabel: {
    fontSize: 18,
    marginBottom: 10,
    color: "white",
  },
  optionContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
  },
  option: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 5,
    marginRight: 10,
    marginBottom: 10,
  },
  selectedOption: {
    backgroundColor: "white",
    borderColor: "white",
  },
  optionText: {
    fontSize: 16,
    color: "black",
  },
  selectedText: {
    color: "#ffbb37",
  },
  input: {
    height: 40,
    borderColor: "white",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    color: "white",
  },
  button: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#ffbb37",
    fontSize: 18,
    fontWeight: "bold",
  },
});
