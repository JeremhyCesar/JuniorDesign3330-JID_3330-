import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  Image,
  Pressable,
} from "react-native";
import Postcard from "./Postcard";

export function ComposersPage({ navigation }) {
  const composers = [
    {
      name: "Frédéric Chopin",
      image: require("../../../assets/composers/Chopin.png"),
    },
    {
      name: "Ludwig van Beethoven",
      image: require("../../../assets/composers/Beethoven.png"),
    },
    {
      name: "J.S. Bach",
      image: require("../../../assets/composers/Bach.png"),
    },
    {
      name: "Wolfgang Mozart",
      image: require("../../../assets/composers/Mozart.png"),
    },
    {
      name: "Robert Schumann",
      image: require("../../../assets/composers/Schumann.png"),
    },
    // Add more composers as needed
  ];

  const handleComposerPress = (composerName) => {
    navigation.navigate("LessonScreen", { composerName });
  };

  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <Text style={styles.title}>Composers</Text>
      <Text style={styles.subtitle}>The minds behind the music!</Text>

      <View style={styles.composersContainer}>
        {composers.map((composer, index) => (
          <Postcard
            key={index}
            composer={composer}
            onPress={() => handleComposerPress(composer.name)}
          />
        ))}
      </View>

      <View style={{ height: 20 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    top: 64,
    left: "8%",
    fontSize: 48,
    color: "#333",
  },
  subtitle: {
    top: 68,
    left: "8%",
    fontSize: 20,
    textAlign: "left",
    color: "#717171",
  },
  composersContainer: {
    marginTop: 94,
    alignItems: "center",
  },
});
