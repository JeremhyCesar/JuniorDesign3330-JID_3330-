import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import InstrumentPostcard from "./InstrumentPostcard";
import Icon from "react-native-vector-icons/MaterialIcons";

// Use a seperate file for InstrumentsPage, since the pictures for composers and instruments are in different size
export function InstrumentsPage({ navigation }) {
  const instruments = [
    { name: "Piano", image: require("../../../assets/instruments/piano.png") },
    { name: "Violin", image: require("../../../assets/instruments/violin.png") },
    { name: "Cello", image: require("../../../assets/instruments/cello.png") },
    { name: "Flute", image: require("../../../assets/instruments/flute.png") },
    { name: "Clarinet", image: require("../../../assets/instruments/Clarinet.png") },
    { name: "French Horn", image: require("../../../assets/instruments/frenchhorn.png") },
    
    { name: "Harp", image: require("../../../assets/instruments/harp.png") },
    // Add more instruments as needed
  ];

  const handleInstrumentPress = (instrumentName) => {
    navigation.navigate("LessonScreen", { instrumentName });
  };

  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={25} color="white" />
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>Instruments</Text>
      <Text style={styles.subtitle}>Explore the instruments of classical music!</Text>
      <View style={styles.instrumentsContainer}>
        {instruments.map((instrument, index) => (
          <InstrumentPostcard
            key={index}
            instrument={instrument}
            onPress={() => handleInstrumentPress(instrument.name)}
          />
        ))}
      </View>
      <View style={{ height: 20 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#e2480d",
    paddingHorizontal: 10,
    paddingTop: 55,
    paddingBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    top: 10,
    left: "8%",
    fontSize: 48,
    color: "#333",
  },
  subtitle: {
    top: 20,
    left: "8%",
    fontSize: 20,
    textAlign: "left",
    color: "#717171",
  },
  instrumentsContainer: {
    marginTop: 30,
    alignItems: "center",
  },
});