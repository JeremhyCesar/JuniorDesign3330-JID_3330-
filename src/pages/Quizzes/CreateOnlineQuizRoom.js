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
    navigation.navigate("OnlineQuizRoom", {
      musicType,
      category,
      difficulty,
      numQuestions,
      roomCapacity,
      roomType,
      roomName,
    });
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
            {[5, 10, 20].map((value) => (
              <TouchableOpacity
                key={value}
                style={[
                  styles.option,
                  numQuestions === value && styles.selectedOption,
                ]}
                onPress={() => setNumQuestions(value)}
              >
                <Text
                  style={[
                    styles.optionText,
                    numQuestions === value && styles.selectedText,
                  ]}
                >
                  {value}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.filterContainer}>
          <Text style={styles.filterLabel}>Room Capacity:</Text>
          <View style={styles.optionContainer}>
            {[2, 3, 4, 5].map((value) => (
              <TouchableOpacity
                key={value}
                style={[
                  styles.option,
                  roomCapacity === value && styles.selectedOption,
                ]}
                onPress={() => setRoomCapacity(value)}
              >
                <Text
                  style={[
                    styles.optionText,
                    roomCapacity === value && styles.selectedText,
                  ]}
                >
                  {value}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.filterContainer}>
          <Text style={styles.filterLabel}>Room Type:</Text>
          <View style={styles.optionContainer}>
            {["Public", "Private"].map((value) => (
              <TouchableOpacity
                key={value}
                style={[
                  styles.option,
                  roomType === value && styles.selectedOption,
                ]}
                onPress={() => setRoomType(value)}
              >
                <Text
                  style={[
                    styles.optionText,
                    roomType === value && styles.selectedText,
                  ]}
                >
                  {value}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.filterContainer}>
          <Text style={styles.filterLabel}>Room Name:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setRoomName(text)}
            value={roomName}
            placeholder="Enter room name"
            placeholderTextColor="#ffbb37"
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
    backgroundColor: "white",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    color: "black",
  },
  filterContainer: {
    marginBottom: 20,
  },
  filterLabel: {
    fontSize: 18,
    marginBottom: 10,
    color: "black",
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
    borderColor: "black",
    borderRadius: 5,
    marginRight: 10,
    marginBottom: 10,
  },
  selectedOption: {
    backgroundColor: "rgba(255, 187, 55, 0.5)", // Adjust the alpha value (0.5) to control transparency
    borderColor: "#ffbb37",
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
    borderColor: "#ffbb37",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    color: "black",
  },
  button: {
    backgroundColor: "#ffbb37",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
