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
      name: "Wolfgang Amadeus Mozart",
      image: require("../../../assets/composers/Mozart.png"),
    },
    {
      name: "Pyotr Ilyich Tchaikovsky",
      image: require("../../../assets/composers/Tchaikovsky.png"),
    },
    {
      name: "Sergei Rachmaninoff",
      image: require("../../../assets/composers/Rachmaninoff.png"),
    },
    {
      name: "Johannes Brahms",
      image: require("../../../assets/composers/Brahms.png"),
    },
    {
      name: "Franz Schubert",
      image: require("../../../assets/composers/Schubert.png"),
    },
    {
      name: "Antonio Vivaldi",
      image: require("../../../assets/composers/Vivaldi.png"),
    },
    {
      name: "Franz Joseph Haydn",
      image: require("../../../assets/composers/Haydn.png"),
    },
    {
      name: "Claude Debussy",
      image: require("../../../assets/composers/Debussy.png"),
    },
    {
      name: "Johann Strauss II",
      image: require("../../../assets/composers/Strauss_II.png"),
    },
    {
      name: "Franz Liszt",
      image: require("../../../assets/composers/Liszt.png"),
    },
    {
      name: "Antonin Dvorak",
      image: require("../../../assets/composers/Dvorak.png"),
    },
    {
      name: "Georg Friedrich Handel",
      image: require("../../../assets/composers/Handel.png"),
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
