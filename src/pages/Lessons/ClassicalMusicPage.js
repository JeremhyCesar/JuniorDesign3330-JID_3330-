import {
  Pressable,
  StyleSheet,
  ScrollView,
  Text,
  View,
  Image,
} from "react-native";

export function ClassicalMusicPage({ navigation }) {
  const styles = StyleSheet.create({
    button: {
      borderRadius: 31,
      shadowOffset: { width: 4, height: 4 },
      shadowColor: "black",
      shadowOpacity: 0.25,
      width: "84%",
      height: 250,
      cursor: "pointer",
    },
  });
  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <Text
        style={{
          fontWeight: "bold",
          top: 64,
          left: "8%",
          fontSize: 42,
          color: "#333",
        }}
      >
        Classical Lessons
      </Text>
      <Text
        style={{
          top: 68,
          left: "8%",
          fontSize: 20,
          textAlign: "left",
          color: "#717171",
        }}
      >
        What should we learn now?
      </Text>
      <Pressable
        onPress={() => navigation.navigate("ComposersHome")}
        style={[
          { top: 94, left: "8%", backgroundColor: "#ffbb37" },
          styles.button,
        ]}
      >
        <Text
          style={{
            top: 26,
            left: "10%",
            fontSize: 28,
            textAlign: "left",
            fontWeight: "bold",
            color: "white",
          }}
        >
          Composers
        </Text>
        <Image
          source={require("../../../assets/man-playing-piano.png")}
          style={{
            position: "absolute",
            top: 20,
            left: "30%",
            width: 260,
            height: 220,
            objectFit: "cover",
          }}
        />
      </Pressable>
      <View
        style={[
          { top: 126, left: "8%", backgroundColor: "#e24808" },
          styles.button,
        ]}
      >
        <Text
          style={{
            top: 26,
            left: "10%",
            fontSize: 28,
            textAlign: "left",
            fontWeight: "bold",
            color: "white",
          }}
        >
          Musical Works
        </Text>
        <Image
          source={require("../../../assets/girl-enjoying-music.png")}
          style={{
            position: "absolute",
            top: 70,
            left: "35%",
            width: 190,
            height: 150,
            objectFit: "cover",
          }}
        />
      </View>
      <View
        style={[
          { top: 160, left: "8%", backgroundColor: "#00347f" },
          styles.button,
        ]}
      >
        <Text
          style={{
            top: 26,
            left: "10%",
            fontSize: 28,
            textAlign: "left",
            fontWeight: "bold",
            color: "white",
          }}
        >
          Instruments
        </Text>
        <Image
          source={require("../../../assets/musical-band-performing.png")}
          style={{
            position: "absolute",
            top: 30,
            left: "35%",
            width: 210,
            height: 220,
            objectFit: "cover",
          }}
        />
      </View>
      <View style={{ height: 180 }} />
    </ScrollView>
  );
}
