import {
    StyleSheet,
    ScrollView,
    Text,
    View,
    Image,
    Pressable,
  } from "react-native";
  
  export function InstrumentsPage({ navigation }) {
    const styles = StyleSheet.create({
      button: {
        borderRadius: 30,
        shadowOffset: { width: 4, height: 4 },
        shadowColor: "black",
        shadowOpacity: 0.25,
        width: "84%",
        height: 125,
        cursor: "pointer",
      },
      instrumentImage: {
        position: "absolute",
        left: "55%",
        width: 120,
        height: 120,
        resizeMode: "contain",
      },
    });
  
    const handleInstrumentPress = (instrumentName) => {
      navigation.navigate("LessonScreen", { instrumentName });
    };
  
    return (
      <ScrollView style={{ backgroundColor: "white" }}>
        <Text
          style={{
            fontWeight: "bold",
            top: 64,
            left: "8%",
            fontSize: 48,
            color: "#333",
          }}
        >
          Instruments
        </Text>
        <Text
          style={{
            top: 68,
            left: "8%",
            fontSize: 15,
            textAlign: "left",
            color: "#717171",
          }}
        >
          Explore the instruments of classical music!
        </Text>
  
        <Pressable
          onPress={() => handleInstrumentPress("Piano")}
          style={[
            { top: 94, left: "8%", backgroundColor: "#ffffff" },
            styles.button,
          ]}
        >
          <Text
            style={{
              top: 26,
              left: "8%",
              fontSize: 30,
              textAlign: "left",
              fontWeight: "bold",
              color: "#dc7424",
              width: 150,
              flexWrap: "wrap",
            }}
          >
            Piano
          </Text>
          <Image
            source={require("../../../assets/instruments/piano.png")}
            style={styles.instrumentImage}
          />
        </Pressable>
  
        <Pressable
          onPress={() => handleInstrumentPress("French Horn")}
          style={[
            { top: 109, left: "8%", backgroundColor: "#ffffff" },
            styles.button,
          ]}
        >
          <Text
            style={{
              top: 25,
              left: "8%",
              fontSize: 30,
              textAlign: "left",
              fontWeight: "bold",
              color: "#dc7424",
              width: 165,
              flexWrap: "wrap",
            }}
          >
            French Horn
          </Text>
          <Image
            source={require("../../../assets/instruments/frenchhorn.png")}
            style={styles.instrumentImage}
          />
        </Pressable>
  
        <View style={{ height: 180 }} />
      </ScrollView>
    );
  }
  