import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export function CreateRoomScreen({ navigation }) {
  const [musicType, setMusicType] = useState('Classical');
  const [category, setCategory] = useState('Composer');
  const [difficulty, setDifficulty] = useState('Easy');
  const [numQuestions, setNumQuestions] = useState(5);
  const [roomCapacity, setRoomCapacity] = useState(2);
  const [roomType, setRoomType] = useState('Public');
  const [roomName, setRoomName] = useState('');

  const handleCreateRoom = () => {
    // Handle room creation logic here
    console.log('Creating room with the following settings:');
    console.log('Music Type:', musicType);
    console.log('Category:', category);
    console.log('Difficulty:', difficulty);
    console.log('Number of Questions:', numQuestions);
    console.log('Room Capacity:', roomCapacity);
    console.log('Room Type:', roomType);
    console.log('Room Name:', roomName);
    // Navigate to the quiz room or display a success message
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Quiz Room</Text>

      <View style={styles.filterContainer}>
        <Text style={styles.filterLabel}>Music Type:</Text>
        <Picker
          selectedValue={musicType}
          onValueChange={(itemValue) => setMusicType(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Classical" value="Classical" />
          <Picker.Item label="Contemporary" value="Contemporary" />
        </Picker>
      </View>

      <View style={styles.filterContainer}>
        <Text style={styles.filterLabel}>Category:</Text>
        <Picker
          selectedValue={category}
          onValueChange={(itemValue) => setCategory(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Composer" value="Composer" />
          <Picker.Item label="Music Work" value="Music Work" />
          <Picker.Item label="Instrument" value="Instrument" />
        </Picker>
      </View>

      <View style={styles.filterContainer}>
        <Text style={styles.filterLabel}>Difficulty:</Text>
        <Picker
          selectedValue={difficulty}
          onValueChange={(itemValue) => setDifficulty(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Easy" value="Easy" />
          <Picker.Item label="Medium" value="Medium" />
          <Picker.Item label="Hard" value="Hard" />
        </Picker>
      </View>

      <View style={styles.filterContainer}>
        <Text style={styles.filterLabel}>Number of Questions:</Text>
        <Picker
          selectedValue={numQuestions}
          onValueChange={(itemValue) => setNumQuestions(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="5" value={5} />
          <Picker.Item label="10" value={10} />
          <Picker.Item label="20" value={20} />
        </Picker>
      </View>

      <View style={styles.filterContainer}>
        <Text style={styles.filterLabel}>Room Capacity:</Text>
        <Picker
          selectedValue={roomCapacity}
          onValueChange={(itemValue) => setRoomCapacity(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="2" value={2} />
          <Picker.Item label="3" value={3} />
          <Picker.Item label="4" value={4} />
          <Picker.Item label="5" value={5} />
        </Picker>
      </View>

      <View style={styles.filterContainer}>
        <Text style={styles.filterLabel}>Room Type:</Text>
        <Picker
          selectedValue={roomType}
          onValueChange={(itemValue) => setRoomType(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Public" value="Public" />
          <Picker.Item label="Private" value="Private" />
        </Picker>
      </View>

      <View style={styles.filterContainer}>
        <Text style={styles.filterLabel}>Room Name:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setRoomName(text)}
          value={roomName}
          placeholder="Enter room name"
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleCreateRoom}>
        <Text style={styles.buttonText}>Create Room</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  filterContainer: {
    marginBottom: 20,
  },
  filterLabel: {
    fontSize: 18,
    marginBottom: 10,
  },
  picker: {
    height: 50,
    width: '100%',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});